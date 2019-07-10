$(document).ready(function(){ // best-practice скрипт будет работать только когда страница полностью загрузится

	//СЕЛЕКТОРЫ


	$('h1').addClass('selected'); //по тэгу

	$('#second-list-item').addClass('selected'); //по id (!селекторы по id считаются самыми быстрыми)

	$('.header-2').addClass('selected'); 	//по классу

	$('ul .green').addClass('selected'); 	//комбинированные (внутри тега <ul> и с классом "green")
	$('h3.green').addClass('selected'); 	//комбинированные (тег <ul>, класс "green")
	$('h2 ~ p').addClass('selected'); 		//комбинированные (все теги <p>, идущие после <h2>)
	$('#second-list-item ~ li').addClass('selected'); //комбинированные (все теги <li>, идущие после id="second-list-item", находящиеся с ним на одном уровне)
	$('h2 + p').addClass('selected'); //комбинированные (тег <p>, который находится справа от <h2>)


	//фильтры
	$('p:first').addClass('blueback'); //фильтры (первый тег <p>)
	$('p:last').addClass('blueback'); //фильтры (последний тег <p>)
	$('p:odd').addClass('blueback'); //фильтры (все четные теги <p>)
	$('p:even').addClass('blueback'); //фильтры (все нечетные теги <p>)
	$('p:eq(3)').addClass('blueback'); //фильтры (конкретно по номеру: четвертый <p> - начинается с ноля)

	//фильтры по содержимому
	$('h3:has(span)').addClass('blueback'); // тег <h3>, который содержит внутри себя тег <span>
	$('.blok:parent').addClass('blueback'); // все теги с классом "block", которые являются родителями (!если внутри него есть хотябы пробел, то тег считается родителем)
	$('.blok:empty').addClass('blueback'); // все теги с классом "block", которые являются пустыми


	//фильтры по аттрибутам
	$('a').addClass('blueback'); //все ссылки
	$('a[href="http://google.ru"]').addClass('yellowback'); //все ссылки c аттр href равному "http://google.ru"
	$('a[href!="http://google.ru"]').addClass('yellowback'); //все ссылки c аттр href НЕ равному "http://google.ru"
	$('a[href^="http"]').addClass('blue'); //все ссылки c аттр href значение которого начинается на "http"
	$('a[href$=".ru"]').addClass('blue'); //все ссылки c аттр href значение которого заканчивается на ".ru"

});