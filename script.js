const questions = [
  { q: "What is the output of `1 + 1` in JS?", choices:["1","2","'11'","undefined"], a:1 },
  { q: "Which language is primarily used for web styling?", choices:["JavaScript","Python","CSS","C++"], a:2 },
  { q: "HTML stands for?", choices:["HyperText Markup Language","HighText Machine Language","Hyperlink Text Mark Language","None"], a:0 }
];

let idx = 0, score = 0;
const qEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const nextBtn = document.getElementById('nextBtn');
const resultEl = document.getElementById('result');

function render() {
  const item = questions[idx];
  qEl.textContent = `Q${idx+1}. ${item.q}`;
  choicesEl.innerHTML = '';
  item.choices.forEach((c,i)=>{
    const btn = document.createElement('button');
    btn.className = 'choice';
    btn.textContent = c;
    btn.onclick = ()=>{
      if(i === item.a) { score++; resultEl.textContent = "Correct!"; }
      else resultEl.textContent = `Wrong — answer: ${item.choices[item.a]}`;
      // disable choices
      Array.from(choicesEl.children).forEach(b=>b.disabled=true);
    };
    choicesEl.appendChild(btn);
  });
}

nextBtn.onclick = ()=>{
  if(idx < questions.length - 1) {
    idx++; resultEl.textContent=''; render();
  } else {
    qEl.textContent = `Completed! Score: ${score}/${questions.length}`;
    choicesEl.innerHTML = ''; nextBtn.disabled=true;
  }
};

render();