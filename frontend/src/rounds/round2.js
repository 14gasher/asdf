import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';


import Shared from './shared.js'


class Round2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      round: 1,
    }
  }

  generateRound(round, onload) {
    setTimeout(() => {
      switch (round) {
        case 1:
          this.setState({message: 'Are...', round: 2})
          break;
        case 2:
          this.setState({message: 'Are... You...', round: 3})
          break
        case 3:
          this.setState({message: 'Are... You... READY???', round: 4})
          break
        case 4:
          onload()
          break
        default: throw new Error('Unexpected Round')

      }
    }, 3000)
  }

  render() {
    const {classes, onload} = this.props
    this.generateRound(this.state.round, onload)
    return (
      <Shared>
        <CircularProgress color="secondary" />
        <Typography variant='h5'>{this.state.message}</Typography>
      </Shared>
    )
  }
}

export default withStyles(theme => ({}))(Round2)
