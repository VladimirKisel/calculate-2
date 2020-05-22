

var tupeTZSelekt = document.querySelector('#tupe-tz');
var catTZSelekt = document.querySelector('#cat-tz');
var citiesSelekt = document.querySelector('#cities-check');
var scopeSelekt = document.querySelector('#scope-use');
var experienceSelekt = document.querySelector('#driving-experience');
var periodSelekt = document.querySelector('#period-use');
var calculate = document.querySelector('#calculate');
var dataTZ = {

	 "Оберіть тип автомобіля!": {'':[]},
	 "Легковий автомобіль": {'Оберіть категорію автомобіля!': [], 'до 1600 кубічних сантиметрів B1':[1], '1601-2000 кубічних сантиметрів B2': [1.14], '2001-3000 кубічних сантиметрів B3':[1.18], 'більше 3000 кубічних сантиметрів B4':[1.82]},
	 "Причепи до легкових автомобілів": {'Оберіть категорію причепа!': [],'Причепи до легкових автомобілів F':[0.34]},		
	 "Автобусы": {'Оберіть категорію автобуса!': [],'до 20 чоловік (включно) D1': [2.55], 'більше 20 чоловік D2': [3]},
	 "Вантажні автомобілі": {'Оберіть категорію автомобіля!': [],'до 2 тонн (включно)C1': [2], 'понад 2 тонни C2': [2.18]},
	 "Причепи до вантажних автомобілів": {'Оберіть категорію причепа!': [],'E': [0.5]},
	 "Мотоцикли та моторолери":{'Оберіть категорію мотоцикла!': [],'A1': [0.34], 'A2': [0.68]}
	
	
};

var cat = Object.keys(dataTZ);
addOptions(tupeTZSelekt, cat);

var defaultTZ = dataTZ[cat[0]];
addOptions(catTZSelekt, defaultTZ);

 
tupeTZSelekt.addEventListener('change',function(){
	 catTZ = dataTZ[this.value];	  
	 categori = Object.keys(catTZ);	  
	catTZSelekt.length=0;
	addOptions(catTZSelekt, categori);	 
	});

function addOptions(select, arr){
	for (var i = 0; i < arr.length; i++) {
	select.add(new Option(arr[i]))}
	}


var katSelekt;//1
catTZSelekt.addEventListener('change',function(){
   katSelekt = catTZ[this.value];  
})

var cities = {
	"Оберіть місце реєстрації транспортного засобу": [],
	"Київ": [4.8],
	"Бориспіль, Боярка, Бровари, Васильків, Вишгород, Вишневе, Ірпінь": [2.5],
	"Одеса, Харків": [3.4],
	"Дніпропетровськ, Донецьк, Запоріжжя, Кривий Ріг, Львів": [2.8],
	"Алчевськ, Бердянськ, Біла Церква, Вінниця, Дніпродзержинськ, Горлівка": [2.2],
	"Євпаторія, Житомир, Івано-Франківськ, Кам'янець-Подільський, Керч, Кіровоград": [2.2],
	"Краматорськ, Кременчук, Лисичанськ, Луганськ, Луцьк, Макіївка, Маріуполь, Мелітополь": [2.2],
	"Миколаїв, Нікополь, Павлоград, Полтава, Рівне, Севастополь, Сєверодонецьк, Сімферополь" :[2.2],
	"Слов'янськ, Суми, Тернопіль,Ужгород, Херсон, Хмельницький, Черкаси, Чернівці, Чернігів": [2.2],
	"Інші населені пункти": [1.5],
	"Зарееєстрований в іншій країні": [3]
}
var citi = Object.keys(cities);
addOptions(citiesSelekt, citi);

 var selCiti;//2
citiesSelekt.addEventListener('change',function(){
    selCiti = cities[this.value];
   	
   
   })

var  scope = {
	"Оберіть сферу використання транспортного засобу": [],
	"автомобіль, який використовується фізичною особою (крім вантажних автомобілів, автобусів) (у тому числі мотоцикли)": [1],
	"автомобіль, який використовується юридичною особою (крім вантажних автомобілів, автобусів) (у тому числі мотоцикли)": [1.3],
	"вантажні автомобілі, автобуси (у тому числі причепи до вантажних ТЗ та причепи до легкових ТЗ)": [1]
}
var scopeTZ = Object.keys(scope);
addOptions(scopeSelekt, scopeTZ);

var scopeSel; //3
scopeSelekt.addEventListener('change',function(){
   scopeSel = scope[this.value];
   
   	
   })

var  experience = {
	"Оберіть водійський стаж": [],
	"незалежно від водійського стажу": [1.5],
	"3 роки та більше (для страхувальників - фізичних осіб)": [1.5],
	"юридична особа": [1.2]
}
var experienceTZ = Object.keys(experience);
addOptions(experienceSelekt, experienceTZ);

var experienceSel;//4
experienceSelekt.addEventListener('change',function(){
    experienceSel = experience[this.value];  	
   	
   })

var  period = {
	"Оберіть термін дії договору": [],
	"1 рік": [1],
	"6 місяців": [0.7],
	"7 місяців": [0.75],
	"8 місяців": [0.8],
	"9 місяців": [0.85],
	"10 місяців": [0.9],
	"11 місяців": [0.95]
}
var periodTZ = Object.keys(period);
addOptions(periodSelekt, periodTZ);

var periodSel;//5
periodSelekt.addEventListener('change',function(){
    periodSel = period[this.value];  
   	
   })

calculate.addEventListener('click',function(){
	if (katSelekt==undefined)   	
   alert('Ви не вибрали  Тип та Категорию автомобиля');
  else if (selCiti==undefined)
   alert('Ви не вибрали  місто реєстрації транспортного засобу');  
    else if (scopeSel==undefined)
   alert('Ви не вибрали сферу вікорістання транспортного засобу');
   else if (experienceSel==undefined)
   alert('Ви не вибрали  водійський стаж');
    else if (periodSel==undefined)
   alert('Ви не вибрали період дії полісу');
   else{
	 	
	var dialog = document.querySelector('#dialog');
	var tupe = 'Тип автомобіля: '+ document.getElementById('tupe-tz').value;	 
	document.getElementById('tupe').textContent = tupe;
	var cat = 'Категорія автомобіля: '+ document.getElementById('cat-tz').value;	 
	document.getElementById('cat').textContent = cat;
	var cities = 'Місто реєстрації: '+ document.getElementById('cities-check').value;	 
	document.getElementById('cities').textContent = cities;
	var scope = 'Сфера використання: '+ document.getElementById('scope-use').value;	 
	document.getElementById('scope').textContent = scope;
	var driving = 'Водійський стаж: '+ document.getElementById('driving-experience').value;	 
	document.getElementById('driving').textContent = driving;
	var period = 'Термін дії договору: '+ document.getElementById('period-use').value;	 
	document.getElementById('period').textContent = period;
	var baza = [180];
	var discaunt = [0.8];
	var suma = ((katSelekt*selCiti*scopeSel*periodSel*experienceSel)*baza*discaunt);

	var calc = 'Вартість полісу: '+ suma + ' грн.';	 
		document.getElementById('calc').value = calc;
	console.log(suma);

	$("#dialog").css("display", "flex");
	$('.container').css("display", "none");

	document.querySelector('#close').onclick = function() {
  $("#dialog").css("display", "none");
  $('.container').css("display", "flex");
	}	

}})




