import * as twgl from './twgl-full.module.js';
import { degToRad, lerp, lerpV3 } from './math-utils.js';
import { AnObject, Billboard } from './objects.js';
import { range, byteColorToFloat } from './js-util.js';
import { randWithDelta, randWithDeltaV3 } from './math-utils.js';

const m4 = twgl.m4;
const v3 = twgl.v3;

export class ParticleEmitter extends AnObject {
  constructor(gl, modelMatrix = m4.identity(), options = {
    texture,
    numParticles,
    billboardType,
    particlesPerSecond,
    remainingLife: {
      value,
      delta
    },
    color: {
      begin,
      end,
      delta
    },
    alpha: {
      begin,
      end,
      delta
    },
    size: {
      begin,
      end,
      delta
    },
    speed: {
      begin,
      end,
      delta
    },
    acceleration: {
      begin,
      end,
      delta
    }
  }) {
    super(modelMatrix, null, options.texture);
    this.gl = gl;
    this.options = options;
    this.unbornParticles = [];
    this.liveParticles = [];
    this.emissionPeriod = 1 / options.particlesPerSecond;
    for (let i of range(0, 1500)) {
      const newlyBornParticle = this.createParticle();
      newlyBornParticle.attachBillboard(gl, this.texture, this.modelMatrix, options.billboardType);
      this.unbornParticles.push(newlyBornParticle);
    }
    this.accumulatedTime = 0;
  }

  update(dt) {
    // verifica se deve emitir novas partículas
    const bornParticles = this.liveParticles;
    this.accumulatedTime += dt;
    if (this.accumulatedTime >= this.emissionPeriod && this.liveParticles.length < this.options.numParticles) {
      this.accumulatedTime = 0;
      // se houver partículas disponíveis, emite nova
      if (this.unbornParticles.length > 0) {
        const newlyBornParticle = this.unbornParticles.splice(0, 1)[0];
        this.resetParticle(newlyBornParticle);
        bornParticles.push(newlyBornParticle);
      }
    }

    // atualiza todas partículas que já nasceram
    bornParticles.forEach(p => {
      const t = (p.initialLife - p.remainingLife) / p.initialLife;
      p.color.current = lerpV3(p.color.begin, p.color.end, t);
      p.alpha.current = lerp(p.alpha.begin, p.alpha.end, t);
      p.size.current = lerpV3(p.size.begin, p.size.end, t);
      p.acceleration.current = lerpV3(p.acceleration.begin, p.acceleration.end, t);
      v3.add(p.position, v3.mulScalar(p.speed, dt), p.position);
      v3.add(p.speed, v3.mulScalar(p.acceleration.current, dt), p.speed);

      p.remainingLife -= dt;
      p.billboard.color = [...p.color.current, p.alpha.current];
      p.billboard.originalModelMatrix = m4.scale(m4.rotateX(m4.translate(m4.identity(), p.position), degToRad(90)), p.size.current);
      p.billboard.update(dt);
    });

    // verifica se deve matar algumas partículas vivas
    for (let i = bornParticles.length - 1; i >= 0; i--) {
      let particle = bornParticles[i];
      if (!particle.hasLife()) {
        bornParticles.splice(i, 1);
        this.unbornParticles.push(particle);
      }
    };
  }

  render(gl, programInfo, sceneUniforms, isWireframe = false) {
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.depthMask(false);
    this.liveParticles.forEach(p => {
      const uniforms = Object.assign({}, sceneUniforms);
      p.billboard.render(gl, programInfo, uniforms, isWireframe);
    });
  }

  createParticle() {
    const particle = {
      hasLife() {
        return this.remainingLife > 0
      },
      attachBillboard(gl, texture, modelMatrix, type) {
        this.billboard = new Billboard(gl, texture, m4.copy(modelMatrix), type);
        this.billboard.setUniform('u_alphaThreshold', 0.01);
      }
    };

    return this.resetParticle(particle);
  }

  resetParticle(particle) {
    const o = this.options;

    particle.initialLife = randWithDelta(o.remainingLife.value, o.remainingLife.delta);
    particle.remainingLife = particle.initialLife;
    particle.color = {
      begin: randWithDeltaV3(v3.create(...byteColorToFloat(o.color.begin)), o.color.delta),
      end: randWithDeltaV3(v3.create(...byteColorToFloat(o.color.end)), o.color.delta)
    };
    particle.alpha = {
      begin: randWithDelta(o.alpha.begin, o.alpha.delta),
      end: randWithDelta(o.alpha.end, o.alpha.delta)
    };
    particle.size = {
      begin: randWithDeltaV3(v3.create(o.size.begin, o.size.begin, o.size.begin), o.size.delta),
      end: randWithDeltaV3(v3.create(o.size.end, o.size.end, o.size.end), o.size.delta)
    };
    particle.speed = randWithDeltaV3(v3.create(o.speed.value.x, o.speed.value.y, o.speed.value.z), o.speed.delta);
    particle.acceleration = {
      begin: randWithDeltaV3(v3.create(o.acceleration.begin.x, o.acceleration.begin.y, o.acceleration.begin.z), o.acceleration.delta),
      end: randWithDeltaV3(v3.create(o.acceleration.end.x, o.acceleration.end.y, o.acceleration.end.z), o.acceleration.delta)
    };
    particle.wasBorn = false;
    particle.position = m4.getTranslation(this.modelMatrix);
    if (particle.billboard && particle.billboard.type !== o.billboardType) {
      particle.billboard.type = o.billboardType;
    }

    return particle;
  }

  setOptions(opt) {
    this.options = opt;
  }

  track(camera) {
    if (camera) {
      this.lookingAt = camera;
      this.unbornParticles.forEach(p => p.billboard.track(camera));
    } else {
      this.lookingAt = null;
      this.unbornParticles.forEach(p => p.billboard.track(null));
    }
  }

  get isTracking() {
    return this.lookingAt !== null;
  }
}
