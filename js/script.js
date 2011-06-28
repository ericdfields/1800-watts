/* Author: Eric D. Fields

*/
         
var counter;          
var $main,$footer,$prevArticles,$currArticles,$nextArticles;  
counter = 5;
$main = $('#main');
$footer = $('#footer');
$footer.append('<button id="x_next">&rarr;</button>');

$main.prepend('<div id="previous-articles" /><div id="current-article" /><div id="next-articles" />');
$prevArticles = $('#previous-articles'); 
$currArticle = $('#current-article');
$nextArticles = $('#next-articles');

$main.find('article:not(:first-child)').appendTo($('#next-articles'));
$main.find('article:first-child').appendTo($('#current-article'));

$('#x_next').live('click',function(){                            
  counter++;
  $currArticle.find('article').appendTo($prevArticles);
  $currArticle.append($nextArticles.find('article:first-child'));
  $nextArticles.append('<article><header>' + counter + '</header></article>');
})