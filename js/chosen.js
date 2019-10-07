var config = {
	'.chosen-select': {}
}
for (var selector in config) {
  $(selector).chosen(config[selector]);
}

//выбор региона с подгузкой его городов (для вакансий)
$("select").change(function(){
	var selected = $(this).val();
	//var region_vacancy;
	var all_address;
	all_address = [
		"<div class='col-md-12'><div class='col-md-12'>Вывод адресов</div></div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div>344000, г. Ростов-на - Дону<br><span class='addresses-text-bold'>Добровольского 15 о. 6</span><br><span class='addresses-text-phone'>8 800 710 67 56</span><br>Пн-пт.: <span class='addresses-text-bold'>8:00-22:00</span><br>Сб-вс.: <span class='addresses-text-bold'>10:00-20:00</span></div><div>344000, г. Ростов-на - Дону<br><span class='addresses-text-bold'>Добровольского 15 о. 6</span><br><span class='addresses-text-phone'>8 800 710 67 56</span><br>Пн-пт.: <span class='addresses-text-bold'>8:00-22:00</span><br>Сб-вс.: <span class='addresses-text-bold'>10:00-20:00</span></div><div>344000, г. Ростов-на - Дону<br><span class='addresses-text-bold'>Добровольского 15 о. 6</span><br><span class='addresses-text-phone'>8 800 710 67 56</span><br>Пн-пт.: <span class='addresses-text-bold'>8:00-22:00</span><br>Сб-вс.: <span class='addresses-text-bold'>10:00-20:00</span></div>"
	];

	$(".addressMobile").html(all_address[selected]);
});
