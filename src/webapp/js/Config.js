

var Config = (function() {

	return {
		UNIT_LENGTH: 25,
		GEOMETRY: new THREE.BoxGeometry( boxW, boxH, boxD ),
    	MATERIAL: new THREE.MeshPhongMaterial( {color: 0xff0000 } )
	};
})();