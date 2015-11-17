

var Config = (function() {

	var UNIT_LENGTH = 25;

	return {
		UNIT_LENGTH: UNIT_LENGTH,
		BOX_GEOMETRY: new THREE.BoxGeometry( UNIT_LENGTH, UNIT_LENGTH, UNIT_LENGTH ),
    	BOX_MATERIAL: new THREE.MeshPhongMaterial( {color: 0xff0000 } )
	};
})();