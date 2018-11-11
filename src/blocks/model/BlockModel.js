import Config from './Config';
import ShapeUtils from './ShapeUtils';

class BlockModel {
    constructor(sprite, mesh) {
		this.sprite = sprite
        this.mesh = mesh
        
        const unitLength = Config.unitLength()
		mesh.position.x = sprite.x * unitLength
		mesh.position.y = sprite.y * unitLength
		mesh.position.z = sprite.z * unitLength
	}

    rotateX() {
        this.sprite.shape = ShapeUtils.rotateX(this.sprite.shape)
		this.mesh.rotateX(Math.PI / 2)
    }

    rotateY() {
        this.sprite.shape = ShapeUtils.rotateY(this.sprite.shape)
		this.mesh.rotateY(Math.PI / 2)
    }

    rotateZ() {
        this.sprite.shape = ShapeUtils.rotateZ(this.sprite.shape)
		this.mesh.rotateZ(Math.PI / 2)
    }

	move(dx, dy, dz) {
		this.sprite.x += dx
		this.sprite.y += dy
		this.sprite.z += dz
        
        const unitLength = Config.unitLength()
		this.mesh.position.x += dx * unitLength
		this.mesh.position.y += dy * unitLength
		this.mesh.position.z += dz * unitLength
		
	}
}

export default BlockModel