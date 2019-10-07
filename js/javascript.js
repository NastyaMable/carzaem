//маски телефонов
$("#exampleInputPhone").mask("+7 (999) 999 - 99 - 99", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});
$("#AppPhone").mask("+7 (999) 999 - 99 - 99", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});
$("#request-phone").mask("+7 (999) 999 - 99 - 99", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$("#passport_series").mask("9999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$("#wu_series").mask("9999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$("#wu_number").mask("999999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$("#passport_number").mask("999999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$(".type-year").mask("9999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$(".type-date").mask("99.99.9999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$(".type-phone").mask("+7 (999) 999 - 99 - 99", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});


//слайдер занятий
$(document).ready(function() {
    var owl = $('.owl-carousel.job');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});

//слайдер логотипов
$(document).ready(function() {
    var owl = $('.owl-carousel.logo-company');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })
});

//слайдер адресов офисов
$(document).ready(function() {
    var owl = $('.owl-carousel.addressMobile');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: false,
        responsive: {
            0: {
                items: 2
            }
        }
    })
});




//ползунок
(function() {

    if ($('*').is('#slider-range-thousands') === false) {
        return true;
    }

    var
        result_outptut = $("#revenue"),
        sliderMin = $("#slider-range-thousands"),
        sliderMin2 = $("#slider-range-months"),
        thousands = $('#amount-thousands'),
        months = $('#amount-months'),
        inputAmount = $('#input-thousands'),
        inputAmount2 = $('#input-months'),
        inputAmountClass = $('.input-thousands'),
        inputMonthsClass = $('.input-months'),
        resultAmount = $('#result-amount'),
        resultMonths = $('#result-months');

    var defaultAmount = sliderMin.data('init') || 300,
        defaultMonths = sliderMin2.data('init') || 24;


    var init = function() {
        var
            value1 = parseInt(sliderMin.slider('value')),
            value2 = parseInt(sliderMin2.slider('value'));
        inputAmount.val(value1);
        inputAmount2.val(value2);

        inputAmountClass.each(function (value1) {
            $(this).val(value1);
        });
        inputMonthsClass.each(function (value2) {
            $(this).val(value2);
        });

        // inputAmountClass.val(value1);
        // inputMonthsClass.val(value2);
        thousands.html(value1);
        months.html(value2);
        сalculate(value2, value1);
    }



    var calculateParts = function(srokZaima, summaZaima)
    {
        let stavka = $('#calculator').data('stavka-parts') || 30;
        let mps =  stavka / 100 / 12;
        console.log(mps);
        return parseInt(summaZaima * (mps / (1 - Math.pow((1 + mps), -srokZaima))));
    };

    var calculatePercents = function(srokZaima, summaZaima)
    {
        summ = 0;
        let godovaiaStavka = $('#calculator').data('stavka-percents') || 0.3; //P
        let osnovnoiPlatej = summaZaima / srokZaima; //b
        for (let i = 0; i < srokZaima; i++) {
            ostatokDolga = summaZaima - (osnovnoiPlatej * i);
            min = osnovnoiPlatej + (ostatokDolga) * godovaiaStavka / 12;
            summ += osnovnoiPlatej + (ostatokDolga) * godovaiaStavka / 12;
        }

        return parseInt(min);
    };


    var сalculate = function(srokZaima, summaZaima) {
        let type = $('#type-loan').find('.selected').attr('id');
        let fullSummaZaima = (summaZaima * 1000);

        result_outptut.html(
            type == 'type-parts' ? calculateParts(srokZaima, fullSummaZaima) : calculatePercents(srokZaima, fullSummaZaima)
        );
    }

    sliderMin.slider({
        animate: "slow",
        range: "min",
        value: defaultAmount,
        min: 30,
        max: 3000,
        step: 5,
        slide: function(event, ui) {
            thousands.html(ui.value);
            inputAmount.val(ui.value);
            inputAmountClass.each(function (item) {
                $(this).val(ui.value);
            });
            сalculate(sliderMin2.slider('value'), ui.value)
        }
    });

    sliderMin2.slider({
        range: "min",
        value: defaultMonths,
        min: 2,
        max: 60,
        step: 1,
        slide: function(event, ui) {
            months.html(ui.value);
            inputAmount2.val(ui.value);
            inputMonthsClass.each(function (item) {
                $(this).val(ui.value);
            });
            сalculate(ui.value, sliderMin.slider('value'));
        }
    });

    init();


    $('#type-loan').click(function () {
        сalculate(sliderMin2.slider('value'), sliderMin.slider('value'));
    })


    // sliderMin.slider('option', 'slide').call(init);
})();


//переключатель
jQuery(function($) {
    var $links, $switcher;
    $links = $('[data-show]');
    $switcher = $('.switch-js');
    $switcher.children().not(':first').hide();
    $links.click(function() {
        var id;
        id = '[data-switch="' + $(this).data('show') + '"]';
        $switcher.children(id).show();
        $switcher.children().not(id).hide();
    });
});

$(document).ready(function() {
    $('.switcher li').on('click', changeClass);
});
function changeClass() {
    $('.switcher li').removeClass('selected');
    $(this).addClass('selected');
}