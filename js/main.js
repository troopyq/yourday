var gifAll = 19;
var photoAll = 79;
var replace = 'Просто смотрите фото ^_^';


var card = '';
var elem = $('.slider');
var gifNum = 0; 
var photoNum = 0;

for (let i=1; i <= photoAll; i++){
  gifNum += 1;
  photoNum += 1;

  if (gifNum > gifAll){
    gifNum = 1;
  }
  if(text[i] == undefined){
    text[i] = replace;
  }

  card = `
            <div id="${i}" class="card flipper card-next">
              <div class="gif-card"><img src="img/gif/${gifNum}.gif" alt=""></div>
              <div class="lock lock-close front"><img src="img/lock/lock-close.svg" alt=""></div>
              <div class="card-img back"><img src="img/photo/${photoNum}.jpg" alt=""></div>
              <div class="card-transparent back"></div>
              <div class="text front"><div class="text_inner"><p>${text[i]}</p></div></div>
            </div>
          `;
  
  elem.append(card);
}
$(".slider .card:first-child").children(".lock").children("img").attr("src", "img/lock/lock-open.svg");
$(".slider .card:first-child").children(".lock").toggleClass('lock-close lock-open');
$(".slider .card").children(".text").hide();
$(".slider .card:first-child").children(".text").show();

$(".lock img").click( function(){
  nextId = $(this).parent().parent().index(".card") + 2;
  if ($(this).parent().hasClass("lock-open")){
    
    $(this).parent().parent().addClass('open');
    // $(this).parent().parent().addClass('card-next');
    $(this).parent().children(".text").addClass('text-none');
    $(`#${nextId}`).children(".lock").toggleClass('lock-close lock-open');
    $(`#${nextId}`).children(".lock").children("img").attr("src", "img/lock/lock-open.svg");
    $(`#${nextId}`).children(".text").show();
  };
});