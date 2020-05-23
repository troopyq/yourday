let tap = new Audio();
tap.src = "sound/tap.mp3";
tap.volume = 0.04;

var gifAll = 19;
var photoAll1 = 81;
var photoAll2 = 124;
var replace = 'Просто смотрите фото ^_^';


var card1 = '';
var slider1 = $('#slider-1');
var slider2 = $('#slider-2');
var gifNum1 = 0; 
var photoNum1 = 0;

let idAudio = 0;
let musics = $(".div-audio").children("audio");

function playMusic(){  
  console.log(musics[idAudio]);
  musics[idAudio].volume = 0.9;

  if ( musics[idAudio].paused && $(".music-btn").hasClass("music-play")){  
    var music = musics[idAudio].play();
    console.log('play____');

   
  }

  if (music !== undefined) {
     music.then(_ => {
       // Automatic playback started!
       // Show playing UI.
     })
     music.catch(error => {
       // Auto-play was prevented
       // Show paused UI.
     });
   }

 
  musics[idAudio].addEventListener("ended", function(){
    musics[idAudio].pause();
    console.log('next');
    if (idAudio < musics.length - 1  ){
      
      idAudio++;
      console.log(idAudio);
      console.log('________');
      playMusic();
      
    }else { 
      idAudio = 2
      musics[idAudio].setAttribute('loop', 'loop');
      playMusic();

    }
    
  })
}

$(".music-btn").on("click", playMusic);
$(".music-btn").click( function(){
  

  if ($(".music-btn").hasClass("music-pause")){
    $(".music-btn").toggleClass("music-pause music-play");
    musics[idAudio].play();
    console.log('play');
  }else if($(".music-btn").hasClass("music-play")){
    $(".music-btn").toggleClass("music-play music-pause");
    musics[idAudio].pause();
    console.log('pause');
  }
})


var id1 = 0, id2 = 81;


// первый счетчик для первого слайдера
for (let i=1; i <= 2; i++){
  id1++;
  
  photoNum1 += 1;
  // оптимизация - выводим гифки на нечетных карточках
  if (i % 2 != 0){
    gifNum1 += 1;
  }
  // повторяем гифки с начала если закончились
  if (gifNum1 > gifAll){
    gifNum1 = 1;
  }
  // заменяем пропущенный текст
  if(text[id1] == undefined){
    text[id1] = replace;
  }
  card1 = `
             <div id="${id1}" class="card flipper card-next">
               <div class="gif-card"><img src="img/gif/${gifNum1}.gif" alt=""></div>
               <div class="lock lock-close front"><img src="img/lock/lock-close.svg" alt=""></div>
               <div class="card-img back"><img src="img/photo/${photoNum1}.jpg" alt=""></div>
               <div class="card-transparent back back-1"></div>
               <div class="text front"><div class="text_inner"><p>${text[id1]}</p></div></div>
             </div>
           `;
  
   slider1.append(card1);   //добавляем карточку в слайдер 1

  // оптимизация - удаляем гифки на четных слайдах
  if (id1 % 2 == 0){
    $(`#${id1} .gif-card img`).remove();
  }
}

// // первый счетчик для первого слайдера
// for (let i=1; i <= photoAll1; i++){
//   id++;
  
//   photoNum += 1;
//   // оптимизация - выводим гифки на нечетных карточках
//   if (id % 2 != 0){
//     gifNum += 1;
//   }
//   // повторяем гифки с начала если закончились
//   if (gifNum > gifAll){
//     gifNum = 1;
//   }
//   // заменяем пропущенный текст
//   if(text[id] == undefined){
//     text[id] = replace;
//   }

//   card = `
//             <div id="${id}" class="card flipper card-next">
//               <div class="gif-card"><img src="img/gif/${gifNum}.gif" alt=""></div>
//               <div class="lock lock-close front"><img src="img/lock/lock-close.svg" alt=""></div>
//               <div class="card-img back"><img src="img/photo/${photoNum}.jpg" alt=""></div>
//               <div class="card-transparent back back-1"></div>
//               <div class="text front"><div class="text_inner"><p>${text[id]}</p></div></div>
//             </div>
//           `;
  
//   slider1.append(card);   //добавляем карточку в слайдер 1
//   // оптимизация - удаляем гифки на четных слайдах
//   if (id % 2 == 0){
//     $(`#${id} .gif-card img`).remove();
//   }
// }


var gifNum2 = 0; 
var photoNum2 = 0;
var card2 = '';
// второй счетчик для второго слайдера
for (let i=1; i <= 2; i++){
  photoNum2 += 1;
  id2++;
  // оптимизация - выводим гифки на нечетных карточках
  if (id2 % 2 != 0){
    gifNum2 += 1;
  }
  // повторяем гифки с начала если закончились
  if (gifNum2 > gifAll){
    gifNum2 = 1;
  }
  // заменяем пропущенный текст
  if(text2[i] == undefined){
    text2[i] = replace;
  }

  card2 = `
            <div id="${id2}" class="card flipper card-next">
              <div class="gif-card"><img src="img/gif/${gifNum2}.gif" alt=""></div>
              <div class="lock lock-close front"><img src="img/lock/lock-close.svg" alt=""></div>
              <div class="card-img back"><img src="img/photo-2/${photoNum2}.jpg" alt=""></div>
              <div class="card-transparent back back-2"></div>
              <div class="text front"><div class="text_inner"><p>${text2[i]}</p></div></div>
            </div>
          `;
  
  slider2.append(card2);  //добавляем карточку в слайдер 2
   // оптимизация - удаляем гифки на четных слайдах
  if (id2 % 2 == 0){
    $(`#${id2} .gif-card img`).remove();
  }
}

//------------------------------------------------------------------------

function renderNextCard1(){
  photoNum1 += 1;
  id1++;
  // оптимизация - выводим гифки на нечетных карточках
  if (id1 % 2 != 0){
    gifNum1 += 1;
  }
  // повторяем гифки с начала если закончились
  if (gifNum1 > gifAll){
    gifNum1 = 1;
  }
  // заменяем пропущенный текст
  if(text[id1] == undefined){
    text[id1] = replace;
  }

  card1 = `<div class="slick-slide" data-slick-index="${id1-1}" aria-hidden="true" style="width: 100vw;" tabindex="-1">
        <div>
          <div id="${id1}" class="card flipper card-next">
           <div class="gif-card"><img src="img/gif/${gifNum1}.gif" alt=""></div>
           <div class="lock lock-close front"><img src="img/lock/lock-close.svg" alt=""></div>
           <div class="card-img back"><img src="img/photo/${id1}.jpg" alt=""></div>
           <div class="card-transparent back back-1 slick-arrow" aria-disabled="false"></div>
           <div class="text front"><div class="text_inner"><p>${text[id1]}</p></div></div>
         </div>
       </div>
     </div> `;

  return card1;
}

function renderNextCard2(){
  photoNum2 += 1;
  id2++;
  // оптимизация - выводим гифки на нечетных карточках
  if (id2 % 2 != 0){
    gifNum2 += 1;
  }
  // повторяем гифки с начала если закончились
  if (gifNum2 > gifAll){
    gifNum2 = 1;
  }
  // заменяем пропущенный текст
  if(text2[id2] == undefined){
    text2[id2] = replace;
  }

  card2 = `<div class="slick-slide" data-slick-index="${id2-1}" aria-hidden="true" style="width: 100vw;" tabindex="-1">
        <div>
          <div id="${id2}" class="card flipper card-next">
           <div class="gif-card"><img src="img/gif/${gifNum2}.gif" alt=""></div>
           <div class="lock lock-close front"><img src="img/lock/lock-close.svg" alt=""></div>
           <div class="card-img back"><img src="img/photo-2/${id2-id1}.jpg" alt=""></div>
           <div class="card-transparent back back-1 slick-arrow" aria-disabled="false"></div>
           <div class="text front"><div class="text_inner"><p>${text2[id2-id1]}</p></div></div>
         </div>
       </div>
     </div> `;

  return card2;
}

function lockClick(){

  if ($(`#${photoAll1}`).children(".lock").hasClass("lock-open")){
    $(`#${photoAll1+1}`).children(".lock").toggleClass('lock-close lock-open');
  }
  nextId = $(this).parent().parent().index(".card") + 2;
  console.log(nextId)
  

  if ($(this).parent().hasClass("lock-open")){
    $(this).parent().parent().addClass('open');
    $(this).parent().fadeOut(300);
    setTimeout(() => tap.play(), 260)
    console.log("open")
    $(this).parent().children(".text").addClass('text-none');
    $(`#${nextId}`).children(".lock").toggleClass('lock-close lock-open');
    $(`#${nextId}`).children(".lock").children("img").attr("src", "img/lock/lock-open.svg");
    $(`#${nextId}`).children(".text").show();
  };
  
  setTimeout(() => {
    if($(`#${nextId}`).children(".lock").hasClass("lock-open") && nextId + 3 <= id2){
      $('#slider-1').slick('setPosition');
      console.log("render 1 - " + (id1+1))
      setTimeout(()=> {$('#slider-1').slick('slickAdd', renderNextCard1());} ,1200)
      if (id1 % 2 == 0){
        $(`#${id1} .gif-card img`).remove();
      }
    }
  }, 500)

  setTimeout(() => {
    if ($(`#${id2 - 1}`).children(".lock").hasClass("lock-open") && (id2 - 1 + 3) <= photoAll2){
      $('#slider-2').slick('setPosition');
      console.log("render 2 - " + (id2+1))
      console.log((id2 - 1 + 3) + ' <= ' + photoAll2 + ' -  ' + ((id2 - 1 + 3) <= photoAll2));
      setTimeout(() => {$('#slider-2').slick('slickAdd', renderNextCard2());}, 1200)
      if (id2 % 2 == 0){
        $(`#${id2} .gif-card img`).remove();
      }
    }
  },500)


}





$(".slider .card:first-child").children(".lock").children("img").attr("src", "img/lock/lock-open.svg");
$(".slider .card:first-child").children(".lock").toggleClass('lock-close lock-open');

$(".slider .card").children(".text").hide();
$(".slider .card:first-child").children(".text").show();

$(`#${photoAll1+1}`).children(".lock").children("img").attr("src", "img/lock/lock-close.svg");
$(`#${photoAll1+1}`).children(".lock").toggleClass('lock-open lock-close');


$('body').on("click", ".lock img", lockClick);

$("#slider-1").on("click", ".slick-arrow", ()=>{
  $("#slider-1").slick("slickNext")
})
$("#slider-2").on("click", ".slick-arrow", ()=>{
  $("#slider-2").slick("slickNext")
})
