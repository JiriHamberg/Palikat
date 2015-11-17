

var BlockFactory = (function() {


	// tekee palikan 3D-mallin (matriisin, engl. matrix) mukaan
	// palikka on mesh-olio
	var make = function(matrix) {

		// Aloitetaan isomman mesh-kappaleen kokoaminen!
	    // luodaan ensin mesh-lista, jonne lisätään kuutionmallisia mesh-kappaleita
	    var meshes = [];
	    var box;
	    
	    // luodaan box, lisätään se listaan
	    box = new THREE.Mesh(geometry, material);
	    meshes.push(box);

	    // luodaan uusi box, lisätään sekin listaan
	    box = new THREE.Mesh(geometry, material);
	    box.position.x = Config.UNIT_LENGTH;
	    meshes.push(box);

	    box = new THREE.Mesh(geometry, material);
	    box.position.y = 25;
	    meshes.push(box);    

	    // luodaan uusi geometrinen muoto, joka tulee olemaan kahden yhteenliitetyn kuution muotoinen
	    // tehdään muodon pohjalta mesh ja liitetään se näkymään
	    mergeGeometry = mergeMeshes(meshes);
	    mesh = new THREE.Mesh(mergeGeometry, material);

	};

	var mergeMeshes = function(meshes) {
	    // luodaan uusi "geometrinen muoto", jota muokataan lisäämällä siihen uusia kappaleita .merge-funktiolla
	    var combined = new THREE.Geometry();

	    for (var i = 0; i < meshes.length; i++) {
	        meshes[i].updateMatrix();
	        combined.merge(meshes[i].geometry, meshes[i].matrix);
	    }
	    return combined;
	};


	return {
		make: make
	};
})();