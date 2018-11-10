import React, { Component } from 'react';

class ThreeWrapper extends Component {

  componentDidMount() {
    this.node.appendChild(this.props.scene.renderer.domElement)
    this.props.scene.start()
  }

  componentWillUnmount(){
    this.props.scene.stop()
  }

  render() {
    return(
      <div ref={(node) => {this.node = node}} />
    )
  }
}



export default ThreeWrapper