import * as twgl from '../common/twgl-full.module.js';
import { degToRad } from '../common/math-utils.js';
import { FpsCamera, OrbitCamera, FlyCamera } from '../common/camera.js';
import { Sprite, Billboard, Cube } from '../common/objects.js';
import { ParticleEmitter } from '../common/particle-system.js';
import * as dat from '../common/dat.gui.module.js';

const m4 = twgl.m4;
const v3 = twgl.v3;
const gl = document.querySelector('#main-canvas').getContext('webgl');
const programInfo = twgl.createProgramInfo(gl, ['vs', 'fs']);

const textures = twgl.createTextures(gl, {
  grass: { src: 'images/grass.jpg', mag: gl.LINEAR, min: gl.LINEAR_MIPMAP_LINEAR },
  tree: { src: 'images/tree.png', mag: gl.LINEAR, min: gl.LINEAR },
  title: { src: 'images/title.png', mag: gl.LINEAR, min: gl.LINEAR },
  fire: { src: 'images/fire.png', mag: gl.LINEAR, min: gl.LINEAR },
  box: { src: 'images/box.jpg', mag: gl.LINEAR, min: gl.LINEAR },
});


const displayOptions = {
  isWireframe: false,
  billboardingOn: true,
  currentCamera: 0
};

const particleEffectOptions = {
  texture: textures.fire,
  numParticles: 150,
  particlesPerSecond: 50,
  billboardType: 'screen',
  remainingLife: {
    value: 2,
    delta: 0.2
  },
  color: {
    begin: [238, 228, 11],
    end: [238, 60, 11],
    delta: 0
  },
  alpha: {
    begin: 0.7,
    end: 0,
    delta: 0
  },
  size: {
    begin: 0.5,
    end: 0.1,
    delta: 0.005
  },
  speed: {
    value: {
      x: 0,
      y: 0.1,
      z: 0
    },
    delta: 0.3
  },
  acceleration: {
    begin: {
      x: 0,
      y: 0.6,
      z: 0
    },
    end: {
      x: 0,
      y: 0,
      z: 0
    },
    delta: 0
  }
};

let cameras;
let lastRenderTimestamp = 0;

let scene = [];

function render(timestamp) {
  const dt = (timestamp - lastRenderTimestamp) / 1000;
  lastRenderTimestamp = timestamp;
  twgl.resizeCanvasToDisplaySize(gl.canvas);
  const projectionMatrix = m4.perspective(degToRad(60), gl.canvas.width / gl.canvas.height, 0.1, 1000);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  //atualiza a câmera
  cameras[displayOptions.currentCamera].update(dt);

  const uniforms = {
    // time: time * 0.001,
    // resolution: [gl.canvas.width, gl.canvas.height],
    u_modelView: m4.identity(),
    u_projection: projectionMatrix,
    u_textureMatrix: m4.identity(),
    u_viewMatrix: m4.inverse(cameras[displayOptions.currentCamera].cameraMatrix)
  };

  // desenha e atualiza os objetos da cena
  scene.forEach(object => {
    gl.enable(gl.DEPTH_TEST);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.depthMask(true);
    object.render(gl, programInfo, uniforms, displayOptions.isWireframe);
    object.update(dt);
  })

  requestAnimationFrame(render);
}

function initialize() {
  // estado do webgl
  gl.useProgram(programInfo.program);
  gl.enable(gl.DEPTH_TEST);
  gl.enable(gl.BLEND);

  // câmeras
  cameras = [
    new OrbitCamera(degToRad(90), degToRad(75), 7, v3.create(0, 1, -5)),
    new FlyCamera(),
    new FpsCamera()
  ];
  cameras[0].attach(window, gl.canvas);

  // objetos da cena
  const floor = new Sprite(gl, textures.grass, m4.identity(), 100, 100, 100);
  floor.setUniform('u_textureMatrix', m4.scale(m4.identity(), [50, 50, 1, 1]));
  const tree = new Billboard(gl, textures.tree, m4.scale(m4.rotateX(m4.translate(m4.identity(), [0, 1.5, -5]), degToRad(90)), [3, 3, 3]), 'axial');
  tree.track(cameras[0]);
  const title = new Billboard(gl, textures.title, m4.scale(m4.rotateX(m4.translate(m4.identity(), [0, 4, -5]), degToRad(90)), [3, 3, 3]), 'screen');
  title.track(cameras[0]);
  const fire = new ParticleEmitter(gl, m4.translate(m4.identity(), [-1, 0, -3]), particleEffectOptions);
  fire.track(cameras[0]);
  const emissor = new Cube(gl, textures.box, m4.translate(m4.identity(), v3.add([0, 0.25, 0], m4.getTranslation(fire.modelMatrix))), 0.25);

  scene.push(floor);
  scene.push(tree);
  scene.push(title);
  // scene.push(emissor)

  for (let c = 0; c < 200; c++) {
    const position = v3.create(
      Math.cos(Math.random() * Math.PI * 2) * (Math.random() * 10 + 40),
      1.5,
      Math.sin(Math.random() * Math.PI * 2) * (Math.random() * 10 + 40 - 5)
    );
    const modelMatrix = m4.scale(m4.rotateX(m4.translate(m4.identity(), position), degToRad(90)), [3, 3, 3]);
    const otherTree = new Billboard(gl, textures.tree, modelMatrix, 'axial');
    otherTree.track(cameras[0]);
    scene.push(otherTree);
  }
  scene.push(fire);


    // gui para definir parâmetros
    const gui = new dat.GUI();
    const sceneFolder = gui.addFolder('Scene');
    const particleEffectFolder = gui.addFolder('Particle Effect');
    sceneFolder.add(displayOptions, 'isWireframe').name('Wireframe mode');
    const billboardingOnController = sceneFolder.add(displayOptions, 'billboardingOn').name('Billboarding');
    const currentCameraController = sceneFolder.add(displayOptions, 'currentCamera', { Orbit: 0, 'Fly Camera': 1, 'FPS Camera': 2 }).name('Camera');

  const particleEffectSubFolder1 = particleEffectFolder.addFolder('Remaining Life');
  const particleEffectSubFolder2 = particleEffectFolder.addFolder('Color');
  const particleEffectSubFolder3 = particleEffectFolder.addFolder('Alpha');
  const particleEffectSubFolder4 = particleEffectFolder.addFolder('Size');
  const particleEffectSubFolder5 = particleEffectFolder.addFolder('Speed');
  const particleEffectSubFolder6 = particleEffectFolder.addFolder('Acceleration');
  const particleEffectSubSubFolder5_1 = particleEffectSubFolder5.addFolder('Value');
  const particleEffectSubSubFolder6_1 = particleEffectSubFolder6.addFolder('Begin');
  const particleEffectSubSubFolder6_2 = particleEffectSubFolder6.addFolder('End');
  const particleEffectControllers = [
    particleEffectFolder.add(particleEffectOptions, 'numParticles', 1, 1500).name('Max. particles'),
    particleEffectFolder.add(particleEffectOptions, 'particlesPerSecond', 0.0001, 1500).name('Particles/s'),
    particleEffectFolder.add(particleEffectOptions, 'billboardType', ['screen', 'world', 'axial']).name('Billboard type'),
    particleEffectSubFolder1.add(particleEffectOptions.remainingLife, 'value', 0, 50).name('Value'),
    particleEffectSubFolder1.add(particleEffectOptions.remainingLife, 'delta', 0, 50).name('Delta'),
    particleEffectSubFolder2.addColor(particleEffectOptions.color, 'begin').name('Begin'),
    particleEffectSubFolder2.addColor(particleEffectOptions.color, 'end').name('End'),
    particleEffectSubFolder2.add(particleEffectOptions.color, 'delta', 0, 1, 0.05).name('Delta'),
    particleEffectSubFolder3.add(particleEffectOptions.alpha, 'begin', 0, 1, 0.05).name('Begin'),
    particleEffectSubFolder3.add(particleEffectOptions.alpha, 'end', 0, 1, 0.05).name('End'),
    particleEffectSubFolder3.add(particleEffectOptions.alpha, 'delta', 0, 1, 0.05).name('Delta'),
    particleEffectSubFolder4.add(particleEffectOptions.size, 'begin', 0, 10, 0.1).name('Begin'),
    particleEffectSubFolder4.add(particleEffectOptions.size, 'end', 0, 10, 0.1).name('End'),
    particleEffectSubFolder4.add(particleEffectOptions.size, 'delta', 0, 10, 0.05).name('Delta'),
    particleEffectSubSubFolder5_1.add(particleEffectOptions.speed.value, 'x', -10, 10, 0.1),
    particleEffectSubSubFolder5_1.add(particleEffectOptions.speed.value, 'y', -10, 10, 0.1),
    particleEffectSubSubFolder5_1.add(particleEffectOptions.speed.value, 'z', -10, 10, 0.1),
    particleEffectSubFolder5.add(particleEffectOptions.speed, 'delta').name('Delta'),
    particleEffectSubSubFolder6_1.add(particleEffectOptions.acceleration.begin, 'x', -5, 5, 0.1),
    particleEffectSubSubFolder6_1.add(particleEffectOptions.acceleration.begin, 'y', -5, 5, 0.1),
    particleEffectSubSubFolder6_1.add(particleEffectOptions.acceleration.begin, 'z', -5, 5, 0.1),
    particleEffectSubSubFolder6_2.add(particleEffectOptions.acceleration.end, 'x', -5, 5, 0.1),
    particleEffectSubSubFolder6_2.add(particleEffectOptions.acceleration.end, 'y', -5, 5, 0.1),
    particleEffectSubSubFolder6_2.add(particleEffectOptions.acceleration.end, 'z', -5, 5, 0.1),
    particleEffectSubFolder6.add(particleEffectOptions.acceleration, 'delta').name('Delta')
  ];


  billboardingOnController.onChange(value => {
    scene.filter(o => typeof o.track !== 'undefined').forEach(b => b.track(b.isTracking ? null : cameras[displayOptions.currentCamera]));
  });
  currentCameraController.onChange(value => {
    cameras.forEach(c => c.dettach());
    cameras[+value].attach(window, gl.canvas);
    if (displayOptions.billboardingOn) {
      scene.filter(o => typeof o.track !== 'undefined').forEach(b => b.track(cameras[+value]));
    }
  });
  const updateParticleEffectOptions = () => {
    fire.setOptions(particleEffectOptions);
  };
  particleEffectControllers.forEach(controller => controller.onChange(updateParticleEffectOptions));

  requestAnimationFrame(render);
}


initialize();





