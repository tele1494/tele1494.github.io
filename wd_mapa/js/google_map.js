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
            'Casitas Miramar I - El Paso',
            28.649761,
            -17.885906,
            'https://www.wanderlustcanarias.com/casas/rooms/1d173f6f-495d-484a-b9e3-55efb03605a3',
            '46',    // Precio
            4,          // Personas
            4,          // Camas
            './img/casitasMiramarIElPaso.jpg'
        ],
        [
            'Casitas Miramar II - El Paso',
            28.650417,
            -17.888810,
            'https://www.wanderlustcanarias.com/casas/rooms/25ae25f5-89c0-4fe8-9d61-fd8844f15da3',
            '42',    // Precio
            2,          // Personas
            2,          // Camas
            './img/casitasMiramarIIElPaso.jpg'
        ],
        [
            'Casa R&uacutestica Hoya Grande - Garaf&iacutea',
            28.790507,
            -17.927050,
            'https://www.wanderlustcanarias.com/casas/rooms/025804e7-5f78-43ab-9d71-2eb12357e9df',
            '42.80',    // Precio
            3,          // Personas
            2,          // Camas
            './img/casaRusticaHoyaGrandeGarafia.jpg'
        ],
        [
            'Apto. Puerto Naos - Los Llanos de Aridane',
            28.587705,
            -17.910974,
            'https://www.wanderlustcanarias.com/casas/rooms/fef063aa-68d0-4c8a-9479-54553380db85',
            '53.50',       // Precio
            4,          // Personas
            2,          // Camas
            './img/aptoPuertoNaosLlanosAridane.jpg'
        ],
        [
            'Casa Mart&iacuten - Tijarafe',
            28.694146,
            -17.952366,
            'https://www.wanderlustcanarias.com/casas/rooms/8c59efb4-0a5c-4fa8-8086-6822ffe6dc42',
            '41',       // Precio
            2,          // Personas
            2,          // Camas
            './img/casaMartinTijarafe.jpg'
        ],
        [
            'Casa T&iacuteo Juan - Tijarafe',
            28.703089,
            -17.945989,
            'https://www.wanderlustcanarias.com/casas/rooms/7d96546f-11de-42b7-a4ba-815e0e820768',
            '49.50',       // Precio
            3,          // Personas
            2,          // Camas
            './img/casaTioJuanTijarafe.jpg'
        ],
        [
            'Casita La Canela - Santa Cruz de La Palma',
            28.684356,
            -17.766926,
            'https://www.wanderlustcanarias.com/casas/rooms/21ddcd87-188a-463a-af37-db0346704c5d',
            '41',       // Precio
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
            'Villa Rural Kiril - Piedras Blancas',
            28.649611,
            -17.860297,
            'https://www.wanderlustcanarias.com/casas/rooms/bd704b9a-8b89-4509-968c-d7bf7c4216f2',
            '88',    // Precio
            4,          // Personas
            3,          // Camas
            './img/casaRuralKirilPiedrasBlancas.jpg'
        ],
        [
            'Loft Todoque - Los Llanos de Aridane',
            28.608125,
            -17.898493,
            'https://www.wanderlustcanarias.com/casas/rooms/426a58c4-8b55-43fe-83b6-b1b96ece0cbc',
            '38',    // Precio
            2,          // Personas
            1,          // Camas
            './img/loftTodoqueLlanosAridane.jpg'
        ],
        [
            'Casa Los Lilos - Tijarafe',
            28.669969,
            -17.951099,
            'https://www.wanderlustcanarias.com/casas/rooms/31dfbf4d-d6e1-47e7-a19e-e34e28a44057',
            '80',    // Precio
            10,          // Personas
            6,          // Camas
            './img/casaLilosTijarafe.jpg'
        ],
        [
            'Las Plataneras 2 - Villa de Tazacorte',
            28.640668,
            -17.934569,
            'https://www.wanderlustcanarias.com/casas/rooms/f492ec28-43e0-4adf-8060-ca2463e4bea3',
            '45',    // Precio
            4,          // Personas
            3,          // Camas
            './img/plataneras2VillaTazacorte.jpg'
        ],
        [
            'Las Plataneras 3 - Villa de Tazacorte',
            28.640455,
            -17.934383,
            'https://www.wanderlustcanarias.com/casas/rooms/eb7736af-b1c5-45dc-86a3-f9556ae4fefa',
            '45',    // Precio
            4,          // Personas
            3,          // Camas
            './img/plataneras3VillaTazacorte.jpg'
        ],
        [
            'Las Plataneras 4 - Villa de Tazacorte',
            28.640662,
            -17.934068,
            'https://www.wanderlustcanarias.com/casas/rooms/4b74a8d7-e8c3-42e2-9240-5f080c0a2ede',
            '45',    // Precio
            4,          // Personas
            3,          // Camas
            './img/plataneras4VillaTazacorte.jpg'
        ],
        [
            'Aptos. Charco Azul / Los Sauces',
            28.807597,
            -17.762284,
            'https://www.wanderlustcanarias.com/casas/rooms/4eaf5a35-bc3f-409c-8bf1-3304e06632ed',
            '49',    // Precio
            3,          // Personas
            2,          // Camas
            './img/aptosCharcoAzulSauces.jpg'
        ],
        [
            'Apto. Casa del Mar - Puerto de Tazacorte',
            28.639583,
            -17.873084,
            'https://www.wanderlustcanarias.com/casas/rooms/8eda64e3-4c93-41f0-a551-09fbb36ef2e9',
            '43',       // Precio
            4,          // Personas
            3,          // Camas
            './img/aptoCasaMarPuertoTazacorte.jpg'
        ],
        [
            'Apto. Pto. Naos - Los Llanos de Aridane',
            28.586579,
            -17.909164,
            'https://www.wanderlustcanarias.com/casas/rooms/64b50e9e-df20-4347-8e7c-f3d49f8f1e11',
            '53.50',       // Precio
            4,          // Personas
            3,          // Camas
            './img/aptoPtoNaosLlanosAridane.jpg'
        ],
        [
            'Casita Tajuya - El Paso',
            28.637840,
            -17.883002,
            'https://www.wanderlustcanarias.com/casas/rooms/eb27a71c-808a-488b-a899-b82b3ef830b6',
            '32',       // Precio
            3,          // Personas
            2,          // Camas
            './img/casitaTajuyaElPaso.jpg'
        ],
        [
            'Apto. Kiril 2 - Piedras Blancas, El Paso',
            28.641090,
            -17.861674,
            'https://www.wanderlustcanarias.com/casas/rooms/2fe8385b-01b0-4545-b233-6fc819a0b057',
            '43',       // Precio
            2,          // Personas
            1,          // Camas
            './img/aptoKiril2PiedrasBlancasElPaso.jpg'
        ],
        [
            'Casa Canaria La Laguna',
            28.625493,
            -17.901949,
            'https://www.wanderlustcanarias.com/casas/rooms/a0cf713d-f415-462a-b820-d8213c4f06eb',
            '65',       // Precio
            4,          // Personas
            3,          // Camas
            './img/casaCanariaLaLaguna.jpg'
        ],
        [
            'Apto. Heliocentro - Los Llanos de Aridane',
            28.660762,
            -17.923497,
            'https://www.wanderlustcanarias.com/casas/rooms/8499a5a3-3f16-4a76-bba3-05942725550c',
            '45',       // Precio
            2,          // Personas
            2,          // Camas
            './img/aptoHeliocentroLlanosAridane.jpg'
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
            'Casa Siete Ca&ntildeadas - El Portillo',
            28.295992,
            -16.565623,
            'https://www.wanderlustcanarias.com/casas/rooms/0fe70c6f-7f94-4deb-b6cf-35d3999aba26',
            '70',    // Precio
            6,          // Personas
            6,          // Camas
            './img/casaSieteCanyadasPortillo.jpg'
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
        ],
        [
            'Adosado Carril de Billete - Tacoronte',
            28.462991,
            -16.403306,
            'https://www.wanderlustcanarias.com/casas/rooms/411e686f-03c7-448f-af2b-7ac92349c61b',
            '50',    // Precio
            7,          // Personas
            3,          // Camas
            './img/adosadoCarrilBilleteTacoronte.jpg'
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
