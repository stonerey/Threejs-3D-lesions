

/**返回顶部**/
$(function(){
	var $body=$(document.body);
	var $bottomTools=$(".bottom-tools");
	var $qrTools=$(".qr-tool");
	var qrImg=$(".qr-img");
	$(window).scroll(function(){var scrollHeight=$(document).height();var scrollTop=$(window).scrollTop();var $footerHeight=$(".page-footer").outerHeight(true);var $windowHeight=$(window).innerHeight();scrollTop>50?$("#scrollUp").fadeIn(200).css("display","block"):$("#scrollUp").fadeOut(200);$bottomTools.css("bottom",scrollHeight-scrollTop-$footerHeight>$windowHeight?40:$windowHeight+scrollTop+$footerHeight+40-scrollHeight)});$("#scrollUp").click(function(e){e.preventDefault();$("html,body,.main-container").animate({scrollTop:0})});$qrTools.hover(function(){var href = window.location.href.replace("http://www.w3cschool.cn","https://m.w3cschool.cn").replace("http://w3cschool.cn","https://m.w3cschool.cn");if(href == "https://m.w3cschool.cn/"){$(">img", qrImg).attr("src", "/statics/images/w3c/w3cschool.jpg");}else{$(">img", qrImg).attr("src", "images/w3cschool.jpg");}qrImg.fadeIn()},function(){qrImg.fadeOut()})


});












