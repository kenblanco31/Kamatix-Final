

var audio = new Audio('sounds/car_lock.mp3');
//audio.play();

var currentTimer=null;
var selectedTime=25*60*1000;
var ms=selectedTime;

function short_b()
{
	console.log('+5 min');
	//180,000 ms
	clearInterval(currentTimer);
	$('#clock').html(converter(ms));
//	selectedTime=2000;
	selectedTime=5*60*1000;
	ms=selectedTime;
	currentTimer=setInterval(function()
	{
		
		display_b();
		
		console.log(ms);
		if (ms<=0) 
		{
		stop_b();
		audio.play();	
		}
	},1000
	);


}

function long_b()
{
	$('#clock').html(converter(ms));
	console.log('+15 min');
	//900,000 ms
	clearInterval(currentTimer);
	$('#clock').html(converter(ms));
	selectedTime=15*60*1000;
	ms=selectedTime;
	currentTimer=setInterval(function()
	{

		display_b();

		console.log(ms);
		if (ms<=0) 
		{
		stop_b();
		audio.play();	
		}
	},1000
	);

}

function stop_b()
{
	console.log('-current time');
	clearInterval(currentTimer);
	ms=selectedTime;
	display_b();
	console.log(ms);
	audio.pause();
}

function work_b()
{
	$('#clock').html(converter(ms));
	console.log('+25 min');
	//1,500,000 ms
	clearInterval(currentTimer);
	$('#clock').html(converter(ms));
	selectedTime=25*60*1000;
	ms=selectedTime;
	currentTimer=setInterval(function()
	{
		
		display_b();

		console.log(ms);
		if (ms<=0) 
		{
		stop_b();
		audio.play();	
		}
	},1000
	);

}

function display_b()
{
	
	$('#clock').html(converter(ms));
	ms-=1000;
}
function converter(milliseconds){

	var ms = milliseconds,
   		min = (ms/1000/60) << 0,
   		sec = (ms/1000) % 60;

	return min + ":" + (sec==0?"00":(sec<10?"0"+sec:sec));
}
$('#work').click(work_b);
$('#lbreak').click(long_b);
$('#sbreak').click(short_b);
$('#stop').click(stop_b);