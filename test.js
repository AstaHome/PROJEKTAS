// console.log("pavyko");

// //3. užduotis
// // Apsirašykite savo dabartinį amžių kintamajame
// // Apsirašykite maksimalų amžių kintamajame
// // Apsirašykite puodelių kiekį per dieną kintamajame
// // Suskaičiuokite kiek puodelių jums reikės iki nurodyto maksimalaus amžiaus
// // Rezultatas turi būti išspausdintas konsolėje tokiu formatu:
// // "Jums reikės N kavos pudoelių iki N metų."

// var amzius = 35;
// console.log(amzius);
// var maxamzius = 100;
// console.log(maxamzius);
// var puodeliai = 2;
// var tekstas = 'Jums reikės N kavos puodelių iki N metų';
// console.log(puodeliai);
// console.log((maxamzius - amzius) * 365 * puodeliai);
// console.log (tekstas);

// /*
// * Užduotis: Paskaičiuoti trikampio plotą ir išvesti jį į konsolę.
// * 1. Kiekviena kraštinė turi būti įdėta į kintamąjį.
// * 2. Rezultatas turi būti irgi įdėtas į kintamąjį
// * 3. Rezultatas konsolėje turi atrodyti taip:
// * -- "a kraštinės ilgis: x,
// * --  b kraštinės ilgis: y,
// * --  c kraštinės ilgis: z,
// * --  plotas yra: xyz"
// * Kraštinių ilgiai: 10, 8, 5
// */

// var a = 10;
// var b = 8;
// var c = 5;
// console.log (a);

// var P = a + b + c;
// var p = P / 2;
// console.log (p);
// var S = Math.sqrt (p * (p - a) * (p - b) * (p - c));
// S = S.toFixed (2);
// console.log (S);

// // Šiuo metu Lietuvoje yra 26 laipsniai pagal Farenheitą,
// // naudodamiesi JavaScript apskaičiuokite kokia temperatūra yra pagal Celsijų.
// // Būtinos sąlygos:
// // - Turime "string" kintamąjį su tekstu "Lietuvoje šiuo metu laipsnių pagal Celsijų"
// // - Negalima rašyti jokio papildomo teksto
// // - Temperatūra pagal Celsijų turi būti nurodyta vienas skaičius po kablelio
// // - Temperatūra turi būti konvertuojama iš Farenheito į Celsijų
// // - Rezultatą išvesti konsolėje
// // Rezultatas:
// // Lietuvoje šiuo metu -3.3 laipsnių pagal Celsijų

// /*
// * 1 UŽDUOTIS
// * Išveskite į konsolę visus miestų pavadinimus naudodami ciklą.
// * -----------------------------------------------
// * 2 UŽDUOTIS
// * Išveskite į konsolę tuos miestus,
// * kurių pavadinimas neilgesnis nei 6 simboliai. Naudokite ciklą.
// * -----------------------------------------------
// * 3 UŽDUOTIS
// * Išveskite į konsolę tuos miestus,
// * kurių pavadinimas prasideda a,A raidėmis.
// * -----------------------------------------------
// * 4 UŽDUOTIS
// * Išveskite į konsolę apverstus miestų pavadinimus
// */

// var city_names = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];

// city_names.forEach (function (el){
//     console.log (el);
// });

// city_names.forEach (function (element){
//     if (element.length < 6) {

//         console.log (element);
//     }
// });

// city_names.forEach (function (el) {
//     if (el.charAt (0).toUpperCase () == 'A')
//     {console.log (el);
//     }
// });


// var array
// var revarray

// city_names.forEach (function (el) {

// array = el.split ("");
// revarray = array.reverse ();
// el = revarray.join ("");/
    
//     {console.log (el);
//     }
// });

// Įmonė nori įsigyti 2 baltus arba juodus tos pačios rūšies kompiuterius (būtinai vienos spalvos), kurių bendra kaina neviršytų 1600 €. Sugeneruokite sąrašą kompiuterių, kuriuos galite pasiūlyti.
// Masyvas su objektais:
// Būtinos sąlygos:
// - Panaudokite bent po vieną ciklą ir sąlyginį sakinį, (juodi ir mažiau nei 1000 EUR)
// - Rezultatas išvedamas konsolėje,
// - Line break naudokite "\n".
// Rezultatas turėtų atrodyti taip:
// Galimi variantai:
// Modelis: hp monstras
// Kaina: 1600
// Spalvos: juoda
// Modelis: dell apskritimas
// Kaina: 1394
// Spalvos: balta
// Modelis: acer peizažas
// Kaina: 1240
// Spalvos: balta ir juoda

// var pcs = [
//     { "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
//     { "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
//     { "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
//     { "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
//     { "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
//     { "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
//     { "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
// ];

// console.log ('Galimi variantai');
// pcs.forEach (function (el) 
// {
//     if (el.kaina * 2 <= 1600) {

//         if (el.spalva.juoda >= 2 && el.spalva.balta >= 2) {
            
//         } else if (el.spalva.juoda >= 2) {

//         } else if (el.spalva.balta >= 2) {
//             console.log (el);
//         }
//     }
// });

// 1 Užduotis: Parašyti funkciją kuri apverstų paduotą
// žodį arba skaičius ir išvestų rezultatą į konsolę.

// 2 Užduotis: Parašyti funkciją, kuri
// priima vieną parametra ir gražiną jo tipą

// 3 Užduotis: Parašyti funkciją kuri skaičiuotų paduoto
// skaičiaus faktorialą ir išvesti tai į konsolę.




// PATS GERIAUSIAS PAVYZDYS //

// var zodis = 'kaunas';

// zodiss (zodis);
// function zodiss(xxx) {
        
//     var raides = xxx.split('');
//     var apsuktos = raides.reverse();
//     var sujungtos = apsuktos.join('');

//     console.log (sujungtos);
// }



// var parametras = 55

// atsakymas (parametras);
// function atsakymas(parametras) {
    
// tipas = typeof(parametras);
// console.log (tipas);
// }


// var skaicius = 3
// var faktorialas = 1

// ats (skaicius);
// function ats(skaicius) {
    

// for (var i = skaicius; 0<i; i--)
// { 
// faktorialas *= i;
// }
// console.log (faktorialas);
// }

// SKAICIUOTUVAS //
  
