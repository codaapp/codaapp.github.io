$(document).ready(function() {
	$(".button").on("click", function() {
		switch (this.id) {
			case "button1":
				$("#content").append("<div  class='draggable'><img src='assets/symbols/quartnote.png' alt='' style='width:20px;height:60px' /></div>");
				break;
			case "button2":
				$("#content").append("<div class='draggable'><img src='assets/symbols/eigthnote.png' alt='' style='width:30px;height:60px' /></div>");
				break;
			case "button3":
				$("#content").append("<div class='draggable'><img src='assets/symbols/dottedquarternote.png' alt='' style='width:30px;height:60px' /></div>");
				break;
			case "button4":
				$("#content").append("<div class='draggable'><img src='assets/symbols/dottedhalfnote.png' alt='' style='width:30px;height:60px' /></div>");
				break;
			case "button5":
				$("#content").append("<div class='draggable'><img src='assets/symbols/halfnote.png' alt='' style='width:20px;height:60px' /></div>");
				break;
			case "button6":
				$("#content").append("<div class='draggable'><img src='assets/symbols/sixteenthnote.png' alt='' style='width:30px;height:60px' /></div>");
				break;
			case "button7":
				$("#content").append("<div class='draggable'><img src='assets/symbols/sixteenthnote4beamed.png' alt='' style='width:75px;height:60px' /></div>");
				break;
			case "button8":
				$("#content").append("<div class='draggable'><img src='assets/symbols/wholenote.png' alt='' style='width:25px;height:20px' /></div>");
				break;
			case "button9":
				$("#content").append("<div class='draggable'><img src='assets/symbols/quartrest.png' alt='' style='width:20px;height:60px' /></div>");
				break;
			case "button10":
				$("#content").append("<div class='draggable'><img src='assets/symbols/eigthrest.png' alt='' style='width:20px;height:60px' /></div>");
				break;
			case "button11":
				$("#content").append("<div class='draggable'><img src='assets/symbols/sixteenthrest.png' alt='' style='width:20px;height:60px' /></div>");
				break;
			case "button12":
				$("#content").append("<div class='draggable'><img src='assets/symbols/wholerest.png' alt='' style='width:25px;height:15px' /></div>");
				break;
			case "button13":
				$("#content").append("<div class='draggable'><img src='assets/symbols/halfrest.png' alt='' style='width:25px;height:15px' /></div>");
				break;
			case "button14":
				$("#content").append("<div class='draggable'><img src='assets/symbols/22.png' alt='' style='width:20px;height:60px' /></div>");
				break;
			case "button15":
				$("#content").append("<div class='draggable'><img src='assets/symbols/24.png' alt='' style='width:20px;height:60px' /></div>");
				break;
			case "button16":
				$("#content").append("<div class='draggable'><img src='assets/symbols/34.png' alt='' style='width:20px;height:60px' /></div>");
				break;
			case "button17":
				$("#content").append("<div class='draggable'><img src='assets/symbols/38.png' alt='' style='width:20px;height:60px' /></div>");
				break;
			case "button18":
				$("#content").append("<div class='draggable'><img src='assets/symbols/44.png' alt='' style='width:20px;height:60px' /></div>");
				break;
			case "button19":
				$("#content").append("<div class='draggable'><img src='assets/symbols/68.png' alt='' style='width:20px;height:60px' /></div>");
				break;
			case "button20":
				$("#content").append("<div class='draggable'><img src='assets/symbols/98.png' alt='' style='width:20px;height:60px' /></div>");
				break;
			case "button21":
				$("#content").append("<div class='draggable'><img src='assets/symbols/128.png' alt='' style='width:30px;height:60px' /></div>");
				break;
			case "button22":
				$("#content").append("<div class='draggable'><img src='assets/symbols/flat.png' alt='' style='width:10px;height:20px' /></div>");
				break;
			case "button23":
				$("#content").append("<div class='draggable'><img src='assets/symbols/doubleflat.png' alt='' style='width:20px;height:20px' /></div>");
				break;
			case "button24":
				$("#content").append("<div class='draggable'><img src='assets/symbols/natural.png' alt='' style='width:10px;height:20px' /></div>");
				break;
			case "button25":
				$("#content").append("<div class='draggable'><img src='assets/symbols/sharp.png' alt='' style='width:10px;height:20px' /></div>");
				break;
			case "button26":
				$("#content").append("<div class='draggable'><img src='assets/symbols/doublesharp.png' alt='' style='width:20px;height:20px' /></div>");
				break;
			case "button27":
				$("#content").append("<div class='draggable'><img src='assets/symbols/piano.png' alt='' style='width:20px;height:30px' /></div>");
				break;
			case "button28":
				$("#content").append("<div class='draggable'><img src='assets/symbols/pianissimo.png' alt='' style='width:40px;height:30px' /></div>");
				break;
			case "button29":
				$("#content").append("<div class='draggable'><img src='assets/symbols/forte.png' alt='' style='width:25px;height:30px' /></div>");
				break;
			case "button30":
				$("#content").append("<div class='draggable'><img src='assets/symbols/fortissimo.png' alt='' style='width:40px;height:30px' /></div>");
				break;
			case "button31":
				$("#content").append("<div class='draggable'><img src='assets/symbols/mezzoforte.png' alt='' style='width:40px;height:30px' /></div>");
				break;
			case "button32":
				$("#content").append("<div class='draggable'><img src='assets/symbols/mezzopiano.png' alt='' style='width:40px;height:25px' /></div>");
				break;
			case "button33":
				$("#content").append("<div class='draggable'><img src='assets/symbols/coda.png' alt='' style='width:20px;height:20px' /></div>");
				break;
			case "button34":
				$("#content").append("<div class='draggable'><img src='assets/symbols/dalsegno.png' alt='' style='width:20px;height:20px' /></div>");
				break;
			case "button35":
				$("#content").append("<div class='draggable'><img src='assets/symbols/slur.png' alt='' style='width:75px;height:20px' /></div>");
				break;
			case "button36":
				$("#content").append("<div class='draggable'><img src='assets/symbols/turn.png' alt='' style='width:75px;height:25px' /></div>");
				break;
			case "button37":
				$("#content").append("<div class='staff'><img src='assets/symbols/staffextrashort.png' alt='' style='width:80%;height:80px' /></div>");
				break;
			case "button38":
				$(".staff")[0].remove();
				break;
			case "button39":
				$("#content").append("<div class='draggable'><img src='assets/symbols/cleftreble.png' alt='' style='width:30px;height:70x' /></div>");
				break;
			case "button40":
				$("#content").append("<div class='draggable'><img src='assets/symbols/clefbass.png' alt='' style='width:30px;height:70x' /></div>");
				break;
			case "button41":
				$("#content").append("<div class='staff'><img src='assets/symbols/staffextrashortwithend.png' alt='' style='width:80%;height:80px' /></div>");
				break;
			case "button42":
				$("#content").append("<div class='staff'><img src='assets/symbols/staffextrashortrepeat.png' alt='' style='width:80%;height:80px' /></div>");
				break;
			default:
				break;
		}
		$(".draggable").draggable({
			//grid: [40, 8]
		});
	});
});
