import React, { Component } from 'react';

class ThreeWrapper extends Component {

  componentDidMount() {
    this.node.appendChild(this.props.scene.renderer.domElement)
    this.props.scene.start()
  }

  componentWillUnmount() {
    this.props.scene.stop()
  }

  onKeyDown = (event) => {
    event.preventDefault()
    this.props.scene.onKeyDown(event.key)
  }

  render() {
    return(
      <div ref={(node) => {this.node = node}} onKeyDown={this.onKeyDown} tabIndex="0" />
    )
  }
}



export default ThreeWrapper