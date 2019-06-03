import React from 'react';
import { withStyles } from '@material-ui/core/styles'

import red from '@material-ui/core/colors/red'
import blue from '@material-ui/core/colors/blue'
import yellow from '@material-ui/core/colors/yellow'

import dog from './dog.gif'
import horn from './horn.mp3'


import Canvas from './canvas/canvas.js'

class Round3 extends React.Component {
  constructor(props) {
    super(props)
    this.height = 800
    this.width = 1000
    const rectangles = this.generateRectangles()
    this.state = {
      rectangles,
      message: 'You\'re gonna be an uncle!!!',
      message2: '😭',
    }
    this.horn = new Audio(horn)
    this.horn.loop = true
  }

  updateAnimationState(change) {
    const rectangles = this.state.rectangles.map(rect => {
      let y = rect.y + rect.speed * change
      if(y > this.height) y -= this.height
      const angle = rect.angle + Math.PI / 4 * change
      return {...rect,
        y,
        angle
      }
    })
    this.setState({rectangles})
  }

  generateRectangles() {
    const rectangles = []
    const colors = [red[600], blue[600], yellow[600]]
    for(let i = 0; i < 200; i++) {
      let fill = colors[Math.floor(Math.random() * 3)]
      let width = 10
      let height = 20
      let x = Math.random() * this.width
      let y = Math.random() * this.height
      let angle = Math.random() * Math.PI
      let speed = Math.random() * 50 + 50
      rectangles.push({
        width,
        height,
        x,
        y,
        fill,
        angle,
        speed,
      })
    }
    return rectangles
  }

  componentDidMount() {
    let initial = performance.now()
    const loop = (current) => {
      this.updateAnimationState((current - initial) / 1000)
      initial = current
      this.rAF = requestAnimationFrame(loop)
    }
    loop(initial)
    this.horn.play()
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF)
    this.horn.pause()
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <img className={classes.gif1} src={dog} />
        <Canvas data={this.state} />
        <img className={classes.gif2} src={dog} />
      </div>
    )
  }
}

export default withStyles(theme => ({
  root: {
    position: 'relative',
  },
  gif1: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 200,
  },
  gif2: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 200,
  }
}))(Round3)
