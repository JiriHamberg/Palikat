var Sprites = (function() {

	/* Sprite class
		x,y,z coordinates in "UNIT_LENGTH" units - not to be confused with THREE coordinates!
	*/
	function Sprite(x, y, z, shape) {
		this.x = x; 
		this.y = y;
		this.z = z;
		this.shape = shape;
	}


	/*
		Computes the intersection of two sprites'. 
		This can be used to check if two sprites collide.

		Returns null if there is no collision.
	*/
	Sprite.prototype.intersection = function(other) {
		if( !(other instanceof Sprite) ) {
			throw "Sprite.intersection: invalid argument - argument must be of type sprite.";
		}

		var xLen = this.shape.length;
		var yLen = this.shape[0].length;
		var zLen = this.shape[0][0].length;

		var otherXLen = other.shape.length;
		var otherYLen = other.shape[0].length;
		var otherZLen = other.shape[0][0].length;

		var xMin = Math.max(this.x, other.x);
		var xMax = Math.min(this.x + xLen,  other.x + otherXLen);
		var yMin = Math.max(this.y, other.y);
		var yMax = Math.min(this.y + yLen,  other.y + otherYLen);
		var zMin = Math.max(this.z, other.z);
		var zMax = Math.min(this.z + zLen,  other.z + otherZLen);

		//Return if no potential collision
		if( (xMin >= xMax) || (yMin >= yMax) || (zMin >= zMax) ) {
			return null;
		}

		var anyIntersect = false;
		var intersectionShape = [];

		//Loop over the potentially intersecting area
		for(var i = xMin; i < xMax; i++ ) {
			intersectionShape.push([]);
			for(var j = yMin; j < yMax; j++) {
				intersectionShape[i - xMin].push([]);
				for(var k = zMin; k < zMax; k++) {
					var isec = this.shape[i - this.x][j - this.y][k - this.z] && other.shape[i - other.x][j - other.y][k - other.z];
					anyIntersect = anyIntersect || isec;
					intersectionShape[i - xMin][j - yMin].push(isec);
				}
			}
		}
		//No real intersections found
		if(!anyIntersect) {
			return null;
		}
		return new Sprite(xMin, yMin, zMin, intersectionShape);
	}; 
	
	return {
		Sprite: Sprite
	};
})();