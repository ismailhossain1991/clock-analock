//get Elements

const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');




setInterval(() =>{
let time = new Date();
let courrent_sec = time.getSeconds();
let current_min = time.getMinutes();
let current_hour = time.getHours();

sec.style.transform = `rotate(${alltimes(60, courrent_sec)}deg)`;
min.style.transform = `rotate(${alltimes(60, current_min)}deg)`;
hour.style.transform = `rotate(${alltimes(12, current_hour)}deg)`;

},1000);




function alltimes(time, current){
 return(360* current) / time;
}