import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import Shared from './shared.js'


class Round1 extends React.Component {
  render() {
    const {classes, onclick} = this.props
    return (
      <Shared>
        <Button onClick={onclick} mx='auto' color="secondary">Click me</Button>
      </Shared>
    )
  }
}

export default withStyles(theme => ({

}))(Round1)
