import * as THREE from 'three';
import ThreeScene from './ThreeScene'


class RotatingCubeScene extends ThreeScene {

    init() {
        super.init()
        
        this.paused = false

        this.camera = this.getPerspectiveCamera()
        this.camera.position.z = 4

        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshLambertMaterial({ color: '#433F81'     })
        this.cube = new THREE.Mesh(geometry, material)
        this.scene.add(this.cube)

        const light = new THREE.PointLight( 0xff0000, 5, 100 );
        light.position.set( 10, 10, 20 );
        this.scene.add( light );
    }

    update(deltaTime) {
        if(this.paused) {
            return
        }

        this.cube.rotation.x += 1 * deltaTime
        this.cube.rotation.y += 1 * deltaTime
    }

    onKeyDown(key) {
        if(key === ' ') {
            this.paused = !this.paused
        }
    }

}

export default RotatingCubeScene