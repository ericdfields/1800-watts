/* Author: Eric D. Fields

*/
         
var counter;          
var $main,$footer;  
counter = 5;
$main = $('#main');
$footer = $('#footer');
$footer.append('<button id="x_next">&rarr;</button>');
$('#x_next').live('click',function(){                            
  counter++;
  $main.find('article:first-child').remove().end()
    .append('<article><header>' + counter + '</header></article>');
})