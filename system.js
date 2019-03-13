// Tab open/close
var Tab = function(element) {
	var expand = element.style.width == "" || element.style.width == "70px";

	//setTimeout(function(){
	element.style.transitionDuration = "1.5s";
	element.style.width = expand ? "110px" : "70px";
	//});
	if (expand)
		setTimeout(function(){
			element.scrollIntoView();
		}, 1500)

	ToggleContainer(element, expand);
}

// Container show/hide
var ToggleContainer = function(element, expand) {
	var container = element.parentNode.querySelector("div");
	
	if (expand)
	{
		ExpandInfographic(element.parentNode.getElementsByClassName("infographic"));
		
		container.style.animationDuration = ".8s";
		container.style.animationName = "expand";
		container.classList.add("visible");
		container.classList.remove("hidden");
	}	
	else
	{
		var imgs = element.parentNode.querySelectorAll("img:not([ignore])")
		if (imgs)
			for (var img of imgs)
				img.animate([
					{
						width: "0",
						height: "0"
					},
					{
						width: "auto",
						height: "auto"
					},
				], {
					duration: 1000,
					direction: "normal"
				});

		container.style.animationDuration = ".5s";
		container.style.animationName = "contract";
		setTimeout(function(){
			container.classList.remove("visible");
			container.classList.add("hidden");
		}, 450);
	}
}

// Expand the graphics (only one tab)
var graphic = [];
var ExpandInfographic = function(graphics) {
	if (graphics.length > 0)
	{
		if (graphic.length == 0)
			for (var i = 0; i < graphics.length; i++)
				if (graphic.length < graphics.length)
					graphic[i] = graphics[i].getAttribute("style").replace(/width:(calc\(.+\));/, "$1");
	
		for (var i = 0; i < graphics.length; i++)
			graphics[i].style.width = "0px";
		
		setTimeout(function(){
			for (var i = 0; i < graphics.length; i++)
			{
				graphics[i].style.transitionDuration = "2s";
				graphics[i].style.width = graphic[i];
			}
		}, 500);
	}
}

// One item per prefix
let items = {};
var OneItem = function(prefix, id) {
	var button = document.getElementById(`btn_${prefix}_${id}`);
	button.style.backgroundColor = (prefix == "flag" ? "#000000" : "#386A9B");
	
	var object = document.getElementById(`${prefix}_${id}`);
	object.classList.remove("hidden");
	
	if (!items[prefix])
		items[prefix] = [];
	
	if (items[prefix].indexOf(id) == -1)
		items[prefix].push(id);
	
	for (var item_id of items[prefix])
		if (item_id != id)
		{
			var item_button = document.getElementById(`btn_${prefix}_${item_id}`);
			item_button.style.backgroundColor = (prefix == "flag" ? "transparent" : "#4183C4");

			var item = document.getElementById(`${prefix}_${item_id}`);
			item.classList.add("hidden");
		}
}

// Get year
let today = new Date();
let pastTime = new Date(971957400000);
let age = Math.floor((today - pastTime) / (1000 * 60 * 60 * 24) / 365);

// Translation system
let LangName = {
	"EN": "English",
	"BR": "Português",
	"ES": "Español"
}
let Translations = {
	"EN": {
		"me_0": "My name is Tainã Romani Lautenschlager Donda, also known as Lautenschlager or Tai. I am " + age + " and I am currently studying Computer Science at Uninove, in Brazil. I also have an informatic technician degree obtained in the educational institution ETEC Jaraguá.",
		"me_1": "More than 3 years of experience with written translations (English and Spanish) and 2 years of experience with game and software development.",
		"me_2": "Web and Desktop development using Lua, C#, C, Java, and JavaScript as main languages. Experienced with Wordpress websites. Game development using the platforms Microsoft XNA, Monogame, Unity3D and LÖVE 2D.",
		
		"title_me": "About me",
		"title_prog": "Programming Languages",
		"title_prj": "Projects",
		"title_lang": "Languages",
		"title_contact": "Contact me",
		
		"open_source": "ALL MY PROJECTS ARE OPEN SOURCE!",
		
		"github": "More than 580 contributions in the last year on {0}!",
		"pastebin": "More than 31,800 unique views in the last three years on {0}!",
		
		"prj_1_0": "The game {0} was developed in C# and is based on an epic space battle with skills and different artificial intelligence enemies according to the elapsed time in game.",
		"prj_1_1": "The main idea is to entertain the players with funny teacher (my teachers) faces as characters/enemies, and other stuff like score and skills.",
		"prj_1_2": "The game is classified as an Action Indie game, because, besides the fact it's a Shooter game, few monetary resources were needed for its development, also only two people worked on that: the developer and a volunteer for the graphic drawings.",
		
		"prj_2_0": "The {0} is a Discord bot with several features, more than 60 special and very effective commands to manage more than 40 translators and 150 users.",
		"prj_2_1": "Here are some commands for the public:",
		"prj_2_2": "This is how the team receives a request:",
		"prj_2_3": "This is how the requester receives the translation:",
		
		"prj_3_0": "The game {0} was developed in C# and is based on several other Tower Defense (TD) games, but with an improved difficulty system and an environment that constantly excites the player.",
		"prj_3_1": "The aim of the game is not to let the aliens get in the Earth. You have some features to help you with it.",
		"prj_3_2": "The game is classified as a Real-Time Strategy (RTS) Indie game, because, besides the fact it's a Tower Defense (TD) game, few monetary resources were needed for its development. This game was developed in one week.",

		"prj_4_0": "The {0} is a documented RESTful API that allows developers to make bots for the Atelier801's forums.",
		"prj_4_1": "It uses the most sophisticated techniques of performance boost to offer the best results for the developer.",
		"prj_4_2": "It currently can perform 99% of the actions that a regular user could do using the interface.",

		"prj_5_0": "The {0} is a documented API that allows developers to make bots for the game Transformice.",
		"prj_5_1": "Transfromage makes easier a big part of the work but does not support all the actions that a normal client can perform."
	},
	"BR": {
		"me_0": "Meu nome é Tainã Romani Lautenschlager Donda, também conhecido por Lautenschlager ou Tai. Tenho " + age + " anos e atualmente estudo Ciência da Computação na Uninove, no Brasil. Também tenho formação técnica em informática obtida pela instituição de ensino ETEC Jaraguá.",
		"me_1": "Mais de 3 anos de experiência com traduções escritas (Inglês e Espanhol) e 2 anos de experiência com desenvolvimento de jogos e software.",
		"me_2": "Desenvolvimento Web e Desktop com o uso de Lua, C#, C, Java e JavaScript como linguagens principais. Com experiência em sites Wordpress. Desenvolvimento de jogos utilizando as plataformas Microsoft XNA, Monogame, Unity3D e LÖVE 2D.",
		
		"title_me": "Sobre mim",
		"title_prog": "Linguagens de Programação",
		"title_prj": "Projetos",
		"title_lang": "Idiomas",
		"title_contact": "Contate-me",
		
		"open_source": "TODOS OS MEUS PROJETOS SÃO OPEN SOURCE!",
		
		"github": "Mais de 580 contribuições no último ano no {0}!",
		"pastebin": "Mais de 31.800 visualizações individuais nos três últimos anos no {0}!",
		
		"prj_1_0": "O jogo {0} foi desenvolvido em C# e é baseado numa épica batalha espacial com habilidads e diferentes inimigos de inteligência artificial de acordo com o tempo de jogo.",
		"prj_1_1": "A ideia principal é entreter os jogadores com personagens/inimigos que têm o rosto dos professores (meus professores), e outras coisas como pontuação e habilidades.",
		"prj_1_2": "O jogo está classificado no gênero Indie de Ação, pois, além de ser um jogo de tiro, poucos recursos monetários foram utilizados para sua produção, além de uma quantidade ínfima de pessoas (o desenvolvedor e um voluntário para desenho gráfico).",

		"prj_2_0": "O {0} é um bot do Discord que tem diversos recursos, mais de 60 comandos especiais e efetivos para gerenciar mais de 40 tradutores e 150 usuários.",
		"prj_2_1": "Aqui estão alguns comandos para o público:",
		"prj_2_2": "Assim é como a equipe recebe um pedido:",
		"prj_2_3": "Assim é como o destinatário recebe a tradução:",
		
		"prj_3_0": "O jogo {0} foi desenvolvido em C# e é baseado em vários outros jogos de Defesa de Torres (TD), mas com um sistema de dificuldade melhorado e um ambiente que constantemente deixa o jogador empolgado.",
		"prj_3_1": "O objetivo do jogo é não deixar os aliens chegarem na Terra. Você terá alguns recursos para lhe ajudarem nisso.",
		"prj_3_2": "O jogo está classificado no gênero Estratégia em Tempo Real (RTS), pois, além de ser um jogo de Defesa de Torres (TD), poucos recursos monetários foram utilizados para seu desenvolvimento. Esse jogo foi desenvolvido em uma semana.",

		"prj_4_0": "A {0} é uma API RESTful documentada que permite desenvolvedores a criarem bots para os fóruns da Atelier801.",
		"prj_4_1": "Ela usa as técnicas mais sofisticadas de boost de performance para oferecer os melhores resultados ao programador.",
		"prj_4_2": "Atualmente ela pode realizar 99% das ações que um usuário regular também poderia utilizando a interface.",

		"prj_5_0": "A {0} é uma API documentada que permite desenvolvedores a criarem bots para o jogo Transformice.",
		"prj_5_1": "Transfromage deixa uma grande parte do trabalho mais fácil, mas ainda não suporta todas as ações que um client normal pode realizar."
	},
	"ES": {
		"me_0": "Mi nombre es Tainã Romani Lautenschlager Donda, también conocido por Lautenschlager o Tai. Tengo " + (function(){today="ba61d092d4ba96";return age})() + " años y actualmente estoy estudiando Ciencias de la Computación en Uninove, Brasil. También tengo formación técnica en informática obtenida en la institución educativa ETEC Jaraguá.",
		"me_1": "Más de 3 años de experiencia sobre traducción escrita (Inglés y Español) y 2 años de experiencia sobre desarrollamiento de juegos y softwares.",
		"me_2": "Desarrollo Web y Desktop usando Lua, C#, C, Java y JavaScript como lenguajes principales. Con experiencia en sitios Wordpress. Desarrollo de juegos con las plataformas Microsoft XNA, Monogame, Unity3D y LÖVE 2D.",

		"title_me": "Sobre mi",
		"title_prog": "Lenguajes de Programación",
		"title_prj": "Proyectos",
		"title_lang": "Idiomas",
		"title_contact": "Contáctame",

		"open_source": "TODOS MIS PROYECTOS SON OPEN SOURCE!",

		"github": "Más de 580 contribuciones en el año pasado en {0}!",
		"pastebin": "Más de 31.800 visualizaciones individuales en los tres últimos años en {0}!",

		"prj_1_0": "El juego {0} fue desarrollado en C# y es basado en una batalla épica con habilidades y diferentes enemigos con inteligencia artificial de acuerdo con el tiempo de juego.",
		"prj_1_1": "La idea principal es entretener los jugadores con personajes/enemigos con la cara de profesores (mis profesores), y otras cosas como puntuación y habilidades.",
		"prj_1_2": "El juego es clasificado como un juego Indie de Ación, pues, además del hecho de que es un juego de tiro, pocos recursos monetarios fueron necesarios para su desarrollo, también solamente dos personas trabajaron en eso: el programador y un voluntario para los diseños gráficos.",

		"prj_2_0": "Lo {0} es un bot para el Discord y tiene muchos recursos, mas que 60 comandos especiales y muy eficaces para gestionar más de 40 traductores y 150 usuarios.",
		"prj_2_1": "Acá están algunos comandos para el público:",
		"prj_2_2": "Así es como el equipo recibe un pedido:",
		"prj_2_3": "Así es como el destinatario recibe una traducción:",

		"prj_3_0": "El juego {0} fue desarrollado en C# y es basado en muchos otros juegos de Tower Defense (TD), pero con un sistema de dificuldad mejorado y un ambiente que constantemente excita al jugador.",
		"prj_3_1": "El objetivo del juego es no dejar que los aliens entren en la Tierra. Tendrá algunas cosas que te ayudaran con eso.",
		"prj_3_2": "El juego está clasificado como un juego Indie de Estrategia en Tiempo Real (RTS), porque, además del hecho de que es un juego de Tower Defense, pocos recursos monetarios fueron necesarios para su desarrollo. Este juego fue desarrollado en una semana.",

		"prj_4_0": "La {0} es una API documentada y RESTful que permite que desarrolladores hagan bots para los foros del Atelier801.",
		"prj_4_1": "Usa las más sofisticadas técnicas de aumento de rendimiento para ofrecer los mejores resultados al programador.",
		"prj_4_2": "Actualmente puede hacer el 99% de las acciones que un usuario regular podría hacer con la interfaz.",

		"prj_5_0": "{0} es una API documentada que permite que desarrolladores hagan bots para el juego Transformice.",
		"prj_5_1": "Transfromage te facilita gran parte del trabajo pero no soporta todas las acciones que un cliente normal podría hacer en el juego."
	}
};

let CurrentLanguage;

var GetTranslation = (index) => Translations[CurrentLanguage][index];

var SetLanguage = function(language) {
	CurrentLanguage = language;
	
	// Translation
	var texts = document.querySelectorAll("*[translation-index]");
	for (var text of texts) {
		var index = text.attributes.getNamedItem("translation-index").value;
		var format = text.attributes.getNamedItem("format");
		
		var content = Translations[CurrentLanguage][index];
		
		if (format)
			content = content.format(format.value);

		text.innerHTML = content;
	}
	
	let lang = language.toLowerCase();
	// Change flag
	var flag = document.getElementById("change_lang");
	flag.src = "content/flag_" + lang + ".jpg";

	// Change pdf
	var pdf = document.getElementById("cv");
	pdf.href = "content/cv_" + lang + ".pdf";

	CloseWindow();
}

var CloseWindow = () => document.getElementById("window").style.display = "none";

var countryCodes = {
	"ES": ["ES", "GQ", "CU", "PR", "DO", "MX", "GT", "HN", "SV", "NI", "CR", "PA", "CO", "VE", "EC", "PE", "BO", "CL", "AR", "PY", "UY"],
	"BR": ["BR", "PT", "GV", "ST" ]
};

window.onload = function(){
	// Translation normalization
	for (var lang in Translations)
		if (lang != "EN")
			for (var index in Translations.EN)
				if (Translations[lang][index] === undefined)
					Translations[lang][index] = Translations.EN[index];

	fetch("https://ipinfo.io/json/?token=" + today).then((r) => r.json()).then((r) => {
		for (let country in countryCodes)
			if (countryCodes[country].includes(r.country))
				return SetLanguage(country);
		SetLanguage("EN");
	}).catch(() => SetLanguage("EN"));

	// Based on w3schools' modal
	var eWindow = document.getElementById("window");
	var window_button = document.getElementById("change_lang");

	window_button.onclick = function() {
		eWindow.style.display = "block";
	}
	window.onclick = function(e) {
		if (e.target == eWindow)
			eWindow.style.display = "none";
	}
}

// From Coderwall
String.prototype.format = function () {
    var a = this;
    for (var k in arguments)
        a = a.replace(new RegExp("\\{" + k + "\\}", "g"), arguments[k]);
    return a
}
