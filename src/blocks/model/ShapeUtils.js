
class Shapeutils {

    static rotateX(shape) {
        const xLen = shape.length
		const yLen = shape[0].length
		const zLen = shape[0][0].length

		const newShape = [];

		for(let i=0; i<xLen; i++) {
			newShape.push([])
			for(let j=0; j<zLen; j++) {
				newShape[i].push([])
				for(let k=0; k<yLen; k++) {
					newShape[i][j].push( shape[i][zLen - 1 - k][j] )
				}
			}
		}
		return newShape
    }

    static rotateY(shape) {
        const xLen = shape.length;
		const yLen = shape[0].length;
		const zLen = shape[0][0].length;

		const newShape = [];

		for(let i=0; i<zLen; i++) {
			newShape.push([])
			for(let j=0; j<yLen; j++) {
				newShape[i].push([])
				for(let k=0; k<xLen; k++) {
					newShape[i][j].push( shape[zLen - 1 - k][j][i] )
				}
			}
		}
		return newShape
    }

    static rotateZ(shape) {
        const xLen = shape.length
		const yLen = shape[0].length
		const zLen = shape[0][0].length

		const newShape = []

		for(let i=0; i<yLen; i++) {
			newShape.push([])
			for(let j=0; j<xLen; j++) {
				newShape[i].push([])
				for(let k=0; k<zLen; k++) {
					newShape[i][j].push( shape[yLen - 1 - j][i][k] )
				}
			}
		}
		return newShape;
    }

}

export default Shapeutils