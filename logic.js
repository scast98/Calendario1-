var view = $('html');
function views(){
//
	$("#contenedorTotalPrincipal").css("display", "none");
	$("#contenedorTotalPrincipal2").css("display", "block");


var mes_text = ["Enero",
								"Febrero",
								"Marzo",
								"Abril",
								"Mayo",
								"Junio",
								"Julio",
								"Agosto",
								"Septiembre",
								"Octubre",
								"Noviembre",
								"Diciembre"];

var dia_text = ["S",
								"M",
								"T",
								"W",
								"T",
								"F",
								"S"];

var StarDias = $("#fecha").val();
var year = StarDias.slice(0,4);
var Month = StarDias.slice(6,7);
var Day = StarDias.slice(9,10);
var NumeroDeDias = $("#NumeroDeDias").val();


estructurar(Day, Month, year, NumeroDeDias);

function estructurar(Day, Month, year, NumeroDeDias) {
	Month = Number(Month);
	Day = Number(Day);
for (var i = 0; i < mes_text.length; i++) {

	if (i === Month) {
		 var nombreDeMes = mes_text[i];
		 break;
	}
}
  var a = Month - 11;
  var	MesDeInicio = Month * 2 + a;


  var enero = Number(31);
	var febrero = Number(28);
	var marzo = Number(31);
	var abril = Number(30);
	var mayo = Number(31);
	var junio = Number(30);
	var julio = Number(31);
	var agosto = Number(31);
	var septiembre = Number(30);
	var octubre = Number(31);
	var noviembre = Number(30);
	var diciembre = Number(31);

	var ThisYear = enero+febrero+marzo+abril+mayo+junio+julio+agosto+septiembre+octubre+noviembre+diciembre;


		for (m = Month-1; m <= 11; m++) {

			let mes = document.createElement("div");
			mes.className = "mes";
			document.body.appendChild(mes);

			let tabla_mes = document.createElement("table");
			tabla_mes.className = "tabla_mes";
			mes.appendChild(tabla_mes);

			let titulo = document.createElement("caption");
			titulo.className = "titulo";
			titulo.innerText = mes_text[m];
			tabla_mes.appendChild(titulo);

			let cabecera = document.createElement("thead");
			tabla_mes.appendChild(cabecera);
			let fila = document.createElement("tr");
			cabecera.appendChild(fila);
			for (d = 0; d < 7; d++) {
				let dia = document.createElement("th");
				dia.innerText = dia_text[d];
				fila.appendChild(dia);
			}

			let cuerpo = document.createElement("tbody");
			tabla_mes.appendChild(cuerpo);
			for (f = 0; f < 6; f++) {
				let fila = document.createElement("tr");
				cuerpo.appendChild(fila);
				for (d = 0; d < 7; d++) {
					let dia = document.createElement("td");
					dia.innerText = "";
					fila.appendChild(dia);
				}
			}





  }
}



numerar(NumeroDeDias);
function numerar(NumeroDeDias) {
  for (i = 1; i < NumeroDeDias; i++) {
    let fecha = fechaPorDia(2017, i);
    let mes = fecha.getMonth();
    let select_tabla = document.getElementsByClassName('tabla_mes')[mes];
    let dia = fecha.getDate()
    let dia_semana = fecha.getDay();
    if (dia == 1) {var sem = 0;}
    select_tabla.children[2].children[sem].children[dia_semana].innerText = dia;
    if (dia_semana == 6) { sem = sem + 1; }


	}
}

function fechaPorDia(año, dia) {
  var date = new Date(año, 0);
  return new Date(date.setDate(dia));
}

}
