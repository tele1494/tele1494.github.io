function myMap() {
    var myCenter = new google.maps.LatLng(28.674108, -17.850871);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: myCenter,
        zoom: 11
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