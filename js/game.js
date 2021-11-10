let timer = null;
const Max = 3;
let clear = 0;
function init() {
  if (timer == null) {
    start = new Date();
    time();
    gameStart();
  }
}

function gameStart() {
  let size = 5;
  let qNum = Math.floor(Math.random()*q.length);
  for(let i=0; i<size*size; i++){
    let s = document.createElement("span");
    s.textContent = q[qNum][0];
    s.setAttribute("id", "num"+i);
    s.addEventListener("click", function(){
      if (this.textContent == q[qNum][1]){
         // alert("正解");
        clear++;
        correct.play();
        while (cells.firstChild) {
          cells.removeChild(cells.firstChild);
        }
        if(clear == Max){
          clearTimeout(timer);
          alert("クリア!  " + (timer - 1)+"秒");
        }else{
          gameStart();
        }
      } else {
        wrong.play();
      }
    });
    cells.appendChild(s);
    if(i % size == size-1){
      const br = document.createElement("br");
      cells.appendChild(br);
    }
  }
  let p = Math.floor(Math.random()*size*size);
  let ans = document.getElementById("num" + p);
  ans.textContent = q[qNum][1];
}

function time() {
  let now = new Date();
  let eTime = parseInt((now.getTime() - start.getTime())/1000);
  score.textContent = eTime;
  timer = setTimeout("time()", 1000);
}
