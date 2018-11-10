import React, { Component } from 'react';

import ThreeWrapper from '../three-components/ThreeWrapper';
import RotatingCubeScene from '../scenes/RotatingCubeScene';


const rotatingCubeScene = new RotatingCubeScene(800, 800)
rotatingCubeScene.init()

export const RotatingCube = () => <ThreeWrapper scene={rotatingCubeScene}/>

//export const RotatingCube

