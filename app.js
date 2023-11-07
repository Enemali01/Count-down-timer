const endDate = "31 October 2023 5:56 PM";
document.getElementById('end-date').innerText = endDate;
const inputs = document.querySelectorAll('input');

const newEl = document.createElement('text');
newEl.textContent = "Thank You For The Wait....."
const wait = document.getElementById('msg');

function clock(){
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now)/1000;
   //convert to millisecond 
  if(diff < 0){
    wait.appendChild(newEl);
    return;
  }
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600 ) % 24 ;
  inputs[2].value = Math.floor(diff / 60 ) % 60 ;
  inputs[3].value = Math.floor(diff ) % 60 ;
  // console.log(end, now);
}

clock();

/**
 * 1 day  = 24hrs
 * 1hr = 60mins
 * 60mins = 3600sec
 * 
 */

setInterval (
  () => {
    clock()
  }, 
  1000 
)
  


