
var scene, camera, renderer;
var geometry, material, mesh;
var plane;

init();
animate();

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



function init() {

    // luodaan näkymä, johon liitetään myöhemmin kaikki palikat yms.
    scene = new THREE.Scene();

    // luodaan kamera ja asetetaan se sopivaan paikkaan
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 10, 10000 );
    camera.position.z = 500;
    camera.position.y = 300;
    camera.position.x = 100;


    // LUODAAN TASO
    // tasolla on tason geometria (vrt. laatikon geometria)
    // valitsimme tason pintamateriaaliksi tavallisen, keltaisen materiaalin
    var planeGeometry = new THREE.PlaneGeometry( 1000, 1000, 1 );
    var planeMaterial = new THREE.MeshBasicMaterial( {color: 0x00ff00, side: THREE.DoubleSide} );
    plane = new THREE.Mesh( planeGeometry, planeMaterial );
    // käännetään taso vaakasuoraan
    plane.rotateX(Math.PI / 2.0);
    plane.position.y -= Config.UNIT_LENGTH / 2.0;
    // lisätään taso näkymään
    scene.add( plane );


    var material = Config.BOX_MATERIAL;

    var shape = [
        [[true,true,true],[false,false,false],[false,false,false]],
        [[true,false,false],[false,false,false],[false,false,false]],
        [[true,false,false],[false,false,false],[false,false,false]]
    ];

    mesh = MeshFactory.make(shape, material);
    //mesh.rotateZ(Math.PI / 2);
    scene.add(mesh);

    var newShape = shape;
    
    for(var i=1; i<=4; i++) {
        newShape = Shapes.rotateX(newShape);
        var newMesh = MeshFactory.make(newShape, material);
        newMesh.position.x += i * 100;
        scene.add(newMesh);
    }

    for(var i=1; i<=4; i++) {
        newShape = Shapes.rotateY(newShape);
        var newMesh = MeshFactory.make(newShape, material);
        newMesh.position.y += i * 100;
        newMesh.position.x -= 100;
        scene.add(newMesh);
    }

    for(var i=1; i<=4; i++) {
        newShape = Shapes.rotateZ(newShape);
        var newMesh = MeshFactory.make(newShape, material);
        newMesh.position.z -= i * 100;
        scene.add(newMesh);
    }

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
    renderer.setSize(0.9 * window.innerWidth, 0.9 * window.innerHeight);

    // liitetään ikkuna bodyyn
    document.body.appendChild(renderer.domElement);
}


// animaatioesimerkki, joka pyörittää globaalia mesh-kappaletta
function animate() {

    requestAnimationFrame( animate );
    //mesh.rotation.x += 0.01;
    //mesh.rotation.y += 0.02;
    renderer.render( scene, camera );
}
