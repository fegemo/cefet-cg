import * as twgl from './twgl-full.module.js';
import { degToRad, radToDeg } from './math-utils.js';
import { OrbitCamera } from './camera.js';

const m4 = twgl.m4;
const v3 = twgl.v3;

class AnObject {
  constructor(modelMatrix = m4.identity(), bufferInfo, texture) {
    this.modelMatrix = modelMatrix;
    this.bufferInfo = bufferInfo;
    this.texture  = texture;

    this.objectUniforms = {
      u_diffuse: this.texture,
    };
  }

  update(dt) {

  }

  render(gl, programInfo, sceneUniforms, isWireframe = false) {
    const uniforms = Object.assign({}, sceneUniforms, this.objectUniforms);
    uniforms.u_modelView = m4.multiply(uniforms.u_viewMatrix, this.modelMatrix);
    twgl.setUniforms(programInfo, uniforms);
    twgl.setBuffersAndAttributes(gl, programInfo, this.bufferInfo);
    twgl.drawBufferInfo(gl, this.bufferInfo, isWireframe ? gl.LINES : gl.TRIANGLES);
  }

  setUniform(name, value) {
    this.objectUniforms[name] = value;
  }
}


export class Sprite extends AnObject {
  constructor(gl, texture, modelMatrix = m4.identity(), width = 1, height = 1, subdivisions = 1) {
    super(modelMatrix, twgl.primitives.createPlaneBufferInfo(gl, width, height, subdivisions, subdivisions), texture);
  }
}

export class Billboard extends Sprite {
  constructor(gl, texture, modelMatrix = m4.identity(), type = 'axial') {
    super(gl, texture, modelMatrix);
    this.type = type;
    this.originalModelMatrix = m4.copy(modelMatrix);
  }

  update(dt) {
    if (this.lookingAt) {
      const { theta, phi, tilt } = this.lookingAt.rotations;

      switch (this.type) {
        case 'screen':
          m4.rotateZ(this.originalModelMatrix, theta, this.modelMatrix);
          m4.rotateX(this.modelMatrix, phi, this.modelMatrix);
          m4.rotateY(this.modelMatrix, tilt, this.modelMatrix);
          break;
        case 'world':
          m4.rotateZ(this.originalModelMatrix, theta, this.modelMatrix);
          m4.rotateX(this.modelMatrix, phi, this.modelMatrix);
          break;
        case 'axial':
          m4.rotateZ(this.originalModelMatrix, theta, this.modelMatrix);
          break;
      };
    }
  }

  track(camera) {
    if (camera) {
      this.lookingAt = camera;
    } else {
      this.lookingAt = null;
      this.modelMatrix = m4.copy(this.originalModelMatrix);
    }
  }

  get isTracking() {
    return this.lookingAt !== null;
  }
}
