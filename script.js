ymaps.ready(init);

function init() {
    var map = new ymaps.Map("map", {
        center: [30.341803, 59.935295],
        zoom: 13
    });

    var placemarks = [
        {
            id: "20176",
            header: "PORT COMFORT BY THE GOSTINIY DVOR 3*",
            address: "Санкт-Петербург, ул. Садовая, 28-30, к1",
            metro3: "Гостиный Двор",
            img: "gost.jpg",
            coords: [30.327932, 59.930755],
            extraInfo: "5 минут до Невского проспекта, 10 минут до Русского музея </br> Казанского собора 10 минут до Спаса на Крови"
        },
        {
            id: "27469",
            header: "PORT COMFORT BY MOYKA 3*",
            address: "Санкт-Петербург, пер. Гривцова, 4к2, лит А",
            metro5: "Садовая",
            metro2: "Сенная площадь",
            img: "moyka.jpg",
            coords: [30.314269, 59.931062],
            extraInfo: "12 минут до Дворцовой площади и Эрмитажа </br> 5 минут до Исаакиевского собора"
        },
        {
            id: "10970",
            header: "PORT COMFORT ON LIGOVSKIY 4*",
            address: "Санкт-Петербург, Лиговский пр., 29",
            metro1: "Площадь Восстания",
            metro3: "Маяковcкая",
            img: "liga.jpg",
            coords: [30.362068, 59.933591],
            extraInfo: "5 минут до Невского проспекта и Московского вокзала (Сапсан) </br> 15 минут до Летнего сада"
        },
        {
            id: "27859",
            header: "PORT COMFORT BY SMOLNYY 3*",
            address: "Санкт-Петербург, Суворовский пр., 65, лит Б",
            metro1: "Чернышевская",
            img: "smol.jpg",
            coords: [30.388138, 59.944954],
            extraInfo: "5 минут до Смольного Собора, 7 минут до Таврического сада"
        },
        {
            id: "33783",
            header: "PORT COMFORT BY SENNAYA SQUARE 4*",
            address: "Санкт-Петербург, ул. Садовая, 53",
            metro1: "Садовая",
            metro2: "Сенная площадь",
            img: "sen.jpg",
            coords: [30.309804, 59.923626],
            extraInfo: "8 минут до Мариинского театра, 15 до Новой Голландии </br> Исаакиевского собора"
        },
        {
            id: "21668",
            header: "PORT COMFORT BY OLD NEVSKIY 3*",
            address: "Рядом ст.м. Пл. Ал. Невского. 15 минут до Галереи, 5 минут до Овсянниковского сада",
            metro4: "Пл. Ал. Невского",
            img: "an.jpg",
            coords: [30.385065, 59.925764],
            extraInfo: "Одна станция метро до Невского проспекта и Московского Вокзала (Сапсан) </br> 5 минут до Александро-Невской лавры"
        },
        {
            id: "20776",
            header: "PORT COMFORT AT THE GRIBOEDOV 3*",
            address: "Санкт-Петербург, ул. Бол. Подьяческая, 19",
            metro5: "Садовая",
            metro2: "Сенная площадь",
            img: "griboedov.jpg",
            coords: [30.305205, 59.924041],
            extraInfo: "5 минут до Мариинского театра, 12 минут до Новой Голландии </br> и Исаакиевского собора"
        },
        {
            id: "32789",
            header: "PORT COMFORT ON POKROVKA 3*",
            address: "Москва, ул. Покровки, 29",
            metro1: "Курская",
            metro2: "Чистые пруды",
            img: "pokrovka.jpg",
            coords: [37.647920, 55.760711],
            extraInfo: "2 минуты до Чистых прудов </br> 2 км до Красной площади и Кремля"
        }
    ];

    placemarks.forEach(function(place) {
        var metroInfo = '';
        if (place.metro1) {
            metroInfo += '<div class="metro-1">' + place.metro1 + '</div>';
        }
        if (place.metro2) {
            if (metroInfo) {
                metroInfo += ' / ';
            }
            metroInfo += '<div class="metro-2">' + place.metro2 + '</div>';
        }
        if (place.metro3) {
            if (metroInfo) {
                metroInfo += ' / ';
            }
            metroInfo += '<div class="metro-3">' + place.metro3 + '</div>';
        }
        if (place.metro4) {
            if (metroInfo) {
                metroInfo += ' / ';
            }
            metroInfo += '<div class="metro-4">' + place.metro4 + '</div>';
        }
        if (place.metro5) {
            if (metroInfo) {
                metroInfo += ' / ';
            }
            metroInfo += '<div class="metro-5">' + place.metro5 + '</div>';
        }

        var balloonContentBody = '<div class="description">' +
            '<div class = "description-container">' +
            '<h2>' + place.header + '</h2>' +
            '<div class="address"><img src="geo_icon.png">' + place.address + '</div>' +
            '<div class="metro"><img src="metro.png">рядом ' + metroInfo + '</div>' +
            '<div class="extra-info">' + place.extraInfo + '</div>' +
            '<button><img src="button.png"></button>' +
            '</div>' +
            (place.img ? '<img class = "hotel-icon" src="' + place.img + '"width=165px height=165px>' : '') +
            '</div>';

        var placemark = new ymaps.Placemark(place.coords, {
            balloonContentBody: balloonContentBody
        }, {
            balloonMaxWidth: 800
        });

        map.geoObjects.add(placemark);

        if (place.id === "10970") {
            placemark.balloon.open();
        }
    });
}
