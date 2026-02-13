import React, { useEffect, useRef, useState } from 'react'
import sapana1 from '../assets/images/sapana1.jpeg'
import sapana2 from '../assets/images/sapana2.jpeg'
import sapana3 from '../assets/images/sapana3.jpeg'
import sapana4 from '../assets/images/sapana4.jpeg'
import together from '../assets/images/sapanaandme.jpeg'

export default function Valentine(){
  const [stage, setStage] = useState(0) // 0 intro,1 show1,2 show2,3 reveal
  const [score, setScore] = useState(0)
  const containerRef = useRef(null)
  const noRef = useRef(null)
  const yesRef = useRef(null)

  useEffect(()=>{
    // sequence: intro -> sapana1 -> sapana2 -> sapana3 -> sapana4 -> final reveal
    let t1 = setTimeout(()=> setStage(1), 2000)
    let t2 = setTimeout(()=> setStage(2), 4800)
    let t3 = setTimeout(()=> setStage(3), 7800)
    let t4 = setTimeout(()=> setStage(4), 10800)
    let t5 = setTimeout(()=> setStage(5), 15800)
    return ()=>{ clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5) }
  }, [])

  useEffect(()=>{
    // simple floating hearts generator when showing images
    let running = true
    function spawn(){
      const el = document.createElement('div')
      el.className = 'v-heart'
      el.style.left = (20 + Math.random()*60) + '%'
      el.style.animationDuration = (4 + Math.random()*3) + 's'
      containerRef.current && containerRef.current.appendChild(el)
      setTimeout(()=> el.remove(), 8000)
      if(running) setTimeout(spawn, 450 + Math.random()*500)
    }
    if(stage>0 && stage<5){ spawn() }
    return ()=>{ running = false }
  }, [stage])

  function handleClickImage(){
    setScore(s=>s+1)
  }

  function handleYes(){
    // small confetti effect
    const parent = containerRef.current
    doFireworks()
  }

  function doFireworks(){
    const parent = containerRef.current
    if(!parent) return
    const reveal = parent.querySelector('.v-reveal-inner')
    const r = reveal.getBoundingClientRect()
    const px = r.left + r.width/2 - parent.getBoundingClientRect().left
    const py = r.top + r.height/2 - parent.getBoundingClientRect().top
    const colors = ['#ff4da1','#ffd166','#ff6b9a','#ffd3e0','#ff9bb8']
    // bigger, longer fireworks
    for(let i=0;i<140;i++){
      const p = document.createElement('div')
      p.className = 'fw'
      p.style.left = px + 'px'
      p.style.top = py + 'px'
      p.style.width = (6 + Math.random()*10) + 'px'
      p.style.height = (6 + Math.random()*10) + 'px'
      p.style.background = colors[Math.floor(Math.random()*colors.length)]
      p.style.transform = `translate(-50%,-50%) scale(${0.6 + Math.random()*0.8})`
      parent.appendChild(p)
      // random trajectory
      const angle = Math.random()*Math.PI*2
      const dist = 120 + Math.random()*260
      const dx = Math.cos(angle)*dist
      const dy = Math.sin(angle)*dist
      requestAnimationFrame(()=>{
        p.style.setProperty('--dx', dx + 'px')
        p.style.setProperty('--dy', dy + 'px')
        p.classList.add('fw-go')
      })
      setTimeout(()=> p.remove(), 3500)
    }
  }

  function rainFlowers(){
    const parent = containerRef.current
    if(!parent) return
    const count = 150
    for(let i=0;i<count;i++){
      const f = document.createElement('div')
      f.className = 'flower'
      f.style.left = Math.random()*100 + '%'
      f.style.fontSize = (12 + Math.random()*22) + 'px'
      f.textContent = '🌸'
      parent.appendChild(f)
      setTimeout(()=> f.remove(), 7000)
    }
  }

  let swapTimeout = null
  function swapButtons(){
    const noBtn = noRef.current
    const yesBtn = yesRef.current
    const parent = containerRef.current
    if(!noBtn || !yesBtn || !parent) return
    const p = parent.getBoundingClientRect()
    const n = noBtn.getBoundingClientRect()
    const y = yesBtn.getBoundingClientRect()
    // compute deltas relative to current button positions
    const noToYesX = (y.left - n.left)
    const noToYesY = (y.top - n.top)
    const yesToNoX = (n.left - y.left)
    const yesToNoY = (n.top - y.top)
    // animate using transform
    noBtn.style.transition = 'transform 260ms ease'
    yesBtn.style.transition = 'transform 260ms ease'
    noBtn.style.transform = `translate(${noToYesX}px, ${noToYesY}px)`
    yesBtn.style.transform = `translate(${yesToNoX}px, ${yesToNoY}px)`
    // clear any lingering reset
    if(swapTimeout) clearTimeout(swapTimeout)
  }

  function resetSwap(){
    const noBtn = noRef.current
    const yesBtn = yesRef.current
    if(!noBtn || !yesBtn) return
    noBtn.style.transform = ''
    yesBtn.style.transform = ''
    // remove transition after a short delay to avoid layout jitter
    swapTimeout = setTimeout(()=>{
      noBtn.style.transition = ''
      yesBtn.style.transition = ''
    }, 300)
  }

  function evadeNo(){
    const btn = noRef.current
    const parent = containerRef.current
    if(!btn || !parent) return
    // compute bounds relative to parent container
    const parentRect = parent.getBoundingClientRect()
    const reveal = parent.querySelector('.v-reveal-inner')
    const revealRect = reveal.getBoundingClientRect()
    const bw = btn.offsetWidth
    const bh = btn.offsetHeight
    const padding = 8
    // choose a random position that is outside the revealRect but inside parentRect
    // we'll pick a side (left or right) and a top offset
    const side = Math.random() > 0.5 ? 'right' : 'left'
    let leftPx, topPx
    const relativeTop = Math.random() * (revealRect.height - bh)
    topPx = revealRect.top - parentRect.top + relativeTop
    if(side === 'right'){
      leftPx = (revealRect.right - parentRect.left) + padding
      // add some horizontal jitter
      leftPx += Math.random() * Math.max(20, parentRect.width - (revealRect.right - parentRect.left) - bw - padding)
    } else {
      // left side outside
      leftPx = (revealRect.left - parentRect.left) - bw - padding - Math.random() * 40
      if(leftPx < padding) leftPx = padding
    }
    btn.style.position = 'absolute'
    btn.style.left = leftPx + 'px'
    btn.style.top = topPx + 'px'
  }

  return (
    <div ref={containerRef} className="valentine-root">
      <div className="v-top"> <h1 className="v-title">For Sapana — A little surprise</h1></div>

      <div className="v-center">
        {stage===0 && (
          <div className="v-card v-intro">
            <p className="big">Close your eyes... then click start ❤️</p>
            <button className="v-btn" onClick={()=>{ setStage(1) }}>Start</button>
          </div>
        )}

        {stage===1 && (
          <div className="v-card v-show" onClick={handleClickImage}>
            <img src={sapana1} alt="Sapana 1" />
            <div className="caption">Cute smile</div>
          </div>
        )}

        {stage===2 && (
          <div className="v-card v-show" onClick={handleClickImage}>
            <img src={sapana2} alt="Sapana 2" />
            <div className="caption">Playful moment</div>
          </div>
        )}

        {stage===3 && (
          <div className="v-card v-show" onClick={handleClickImage}>
            <img src={sapana3} alt="Sapana 3" />
            <div className="caption">Another lovely shot</div>
          </div>
        )}

        {stage===4 && (
          <div className="v-card v-show" onClick={handleClickImage}>
            <img src={sapana4} alt="Sapana 4" />
            <div className="caption">Special moment</div>
          </div>
        )}

        {stage===5 && (
          <div className="v-card v-reveal">
            <div className="v-reveal-inner">
              <img src={together} alt="Sapana and me" />
              <div className="revealText">Sapana, will you be my Valentine?</div>
            </div>
            <div className="revealActions">
              <button ref={yesRef} className="v-yes" onClick={() => { doFireworks(); rainFlowers(); }}>Yes ❤️</button>
              <button ref={noRef} className="v-no" onClick={() => { swapButtons(); setTimeout(resetSwap, 1400); }}>No</button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .valentine-root{min-height:100vh;background:linear-gradient(180deg,#081226,#071022);color:#fff;display:flex;flex-direction:column;align-items:center}
        .v-top{padding:28px}
        .v-title{font-size:clamp(20px,4vw,36px);margin:0}
        .v-center{flex:1;display:flex;align-items:center;justify-content:center;padding:20px;position:relative}
        .v-card{background:linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02));border-radius:16px;padding:12px;box-shadow:0 10px 30px rgba(2,6,23,0.6);display:flex;flex-direction:column;align-items:center}
        .v-intro{padding:36px;text-align:center}
        .big{font-size:18px;margin-bottom:12px}
        .v-btn{background:#ff5a9e;border:none;color:#081026;padding:10px 16px;border-radius:10px;font-weight:600}
        .v-show img{width:320px;max-width:80vw;border-radius:12px;cursor:pointer;display:block}
        .caption{margin-top:8px;color:#ffdbe8}
        .v-reveal{position:relative}
        .v-reveal-inner{position:relative;padding:12px}
        .v-reveal img{width:420px;max-width:86vw;border-radius:14px;display:block}
        .revealText{margin-top:12px;font-size:18px;font-weight:700;color:#ffeef6}
        .revealActions{margin-top:10px;display:flex;gap:40px;align-items:center}
        .v-yes{background:linear-gradient(90deg,#ff2d8a,#ff9bb8);border:none;padding:8px 14px;border-radius:10px;color:#061026;font-weight:700}
        .v-no{background:transparent;border:1px solid rgba(255,255,255,0.12);padding:8px 14px;border-radius:10px;color:#fff}
        .v-yes, .v-no{transition:transform 220ms ease}
        .v-yes, .v-no{cursor:pointer}

        /* flowers raining from No */
        .flower{position:absolute;top:-10vh;pointer-events:none;animation:fallFlower 4s linear forwards;z-index:50}
        @keyframes fallFlower{0%{transform:translateY(-20vh) scale(0.6);opacity:1}100%{transform:translateY(100vh) scale(1);opacity:0}}

        /* fireworks particles */
        .fw{position:absolute;width:10px;height:10px;border-radius:50%;opacity:0.95;transform-origin:center;pointer-events:none;z-index:60}
        .fw-go{animation:fw-move 3.5s ease-out forwards}
        @keyframes fw-move{0%{transform:translate(-50%,-50%) scale(0.6);opacity:1}100%{transform:translate(calc(var(--dx) - 50%), calc(var(--dy) - 50%)) scale(0.2);opacity:0}}
        /* floating hearts */
        .v-heart{position:absolute;top:70%;width:26px;height:26px;background:radial-gradient(circle at 40% 35%,#fff 0,#ffd3e0 6%,#ff6b9a 40%);transform:translateY(0) rotate(0);border-radius:6px;opacity:0.9;animation:floatUp linear}
        @keyframes floatUp{0%{transform:translateY(0) rotate(0);opacity:1}100%{transform:translateY(-90vh) rotate(360deg);opacity:0}}
        .conf{position:absolute;top:10%;width:10px;height:14px;border-radius:2px;opacity:0.95;transform:translateY(0);animation:fallConf 2.2s linear}
        @keyframes fallConf{0%{transform:translateY(-20vh) rotate(0);opacity:1}100%{transform:translateY(80vh) rotate(360deg);opacity:0}}
      `}</style>
    </div>
  )
}
