ymaps.ready(init);
	var myMap, 
		myPlacemark;

	function init(){ 
		myMap = new ymaps.Map("map", {
			center: [47.22970534, 39.71761920],
			zoom: 13
		}); 
		
		rostov_1 = new ymaps.Placemark([47.22219304, 39.71219434], {
			hintContent: 'Ростов-на-Дону',
			balloonContent: 'г. Ростов-на-Дону, ул. Портовая, д. 193 а<br/> Тел.:+7(863) 123-45-67'
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'images/map-pointer.png',
			iconImageSize: [35, 47],
			iconImageOffset: [-13, -42]
		});
		rostov_2 = new ymaps.Placemark([47.22368130, 39.72554100], {
			hintContent: 'Ростов-на-Дону',
			balloonContent: 'г. Ростов-на-Дону, ул. Б. Садовая 112<br/> Тел.:+7(863) 123-45-67'
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'images/map-pointer.png',
			iconImageSize: [35, 47],
			iconImageOffset: [-13, -42]
		});
		rostov_3 = new ymaps.Placemark([47.22552594, 39.72292317], {
			hintContent: 'Ростов-на-Дону',
			balloonContent: 'г. Ростов-на-Дону, пер. Чехова 43, 2 этаж офис 1а<br/> Тел.:+7(863) 123-45-67'
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'images/map-pointer.png',
			iconImageSize: [35, 47],
			iconImageOffset: [-13, -42]
		});
		 rostov_4 = new ymaps.Placemark([47.21216280, 39.61050250], {
			hintContent: 'Ростов-на-Дону',
			balloonContent: 'г. Ростов-на-Дону, пр. Стачки 256, оф. 2<br/> Тел.:+7(863) 123-45-67'
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'images/map-pointer.png',
			iconImageSize: [35, 47],
			iconImageOffset: [-13, -42]
		});

		myMap.geoObjects.add(rostov_1)
		.add(rostov_2)
		.add(rostov_3)
		.add(rostov_4)
		.add("zoomControl")
		.add("mapTools")
		.add("searchControl");	
	}