import Config from './Config';


class MeshFactory {

    static build(shape,  material) {
		const unitLength = Config.unitLength()
		const meshes = [];

	    if(material === null) {
	    	material = Config.defaultMaterial()
	    }
	    
	    for(let i = 0; i < shape.length; i++) {
	    	for(let j = 0; j < shape[i].length; j++) {
	    		for(let k = 0; k < shape[i][j].length; k++) {
	    			if(shape[i][j][k]) {
	    				const boxMesh = new THREE.Mesh(Config.boxGeometry(), material);
		    			boxMesh.position.x = i * unitLength
		    			boxMesh.position.y = j * unitLength
		    			boxMesh.position.z = k * unitLength
		    			meshes.push(boxMesh)
		    		}
	    		}
	    	}
	    }   

	    const mergeGeometry = new THREE.Geometry();
	    for (let i = 0; i < meshes.length; i++) {
	        meshes[i].updateMatrix();
	        mergeGeometry.merge(meshes[i].geometry, meshes[i].matrix)
        }
        
	    return new THREE.Mesh(mergeGeometry, material)
	}

}

export default MesgFactory