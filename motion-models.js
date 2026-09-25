/* PHÚ × SƯƠNG — MOTION MODEL PACK V1
   Các model là dữ liệu chuyển động, không phụ thuộc thư viện ngoài.
   frame: 0..1, x/y là % dịch chuyển, sx/sy là scale, rot là độ.
*/
window.MOTION_MODELS = {
  phu: {
    idle:   [{t:0,y:0,sx:1,sy:1,rot:0},{t:.5,y:-2,sx:1.01,sy:.99,rot:0},{t:1,y:0,sx:1,sy:1,rot:0}],
    walk:   [{t:0,x:0,y:0,rot:-2},{t:.25,x:2,y:-1,rot:2},{t:.5,x:0,y:0,rot:-2},{t:.75,x:-2,y:-1,rot:2},{t:1,x:0,y:0,rot:-2}],
    jump:   [{t:0,y:0,rot:0},{t:.35,y:-18,rot:-4},{t:.7,y:-26,rot:2},{t:1,y:0,rot:0}],
    attack1:[{t:0,x:0,rot:0},{t:.35,x:8,rot:-6},{t:.7,x:20,rot:8},{t:1,x:0,rot:0}],
    attack2:[{t:0,x:0,rot:0},{t:.35,x:12,rot:8},{t:.7,x:26,rot:-10},{t:1,x:0,rot:0}],
    attack3:[{t:0,x:0,rot:0},{t:.3,x:10,y:-5,rot:-12},{t:.65,x:34,y:-8,rot:14},{t:1,x:0,y:0,rot:0}],
    block:  [{t:0,sx:1,sy:1,rot:0},{t:.4,x:-5,sx:.94,sy:1.04,rot:-5},{t:1,x:0,sx:1,sy:1,rot:0}],
    ultimate:[{t:0,y:0,sx:1},{t:.25,y:-7,sx:1.06,sy:.94,rot:-5},{t:.55,x:42,y:-4,sx:1.16,sy:.9,rot:8},{t:.8,x:58,y:-2,sx:1.22,sy:.86,rot:-4},{t:1,x:0,y:0,sx:1,sy:1,rot:0}]
  },
  suong: {
    idle:   [{t:0,y:0,sx:1,sy:1,rot:0},{t:.5,y:-3,sx:1.02,sy:.98,rot:1},{t:1,y:0,sx:1,sy:1,rot:0}],
    walk:   [{t:0,x:0,y:0,rot:3},{t:.25,x:3,y:-2,rot:-3},{t:.5,x:0,y:0,rot:3},{t:.75,x:-3,y:-2,rot:-3},{t:1,x:0,y:0,rot:3}],
    jump:   [{t:0,y:0,rot:0},{t:.3,y:-22,rot:5},{t:.65,y:-30,rot:-4},{t:1,y:0,rot:0}],
    attack1:[{t:0,x:0,rot:0},{t:.3,x:10,rot:8},{t:.7,x:30,rot:-7},{t:1,x:0,rot:0}],
    attack2:[{t:0,x:0,rot:0},{t:.35,x:15,rot:-10},{t:.7,x:36,rot:12},{t:1,x:0,rot:0}],
    attack3:[{t:0,x:0,rot:0},{t:.25,x:15,y:-8,rot:12},{t:.6,x:48,y:-12,rot:-16},{t:1,x:0,y:0,rot:0}],
    block:  [{t:0,sx:1,sy:1,rot:0},{t:.4,x:-7,sx:.92,sy:1.05,rot:6},{t:1,x:0,sx:1,sy:1,rot:0}],
    ultimate:[{t:0,y:0,sx:1},{t:.22,y:-12,sx:1.08,sy:.92,rot:7},{t:.48,x:48,y:-10,sx:1.2,sy:.88,rot:-10},{t:.72,x:72,y:-4,sx:1.28,sy:.82,rot:6},{t:1,x:0,y:0,sx:1,sy:1,rot:0}]
  }
};

window.MOTION_UTILS = {
  sample(frames,t){
    if(!frames || !frames.length) return {x:0,y:0,sx:1,sy:1,rot:0};
    t=Math.max(0,Math.min(1,t));
    for(let i=1;i<frames.length;i++){
      if(t<=frames[i].t){
        const a=frames[i-1],b=frames[i],u=(t-a.t)/(b.t-a.t||1);
        return {x:(a.x||0)+((b.x||0)-(a.x||0))*u,y:(a.y||0)+((b.y||0)-(a.y||0))*u,sx:(a.sx||1)+((b.sx||1)-(a.sx||1))*u,sy:(a.sy||1)+((b.sy||1)-(a.sy||1))*u,rot:(a.rot||0)+((b.rot||0)-(a.rot||0))*u};
      }
    }
    return frames[frames.length-1];
  },
  get(id,state,t){return this.sample((window.MOTION_MODELS[id]||window.MOTION_MODELS.phu)[state]||window.MOTION_MODELS.phu.idle,t)}
};
