var r;
var currentId;
var count=0;

function RandomNo(){
	r= Math.floor(Math.random() * 6) + 1;
	document.getElementById("DiceY").innerText=r;
	var child1=document.getElementById("Goti5");
	document.getElementById("result").innerText="";
	
	if(r==6 && document.getElementById("Goti5").parentNode.id=="C5" &&  document.getElementById("Goti6").parentNode.id=="C6" && document.getElementById("Goti7").parentNode.id=="C7" && document.getElementById("Goti8").parentNode.id=="C8")
	{
		
		document.getElementById("Goti5").classList.add("enable");
		document.getElementById("Goti5").addEventListener("click", start);
			
	}
	else if(r==6 && document.getElementById("Goti6").parentNode.id=="C6" && document.getElementById("Goti7").parentNode.id=="C7" && document.getElementById("Goti8").parentNode.id=="C8")
	{
		document.getElementById("Goti6").classList.add("enable");
		document.getElementById("Goti5").classList.add("enable");
		document.getElementById("Goti6").addEventListener("click", start);

	}
	else if(r==6 && document.getElementById("Goti7").parentNode.id=="C7" && document.getElementById("Goti8").parentNode.id=="C8")
	{
		document.getElementById("Goti7").classList.add("enable");
		document.getElementById("Goti6").classList.add("enable");
		document.getElementById("Goti5").classList.add("enable");
		document.getElementById("Goti7").addEventListener("click", start);
	}
	else if(r==6 && document.getElementById("Goti8").parentNode.id=="C8")
	{
		document.getElementById("Goti8").classList.add("enable");
		document.getElementById("Goti7").classList.add("enable");
		document.getElementById("Goti6").classList.add("enable");
		document.getElementById("Goti5").classList.add("enable");
		document.getElementById("Goti8").addEventListener("click", start);

	}
	else
	{
		if(document.getElementById("Goti6").parentNode.id=="C6" && document.getElementById("Goti7").parentNode.id=="C7" && document.getElementById("Goti8").parentNode.id=="C8")
		{
		document.getElementById("Goti5").classList.add("enable");
		document.getElementById("Goti6").classList.remove("enable");
		document.getElementById("Goti7").classList.remove("enable");
		document.getElementById("Goti8").classList.remove("enable");
		}
		else if(document.getElementById("Goti7").parentNode.id=="C7" && document.getElementById("Goti8").parentNode.id=="C8")
		{
			
		document.getElementById("Goti6").classList.add("enable");
		document.getElementById("Goti5").classList.add("enable");
		document.getElementById("Goti7").classList.remove("enable");
		document.getElementById("Goti8").classList.remove("enable");
		}
		else if(document.getElementById("Goti8").parentNode.id=="C8")
		{
			document.getElementById("Goti7").classList.add("enable");
		document.getElementById("Goti6").classList.add("enable");
		document.getElementById("Goti5").classList.add("enable");
		document.getElementById("Goti8").classList.remove("enable");
		}
		else
		{
			document.getElementById("Goti7").classList.add("enable");
		document.getElementById("Goti6").classList.add("enable");
		document.getElementById("Goti5").classList.add("enable");
		document.getElementById("Goti8").classList.add("enable");
		}	
		document.getElementById("DiceY2").classList.remove("disable");
		document.getElementById("DiceY").classList.add("disable");
		
	}	

}

function start(squar){
		var append=document.getElementById("P1");
		var child=document.getElementById(squar.target.id);
		append.appendChild(child);
		document.getElementById(squar.target.id).removeEventListener('click',start);
		document.getElementById(squar.target.id).addEventListener("click", moveTo);
		document.getElementById("DiceY").classList.remove("disable");
		document.getElementById("DiceY").innerText="Roll the Dice";
		document.getElementById("Goti5").classList.remove("enable");
		document.getElementById("Goti6").classList.remove("enable");
		document.getElementById("Goti7").classList.remove("enable");
		document.getElementById("Goti8").classList.remove("enable");
}


	



function moveTo(sqr) {
	
	var child=document.getElementById(sqr.target.id);
	let temp=child.parentNode.id;
	let parent=document.getElementById(temp);
	currentId=parseInt(temp.slice(1));
	let nextCell;
	
	
	if (temp[0]=="P" ) 
	{	currentId=currentId+r;
	
		if (currentId<=51) {
			
			nextCell="P"+currentId.toString();
			
		}
		else if (currentId==52) {
			nextCell="Y1"
		}
		else if (currentId==53) {
			nextCell="Y2"
		}
		else if (currentId==54) {
			nextCell="Y3"
		}
		else if (currentId==55) {
			nextCell="Y4"
		}
		else if (currentId==56) {
			nextCell="Y5"
		}
		else if (currentId==57) {
			document.getElementById("result").innerText="PLAYER1 WON";
			document.getElementById("LudoGame").classList.add("disable");
		parent.removeChild(child);
		}
		else
		{

		}
		var append=document.getElementById(nextCell);
		append.appendChild(child);
		document.getElementById(sqr.target.id).classList.remove("enable");
		document.getElementById("DiceY").classList.remove("disable");
		document.getElementById("DiceY").innerText="Roll the Dice";
		document.getElementById("Goti5").classList.remove("enable");
		document.getElementById("Goti6").classList.remove("enable");
		document.getElementById("Goti7").classList.remove("enable");
		document.getElementById("Goti8").classList.remove("enable");

	
	}
	else if (temp[0]=="Y"  )
	 {

		currentId=currentId+r;
		if (currentId<=5) {
		nextCell="Y"+currentId.toString();
		var append=document.getElementById(nextCell);
		append.appendChild(child);
		document.getElementById(sqr.target.id).classList.remove("enable");
		document.getElementById("DiceY").classList.remove("disable");
		document.getElementById("DiceY").innerText="Roll the Dice";
		document.getElementById("Goti5").classList.remove("enable");
		document.getElementById("Goti6").classList.remove("enable");
		document.getElementById("Goti7").classList.remove("enable");
		document.getElementById("Goti8").classList.remove("enable");
	
		}
		else if (currentId==6) {
			document.getElementById("result").innerText="PLAYER1 WON";
			document.getElementById("LudoGame").classList.add("disable");
			
		parent.removeChild(child);
		
		
		document.getElementById(sqr.target.id).classList.remove("enable");
		document.getElementById("DiceY").classList.remove("disable");
		document.getElementById("DiceY").innerText="Roll the Dice";
		document.getElementById("Goti5").classList.remove("enable");
		document.getElementById("Goti6").classList.remove("enable");
		document.getElementById("Goti7").classList.remove("enable");
		document.getElementById("Goti8").classList.remove("enable");
	
		}
		else
		{
			document.getElementById(sqr.target.id).classList.remove("enable");
		}
	}
		
	document.getElementById("DiceY2").classList.remove("disable");
		document.getElementById("DiceY").classList.add("disable");
		document.getElementById("DiceY").innerText="PLAYER2 TURN";
		document.getElementById("DiceY2").innerText="Roll The Dice";

}



var r2;
var currentId2;

function RandomNo2(){
	r2= Math.floor(Math.random() * 6) + 1;
	document.getElementById("DiceY2").innerText=r2;
	var child12=document.getElementById("Goti1");
	document.getElementById("result").innerText="";
	
	if(r2==6 && document.getElementById("Goti1").parentNode.id=="C9" &&  document.getElementById("Goti2").parentNode.id=="C10" && document.getElementById("Goti3").parentNode.id=="C11" && document.getElementById("Goti4").parentNode.id=="C12")
	{
		
		document.getElementById("Goti1").classList.add("enable");
		document.getElementById("Goti1").addEventListener("click", start2);
			
	}
	else if(r2==6 && document.getElementById("Goti2").parentNode.id=="C10" && document.getElementById("Goti3").parentNode.id=="C11" && document.getElementById("Goti4").parentNode.id=="C12")
	{
		document.getElementById("Goti1").classList.add("enable");
		document.getElementById("Goti2").classList.add("enable");
		document.getElementById("Goti2").addEventListener("click", start2);

	}
	else if(r2==6 && document.getElementById("Goti3").parentNode.id=="C11" && document.getElementById("Goti4").parentNode.id=="C12")
	{
		document.getElementById("Goti1").classList.add("enable");
		document.getElementById("Goti2").classList.add("enable");
		document.getElementById("Goti3").classList.add("enable");
		document.getElementById("Goti3").addEventListener("click", start2);
	}
	else if(r2==6 && document.getElementById("Goti4").parentNode.id=="C12")
	{
		document.getElementById("Goti1").classList.add("enable");
		document.getElementById("Goti2").classList.add("enable");
		document.getElementById("Goti3").classList.add("enable");
		document.getElementById("Goti4").classList.add("enable");
		document.getElementById("Goti4").addEventListener("click", start2);

	}
	else
	{
		if(document.getElementById("Goti2").parentNode.id=="C10" && document.getElementById("Goti3").parentNode.id=="C11" && document.getElementById("Goti4").parentNode.id=="C12")
		{
		document.getElementById("Goti1").classList.add("enable");
		document.getElementById("Goti2").classList.remove("enable");
		document.getElementById("Goti3").classList.remove("enable");
		document.getElementById("Goti4").classList.remove("enable");
		}
		else if(document.getElementById("Goti3").parentNode.id=="C11" && document.getElementById("Goti4").parentNode.id=="C12")
		{
			
		document.getElementById("Goti1").classList.add("enable");
		document.getElementById("Goti2").classList.add("enable");
		document.getElementById("Goti3").classList.remove("enable");
		document.getElementById("Goti4").classList.remove("enable");
		}
		else if(document.getElementById("Goti4").parentNode.id=="C12")
		{
		document.getElementById("Goti1").classList.add("enable");
		document.getElementById("Goti2").classList.add("enable");
		document.getElementById("Goti3").classList.add("enable");
		document.getElementById("Goti4").classList.remove("enable");
		}
		else
		{
		document.getElementById("Goti1").classList.add("enable");
		document.getElementById("Goti2").classList.add("enable");
		document.getElementById("Goti3").classList.add("enable");
		document.getElementById("Goti4").classList.add("enable");
		}
		document.getElementById("DiceY").classList.remove("disable");
		document.getElementById("DiceY2").classList.add("disable");	

	}	

}

function start2(squar){
		var append2=document.getElementById("P27");
		var child2=document.getElementById(squar.target.id);
		append2.appendChild(child2);
		document.getElementById(squar.target.id).removeEventListener('click',start2);
		document.getElementById(squar.target.id).addEventListener("click", moveTo2);
		document.getElementById("DiceY2").classList.remove("disable");
		document.getElementById("DiceY2").innerText="Roll the Dice";
		document.getElementById("Goti1").classList.remove("enable");
		document.getElementById("Goti2").classList.remove("enable");
		document.getElementById("Goti3").classList.remove("enable");
		document.getElementById("Goti4").classList.remove("enable");
}


	



function moveTo2(sqr) {

	let nextCell2;
	let append2;

	let child2=document.getElementById(sqr.target.id);
	let temp2=child2.parentNode.id;
	let parent2=document.getElementById(temp2);
	currentId2=parseInt(temp2.slice(1));
	
	if (currentId2>=19 && currentId2<=25){
		currentId2=currentId2+r2;
		if (currentId2<26) {
			nextCell2="P"+currentId2.toString();
		}
		else if (currentId2==26) {
			nextCell2="R1";
		}
		else if(currentId2==27){
			nextCell2="R2";
		}
		else if(currentId2==28){
			nextCell2="R3";
		}
		else if(currentId2==29){
			nextCell2="R4";
		}
		else if(currentId2==30){
			nextCell2="R5";
		}
		else if(currentId2==30){
			nextCell2="R5";
		}else if(currentId2==31){
			document.getElementById("result").innerText="PLAYER2 WON";
			document.getElementById("LudoGame").classList.add("disable");
		}
		append2=document.getElementById(nextCell2);
		append2.appendChild(child2);
		document.getElementById(sqr.target.id).classList.remove("enable");
		document.getElementById("DiceY2").classList.remove("disable");
		document.getElementById("DiceY2").innerText="Roll the Dice";
		document.getElementById("Goti1").classList.remove("enable");
		document.getElementById("Goti2").classList.remove("enable");
		document.getElementById("Goti3").classList.remove("enable");
		document.getElementById("Goti4").classList.remove("enable");
	}
	else if (temp2[0]=="R"  )
	 {

		currentId2=currentId2+r2;
		if (currentId2<=5) {
		nextCell2="R"+currentId2.toString();
		append2=document.getElementById(nextCell2);
		append2.appendChild(child2);
		document.getElementById(sqr.target.id).classList.remove("enable");
		document.getElementById("DiceY2").classList.remove("disable");
		document.getElementById("DiceY2").innerText="Roll the Dice";
		document.getElementById("Goti1").classList.remove("enable");
		document.getElementById("Goti2").classList.remove("enable");
		document.getElementById("Goti3").classList.remove("enable");
		document.getElementById("Goti4").classList.remove("enable");
	
		}
		else if (currentId2==6) {
			document.getElementById("result").innerText="PLAYER2 WON";
			document.getElementById("LudoGame").classList.add("disable");
			
		parent2.removeChild(child2);
		
		
		document.getElementById(sqr.target.id).classList.remove("enable");
		document.getElementById("DiceY2").classList.remove("disable");
		document.getElementById("DiceY2").innerText="Roll the Dice";
		document.getElementById("Goti1").classList.remove("enable");
		document.getElementById("Goti2").classList.remove("enable");
		document.getElementById("Goti3").classList.remove("enable");
		document.getElementById("Goti4").classList.remove("enable");
	
		}
		else
		{
			document.getElementById(sqr.target.id).classList.remove("enable");
		}
	}
	else
	{
		currentId2=currentId2+r2;
		if (currentId2>52) {
		currentId2=currentId2-52;
		}
		nextCell2="P"+currentId2.toString();
		append2=document.getElementById(nextCell2);
		append2.appendChild(child2);
		document.getElementById(sqr.target.id).classList.remove("enable");
		document.getElementById("DiceY2").classList.remove("disable");
		document.getElementById("DiceY2").innerText="Roll the Dice";
		document.getElementById("Goti1").classList.remove("enable");
		document.getElementById("Goti2").classList.remove("enable");
		document.getElementById("Goti3").classList.remove("enable");
		document.getElementById("Goti4").classList.remove("enable");
	}
	
document.getElementById("DiceY").classList.remove("disable");
		document.getElementById("DiceY2").classList.add("disable");	
		document.getElementById("DiceY2").innerText="PLAYER1 TURN";
		document.getElementById("DiceY").innerText="Roll The Dice";

	}
	
	
