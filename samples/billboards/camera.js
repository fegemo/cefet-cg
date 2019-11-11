import { m4 } from './twgl-full.module.js';
import { v3 } from './twgl-full.module.js';
import { v2, degToRad, clamp } from './math-utils.js';

// TODO: dividir em Camera e CameraController
export class Camera {
  constructor() {
    this._eye = v3.create(0, 0, 1);
    this._target = v3.create(0, 0, 0);
    this._up = v3.create(0, 1, 0);
    this._cameraMatrix = m4.identity();
    this.isCameraDirty = true;
  }

  attach(window, canvasEl) {
    this.window = window;
    this.canvasEl = canvasEl;
  }

  dettach() {
    this.window = null;
    this.canvasEl = null;
  }

  update(dt) {

  }

  getRelativeMousePosition(mouseX, mouseY) {
    const rect = this.canvasEl.getBoundingClientRect();
    const x = (mouseX - rect.left) / (rect.right - rect.left) * this.canvasEl.width;
    const y = (mouseY - rect.top) / (rect.bottom - rect.top) * this.canvasEl.height;

    return [
      (x - this.canvasEl.width / 2) / this.window.devicePixelRatio,
      (y - this.canvasEl.height / 2) / this.window.devicePixelRatio,
    ];
  }

  set eye(point) {
    if (this._eye !== point) {
      this._eye = point;
      this.isCameraDirty = true;
    }
  }

  get eye() {
    return this._eye;
  }

  set target(point) {
    if (this._target !== point) {
      this._target = point;
      this.isCameraDirty = true;
    }
  }

  get target() {
    return this._target;
  }

  set up(vector) {
    if (this._up !== vector) {
      this._up = vector;
      this.isCameraDirty = true;
    }
  }

  get up() {
    return this._up;
  }

  get cameraMatrix() {
    if (this.isCameraDirty) {
      m4.lookAt(this._eye, this._target, this._up, this._cameraMatrix);
      this.isCameraDirty = false;
    }

    return this._cameraMatrix;
  }

  updateUp() {
    if (this.isCameraDirty) {
      const direction = v3.normalize(v3.subtract(this._eye, this._target));
      const lateralVector = v3.normalize(v3.cross(v3.create(0, 1, 0), direction));
      this._up = v3.cross(direction, lateralVector);
    }
  }

  get rotations() {
    throw new Error('Camera.rotations is abstract and should be implemented in children.');
  }
}

export class OrbitCamera extends Camera {
  constructor(theta = degToRad(90), phi = degToRad(75), distance = 7, target = v3.create(0, 0, 0)) {
    super();
    this.lastMousePosition = null;
    this.isMoving = false;
    this._thetaAngleInRadians = theta;
    this._phiAngleInRadians = phi;
    this._distance = distance;
    this.target = target;

    this.startRotateCamera = this.startRotateCamera.bind(this);
    this.stopRotateCamera = this.stopRotateCamera.bind(this);
    this.rotateCamera = this.rotateCamera.bind(this);
    this.zoomCamera = this.zoomCamera.bind(this);
  }

  attach(window, canvasEl) {
    super.attach(window, canvasEl);

    canvasEl.addEventListener('mousedown', this.startRotateCamera);
    window.addEventListener('mouseup', this.stopRotateCamera);
    window.addEventListener('mousemove', this.rotateCamera);

    canvasEl.addEventListener('touchstart', this.startRotateCamera);
    window.addEventListener('touchend', this.stopRotateCamera);
    window.addEventListener('touchmove', this.rotateCamera);

    window.addEventListener('wheel', this.zoomCamera);
  }

  dettach() {
    if (!this.canvasEl || !this.window) {
      return;
    }
    this.canvasEl.removeEventListener('mousedown', this.startRotateCamera);
    this.window.removeEventListener('mouseup', this.stopRotateCamera);
    this.window.removeEventListener('mousemove', this.rotateCamera);

    this.canvasEl.removeEventListener('touchstart', this.startRotateCamera);
    this.window.removeEventListener('touchend', this.stopRotateCamera);
    this.window.removeEventListener('touchmove', this.rotateCamera);

    this.window.removeEventListener('wheel', this.zoomCamera);
    super.dettach();
  }

  startRotateCamera(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (e.type.startsWith('touch')) {
      e = e.touches[0];
    }

    this.canvasEl.style.cursor = 'move';
    this.lastMousePosition = this.getRelativeMousePosition(e.clientX, e.clientY);
    this.isMoving = true;
  }

  rotateCamera(e) {
    if (e.type.startsWith('touch')) {
      e = e.touches[0];
    }

    if (this.isMoving) {
      const mousePosition = this.getRelativeMousePosition(e.clientX, e.clientY);
      const size = [this.window.devicePixelRatio / 50, this.window.devicePixelRatio / 50];
      const delta = v2.mult(v2.sub(this.lastMousePosition, mousePosition), size);

      // theta: azimute; phi: sul a norte
      this.thetaAngleInRadians += delta[0];
      this.phiAngleInRadians = clamp(this.phiAngleInRadians + delta[1], degToRad(0.5), degToRad(179.5));

      this.lastMousePosition = mousePosition;
    }
  }

  stopRotateCamera(e) {
    if (e.type.startsWith('touch')) {
      e = e.touches[0];
    }

    this.canvasEl.style.cursor = 'initial';
    this.isMoving = false;
  }

  zoomCamera(e) {
    if (e.cancelable) {
      e.preventDefault();
    }
    this.distance += Math.sign(e.deltaY) * 0.5;
  }

  updateEye() {
    if (this.isCameraDirty) {
      const theta = this._thetaAngleInRadians;
      const phi = this._phiAngleInRadians;
      const r = this._distance;

      // acha o ponto na superfície de uma esfera (situada em 0,0,0)
      // de acordo com os ângulos theta e phi
      const pointInSphere = v3.create(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.cos(phi),
        r * Math.sin(theta) * Math.sin(phi)
      );
      // a partir de target, soma o vetor da superfície da esfera
      // para chegar ao eye
      v3.add(this.target, pointInSphere, this._eye);

      this.updateUp();
    }
  }

  set distance(scalar) {
    if (this._distance !== scalar) {
      this._distance = scalar;
      this.isCameraDirty = true;
      this.updateEye();
    }
  }

  get distance() {
    return this._distance;
  }

  set thetaAngleInRadians(angleInRadians) {
    if (this._thetaAngleInRadians !== angleInRadians) {
      this.isCameraDirty = true;
      this._thetaAngleInRadians = angleInRadians
      this.updateEye();
    }
  }

  set phiAngleInRadians(angleInRadians) {
    if (this.phiAngleInRadians !== angleInRadians) {
      this.isCameraDirty = true;
      this._phiAngleInRadians = angleInRadians
      this.updateEye();
    }
  }

  get thetaAngleInRadians() {
    return this._thetaAngleInRadians;
  }

  get phiAngleInRadians() {
    return this._phiAngleInRadians;
  }

  get upTiltAngleInRadians() {
    return 0;
  }

  get target() {
    return this._target;
  }

  set target(point) {
    if (this._target !== point) {
      this._target = point;
      this.updateEye();
    }
  }

  get rotations() {
    return {
      theta: this.thetaAngleInRadians - degToRad(90),
      phi: this.phiAngleInRadians - degToRad(90),
      tilt: this.upTiltAngleInRadians
    };
  }

}

class FreeCamera extends Camera {

  constructor(velocity, supportedKeys = [], initialHeight) {
    super();
    this.velocity = velocity;
    this.keyStates = supportedKeys.reduce((obj, key) => {
      obj[key] = false;
      return obj;
    }, {});

    this._thetaAngleInRadians = degToRad(180);
    this._phiAngleInRadians = degToRad(0);
    this._upTiltAngleInRadians = degToRad(0);
    this.eye = v3.create(0, initialHeight, 2);
    this.viewDirection = v3.create(0, 0, -1);

    this.startMoveCamera = this.startMoveCamera.bind(this);
    this.stopMoveCamera = this.stopMoveCamera.bind(this);
    this.rotateCamera = this.rotateCamera.bind(this);
    this.captureCursor = this.captureCursor.bind(this);
    this.stopCaptureCursor = this.stopCaptureCursor.bind(this);

    this.cursorCaptured = false;
  }

  attach(window, canvasEl) {
    super.attach(window, canvasEl);
    window.addEventListener('keydown', this.startMoveCamera);
    window.addEventListener('keyup', this.stopMoveCamera);
    window.addEventListener('mousemove', this.rotateCamera);
    window.addEventListener('touchmove', this.rotateCamera);
    window.addEventListener('keydown', this.stopCaptureCursor);
    window.document.addEventListener('pointerlockchange', this.stopCaptureCursor);
    canvasEl.addEventListener('click', this.captureCursor);
    canvasEl.style.cursor = 'pointer';
  }

  dettach() {
    if (!this.canvasEl || !this.window) {
      return;
    }
    this.window.removeEventListener('keydown', this.stopCaptureCursor);
    this.window.removeEventListener('keydown', this.startMoveCamera);
    this.window.removeEventListener('keyup', this.stopMoveCamera);
    this.window.removeEventListener('mousemove', this.rotateCamera);
    this.window.removeEventListener('touchmove', this.rotateCamera);
    this.window.document.removeEventListener('pointerlockchange', this.stopCaptureCursor);
    this.canvasEl.removeEventListener('click', this.captureCursor);
    this.canvasEl.style.cursor = 'inherit';
    super.dettach();
  }

  startMoveCamera(e) {
    if (typeof this.keyStates[e.key] === 'undefined') {
      return;
    }

    if (e.cancelable) {
      e.preventDefault();
    }

    this.keyStates[e.key] = true;
  }

  stopMoveCamera(e) {
    if (typeof this.keyStates[e.key] === 'undefined') {
      return;
    }

    if (e.cancelable) {
      e.preventDefault();
    }

    this.keyStates[e.key] = false;
  }

  rotateCamera(e) {
    if (e.type.startsWith('touch')) {
      e = e.touches[0];
    }

    if (e.cancelable) {
      e.preventDefault();
    }

    if (!this.cursorCaptured) {
      return;
    }

    const size = [this.window.devicePixelRatio / 150, this.window.devicePixelRatio / 150];
    const delta = v2.mult([-e.movementX, -e.movementY], size);

    // theta: azimute; phi: sul a norte
    this.thetaAngleInRadians += delta[0];
    this.phiAngleInRadians = clamp(this.phiAngleInRadians + delta[1], degToRad(-90), degToRad(90));
  }

  captureCursor(force) {
    if (typeof force === 'boolean') {
      this.cursorCaptured = force;
    } else {
      this.cursorCaptured = !this.cursorCaptured;
    }

    if (this.cursorCaptured) {
      this.canvasEl.requestPointerLock();
    } else {
      this.window.document.exitPointerLock();
    }
  }

  stopCaptureCursor(e) {
    const canceledThroughKeydown = e.type === 'keydown' && e.key.toLowerCase() === 'escape';
    const canceledThroughPointerLock = (e.type === 'pointerlockchange' && this.window.document.pointerLockElement !== this.canvasEl);
    if (canceledThroughKeydown || canceledThroughPointerLock) {
      this.captureCursor(false);
    }
  }

  moveForward(dt) {
  }

  moveBackward(dt) {
  }

  moveRight(dt) {
  }

  moveLeft(dt) {
  }

  tiltLeft(dt) {
    this.upTiltAngleInRadians += degToRad(2.5);
  }

  tiltRight(dt) {
    this.upTiltAngleInRadians -= degToRad(2.5);
  }

  update(dt) {
    // 1. frente ou trás: soma/subtrai um tantinho da viewDirection (projetada em x,z) em eye e target
    if (this.keyStates['w'] || this.keyStates['s']) {
      if (this.keyStates['w']) {
        this.moveForward(dt);
      } else if (this.keyStates['s']) {
        this.moveBackward(dt);
      }

      this.isCameraDirty = true;
    }

    // 2. esq ou dir: soma/subtrai um tantinho da direção lateral em eye e target
    if (this.keyStates['a'] || this.keyStates['d']) {
      if (this.keyStates['a']) {
        this.moveLeft(dt);
      } else if (this.keyStates['d']) {
        this.moveRight(dt);
      }

      this.isCameraDirty = true;
    }

    // 3. tilta (instagram) para esq/dir: altera o vetor up
    if (this.keyStates['q'] || this.keyStates['e']) {
      if (this.keyStates['q']) {
        this.tiltLeft(dt);
      } else if (this.keyStates['e']) {
        this.tiltRight(dt);
      }
    }

    this.isCameraDirty = true;
  }

  updateViewDirection() {
    this.isCameraDirty = true;
    this.viewDirection[0] = Math.sin(this.thetaAngleInRadians);
    this.viewDirection[1] = Math.sin(this.phiAngleInRadians);
    this.viewDirection[2] = Math.cos(this.thetaAngleInRadians);
    v3.normalize(this.viewDirection, this.viewDirection);
    this.updateTarget();
  }

  updateTarget() {
    this.isCameraDirty = true;
    v3.add(this.eye, this.viewDirection, this.target);
  }

  updateUp() {
    this.isCameraDirty = true;
    this.up[0] = Math.sin(this.upTiltAngleInRadians);
    this.up[1] = Math.cos(this.upTiltAngleInRadians);
  }

  set viewDirection(vector) {
    if (this._viewDirection !== vector) {
      this.isCameraDirty = true;
      this._viewDirection = vector;
      this.updateTarget();
    }
  }

  get viewDirection() {
    return this._viewDirection;
  }

  set thetaAngleInRadians(angleInRadians) {
    if (this._thetaAngleInRadians !== angleInRadians) {
      this.isCameraDirty = true;
      this._thetaAngleInRadians = angleInRadians
      this.updateViewDirection();
    }
  }

  set phiAngleInRadians(angleInRadians) {
    if (this.phiAngleInRadians !== angleInRadians) {
      this.isCameraDirty = true;
      this._phiAngleInRadians = angleInRadians
      this.updateViewDirection();
    }
  }

  set upTiltAngleInRadians(angleInRadians) {
    if (this.upTiltAngleInRadians !== angleInRadians) {
      this.isCameraDirty = true;
      this._upTiltAngleInRadians = angleInRadians;
      this.updateUp();
    }
  }

  get thetaAngleInRadians() {
    return this._thetaAngleInRadians;
  }

  get phiAngleInRadians() {
    return this._phiAngleInRadians;
  }

  get upTiltAngleInRadians() {
    return this._upTiltAngleInRadians;
  }

  get rotations() {
    return {
      theta: Math.PI - this.thetaAngleInRadians,
      phi: this.phiAngleInRadians / 2,
      tilt: -this.upTiltAngleInRadians
    };
  }
}

export class FlyCamera extends FreeCamera {
  constructor(velocity = 4, initialHeight = 3) {
    super(velocity, ['w', 'a', 's', 'd', 'q', 'e'], initialHeight);
  }

  moveForward(dt) {
    v3.add(this.eye, v3.mulScalar(this._viewDirection, this.velocity * dt), this.eye);
    v3.add(this.eye, this._viewDirection, this.target);

    this.isCameraDirty = true;
  }

  moveBackward(dt) {
    v3.add(this.eye, v3.mulScalar(this._viewDirection, -this.velocity * dt), this.eye);
    v3.add(this.eye, this._viewDirection, this.target);

    this.isCameraDirty = true;
  }

  moveRight(dt) {
    const lateralDirection = v3.normalize(v3.cross(this._viewDirection, [0, 1, 0]));

    v3.add(this.eye, v3.mulScalar(lateralDirection, this.velocity * dt), this.eye);
    v3.add(this.eye, this._viewDirection, this.target);
  }

  moveLeft(dt) {
    const lateralDirection = v3.normalize(v3.cross(this._viewDirection, [0, 1, 0]));

    v3.add(this.eye, v3.mulScalar(lateralDirection, -this.velocity * dt), this.eye);
    v3.add(this.eye, this._viewDirection, this.target);
  }
}

export class FpsCamera extends FreeCamera {
  constructor(velocity = 4, backwardMultiplier = 0.75, lateralMultiplier = 0.75, jumpInitialVelocity = 10, cameraHeight = 2) {
    super(velocity, ['w', 'a', 's', 'd', 'q', 'e', ' '], cameraHeight);
    this.isGrounded = true;
    this.speed = v3.create(0, 0, 0);
    this.jumpInitialVelocity = jumpInitialVelocity;
    this.cameraHeight = cameraHeight;

    this.backwardVelocity = velocity * backwardMultiplier;
    this.lateralVelocity = velocity * lateralMultiplier;
  }


  moveForward(dt) {
    const projectedViewDirection = v3.copy(this._viewDirection);
    projectedViewDirection[1] = 0;

    v3.add(this.eye, v3.mulScalar(projectedViewDirection, this.velocity * dt), this.eye);
    v3.add(this.eye, this._viewDirection, this.target);

    this.isCameraDirty = true;
  }

  moveBackward(dt) {
    const projectedViewDirection = v3.copy(this._viewDirection);
    projectedViewDirection[1] = 0;

    v3.add(this.eye, v3.mulScalar(projectedViewDirection, -this.backwardVelocity * dt), this.eye);
    v3.add(this.eye, this._viewDirection, this.target);

    this.isCameraDirty = true;
  }

  moveRight(dt) {
    const lateralDirection = v3.normalize(v3.cross(this._viewDirection, [0, 1, 0]));

    v3.add(this.eye, v3.mulScalar(lateralDirection, this.lateralVelocity * dt), this.eye);
    v3.add(this.eye, this._viewDirection, this.target);
  }

  moveLeft(dt) {
    const lateralDirection = v3.normalize(v3.cross(this._viewDirection, [0, 1, 0]));

    v3.add(this.eye, v3.mulScalar(lateralDirection, -this.lateralVelocity * dt), this.eye);
    v3.add(this.eye, this._viewDirection, this.target);
  }

  update(dt) {
    super.update(dt);

    // 3. pulando
    if (this.keyStates[' ']) {
      // verifica se pode pular - basta estar no chão
      if (this.isGrounded) {
        this.speed[1] = this.jumpInitialVelocity;
        this.isGrounded = false;
      }
    }

    // se estiver no meio de um pulo...
    if (!this.isGrounded) {
      // atualiza posição do eye, garantindo que está sempre com y>=0
      v3.add(this.eye, v3.mulScalar(this.speed, dt), this.eye);
      if (this.eye[1] <= this.cameraHeight) {
        this.eye[1] = this.cameraHeight;
        this.isGrounded = true;
      }

      // atualiza o target de acordo com a nova eye
      v3.add(this.eye, this.viewDirection, this.target);

      // avisa que a matriz da câmera mudou
      this.isCameraDirty = true;

      // atualiza velocidade
      v3.add(this.speed, [0, -10 * dt, 0], this.speed);
    }
  }
}
