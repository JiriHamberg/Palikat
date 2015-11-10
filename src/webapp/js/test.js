var boxH = 25;
var boxW = 25;
var boxD = 25;


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

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 10, 10000 );
    camera.position.z = 500;
    camera.position.y = 300;
    camera.position.x = 100;

    geometry = new THREE.BoxGeometry( boxW, boxH, boxD );
    material = new THREE.MeshPhongMaterial( {color: 0xff0000 } );
    //new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
    //camera.lookAt(mesh.position);

    var planeGeometry = new THREE.PlaneGeometry( 1000, 1000, 1 );
    var planeMaterial = new THREE.MeshBasicMaterial( {color: 0x00ff00, side: THREE.DoubleSide} );
    plane = new THREE.Mesh( planeGeometry, planeMaterial );
    plane.rotateX(Math.PI / 2.0);
    plane.position.y -= boxH / 2;
    scene.add( plane );

    var light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );

    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    directionalLight.position.set( 0, 1, 0 );
    scene.add( directionalLight );    

    var pointLight = new THREE.PointLight( 0xff0000, 1, 500 );
    pointLight.position.set( 50, 50, 50 );
    scene.add( pointLight );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    //renderer.setClearColor( 0xffffff, 1 );    

    document.body.appendChild( renderer.domElement );

}

function animate() {

    requestAnimationFrame( animate );

    //mesh.rotation.x += 0.01;
    //mesh.rotation.y += 0.02;

    renderer.render( scene, camera );

}
