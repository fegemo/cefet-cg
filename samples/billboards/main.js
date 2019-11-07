import * as twgl from './twgl-full.module.js';
import { degToRad } from './math-utils.js';
import { FpsCamera, OrbitCamera, FlyCamera } from './camera.js';
import { Sprite, Billboard } from './objects.js';

const m4 = twgl.m4;
const v3 = twgl.v3;
const gl = document.querySelector('#main-canvas').getContext('webgl');
const programInfo = twgl.createProgramInfo(gl, ['vs', 'fs']);

let cameras;
let currentCamera = 0;
let lastRenderTimestamp = 0;
let isWireframe = false;

const textures = twgl.createTextures(gl, {
  grass: { src: 'images/grass.jpg', mag: gl.LINEAR, min: gl.LINEAR_MIPMAP_LINEAR },
  tree: { src: 'images/tree.png', mag: gl.LINEAR, min: gl.LINEAR  },
  title: { src: 'images/title.png', mag: gl.LINEAR, min: gl.LINEAR  }
});

let scene = [];

function render(timestamp) {
  const dt = (timestamp - lastRenderTimestamp) / 1000;
  lastRenderTimestamp = timestamp;
  twgl.resizeCanvasToDisplaySize(gl.canvas);
  const projectionMatrix = m4.perspective(degToRad(60), gl.canvas.width / gl.canvas.height, 0.1, 1000);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  //atualiza a câmera
  cameras[currentCamera].update(dt);

  const uniforms = {
    // time: time * 0.001,
    // resolution: [gl.canvas.width, gl.canvas.height],
    u_modelView: m4.identity(),
    u_projection: projectionMatrix,
    u_textureMatrix: m4.identity(),
    u_viewMatrix: m4.inverse(cameras[currentCamera].cameraMatrix)
  };

  // desenha e atualiza os objetos da cena
  scene.forEach(object => {
    object.render(gl, programInfo, uniforms, isWireframe);
    object.update(dt);
  })

  requestAnimationFrame(render);
}

function initialize() {
  // estado do webgl
  gl.useProgram(programInfo.program);
  gl.enable(gl.DEPTH_TEST);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

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

  scene.push(floor);
  scene.push(tree);
  scene.push(title);

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

  // eventos de teclas
  window.addEventListener('keypress', e => {
    if (e.key.toLowerCase() === 'c') {
      cameras[currentCamera].dettach();

      currentCamera = (currentCamera+1) % cameras.length;
      cameras[currentCamera].attach(window, gl.canvas);

      scene.filter(o => o instanceof Billboard).forEach(b => b.track(b.isTracking ? cameras[currentCamera] : null));
    } else if (e.key.toLowerCase() === 'f') {
      isWireframe = !isWireframe;
    } else if (e.key.toLowerCase() === 'b') {
      scene.filter(o => o instanceof Billboard).forEach(b => b.track(b.isTracking ? null : cameras[currentCamera]));
    }
  });

  requestAnimationFrame(render);
}


initialize();





