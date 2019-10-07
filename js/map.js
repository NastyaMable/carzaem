//разбивка регионов по столбцам
var setColumn = function() {
	  var num = 10, //число строк в столбце
	  kk = 1,
	  ii = 1;
	var ul = '<ul class="col-md-6 col-xs-12 l'+kk+'"></ul>';
	
	$('#regions').append(ul);
	$( "#regions ul li" ).each( function() {
	$('#regions ul.l'+kk).append($(this));
	if (ii==num)
	 {
		 kk++;
		 var ul = '<ul class="col-md-6 col-xs-12 l'+kk+'"></ul>';
		 $('#regions').append(ul); 
		 ii = 0;
	 };
	 ii++; 
  }); 
}
ymaps.ready(initMap);  
	var Map, 
		Collection;
		
	function initMap(){ 
			
		Collection = new ymaps.GeoObjectCollection({}, {
			// Опции. Наследуются всеми объектами геоколлекции.
			preset                : 'twirl#redDotIcon',
			draggable             : false,
			iconShadow            : true,
			hideIconOnBalloonOpen : true,
			balloonCloseButton    : true,
			hintHideTimeout       : 0,
			zIndexActive          : 0
		}),
			
		Map = new ymaps.Map(
			'map', 
			{
				center    : [ymaps.geolocation.latitude, ymaps.geolocation.longitude],
				zoom      :12,
				behaviors : [/*'scrollZoom'*/, 'drag', 'dblClickZoom', 'multiTouch']
			},
			{
				maxAnimationZoomDifference : 15,
				minZoom: 7
			}
		);
		
		Map.controls.add('zoomControl', {left: '5px', top: '5px'});
	   
		Map.geoObjects.add(
			new ymaps.Placemark(
				[ymaps.geolocation.latitude, ymaps.geolocation.longitude],
				{
					balloonContentHeader : 'Ваше местоположение:',
					balloonContentFooter : ymaps.geolocation.country+', '+ymaps.geolocation.city
				}
			)
		);
		setColumn();
	}

$(function(){ 										 
	$( ".draggable" ).draggable();
	
	//печать маршрута. при необходимости включить
	$( "button.print_map" ).click( function() {
		var fromAddr = $('#from_addr').val(),
        toAddr = $('#addresses').find('a.m-active').data('coordinate');
        toAddr = toAddr.toString().split(',');
        var tolatitude  = parseFloat(toAddr[1]), 
            tolongitude = parseFloat(toAddr[0]);
		window.open('print-map.html?fromaddr='+fromAddr+'&tolatitude='+tolatitude+'&tolongitude='+tolongitude, '', 'left=50,top=50,width=1000,height=800,toolbar=0,scrollbars=1,status=0')
	});
	  
		
    /*$( ".mapOptions__userAddress__close" ).click( function() {
          $(this).parent('.mapOptions__userAddress').hide(250);
		  $(this).parent('.modal-regions').hide(250);
      });*/

    $( "#mapOptions__region" ).click( function() {  
			$( "#regions" ).show(250); 
			//$("#mapAddress").addClass("123");
      });
	
	//выбор региона с подгузкой его адресов
	$( "#regions > ul > li" ).click( function() {
		
        $( "#regions > ul > li" ).removeClass("m-active-region");
        $(this).addClass("m-active-region"); 

		var clickid = this.id;
		//тестовый вариант
		var region;
		region = [
			"<a href='#' data-coordinate='39.42852448,47.10609377' data-address='344000, г. Ростов-на - Дону, Добровольского 15 о. 6' data-name='Добровольского 15 о. 6' data-content='Пн-пт.: 8:00-22:00</br>Сб-вс.: 10:00-20:00' title='' class='mapOptions__addresses_a'>344000, г. Ростов-на - Дону<br><span class='addresses-text-bold'>Добровольского 15 о. 6</span><br><span class='addresses-text-phone'>8 800 710 67 56</span><br>Пн-пт.: <span class='addresses-text-bold'>8:00-22:00</span><br>Сб-вс.: <span class='addresses-text-bold'>10:00-20:00</span></a><a href='#' data-coordinate='39.413158057,47.10133380' data-address='344000, г. Ростов-на - Дону, Добровольского 15 о. 6' data-name='Добровольского 15 о. 6' data-content='Пн-пт.: 8:00-22:00</br>Сб-вс.: 10:00-20:00' title='' class='mapOptions__addresses_a'>344000, г. Ростов-на - Дону<br><span class='addresses-text-bold'>Добровольского 15 о. 6</span><br><span class='addresses-text-phone'>8 800 710 67 56</span><br>Пн-пт.: <span class='addresses-text-bold'>8:00-22:00</span><br>Сб-вс.: <span class='addresses-text-bold'>10:00-20:00</span></a>", 
			"<p>Будет вывод по региону Астраханская область</p>", 
			"<p>Будет вывод по региону Белгородская область</p>", 
			"<p>Будет вывод по региону Брянская область</p>", 
			"<p>Будет вывод по региону Волгоградская область</p>", 
			"<p>Будет вывод по региону Вологодская область</p>", 
			"<p>Будет вывод по региону Воронежская область</p>", 
			"<p>Будет вывод по региону Кемеровская область</p>", 
			"<p>Будет вывод по региону Краснодарский край</p>", 
			"<p>Будет вывод по региону Курская область</p>", 
			"<p>Будет вывод по региону Ленинградская область</p>", 
			"<p>Будет вывод по региону Липецкая область</p>", 
			"<p>Будет вывод по региону Мурманская область</p>", 
			"<p>Будет вывод по региону Новосибирская область</p>", 
			"<p>Будет вывод по региону Омская область</p>", 
			"<p>Будет вывод по региону Орловская область</p>", 
			"<p>Будет вывод по региону Пермский край</p>", 
			"<p>Будет вывод по региону Республика Крым</p>", 
			"<p>Будет вывод по региону Республика Татарстан</p>", 
			"<a href='#' data-coordinate='39.42852448,47.10609377' data-address='344000, г. Ростов-на - Дону, Добровольского 15 о. 6' data-name='Добровольского 15 о. 6' data-content='Пн-пт.: 8:00-22:00</br>Сб-вс.: 10:00-20:00' title='' class='mapOptions__addresses_a'>344000, г. Ростов-на - Дону<br><span class='addresses-text-bold'>Добровольского 15 о. 6</span><br><span class='addresses-text-phone'>8 800 710 67 56</span><br>Пн-пт.: <span class='addresses-text-bold'>8:00-22:00</span><br>Сб-вс.: <span class='addresses-text-bold'>10:00-20:00</span></a><a href='#' data-coordinate='39.413158057,47.10133380' data-address='344000, г. Ростов-на - Дону, Добровольского 15 о. 6' data-name='Добровольского 15 о. 6' data-content='Пн-пт.: 8:00-22:00</br>Сб-вс.: 10:00-20:00' title='' class='mapOptions__addresses_a'>344000, г. Ростов-на - Дону<br><span class='addresses-text-bold'>Добровольского 15 о. 6</span><br><span class='addresses-text-phone'>8 800 710 67 56</span><br>Пн-пт.: <span class='addresses-text-bold'>8:00-22:00</span><br>Сб-вс.: <span class='addresses-text-bold'>10:00-20:00</span></a><a href='#' data-coordinate='39.42852448,47.10609377' data-address='344000, г. Ростов-на - Дону, Добровольского 15 о. 6' data-name='Добровольского 15 о. 6' data-content='Пн-пт.: 8:00-22:00</br>Сб-вс.: 10:00-20:00' title='' class='mapOptions__addresses_a'>344000, г. Ростов-на - Дону<br><span class='addresses-text-bold'>Добровольского 15 о. 6</span><br><span class='addresses-text-phone'>8 800 710 67 56</span><br>Пн-пт.: <span class='addresses-text-bold'>8:00-22:00</span><br>Сб-вс.: <span class='addresses-text-bold'>10:00-20:00</span></a><a href='#' data-coordinate='39.413158057,47.10133380' data-address='344000, г. Ростов-на - Дону, Добровольского 15 о. 6' data-name='Добровольского 15 о. 6' data-content='Пн-пт.: 8:00-22:00</br>Сб-вс.: 10:00-20:00' title='' class='mapOptions__addresses_a'>344000, г. Ростов-на - Дону<br><span class='addresses-text-bold'>Добровольского 15 о. 6</span><br><span class='addresses-text-phone'>8 800 710 67 56</span><br>Пн-пт.: <span class='addresses-text-bold'>8:00-22:00</span><br>Сб-вс.: <span class='addresses-text-bold'>10:00-20:00</span></a><a href='#' data-coordinate='39.42852448,47.10609377' data-address='344000, г. Ростов-на - Дону, Добровольского 15 о. 6' data-name='Добровольского 15 о. 6' data-content='Пн-пт.: 8:00-22:00</br>Сб-вс.: 10:00-20:00' title='' class='mapOptions__addresses_a'>344000, г. Ростов-на - Дону<br><span class='addresses-text-bold'>Добровольского 15 о. 6</span><br><span class='addresses-text-phone'>8 800 710 67 56</span><br>Пн-пт.: <span class='addresses-text-bold'>8:00-22:00</span><br>Сб-вс.: <span class='addresses-text-bold'>10:00-20:00</span></a><a href='#' data-coordinate='39.413158057,47.10133380' data-address='344000, г. Ростов-на - Дону, Добровольского 15 о. 6' data-name='Добровольского 15 о. 6' data-content='Пн-пт.: 8:00-22:00</br>Сб-вс.: 10:00-20:00' title='' class='mapOptions__addresses_a'>344000, г. Ростов-на - Дону<br><span class='addresses-text-bold'>Добровольского 15 о. 6</span><br><span class='addresses-text-phone'>8 800 710 67 56</span><br>Пн-пт.: <span class='addresses-text-bold'>8:00-22:00</span><br>Сб-вс.: <span class='addresses-text-bold'>10:00-20:00</span></a>"
		];

		$('#addresses').html(region[clickid-1]);
	    $("#mapOptions__region").html($(this).text());
	    $("input#from_addr").attr('value', 'например: '+$(this).text()+', Ленина, 3' );
        $('#regions').hide(250);
		$('body').removeClass('modal-open');
		$('.modal').removeClass('modal fade show').addClass('modal fade');
	$('.modal').css({"display": "none"});
		$('.modal-backdrop').removeClass('modal-backdrop fade show').addClass('modal-backdrop fade');

	
	});
		//правильный вариант
	/*$( "#regions > ul > li" ).click( function() {
        $( "#regions > ul > li" ).removeClass("m-active-region");
        $(this).addClass("m-active-region"); 
        var clickid = this.id;
	    $.get( 'map.php',  {clickid: clickid},  function (data) { $('#addresses').html(data);});
		//страница map.php не существует на данном этапе
	    $("#mapOptions__region").html($(this).text());
	    $("input#from_addr").attr('value', 'например: '+$(this).text()+', Ленина, 3' );
        $('#regions').hide(250);
    });*/ 
	
	$(document).on('click', 'a.mapOptions__addresses_a', function(){
		$(".mapOptions__userAddress").show(250);
		$( "a.mapOptions__addresses_a" ).removeClass("m-active");
		$(this).addClass("m-active");
		var coordinate  = $(this).data('coordinate');
		
		setGeoObject(coordinate,'');                                      
		return false;
	});

	$(document).on('keypress', '.mapOptions__userAddress', function(e){
		var code = (e.keyCode ? e.keyCode : e.which);
	
		if(code == 13)
		{                        
			e.preventDefault();
			setRoot();
			return false;
		}
	});
	
	$(document).on('click', '.mapOptions__searchButton', function(e){
		e.preventDefault();
		setRoot();
		return false;
	});
});


function setGeoObject(coords, address){
	if (coords!='')
		{
			var address = $('#addresses').find('a.m-active').data('address'),
                name = $('#addresses').find('a.m-active').data('name'),
                content = $('#addresses').find('a.m-active').data('content');
			    coords  = coords.toString().split(',');
            var latitude  = parseFloat(coords[1]), 
                longitude = parseFloat(coords[0]);
		}
	else
		{
		var name = '',
            content = '';
			ymaps.geocode(address, {results: 1, kind: 'house'}).then
            (
                function(res){
                    var coords  = res.geoObjects.get(0).geometry.getCoordinates();
                        coords  = coords.toString().split(',');
                    var latitude  = parseFloat(coords[0]), 
                        longitude = parseFloat(coords[1]);
						    }
			);

		}
						
	var PlaceMark = new ymaps.Placemark([latitude, longitude],                                
        {
            hintContent : content?name:address,
            balloonContentHeader : content?name:address,
            balloonContentFooter : content?address+'<br>'+content:'Точка отправления'
        }
    );
   
    Map.panTo([latitude, longitude], 
	   { 
		duration       : 400,
		flying         : true, 
		checkZoomRange : false,
		callback       : function(state)
		{
		if(state == null) 
			{ 
				Map.zoomRange.get([latitude, longitude]).then(
				function(zoomRange, err){
								if(!err){Map.setZoom(zoomRange[1]-1);}
										}
				);   
					Collection.add(PlaceMark);
					Map.geoObjects.add(Collection); 
					PlaceMark.balloon.open();                                   
			}
		}
	   }
	);         
}

function setRoot(){
	$('#length').html('прокладка маршрута...');  
						 
	var fromAddr = $('#from_addr').val(),
		toAddr = $('#addresses').find('a.m-active').data('coordinate');
		toAddr = toAddr.toString().split(',');
		var tolatitude  = parseFloat(toAddr[1]), 
			tolongitude = parseFloat(toAddr[0]);

	 ymaps.route([fromAddr, [tolatitude, tolongitude]], {mapStateAutoApply: true}).then(
		function (route){
			route.getPaths().options.set({
				balloonContenBodyLayout: ymaps.templateLayoutFactory.createClass('$[properties.humanJamsTime]'),
				strokeColor: 'ff0000',
				opacity: 0.5
			});
		  
		 Map.geoObjects.add(route);
		 route.getWayPoints().options.set('preset', 'twirl#redIcon');
		 route.getWayPoints().get(0).properties.set('iconContent', '');
		 route.getWayPoints().get(0).properties.set('balloonContentFooter', 'Точка отправления');
		  $('#length').html('(расстояние: '+Math.ceil(route.getLength()/1000)+' км.)');
		 setGeoObject('', fromAddr);
		}, 
	  function (error) {alert('Возникла ошибка: ' + error.message);});
	}