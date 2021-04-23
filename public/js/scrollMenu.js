/**
 *  實踐無障礙網站 https://ithelp.ithome.com.tw/articles/10218749
 *  深入理解javascript中的焦点管理	
 *	https://www.cnblogs.com/xiaohuochai/p/5874447.html
 */
 
 var isOpen=false;
 //偵測瀏覽器版本
 var browser = navigator.appName;
 if(browser === "Netscape"){//如果瀏覽器是 Netscape or fireFox
 	//開始監聽鍵盤動作
 	document.captureEvents(Event.KEYDOWN);
 	document.onkeydown=function(event){
 		 //目前focus的物件
 		var focusedElement = document.activeElement //[注意]activeElement该属性IE浏览器不支持
 		document.getElementById("logcontent").textContent=""+focusedElement.id;
 		var tabIndex = focusedElement.tabIndex;
 		switch(event.which){
 			case 38: //上
                tabIndex--;
                break;
            case 40: //下
                // focus next input elements
		       tabIndex++;
                break;
            case 37: //左(會導致輸入時無法使用左右移)
                document.getElementById("member").focus();
                openNav();
                break;
            case 39: //右(會導致輸入時無法使用左右移)
                 document.getElementById("button").focus();
                 closeNav();
                break;
            default:
                return;
 		}
 		document.getElementById("logcontent2").innerHTML=document.getElementById("logcontent2").textContent+"; <br>"+tabIndex;
 		if (tabIndex >= 0) {
 			var nextFocus;
 			var tabbables = document.getElementById("mySidenav"); //get all tabable elements
		    for(var i=0; i<tabbables.childElementCount; i++) { //loop through each element
		        if(tabbables.children[i].children[0].tabIndex == (tabIndex)) { //check the tabindex to see if it's the element we want
		        	nextFocus = tabbables.children[i].children[0];
		            nextFocus.focus(); //if it's the one we want, focus it and exit the loop
		            break;
		        }
		    }
            document.getElementById("logcontent2").innerHTML=document.getElementById("logcontent2").textContent+"; <br>"+nextFocus.id;
            return false;
        }
 	}
 }else{
 	
 }
 

 	function OpenOrClose(){
 		var mySidenav = document.getElementById("mySidenav");
 		var w = mySidenav.style.width;
 		console.log("打開側欄w:"+w);    
 		if(w == "250px"){
 			 console.log("打開側欄");      
 			 closeNav();
 		}else{
 			console.log("關閉側欄"); 
 			openNav() ;
 		}
 	}
	/*打開側欄，修改側欄寬度，主體左跨度、背景透明度*/
	    function openNav() {
	        document.getElementById("mySidenav").style.width = "250px";
			document.getElementById("main").style.marginLeft = "250px";
			document.getElementById("logcontent2").textContent="";
	    }
	    /*關閉側欄，恢復原始側欄寬度，主體左跨度、背景透明度*/
	    function closeNav() {
			document.getElementById("mySidenav").style.width = "20px";
			document.getElementById("main").style.marginLeft = "20px";
			document.getElementById("logcontent2").textContent="";
	    }
	/*顯示現在時間 */
		function displayDate(){
			document.getElementById("demo").innerHTML=Date()+ " 使用瀏覽器："+browser.concat();
		}
		
		function memberOnClick(){
			console.log("js列印 會員專區被點擊 Log 出來");      
			var rank =document.getElementById("rank");
			rank.focus();
		}
		
		function recommendOnClick(){
			console.log("js列印 推薦頁 被點擊 Log 出來");      
		}
		
		function onselect(){
			console.log("js列印 會員專區被選擇 Log 出來");      
		}