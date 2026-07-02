const TCOLOR={"Picholas Cage":"#e8c66b","License to Dill":"#7fd6ee","Balls of Fury":"#e5534b",
  "Baggers":"#1db2dc","Kitchen Nightmares":"#19d39a"};
const ME="";  // no player highlighted

document.getElementById('sub').textContent =
  `${DATA.meta.matchesPlayed} matches played (Weeks ${DATA.meta.weeks}) • ${DATA.meta.totalPlayers} players • as of ${DATA.meta.asOf}`;
document.getElementById('foot').textContent =
  `Live from the Bounce league API • division 3e9b6a58 • Weeks ${DATA.meta.weeks}, ${DATA.meta.matchesPlayed} completed matches. ` +
  `"PF/PA" are the league's recorded points for/against; +/- is their difference. Win% = game wins ÷ games played. ` +
  `Rating is a ridge-regularized adjusted plus-minus: each player's net points per game above an average player, ` +
  `controlling for partner and opponent strength. The "Conf" column shows how much of each rating is backed by real game evidence (0–100%) — early-season ratings are low-confidence and will shift as more games are played.`;

document.getElementById('teams').innerHTML = DATA.teams.map((t,i)=>{
  const d=t.diff>=0?`<span class="pos-diff">+${t.diff}</span>`:`<span class="neg-diff">${t.diff}</span>`;
  return `<div class="tcard" style="border-top:3px solid ${TCOLOR[t.name]}">
    <div class="seed">#${i+1}</div><h3>${t.name}</h3>
    <div class="rec">${t.w}–${t.l} <small>match${t.w+t.l!==1?'es':''}</small></div>
    <div class="pts">Games <b style="color:var(--txt)">${t.gw}–${t.gl}</b></div>
    <div class="pts">PF ${t.pf} • PA ${t.pa} • <span class="d">${d}</span></div></div>`;
}).join('');

const teamSel=document.getElementById('team');
teamSel.innerHTML='<option value="">All teams</option>'+DATA.teams.map(t=>`<option>${t.name}</option>`).join('');

const COLS=[
  ["name","Player","l"],["team","Team","l"],["rating","Rating","r"],["conf","Conf","r"],["soo","Opp Str","r"],["sop","Partner Str","r"],["leagueRank","Lg Rank","r"],["matches","M","r"],["gamesPlayed","GP","r"],
  ["wl","W–L","r"],["winPct","Win%","r"],
  ["diff","+/–","r"],["mixed","Mixed","r"],["gender","Gendr","r"],["clutch","Clutch","r"],
];
let sortKey="winPct", sortDir=-1;

const head=document.getElementById('head');
head.innerHTML=COLS.map(c=>`<th data-k="${c[0]}" class="${c[2]==="l"?"l ":""}${c[0]===sortKey?"sorted":""}">${c[1]}</th>`).join('');
head.querySelectorAll('th').forEach(th=>th.onclick=()=>{
  const k=th.dataset.k;
  if(k===sortKey) sortDir*=-1; else {sortKey=k; sortDir=(k==="leagueRank")?1:-1;}
  render();
});

function val(p,k){
  if(k==="rating") return p.rating==null?-Infinity:p.rating;
  if(k==="conf") return p.confidence;
  if(k==="soo") return p.strengthOfOpponents==null?-Infinity:p.strengthOfOpponents;
  if(k==="sop") return p.strengthOfPartners==null?-Infinity:p.strengthOfPartners;
  if(k==="wl") return p.wins*1000-p.losses;
  if(k==="mixed") return p.mixedWins;
  if(k==="gender") return p.genderWins;
  if(k==="clutch") return p.clutchWins;
  return p[k];
}
function cell(p,k){
  if(k==="name") return `<span class="pname" data-name="${p.name.replace(/"/g,'&quot;')}">${p.name}${p.name===ME?' ★':''}</span>`;
  if(k==="team") return `<span class="teamdot" style="background:${TCOLOR[p.team]}"></span>${p.team}`;
  if(k==="wl") return `<b>${p.wins}</b>–${p.losses}`;
  if(k==="diff") return p.diff>=0?`<span class="pos-diff">+${p.diff}</span>`:`<span class="neg-diff">${p.diff}</span>`;
  if(k==="pointsWon") return `<span class="pf">${p.pointsWon}</span>`;
  if(k==="mixed") return `${p.mixedWins}–${p.mixedLosses}`;
  if(k==="gender") return `${p.genderWins}–${p.genderLosses}`;
  if(k==="clutch") return `${p.clutchWins}–${p.clutchLosses}`;
  if(k==="rating"){
    if(p.rating==null) return '—';
    const s=(p.rating>=0?'+':'')+p.rating.toFixed(1);
    return `<span class="rating ${p.rating>=0?'pos-diff':'neg-diff'}" title="${p.ratingGames} games">${s}</span>`;
  }
  if(k==="conf"){
    if(p.rating==null) return '—';
    const title=`${p.confidence}% confidence — share of this rating driven by real game evidence (${p.matches} matchup${p.matches!==1?'s':''}, ${p.ratingGames} games) vs. the average-player prior`;
    return `<span class="confwrap" title="${title}"><span class="confbar"><i style="width:${p.confidence}%"></i></span><span class="confnum">${p.confidence}%</span></span>`;
  }
  if(k==="soo"||k==="sop"){
    const v=k==="soo"?p.strengthOfOpponents:p.strengthOfPartners;
    if(v==null) return '—';
    const who=k==="soo"?'opponents faced':'partners played with';
    const tip=`Average rating of ${who}, on the same points/game scale. Above 0 = stronger than league average.`;
    return `<span class="sos" title="${tip}">${v>=0?'+':''}${v.toFixed(1)}</span>`;
  }
  if(k==="leagueRank") return p.leagueRank!=null?`<span class="lgrank">#${p.leagueRank}</span>`:'—';
  if(k==="winPct"||k==="ppg") return p[k].toFixed(1);
  return p[k];
}

function render(){
  const q=document.getElementById('search').value.toLowerCase();
  const tf=teamSel.value, gf=document.getElementById('gender').value, mq=+document.getElementById('minq').value;
  let rows=DATA.players.filter(p=>
    (!q||p.name.toLowerCase().includes(q)) && (!tf||p.team===tf) && (!gf||p.gender===gf) && p.gamesPlayed>=mq);
  rows.sort((a,b)=>{
    let av=val(a,sortKey),bv=val(b,sortKey);
    if(typeof av==="string"){av=av.toLowerCase();bv=bv.toLowerCase();return av<bv?-sortDir:av>bv?sortDir:0;}
    return (av-bv)*sortDir || b.winPct-a.winPct;
  });
  head.querySelectorAll('th').forEach(th=>th.classList.toggle('sorted',th.dataset.k===sortKey));
  document.getElementById('body').innerHTML = rows.map((p,i)=>{
    const meCls=p.name===ME?' class="me"':'';
    const rk=`<span class="pos${sortKey==='winPct'&&sortDir===-1&&i<3?' g'+(i+1):''}">${i+1}</span>`;
    return `<tr${meCls}>`+COLS.map((c,ci)=>{
      const al=c[2]==="l"?' class="l"':'';
      return `<td${al}>${ci===0?rk:''}${cell(p,c[0])}</td>`;
    }).join('')+`</tr>`;
  }).join('');
  document.getElementById('plabel').textContent=`${rows.length} shown`;
}
['search','team','gender','minq'].forEach(id=>document.getElementById(id).addEventListener('input',render));
render();

function sosNarrative(p){
  if(p.rating==null) return '';
  const sgn=v=>(v>=0?'+':'')+v.toFixed(1);
  const oppWord=p.strengthOfOpponents>=1?'tough':p.strengthOfOpponents<=-1?'weak':'average';
  const ptrWord=p.strengthOfPartners>=1?'strong':p.strengthOfPartners<=-1?'weak':'average';
  let tail='';
  if(p.winPct>=80&&p.strengthOfOpponents<=-0.5&&p.strengthOfPartners>=0.5)
    tail=' Their record is helped by favorable conditions.';
  else if(p.winPct<50&&p.strengthOfOpponents>=0.5)
    tail=' Their record is dragged down by a hard schedule.';
  else if(p.strengthOfPartners<=-0.5&&p.rating>=0.5)
    tail=' Strong showing given below-average partners.';
  return `Rated <b>${sgn(p.rating)}</b> pts/game vs. an average player (${p.confidence}% confidence), `+
    `facing <b>${oppWord}</b> opponents (${sgn(p.strengthOfOpponents)}) alongside <b>${ptrWord}</b> partners (${sgn(p.strengthOfPartners)}).${tail}`;
}
function openPlayer(name){
  const p=DATA.players.find(x=>x.name===name); if(!p) return;
  const sign=v=>(v>=0?'+':'')+v;
  document.getElementById('mhead').innerHTML=`
    <div class="mh-name">${p.name}${p.name===ME?' ★':''}</div>
    <div class="mh-sub"><span class="teamdot" style="background:${TCOLOR[p.team]}"></span>${p.team} • ${p.gender==='Male'?'Men':'Women'} • season totals</div>
    <div class="mh-stats">
      <div class="mh-stat"><div class="n ${p.rating>=0?'pos-diff':'neg-diff'}">${p.rating==null?'—':sign(p.rating)}</div><div class="l">RATING</div></div>
      <div class="mh-stat"><div class="n">${p.rating==null?'—':p.confidence+'%'}</div><div class="l">CONFIDENCE</div></div>
      <div class="mh-stat"><div class="n">${p.strengthOfOpponents==null?'—':sign(p.strengthOfOpponents)}</div><div class="l">OPP STR</div></div>
      <div class="mh-stat"><div class="n">${p.strengthOfPartners==null?'—':sign(p.strengthOfPartners)}</div><div class="l">PARTNER STR</div></div>
      <div class="mh-stat"><div class="n">${p.wins}–${p.losses}</div><div class="l">RECORD</div></div>
      <div class="mh-stat"><div class="n">${p.winPct.toFixed(0)}%</div><div class="l">WIN RATE</div></div>
      <div class="mh-stat"><div class="n">${p.pointsWon}</div><div class="l">POINTS FOR</div></div>
      <div class="mh-stat"><div class="n ${p.diff>=0?'pos-diff':'neg-diff'}">${sign(p.diff)}</div><div class="l">DIFF</div></div>
      <div class="mh-stat"><div class="n">${p.matches}</div><div class="l">MATCH${p.matches!==1?'ES':''}</div></div>
    </div>
    ${p.rating!=null?`<p class="mh-narr">${sosNarrative(p)}</p>`:''}`;
  const rows=p.log.map(g=>`
    <tr>
      <td class="l">Wk ${g.week}</td>
      <td class="l"><span class="teamdot" style="background:${TCOLOR[g.opp]}"></span>${g.homeAway==='H'?'vs':'@'} ${g.opp}</td>
      <td><b>${g.w}</b>–${g.l}</td>
      <td>${g.pf}–${g.pa}</td>
      <td>${g.mx[0]}–${g.mx[1]}</td>
      <td>${g.gn[0]}–${g.gn[1]}</td>
      <td>${g.cl[0]}–${g.cl[1]}</td>
      <td class="res-${g.teamRes}">${g.teamRes} ${g.teamGW}–${g.teamGL}</td>
    </tr>`).join('');
  const TLAB={mixed:["MIX","t-mixed"],female:["W","t-female"],male:["M","t-male"]};
  let glog="", lastWk=null;
  (p.games||[]).forEach(g=>{
    if(g.wk!==lastWk){ lastWk=g.wk; glog+=`<tr class="wkrow"><td colspan="5" class="l">Week ${g.wk} • vs ${g.opp}</td></tr>`; }
    const [lab,cls]=TLAB[g.t]||["",""];
    glog+=`<tr>
      <td class="l"><span class="pill ${cls}">${lab}</span></td>
      <td class="l">${g.with}</td>
      <td class="l">${g.vs[0]} / ${g.vs[1]}</td>
      <td class="${g.w?'res-W':'res-L'}">${g.f}–${g.a}</td>
      <td class="${g.w?'res-W':'res-L'}">${g.w?'W':'L'}</td>
    </tr>`;
  });
  document.getElementById('mbody').innerHTML=`
    <table class="mlog"><thead><tr>
      <th class="l">Week</th><th class="l">Opponent</th><th>Ind. W–L</th><th>Pts F–A</th>
      <th>Mixed</th><th>Same-gen</th><th>Clutch</th><th>Team result</th>
    </tr></thead><tbody>${rows}</tbody></table>
    <div class="gtitle">Game-by-game log <span>${(p.games||[]).length} games • actual final scores</span></div>
    <table class="mlog glog"><thead><tr>
      <th class="l">Type</th><th class="l">Partner</th><th class="l">Opponents</th><th>Score</th><th>Result</th>
    </tr></thead><tbody>${glog}</tbody></table>
    <p class="mnote">Top table = per-week match summary (league-recorded splits). Bottom = every individual game with partner, opponents and the actual final score. Type: <b>MIX</b> mixed • <b>W</b> women's • <b>M</b> men's.</p>`;
  document.getElementById('overlay').hidden=false;
}
document.getElementById('body').addEventListener('click',e=>{
  const el=e.target.closest('.pname'); if(el) openPlayer(el.dataset.name);
});
const overlay=document.getElementById('overlay');
function closeM(){overlay.hidden=true;}
document.getElementById('mx').onclick=closeM;
overlay.addEventListener('click',e=>{if(e.target===overlay)closeM();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeM();});
