
const UNIT_LENGTH = 25
const DEFAULT_MATERIAL = new THREE.MeshPhongMaterial( { color: 0xff0000 } )
const BOX_GEOMETRY = new THREE.BoxGeometry( UNIT_LENGTH, UNIT_LENGTH, UNIT_LENGTH )

class Config {

    static defaultMaterial() {
        return DEFAULT_MATERIAL
    }

    static unitLength() {
        return UNIT_LENGTH
    }

    static boxGeometry() {
        return BOX_GEOMETRY
    }

}

export default Config