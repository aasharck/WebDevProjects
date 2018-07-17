var bt1 = document.querySelector("#p1button");
var bt2 = document.querySelector("#p2button");
var bt3 = document.querySelector("#reset");
var p1d = document.querySelector("#p1display");
var p2d = document.querySelector("#p2display");
var num = document.querySelector("input");
var para = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var winningscore = 5;
var gameover = false;

bt1.addEventListener("click",function(){
	if(gameover != true)
	{
		p1score++;
		if(p1score == winningscore)
		{
			gameover=true;
			p1d.style.color = "green";
		}
		p1display.textContent = p1score;
	}
})
bt2.addEventListener("click",function(){
	if(gameover != true)
	{
		p2score++;
		if(p2score == winningscore)
		{	
			gameover = true;
			p2d.style.color = "green";
		}
		p2display.textContent = p2score;
	}
})

bt3.addEventListener("click",function(){
	p1score=0;
	p2score=0;
	p1d.textContent = "0";
	p2d.textContent = "0";
	gameover = false;
	p1d.style.color = "black";
	p2d.style.color = "black";
})

num.addEventListener("change", function(){
	para.textContent = input.value;
});
