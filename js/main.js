let tap = new Audio();
tap.src = "sound/tap.mp3"

var gifAll = 19;
var photoAll1 = 79;
var photoAll2 = 124;
var replace = 'Просто смотрите фото ^_^';


var card = '';
var slider1 = $('#slider-1');
var slider2 = $('#slider-2');
var gifNum = 0; 
var photoNum = 0;

var idMusic = 5;
// let music1 = new Audio();
// music1.src = "../sound/music/1.mp3";
// music1.src = "../sound/start.mp3";
// music1.play();
// music1.addEventListener("ended", function() {
//   console.log(true)
// });
let idAudio = 0;
$(".music-btn").on("click", function(){
  console.log(this)
  let nowPlay = this.parentElement.firstElementChild;
  if($(this).hasClass("music-pause")){
    this.parentElement.firstElementChild.play();
    
  }else{
    this.parentElement.firstElementChild.pause();
  }
  let parent = this.parentElement;
  let nextAudio = nowPlay.nextElementSibling;
  nowPlay.addEventListener("ended", function(){
    nowPlay.pause();
    idAudio++;
    nowPlay.nextElementSibling.play();
//     if (idMusic > 6) idMusic = 1; 
  })
// function musicPlay(){
//   let ifEnd = false;
//   let music = new Audio();
//   music.src = `../sound/music/${idMusic}.mp3`;
//   music.play();
//   music.addEventListener("ended", function() {
//     ifEnd = true;
//     idMusic++;
//     if (idMusic > 6) idMusic = 1; 
//     return musicPlay();
//   })
// };
// musicPlay();
})
let id = 0
for (let i=1; i <= photoAll1; i++){
  id++;
  gifNum += 1;
  photoNum += 1;

  if (gifNum > gifAll){
    gifNum = 1;
  }
  if(text[i] == undefined){
    text[i] = replace;
  }

  card = `
            <div id="${id}" class="card flipper card-next">
              <div class="gif-card"><img src="img/gif/${gifNum}.gif" alt=""></div>
              <div class="lock lock-close front"><img src="img/lock/lock-close.svg" alt=""></div>
              <div class="card-img back"><img src="img/photo/${photoNum}.jpg" alt=""></div>
              <div class="card-transparent back back-1"></div>
              <div class="text front"><div class="text_inner"><p>${text[i]}</p></div></div>
            </div>
          `;
  
  slider1.append(card);
}

gifNum = 0; 
photoNum = 0;
card = '';

for (let i=1; i <= photoAll2; i++){
  gifNum += 1;
  photoNum += 1;
  id++;
  if (gifNum > gifAll){
    gifNum = 1;
  }
  if(text[i] == undefined){
    text[i] = replace;
  }

  card = `
            <div id="${id}" class="card flipper card-next">
              <div class="gif-card"><img src="img/gif/${gifNum}.gif" alt=""></div>
              <div class="lock lock-close front"><img src="img/lock/lock-close.svg" alt=""></div>
              <div class="card-img back"><img src="img/photo-2/${photoNum}.jpg" alt=""></div>
              <div class="card-transparent back back-2"></div>
              <div class="text front"><div class="text_inner"><p>${text[i]}</p></div></div>
            </div>
          `;
  
  slider2.append(card);
}



$(".slider .card:first-child").children(".lock").children("img").attr("src", "img/lock/lock-open.svg");
$(".slider .card:first-child").children(".lock").toggleClass('lock-close lock-open');

$(".slider .card").children(".text").hide();
$(".slider .card:first-child").children(".text").show();

$(`#${photoAll1+1}`).children(".lock").children("img").attr("src", "img/lock/lock-close.svg");
$(`#${photoAll1+1}`).children(".lock").toggleClass('lock-open lock-close');

$(".lock img").on("click", function(){
  if ($(`#${photoAll1}`).children(".lock").hasClass("lock-open")){
    $(`#${photoAll1+1}`).children(".lock").toggleClass('lock-close lock-open');
  }
  nextId = $(this).parent().parent().index(".card") + 2;
  if ($(this).parent().hasClass("lock-open")){
    tap.play();
    console.log(tap)
    $(this).parent().fadeOut(300);
    $(this).parent().parent().addClass('open');
    // $(this).parent().parent().addClass('card-next');
    $(this).parent().children(".text").addClass('text-none');
    $(`#${nextId}`).children(".lock").toggleClass('lock-close lock-open');
    $(`#${nextId}`).children(".lock").children("img").attr("src", "img/lock/lock-open.svg");
    $(`#${nextId}`).children(".text").show();
  };
 
});

$(".music-btn").click( function(){
  $(this).toggleClass("music-pause music-play")
})