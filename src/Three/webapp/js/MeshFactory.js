

var MeshFactory = (function() {


	// tekee palikan 3D-mallin (matriisin, engl. matrix) mukaan
	// palikka on mesh-olio
	var make = function(matrix, material) {

		// Aloitetaan isomman mesh-kappaleen kokoaminen!

	    // luodaan ensin mesh-lista, jonne lisätään kuutionmallisia mesh-kappaleita
	    var meshes = [];

	    // jos materiaalia ei ole annettu, käytetään perusmateriaaliamme
	    if(material === null) {
	    	material = Config.BOX_MATERIAL;
	    }

	    // luodaan kuutio
	    // tämän sijainti avaruudessa on (0, 0, 0)
	    var box = new THREE.Mesh(Config.BOX_GEOMETRY, material);

	    // käydään matriisia läpi
	    // sijoitetaan kuutio matriisin osoittamaan paikkaan ja tallennetaan se listaan
	    
	    for(var i = 0; i < matrix.length; i++) {
	    	for(var j = 0; j < matrix[i].length; j++) {
	    		for(var k = 0; k < matrix[i][j].length; k++) {
	    			if(matrix[i][j][k]) {
	    				box = new THREE.Mesh(Config.BOX_GEOMETRY, material);
		    			box.position.x = i * Config.UNIT_LENGTH;
		    			box.position.y = j * Config.UNIT_LENGTH;
		    			box.position.z = k * Config.UNIT_LENGTH;
		    			meshes.push(box);
		    		}
	    		}
	    	}
	    }   

	    // luodaan uusi geometrinen muoto, joka tulee olemaan yhteenliitettyjen kuutioiden muotoinen
	    // tehdään muodon pohjalta mesh ja liitetään se näkymään
	    mergeGeometry = new THREE.Geometry();
	    for (var i = 0; i < meshes.length; i++) {
	        meshes[i].updateMatrix();
	        mergeGeometry.merge(meshes[i].geometry, meshes[i].matrix);
	    }

	    // tehdään lopuksi uuden geometrian pohjalta mesh ja palautetaan se
	    var mergeMesh = new THREE.Mesh(mergeGeometry, material);
	    return mergeMesh;

	};



	return {
		make: make
	};
})();