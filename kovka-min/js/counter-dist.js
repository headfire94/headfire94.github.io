function returnEndDate(t,e,a,o,e){return myDate.setDate(myDate.getFullYear()+t),myDate.setDate(myDate.getMonth()+e),myDate.setDate(myDate.getDate()+a),myDate.setHours(myDate.getHours()+o),myDate.setMinutes(myDate.getMinutes()+e),myDate}function CountBox(){var t=new Date,e=dateFuture.getTime()-t.getTime()+5;if(delete t,0>e){var a="<div class='countbox-num'><div id='countbox-hours1'>0</div><div id='countbox-hours2'>0</div></div><div class='countbox-space'></div><div class='countbox-num'><div id='countbox-mins1'>0</div><div id='countbox-mins2'>0</div></div><div class='countbox-space'></div><div class='countbox-num'><div id='countbox-secs1'>0</div><div id='countbox-secs2'>0</div></div>";document.getElementById("countbox").innerHTML=a}else{var o=0,n=0,i=0,d=0,s=0,c=0,r=0,u=0,l=0,a="";e=Math.floor(e/1e3),e%=86400,o=Math.floor(e/3600),n=o>=10?o.toString().charAt(0):"0",i=o>=10?o.toString().charAt(1):o.toString().charAt(0),e%=3600,d=Math.floor(e/60),s=d>=10?d.toString().charAt(0):"0",c=d>=10?d.toString().charAt(1):d.toString().charAt(0),e%=60,r=Math.floor(e),u=r>=10?r.toString().charAt(0):"0",l=r>=10?r.toString().charAt(1):r.toString().charAt(0),a="<div class='countbox-num'>00</div><div class='countbox-num'><div class='countbox-hours1'>"+n+"</div><div class='countbox-hours2'>"+i+"</div></div><div class='countbox-num'><div class='countbox-mins1'>"+s+"</div><div class='countbox-mins2'>"+c+"</div></div><div class='countbox-num'><div class='countbox-secs1'>"+u+"</div><div class='countbox-secs2'>"+l+"</div></div>",document.getElementById("countbox").innerHTML=a,setTimeout("CountBox()",1e3)}}var myDate=new Date,dateForCookie1=new Date,cookieMins1=1440;if(dateForCookie1.setTime(dateForCookie1.getTime()+60*cookieMins1*1e3),$.cookie("timer2"))var dateEnd2=$.cookie("timer2");else{var dateEnd2=returnEndDate(0,0,0,24,0);$.cookie("timer2",dateEnd2,{expires:dateForCookie1})}dateEnd=new Date(dateEnd2);var year=dateEnd.getFullYear(),month=dateEnd.getMonth()+1,day=dateEnd.getDate(),hour=dateEnd.getHours(),minute=dateEnd.getMinutes(),sec=0;month=--month;var dateFuture=new Date(year,month,day,hour,minute,sec);window.onload=function(){CountBox()};
