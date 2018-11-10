class Sprite {
    constructor(x, y, z, shape) {
        this.x = x 
		this.y = y
		this.z = z
		this.shape = shape
    }

    intersection(other) {
        if( !(other instanceof Sprite) ) {
			throw "Sprite.intersection: invalid argument - argument must be of type sprite."
		}

		const xLen = this.shape.length
		const yLen = this.shape[0].length
		const zLen = this.shape[0][0].length

		const otherXLen = other.shape.length
		const otherYLen = other.shape[0].length
		const otherZLen = other.shape[0][0].length

		const xMin = Math.max(this.x, other.x)
		const xMax = Math.min(this.x + xLen,  other.x + otherXLen)
		const yMin = Math.max(this.y, other.y)
		const yMax = Math.min(this.y + yLen,  other.y + otherYLen)
		const zMin = Math.max(this.z, other.z)
		const zMax = Math.min(this.z + zLen,  other.z + otherZLen)

		// return early if no potential for a collision
		if( (xMin >= xMax) || (yMin >= yMax) || (zMin >= zMax) ) {
			return null
		}

		let anyIntersect = false
		const intersectionShape = []

		for(let i = xMin; i < xMax; i++ ) {
			intersectionShape.push([])
			for(let j = yMin; j < yMax; j++) {
				intersectionShape[i - xMin].push([])
				for(let k = zMin; k < zMax; k++) {
					const isec = this.shape[i - this.x][j - this.y][k - this.z] && other.shape[i - other.x][j - other.y][k - other.z]
					anyIntersect = anyIntersect || isec
					intersectionShape[i - xMin][j - yMin].push(isec)
				}
			}
		}

		if(!anyIntersect) {
			return null
        }
        
		return new Sprite(xMin, yMin, zMin, intersectionShape)
    }

}

export default Sprite