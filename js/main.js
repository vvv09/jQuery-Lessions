$(document).ready(function() { // best-practice скрипт будет работать только когда страница полностью загрузится

	//03_ СЕЛЕКТОРЫ


	$('h1').addClass('center'); //по тэгу

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


	//07_ АНИМАЦИЯ
	$('#customWidth').on('click', function(){
		$('#textBox').animate({'width':'200px'}, 2000);
		$('#textBox').animate({'height':'400px'}, 1000);
	});

	$('#customOpacity').on('click', function(){
		$('#textBox').animate({'opacity':'0'}, 2000);
	});

	
	$('#hide').on('click', function(){
		$('#textBox').hide('slow'); //или значение в миллисекундах без кавычек
	});

	$('#show').on('click', function(){
		$('#textBox').show('fast'); //или значение в миллисекундах без кавычек
	});

	$('#hideAndShow').on('click', function(){
		$('#textBox').hide(3000).delay(1000).show(2000);
	});


	$('#fadeOut').on('click', function(){
		$('#textBox').fadeOut(2000);
	});

	$('#fadeIn').on('click', function(){
		$('#textBox').fadeIn();
	});

	$('#fadeToggle').on('click', function(){
		$('#textBox').fadeToggle(2000);
	});


	$('#slideUp').on('click', function(){
		$('#textBox').slideUp(2000);
	});

	$('#slideDown').on('click', function(){
		$('#textBox').slideDown(2000);
	});

	$('#slideToggle').on('click', function(){
		$('#textBox').slideToggle();
	});

	//08_Работа с формой val

 	$('#formSum').on('submit', function(event){ // При нажатии на кнопку submit
  		event.preventDefault(); // Чтобы страница не обновлялась
  
  		var numberOne, numberTwo, result;

  		// Берем значения из input
		numberOne = $('#numberOne').val(); 
		numberTwo = $('#numberTwo').val();

		if(isNaN(numberOne)){
			numberOne = 0;
		}
  
		if(isNaN(numberTwo)){
			numberTwo = 0;
		}

  		result = +numberOne + +numberTwo; // Сложение двух чисел 

  		$('#sumResult').text(result); // Вывод суммы
 	});

 	//9 Ибображеине и атрибуты

 	var $carImg = $('#imageHolder img'); // $ просто для указания на то, что  в переменной - jQuery

	$('#colorsSelector .colorItem').on('click', function(){
		var imgPath = $(this).attr('data-img-path');
		$carImg.fadeOut(50, function(){
			$carImg.attr('src', imgPath).fadeIn(50);
		});	
	});
});