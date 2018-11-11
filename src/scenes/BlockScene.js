import * as THREE from 'three';

import ThreeScene from './ThreeScene';

import BlockGrid from '../blocks/model/BlockGrid';
import MeshFactory from '../blocks/model/MeshFactory';
import BlockModel from '../blocks/model/BlockModel';
import Sprite from '../blocks/model/Sprite';
import ShapeUtils from '../blocks/model/ShapeUtils';

import Config from '../blocks/model/Config';

class BlockScene extends ThreeScene {
    init() {
        super.init()

        this.grid = new BlockGrid()
        this.camera = this.getPerspectiveCamera()

        const scene = this.scene
        const grid = this.grid
        const camera = this.camera

        camera.position.z = 500;
        camera.position.y = 300;
        camera.position.x = 100;


        // LUODAAN TASO
        // tasolla on tason geometria (vrt. laatikon geometria)
        // valitsimme tason pintamateriaaliksi tavallisen, keltaisen materiaalin
        const planeGeometry = new THREE.PlaneGeometry( 1000, 1000, 1 );
        const planeMaterial = new THREE.MeshBasicMaterial( {color: 0x00ff00, side: THREE.DoubleSide} );
        const plane = new THREE.Mesh( planeGeometry, planeMaterial );
        // käännetään taso vaakasuoraan
        plane.rotateX(Math.PI / 2.0);
        plane.position.y -= Config.unitLength() / 2.0;
        // lisätään taso näkymään
        scene.add( plane );


        const material = Config.defaultMaterial()

        const shape = [
            [[true,true,true],[false,false,false],[false,false,false]],
            [[true,false,false],[false,false,false],[false,false,false]],
            [[true,false,false],[false,false,false],[false,false,false]]
        ];

        const mesh = MeshFactory.build(shape, material);

        //grid.setActive(new BlockModel(new Sprite(0, 0, 0, shape), mesh));
        //scene.add(mesh);

        //var newShape = shape;
        
        for(let i=1; i<=4; i++) {
            const newShape = ShapeUtils.rotateX(shape);
            const newMesh = MeshFactory.build(newShape, material);
            const sprite = new Sprite(4 * i, 0, 0, newShape );
            scene.add(newMesh);
            grid.addBlockModel(new BlockModel(sprite, newMesh));
        }

        for(let i=1; i<=4; i++) {
            const newShape = ShapeUtils.rotateY(shape);
            const newMesh = MeshFactory.build(newShape, material);
            const sprite = new Sprite(4, 4 * i, 0, newShape );
            scene.add(newMesh);
            grid.addBlockModel(new BlockModel(sprite, newMesh));
        }

        for(let i=1; i<=4; i++) {
            const newShape = ShapeUtils.rotateZ(shape);
            const newMesh = MeshFactory.build(newShape, material);
            const sprite = new Sprite(0, 0, 4 * i, newShape );
            this.scene.add(newMesh);
            grid.addBlockModel(new BlockModel(sprite, newMesh));
        }

        grid.setActive(grid.blockModels[0])

        // VALOJA:

        const light = new THREE.AmbientLight( 0x404040 ); // soft white light
        scene.add( light );

        const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        directionalLight.position.set( 0, 1, 0 );
        scene.add( directionalLight );    

        const pointLight = new THREE.PointLight( 0xff0000, 1, 500 );
        pointLight.position.set( 50, 50, 50 );
        scene.add( pointLight );
    }

    update(deltaTime) {

    }

    onKeyDown(key) {
        console.log(key)
        
        switch(key) {
            case 'ArrowUp':
                this.grid.moveActive(0, 1, 0)
                break
            case 'ArrowDown':
                this.grid.moveActive(0, -1, 0)
                break
            case 'ArrowLeft':
                this.grid.moveActive(-1, 0, 0)
                break
            case 'ArrowRight':
                this.grid.moveActive(1, 0, 0)
                break
            case 'w':
                this.grid.moveActive(0, 0, 1)
                break
            case 's':
                this.grid.moveActive(0, 0, -1)
                break
            case 'x':
                this.grid.rotateActiveX()
                break
            case 'z':
                this.grid.rotateActiveZ()
                break
            case 'y':
                this.grid.rotateActiveZ()
                break
        }

    }
}

export default BlockScene