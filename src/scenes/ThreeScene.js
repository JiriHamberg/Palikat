import * as THREE from 'three';

class ThreeScene {

  constructor(width, height) {
    this.width = width
    this.height = height
  }


  init() {
    this.scene = new THREE.Scene()
    
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#000000')
    this.renderer.setSize(this.width, this.height)

    this.lastUpdated = new Date()
  }

  update(timeDelta) {
    //for child classes
  }

  onKeyDown(key) {
    //for child classes
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop = () => {
    cancelAnimationFrame(this.frameId)
  }

  animate = () => {
    const now = new Date()
    const timeDelta = (now.getTime() - this.lastUpdated.getTime()) / 1000
    this.update(timeDelta)
    this.lastUpdated = now

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  getPerspectiveCamera = () => new THREE.PerspectiveCamera(
    75,
    this.width / this.height,
    0.1,
    1000
  )

}

export default ThreeScene