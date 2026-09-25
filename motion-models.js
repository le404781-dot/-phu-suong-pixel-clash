/* Motion models for Phú & Sương — V4 */
const MOTION_MODELS={
 phu:{idle:{amp:1.5},walk:{amp:4},run:{amp:7},jump:{amp:3},attack1:{reach:8,rot:-5},attack2:{reach:13,rot:7},attack3:{reach:20,rot:-12},airAttack:{reach:18,rot:-20},dash:{reach:22,rot:0},dodge:{reach:-16,rot:-8},block:{amp:2},parry:{rot:12},charge:{amp:5},ult1:{reach:28,rot:-8},ult2:{reach:42,rot:10},hit:{rot:7},ko:{rot:90}},
 suong:{idle:{amp:2},walk:{amp:5},run:{amp:9},jump:{amp:4},attack1:{reach:9,rot:5},attack2:{reach:15,rot:-8},attack3:{reach:23,rot:13},airAttack:{reach:22,rot:24},dash:{reach:27,rot:0},dodge:{reach:-19,rot:8},block:{amp:3},parry:{rot:-14},charge:{amp:7},ult1:{reach:32,rot:7},ult2:{reach:50,rot:-12},hit:{rot:-7},ko:{rot:-90}}
};
function motionPose(id,state,t){const m=MOTION_MODELS[id][state]||MOTION_MODELS[id].idle;const s=Math.sin(t*Math.PI*2),q=Math.sin(t*Math.PI);return {x:(m.reach||0)*q,y:-(m.amp||0)*Math.abs(s),rot:(m.rot||0)*q,sx:1+(state==='ult2'?.10:state==='attack3'?.06:0),sy:1-(state==='jump'?.04:0)} }
const MOTION_UTILS={get:(id,state,t)=>motionPose(id,state,t)};
