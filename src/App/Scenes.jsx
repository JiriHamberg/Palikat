import React from 'react';

import ThreeWrapper from '../three-components/ThreeWrapper';
import RotatingCubeScene from '../scenes/RotatingCubeScene';
import BlockScene from '../scenes/BlockScene';

const rotatingCubeScene = new RotatingCubeScene(800, 800)
rotatingCubeScene.init()

const blockScene = new BlockScene(800, 800);
blockScene.init()

export const RotatingCube = () => <ThreeWrapper scene={rotatingCubeScene} />
export const Blocks = () => <ThreeWrapper scene={blockScene} />