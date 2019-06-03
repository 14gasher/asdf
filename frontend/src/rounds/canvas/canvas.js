import React from 'react'
import PureCanvas from './pureCanvas.js'

class Canvas extends React.Component {
  saveContext(ctx) {
    this.ctx = ctx;
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;
  }
  componentDidUpdate() {
    const { data } = this.props
    const {rectangles, message, message2} = data
    const ctx = this.ctx
    ctx.clearRect(0, 0, this.width, this.height)


    rectangles.forEach(rect => {
      ctx.save()
      ctx.beginPath()
      ctx.fillStyle = rect.fill
      const cx = rect.x + rect.width / 2
      const cy = rect.y + rect.height / 2
      ctx.translate(cx, cy)
      ctx.rotate(rect.angle)
      ctx.translate(-cx, -cy)
      ctx.fillRect(rect.x, rect.y, rect.width, rect.height)
      ctx.closePath()
      ctx.restore()
    })

    ctx.font = '60px Arial'
    ctx.fillText(message, 120, this.height / 2)
    ctx.fillText(message2, 470, this.height / 2 + 80)

    // this.ctx.save();
    // this.ctx.beginPath();
    // this.ctx.clearRect(0, 0, this.width, this.height);
    // this.ctx.translate(this.width / 2, this.height / 2);
    // this.ctx.rotate((angle * Math.PI) / 180);
    // this.ctx.fillStyle = '#4397AC';
    // this.ctx.fillRect(
    //   -this.width / 4,
    //   -this.height / 4,
    //   this.width / 2,
    //   this.height / 2
    // );
    // this.ctx.restore();
    return true
  }
  render() {
    return <PureCanvas contextRef={ctx => this.saveContext(ctx)} />;
  }
}

export default Canvas
