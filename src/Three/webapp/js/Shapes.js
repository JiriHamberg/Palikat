
/*
	Utility functions for manipulating 3D arrays.
	Arrays are assumed to be box-shaped (constant array length in each dimension).
*/
var Shapes = (function() {

	/*
		Rotates a shape 90 degrees around the X-axis
	*/
	var rotateX = function(shape) {
		var xLen = shape.length;
		var yLen = shape[0].length;
		var zLen = shape[0][0].length;

		var newShape = [];

		for(var i=0; i<xLen; i++) {
			newShape.push([]);
			for(var j=0; j<zLen; j++) {
				newShape[i].push([]);
				for(var k=0; k<yLen; k++) {
					newShape[i][j].push( shape[i][zLen - 1 - k][j] );
				}
			}
		}
		return newShape;
	};

	/*
		Rotates a shape 90 degrees around the Y-axis
	*/
	var rotateY = function(shape) {
		var xLen = shape.length;
		var yLen = shape[0].length;
		var zLen = shape[0][0].length;

		var newShape = [];

		for(var i=0; i<zLen; i++) {
			newShape.push([]);
			for(var j=0; j<yLen; j++) {
				newShape[i].push([]);
				for(var k=0; k<xLen; k++) {
					newShape[i][j].push( shape[zLen - 1 - k][j][i] );
				}
			}
		}
		return newShape;
	};

	/*
		Rotates a shape 90 degrees around the Z-axis
	*/
	var rotateZ = function(shape) {
		var xLen = shape.length;
		var yLen = shape[0].length;
		var zLen = shape[0][0].length;

		var newShape = [];

		for(var i=0; i<yLen; i++) {
			newShape.push([]);
			for(var j=0; j<xLen; j++) {
				newShape[i].push([]);
				for(var k=0; k<zLen; k++) {
					newShape[i][j].push( shape[yLen - 1 - j][i][k] );
				}
			}
		}
		return newShape;
	};

	return {
		rotateX: rotateX,
		rotateY: rotateY,
		rotateZ: rotateZ
	};
})();