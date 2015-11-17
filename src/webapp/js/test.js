
// PERUSBOKSIN MITAT
var boxH = 25;
var boxW = 25;
var boxD = 25;


var scene, camera, renderer;
var geometry, material, mesh;
var plane;

init();
//animate();

document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(event) {
    var keyCode = event.keyCode;
    console.log(keyCode);
    switch(keyCode) {
        case 38: //up
            mesh.position.y += 10;
            break;
        case 39: //right
            mesh.position.x += 10;
            break;
        case 37: //left
            mesh.position.x -= 10;
            break;
        case 40: //down
            if( mesh.position.y <= 0 ) {
                return;
            }
            mesh.position.y -= 10;
            break;
        case 65: //a
            mesh.position.z += 10;
            break;
        case 87: //w
            mesh.position.z -= 10;
            break;
    }
}


// mergeMeshes on funktio, joka yhdistää meshit yhdeksi meshiksi
// tämä helpottaa ison ja monimutkaisen kappaleen käsittelyä, pyörittelyä jne.
// fun fact: meshien välille jää edelleen väliseinät
function mergeMeshes (meshes) {

    // luodaan uusi "geometrinen muoto", jota muokataan lisäämällä siihen uusia kappaleita .merge-funktiolla
    var combined = new THREE.Geometry();

    for (var i = 0; i < meshes.length; i++) {
        meshes[i].updateMatrix();
        combined.merge(meshes[i].geometry, meshes[i].matrix);
    }

    return combined;
}


function init() {

    // luodaan näkymä, johon liitetään myöhemmin kaikki palikat yms.
    scene = new THREE.Scene();

    // luodaan kamera ja asetetaan se sopivaan paikkaan
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 10, 10000 );
    camera.position.z = 500;
    camera.position.y = 300;
    camera.position.x = 100;

    // luodaan geometrinen muoto ja materiaali, joita voidaan käyttää 
    // myöhemmin kappaleissa
    geometry = new THREE.BoxGeometry( boxW, boxH, boxD );
    material = new THREE.MeshPhongMaterial( {color: 0xff0000 } );

    // MESH on peruskäsite kappaleelle, jolla on muoto ja pintamateriaali
    // liitetään mesh näkymään (scene)
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );


    // LUODAAN TASO
    // tasolla on tason geometria (vrt. laatikon geometria)
    // valitsimme tason pintamateriaaliksi tavallisen, keltaisen materiaalin
    var planeGeometry = new THREE.PlaneGeometry( 1000, 1000, 1 );
    var planeMaterial = new THREE.MeshBasicMaterial( {color: 0x00ff00, side: THREE.DoubleSide} );
    plane = new THREE.Mesh( planeGeometry, planeMaterial );
    // käännetään taso vaakasuoraan
    plane.rotateX(Math.PI / 2.0);
    plane.position.y -= boxH / 2;
    // lisätään taso näkymään
    scene.add( plane );


    // VALOJA:

    var light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );

    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    directionalLight.position.set( 0, 1, 0 );
    scene.add( directionalLight );    

    var pointLight = new THREE.PointLight( 0xff0000, 1, 500 );
    pointLight.position.set( 50, 50, 50 );
    scene.add( pointLight );



    // tehdään renderöinti-ikkuna
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    // liitetään ikkuna bodyyn
    document.body.appendChild( renderer.domElement );

}


// animaatioesimerkki, joka pyörittää globaalia mesh-kappaletta
function animate() {

    requestAnimationFrame( animate );

    //mesh.rotation.x += 0.01;
    //mesh.rotation.y += 0.02;

    renderer.render( scene, camera );
}
