'use strict';
const {scenes, duration:recordingDuration} = window.LECTURE_TIMELINE;
const audio = document.getElementById('audio');
const stage = document.getElementById('stage');
const seek = document.getElementById('seek');
const play = document.getElementById('play');
const visual = document.getElementById('visual');
const example = document.getElementById('example');
const art = document.getElementById('art');
const points = document.getElementById('points');
let sceneIndex = -1, visualKey = '', pointNodes = [];

const illustrations = {
};

function duration(){return Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : recordingDuration;}
function fmt(value){const t=Math.max(0,Math.floor(value));return Math.floor(t/60)+':'+String(t%60).padStart(2,'0');}
function stateAt(t){
  const index=Math.max(0,scenes.findLastIndex(s=>s.at<=t));
  const scene=scenes[index];
  const v=scene.visuals.findLastIndex(e=>e.at<=t && (e.until===undefined || t<e.until));
  return {index,scene,event:v>=0?scene.visuals[v]:null,key:index+':'+v};
}
function showScene(scene,index){
  document.getElementById('title').textContent=scene.title;
  pointNodes=scene.points.map(p=>{
    const e=document.createElement('div');e.className='point';
    const text=document.createElement('span');text.textContent=p.text;e.append(text);return e;
  });
  points.replaceChildren(...pointNodes);
  document.getElementById('back').disabled=index===0;
  document.getElementById('next').disabled=index===scenes.length-1;
}
function illustrationFor(event){return window.LECTURE_IMAGE_MAP?.[event?.title] || illustrations[event?.art];}
function drawArt(name,event){
  if(name==='portrait')return '<div class="photo-frame"><img src="assets/elmira-asiltayevna.png" alt="Орынбетова Эльмира Асилтаевна — лектор курса" width="1131" height="1600"></div>';
  const image=illustrationFor(event);
  if(!image)return '';
  if(image.secondarySrc)return '<div class="image-pair"><img class="phrase-image" src="'+image.src+'" alt="'+image.alt+'" decoding="async"><img class="phrase-image" src="'+image.secondarySrc+'" alt="'+image.secondaryAlt+'" decoding="async"></div>';
  return '<img class="phrase-image" src="'+image.src+'" alt="'+image.alt+'" width="800" height="450" decoding="async">';
}
function paint(t){
  // Audio positions can land a few microseconds below a cue after seeking.
  t=Math.round(t*1000)/1000;
  const {index,scene,event,key}=stateAt(t);
  if(sceneIndex!==index){sceneIndex=index;showScene(scene,index);}
  const current=scene.points.findLastIndex(p=>p.at<=t);
  pointNodes.forEach((node,i)=>{
    const p=scene.points[i];
    node.classList.toggle('shown',p.at<=t);
    node.setAttribute('aria-hidden',p.at<=t?'false':'true');
    node.classList.toggle('current',i===current);
    const detail=p.detail && p.detailAt<=t?' — '+p.detail:'';
    const content=p.text+detail;
    if(node.firstChild.textContent!==content)node.firstChild.textContent=content;
  });
  if(key!==visualKey){
    visualKey=key;
    visual.classList.toggle('semantic-map',event?.art==='semantic');
    art.innerHTML=event?drawArt(event.art,event):'';
    art.hidden=!event || (!illustrationFor(event) && event.art!=='portrait');
    visual.classList.toggle('has-image',Boolean(event && illustrationFor(event)));
    visual.classList.toggle('text-only',Boolean(event && !illustrationFor(event) && event.art!=='portrait'));
  }
  visual.classList.toggle('shown',Boolean(event));
  visual.setAttribute('aria-hidden',event?'false':'true');
  if(event){
    const parts=[['h2',event.title,'']];
    if(event.translation && event.translationAt<=t)parts.push(['p',event.translation,'translation']);
    if(event.description && (event.descriptionAt??event.at)<=t)parts.push(['p',event.description,'']);
    for(const a of event.additions||[])if(a.at<=t)parts.push(['p',a.text,'']);
    const signature=JSON.stringify(parts);
    if(example.dataset.signature!==signature){
      example.dataset.signature=signature;
      example.replaceChildren(...parts.map(([tag,txt,cls])=>{const e=document.createElement(tag);e.textContent=txt;e.className=cls;return e;}));
      const image=illustrationFor(event);
      if(image){
        const credits=[[image.source,image.credit||'Иллюстрация: '+new URL(image.source).hostname]];
        if(image.licenseUrl)credits.push([image.licenseUrl,image.license]);
        if(image.secondarySource)credits.push([image.secondarySource,image.secondaryCredit||'Вторая фотография']);
        if(image.secondaryLicenseUrl)credits.push([image.secondaryLicenseUrl,image.secondaryLicense]);
        for(const [url,label] of credits){const source=document.createElement('a');source.className='image-source';source.href=url;source.target='_blank';source.rel='noopener noreferrer';source.textContent=label;example.append(source);}
      }
    }
  }else if(example.childNodes.length){example.replaceChildren();delete example.dataset.signature;}
  window.renderLectureExamples?.(t,scene,illustrationFor);
  stage.style.setProperty('--drift',Math.sin(t/9)*12+'px');
  stage.style.setProperty('--boat-x',event?.art==='river'?Math.min(100,Math.max(0,(t-event.at)*16))+'px':'0px');
  stage.style.setProperty('--route',(-t*5)+'px');
  stage.classList.toggle('pause-motion',audio.paused);
  document.getElementById('progress').style.width=(t/duration()*100)+'%';
  seek.max=String(duration());seek.value=String(t);
  document.getElementById('time').textContent=fmt(t)+' / '+fmt(duration());
}
let frame=null;
function tick(){paint(audio.currentTime);frame=audio.paused?null:requestAnimationFrame(tick);}
function refresh(){paint(audio.currentTime);}
function status(message){const el=document.getElementById('status');el.textContent=message;el.hidden=!message;}
play.addEventListener('click',async()=>{try{if(audio.paused){await audio.play();}else audio.pause();}catch{status('Аудио пока не загрузилось. Проверьте подключение и попробуйте ещё раз.');}});
audio.addEventListener('play',()=>{play.textContent='❚❚ Пауза';status('');if(frame===null)tick();});
audio.addEventListener('pause',()=>{play.textContent='▶ Продолжить';if(frame!==null){cancelAnimationFrame(frame);frame=null;}refresh();});
audio.addEventListener('ended',()=>{play.textContent='↺ Ещё раз';refresh();});
audio.addEventListener('error',()=>status('Не удалось загрузить озвучку. Обновите страницу или проверьте подключение.'));
for(const name of ['loadedmetadata','seeked','timeupdate'])audio.addEventListener(name,refresh);
const requestedStart=Number(new URLSearchParams(location.search).get('t'));
if(Number.isFinite(requestedStart) && requestedStart>0){
  const applyStart=()=>{audio.currentTime=Math.min(requestedStart,duration());refresh();};
  if(audio.readyState>=1)applyStart();else audio.addEventListener('loadedmetadata',applyStart,{once:true});
}
seek.addEventListener('input',()=>{audio.currentTime=Number(seek.value);refresh();});
document.getElementById('back').addEventListener('click',()=>{audio.currentTime=scenes[Math.max(0,sceneIndex-1)].at;refresh();});
document.getElementById('next').addEventListener('click',()=>{audio.currentTime=scenes[Math.min(scenes.length-1,sceneIndex+1)].at;refresh();});
document.getElementById('speed').addEventListener('change',e=>{audio.playbackRate=Number(e.target.value);});
document.getElementById('full').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await stage.requestFullscreen();}catch{status('Полноэкранный режим недоступен в этом браузере.');}});
document.addEventListener('keydown',e=>{if(e.code==='Space' && !['INPUT','SELECT','BUTTON','TEXTAREA'].includes(document.activeElement?.tagName)){e.preventDefault();play.click();}});
// Preload the two source illustrations so their first appearance stays on cue.
Object.values({...illustrations,...window.LECTURE_IMAGE_MAP}).forEach(item=>{for(const src of [item.src,item.secondarySrc].filter(Boolean)){const image=new Image();image.src=src;}});
paint(0);
// Load the complete recording once. A Blob URL supports seeking even when
// static hosting does not serve HTTP byte ranges for audio.
let audioObjectUrl=null;
async function prepareAudio(){
  play.disabled=true;seek.disabled=true;
  status('Подготовка озвучки…');
  try{
    const response=await fetch(audio.dataset.src);
    if(!response.ok)throw new Error('Audio HTTP '+response.status);
    const blob=await response.blob();
    audioObjectUrl=URL.createObjectURL(blob);
    audio.addEventListener('loadedmetadata',()=>{play.disabled=false;seek.disabled=false;status('');refresh();},{once:true});
    audio.src=audioObjectUrl;audio.load();
  }catch{
    status('Не удалось загрузить озвучку. Проверьте подключение и обновите страницу.');
  }
}
window.addEventListener('pagehide',()=>{if(audioObjectUrl)URL.revokeObjectURL(audioObjectUrl);});
window.addEventListener('pageshow',e=>{if(e.persisted)prepareAudio();});
prepareAudio();
