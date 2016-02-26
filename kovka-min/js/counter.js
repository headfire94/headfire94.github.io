var myDate = new Date();
function returnEndDate(y,m,d,h,m){
	myDate.setDate(myDate.getFullYear()+y);
	myDate.setDate(myDate.getMonth()+m);
	myDate.setDate(myDate.getDate()+d);
	myDate.setHours(myDate.getHours()+h);
	myDate.setMinutes(myDate.getMinutes()+m);
	return myDate;
}

var dateForCookie1 = new Date();
var cookieMins1 = 1440;
dateForCookie1.setTime(dateForCookie1.getTime() + (cookieMins1 * 60 * 1000));

if($.cookie("timer2")){
	var dateEnd2 = $.cookie("timer2");
}else{
	var dateEnd2 = returnEndDate(0,0,0,24,0);
    $.cookie("timer2", dateEnd2, {expires: dateForCookie1});
}


dateEnd = new Date(dateEnd2);
var year = dateEnd.getFullYear(),
	month = dateEnd.getMonth() + 1,
	day = dateEnd.getDate(),
	hour= dateEnd.getHours(),
	minute= dateEnd.getMinutes(),
	sec= 0;

month = --month;
var dateFuture = new Date(year, month, day, hour, minute, sec);

function CountBox() {
	var dateNow = new Date;
	var amount = dateFuture.getTime() - dateNow.getTime() + 5;
	delete dateNow;
	if (amount < 0) {
		var out = "<div class='countbox-num'><div id='countbox-hours1'>0</div><div id='countbox-hours2'>0</div></div>" + "<div class='countbox-space'></div>" + "<div class='countbox-num'><div id='countbox-mins1'>0</div><div id='countbox-mins2'>0</div></div>" + "<div class='countbox-space'></div>" + "<div class='countbox-num'><div id='countbox-secs1'>0</div><div id='countbox-secs2'>0</div></div>";
		document.getElementById("countbox").innerHTML = out;
	} else {
		var hours = 0,
			hours1 = 0,
			hours2 = 0,
			mins = 0,
			mins1 = 0,
			mins2 = 0,
			secs = 0,
			secs1 = 0,
			secs2 = 0,
			out = "";
		amount = Math.floor(amount / 1e3);
		amount = amount % 86400;
		hours = Math.floor(amount / 3600);
		hours1 = (hours >= 10) ? hours.toString().charAt(0) : '0';
		hours2 = (hours >= 10) ? hours.toString().charAt(1) : hours.toString().charAt(0);
		amount = amount % 3600;
		mins = Math.floor(amount / 60);
		mins1 = (mins >= 10) ? mins.toString().charAt(0) : '0';
		mins2 = (mins >= 10) ? mins.toString().charAt(1) : mins.toString().charAt(0);
		amount = amount % 60;
		secs = Math.floor(amount);
		secs1 = (secs >= 10) ? secs.toString().charAt(0) : '0';
		secs2 = (secs >= 10) ? secs.toString().charAt(1) : secs.toString().charAt(0);
		out = "<div class='countbox-num'>00</div><div class='countbox-num'><div class='countbox-hours1'>" + hours1 + "</div><div class='countbox-hours2'>" + hours2 + "</div></div>"  + "<div class='countbox-num'><div class='countbox-mins1'>" + mins1 + "</div><div class='countbox-mins2'>" + mins2 + "</div></div>" +  "<div class='countbox-num'><div class='countbox-secs1'>" + secs1 + "</div><div class='countbox-secs2'>" + secs2 + "</div></div>";
		document.getElementById("countbox").innerHTML = out;
		setTimeout("CountBox()", 1e3)
	}
}

window.onload = function () {
	CountBox()
};