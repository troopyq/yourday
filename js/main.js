$(document).ready(function(){
       $(document).scroll(function(){
           // проверяем
           checkPosition();
       });

       // после загрузки страницы сразу проверяем
       checkPosition();

       // проверка при ресайзе страницы
       $(window).resize(function(){
           checkPosition();
       });

   });
   // функция проверки полной видимости элемента
   function checkPosition(){
       // координаты дива
       var div_position = $('.gif-card').offset();
       // отступ сверху
       var div_top = div_position.top;
       // отступ слева
       var div_left = div_position.left;
       // ширина
       var div_width = $('.gif-card').width();
       // высота
       var div_height = $('.gif-card').height();

       // проскроллено сверху 
       var top_scroll = $(document).scrollTop();
       // проскроллено слева
       var left_scroll = $(document).scrollLeft();
       // ширина видимой страницы
       var screen_width = $(window).width();
       // высота видимой страницы
       var screen_height = $(window).height();

       // координаты углов видимой области
       var see_x1 = left_scroll;
       var see_x2 = screen_width + left_scroll;
       var see_y1 = top_scroll;
       var see_y2 = screen_height + top_scroll;

       // координаты углов искомого элемента
       var div_x1 = div_left;
       var div_x2 = div_left + div_height;
       var div_y1 = div_top;
       var div_y2 = div_top + div_width;

       // проверка - виден див полностью или нет
       if( div_x1 >= see_x1 && div_x2 <= see_x2 && div_y1 >= see_y1 && div_y2 <= see_y2 ){
           // $.ajax({
           //     type: "POST",
           //     url: "functions/view_response.php",
           //     dataType: "html",
           //     cache: false,
           // });

           console.clear();
           console.log('ВИДЕН ЭЛЕМЕНТ');
       }else console.clear();
   }