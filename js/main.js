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


let idAudio = 4;


$(".music-btn").on("click", function playMusic(){
  
  let musics = $(".div-audio").children("audio");
  console.log(musics[idAudio])
  console.log(idAudio < musics.length)
  if($(this).hasClass("music-pause")){
    musics[idAudio].play();
    console.log('play')
  }
  else musics[idAudio].pause(); 

  musics[idAudio].addEventListener("ended", function(){
    musics[idAudio].pause();
    console.log('next')
    if (idAudio < musics.length){
      idAudio++;
    }
    playMusic(idAudio);
  })

})

let id = 0



// первый счетчик для первого слайдера
for (let i=1; i <= photoAll1; i++){
  id++;
  
  photoNum += 1;
// оптимизация - выводим гифки на нечетных карточках
  if (i % 2 != 0){
    gifNum += 1;
  }
  // повторяем гифки с начала если закончились
  if (gifNum > gifAll){
    gifNum = 1;
  }
  // заменяем пропущенный текст
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
  
  slider1.append(card);   //добавляем карточку в слайдер 1
  // оптимизация - удаляем гифки на четных слайдах
  if (i % 2 == 0){
    $(`#${id} .gif-card img`).remove();
  }
}

gifNum = 0; 
photoNum = 0;
card = '';
// второй счетчик для второго слайдера
for (let i=1; i <= photoAll2; i++){
  photoNum += 1;
  id++;
  // оптимизация - выводим гифки на нечетных карточках
  if (i % 2 != 0){
    gifNum += 1;
  }
  // повторяем гифки с начала если закончились
  if (gifNum > gifAll){
    gifNum = 1;
  }
  // заменяем пропущенный текст
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
  
  slider2.append(card);  //добавляем карточку в слайдер 2
   // оптимизация - удаляем гифки на четных слайдах
  if (i % 2 == 0){
    $(`#${id} .gif-card img`).remove();
  }
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