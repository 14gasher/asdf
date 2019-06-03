import React from 'react';
import './App.css';

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import teal from '@material-ui/core/colors/teal'
import indigo from '@material-ui/core/colors/indigo'

import Round1 from './rounds/round1.js'
import Round2 from './rounds/round2.js'
import Round3 from './rounds/round3.js'

let theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: indigo,
  },
  status: {
    danger: 'orange',
  },
})

theme = responsiveFontSizes(theme)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      round: 1,
    }
  }

  handleRound(round) {
    switch(round) {
      case 1: return <Round1 onclick={() => window.confirm('Is your volume turned up?') ? this.setState({round: 2}):''}/>
      case 2: return <Round2 onload={() => this.setState({round: 3})}/>
      case 3: return <Round3/>
      default: throw new Error("Unexpected Round Detected")
    }
  }

  render() {
    const middle = this.handleRound(this.state.round)
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          {middle}
        </ThemeProvider>
      </div>
    )
  }
}

export default App;
