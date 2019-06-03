import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


class Shared extends React.Component {
  render() {
    const {classes, children} = this.props
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Proposal
            </Typography>
          </Toolbar>
        </AppBar>

        <Container>
          <Paper className={classes.paper}>
            {children}
          </Paper>
        </Container>
      </div>


    )
  }
}

export default withStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
}))(Shared)
