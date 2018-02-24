function myMap() {
    var myCenter = new google.maps.LatLng(28.328797, -17.197649);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: myCenter,
        zoom: 9
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    
    
    var locations = [
        [
            'Casa R&uacutestica Hoya Grande - Garaf&iacutea',
            28.794182,
            -17.925220,
            'https://www.wanderlustcanarias.com/casas/rooms/025804e7-5f78-43ab-9d71-2eb12357e9df',
            '53.50',    // Precio
            3,          // Personas
            2,          // Camas
            './img/casaRusticaHoyaGrandeGarafia.jpg'
        ],
        [
            'Apartamento Puerto Naos - Los Llanos de Aridane',
            28.587601,
            -17.910607,
            'https://www.wanderlustcanarias.com/casas/rooms/fef063aa-68d0-4c8a-9479-54553380db85',
            '59',       // Precio
            4,          // Personas
            2,          // Camas
            './img/apartamentoPuertoNaosLlanosAridane.jpg'
        ],
        [
            'Casa Mart&iacuten - Tijarafe',
            28.711037,
            -17.956024,
            'https://www.wanderlustcanarias.com/casas/rooms/8c59efb4-0a5c-4fa8-8086-6822ffe6dc42',
            '41',       // Precio
            2,          // Personas
            2,          // Camas
            './img/casaMartinTijarafe.jpg'
        ],
        [
            'Casa T&iacuteo Juan - Tijarafe',
            28.713265,
            -17.955541,
            'https://www.wanderlustcanarias.com/casas/rooms/7d96546f-11de-42b7-a4ba-815e0e820768',
            '53',       // Precio
            3,          // Personas
            2,          // Camas
            './img/casaTioJuanTijarafe.jpg'
        ],
        [
            'Casita La Canela - Santa Cruz de La Palma',
            28.683975,
            -17.764576,
            'https://www.wanderlustcanarias.com/casas/rooms/21ddcd87-188a-463a-af37-db0346704c5d',
            '42',       // Precio
            2,          // Personas
            1,          // Camas
            './img/casitaCanelaSantaCruzLaPalma.jpg'
        ],
        [
            'Casa &Aacutengel - Los Quemados / Fuencaliente',
            28.491961,
            -17.856738,
            'https://www.wanderlustcanarias.com/casas/rooms/87ad8f77-394f-486d-adf3-06af5a28ea8a',
            '42.80',    // Precio
            4,          // Personas
            2,          // Camas
            './img/casaAngelQuemadosFuencaliente.jpg'
        ],
        [
            'Casa Rural Kiril - Piedras Blancas',
            28.649611,
            -17.860297,
            'https://www.wanderlustcanarias.com/casas/rooms/bd704b9a-8b89-4509-968c-d7bf7c4216f2',
            '90.20',    // Precio
            4,          // Personas
            3,          // Camas
            './img/casaRuralKirilPiedrasBlancas.jpg'
        ],
        [
            'Las Plataneras 2 - Villa de Tazacorte',
            28.640668,
            -17.934569,
            'https://www.wanderlustcanarias.com/casas/rooms/f492ec28-43e0-4adf-8060-ca2463e4bea3',
            '46.20',    // Precio
            4,          // Personas
            3,          // Camas
            './img/plataneras2VillaTazacorte.jpg'
        ],
        [
            'Las Plataneras 3 - Villa de Tazacorte',
            28.640455,
            -17.934383,
            'https://www.wanderlustcanarias.com/casas/rooms/eb7736af-b1c5-45dc-86a3-f9556ae4fefa',
            '46.20',    // Precio
            4,          // Personas
            3,          // Camas
            './img/plataneras3VillaTazacorte.jpg'
        ],
        [
            'Las Plataneras 4 - Villa de Tazacorte',
            28.640662,
            -17.934068,
            'https://www.wanderlustcanarias.com/casas/rooms/4b74a8d7-e8c3-42e2-9240-5f080c0a2ede',
            '46.20',    // Precio
            4,          // Personas
            3,          // Camas
            './img/plataneras4VillaTazacorte.jpg'
        ],
        [
            'Apto. Casa del Mar - Puerto de Tazacorte',
            28.639583,
            -17.873084,
            'https://www.wanderlustcanarias.com/casas/rooms/8eda64e3-4c93-41f0-a551-09fbb36ef2e9',
            '55',       // Precio
            4,          // Personas
            3,          // Camas
            './img/aptoCasaMarPuertoTazacorte.jpg'
        ],
        [
            'Keka´s Guesthouse',
            28.461567,
            -16.255834,
            'https://www.wanderlustcanarias.com/casas/rooms/49f48716-14e5-4fff-bdf6-41148db1c783',
            '35',    // Precio
            4,          // Personas
            2,          // Camas
            './img/kekasGuesthouse.jpg'
        ],
        [
            'Apto. La Puente I - Costa G&uumlimar',
            28.250290,
            -16.397639,
            'https://www.wanderlustcanarias.com/casas/rooms/d1dc766c-81df-4452-9960-45916737abe9',
            '36',    // Precio
            6,          // Personas
            5,          // Camas
            './img/aptoLaPuenteIICostaGuimar.jpg'
        ],
        [
            'Apto. La Puente II - Costa G&uumlimar',
            28.250026,
            -16.397887,
            'https://www.wanderlustcanarias.com/casas/rooms/507d7ec6-f7ca-4f0b-9e4d-87596d4b1339',
            '50',    // Precio
            5,          // Personas
            3,          // Camas
            './img/aptoLaPuenteICostaGuimar.jpg'
        ],
        [
            'Apto. Plaza Roja - El M&eacutedano',
            28.046126,
            -16.534277,
            'https://www.wanderlustcanarias.com/casas/rooms/52978206-07bf-4962-a36e-219c6961b256',
            '60',    // Precio
            3,          // Personas
            2,          // Camas
            './img/aptoPlazaRojaElMedano.jpg'
        ],
        [
            'Apto. El Cabezo - El M&eacutedano',
            28.046775,
            -16.537107,
            'https://www.wanderlustcanarias.com/casas/rooms/37603698-67c2-42e8-9690-82963cc483e6',
            '60',    // Precio
            4,          // Personas
            3,          // Camas
            './img/aptoElCabezoElMedano.jpg'
        ],
        [
            'Casona Guamasa - Tacoronte',
            28.490266,
            -16.374623,
            'https://www.wanderlustcanarias.com/casas/rooms/37603698-67c2-42e8-9690-82963cc483e6',
            '91',    // Precio
            16,          // Personas
            10,          // Camas
            './img/casonaGuamasaTacoronte.jpg'
        ],
        [
            'Apto. Centro Santa Cruz de Tenerife',
            28.460847,
            -16.261468,
            'https://www.wanderlustcanarias.com/casas/rooms/b6cfd42f-27af-47ab-94e1-0aa0b1e5c990',
            '42.80',    // Precio
            4,          // Personas
            3,          // Camas
            './img/aptoCentroSantaCruzTenerife.jpg'
        ]
    ];
    
    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker,i) {
            return function() {
                infowindow.setContent(
                    '<div id="infoWindowContent">'+
                    '<a href="'+
                    locations[i][3]+
                    '" target="_blank">'+
                    '<img src="'+
                    locations[i][7]+
                    '"></a>'+
                    '<h1><a href="'+
                    locations[i][3]+
                    '" target="_blank">'+
                    locations[i][0]+
                    '</a></h1>'+
                    '<div id="caracteristicas">'+
                    '<p>Desde <strong>'+
                    locations[i][4]+
                    '&#x20AC</strong> la noche</p>'+
                    //'<div id="caracteristicas">'+
                    '<img src="./img/icons/person-icon-green.png" alt="Numero de personas">'+
                    '<p>'+
                    locations[i][5]+
                    '</p>'+
                    '<img src="./img/icons/bed_2.png" alt="Numero de camas">'+
                    '<p>'+
                    locations[i][6]+
                    '</p>'+
                    '</div>'+
                    '</div>'
                );
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}