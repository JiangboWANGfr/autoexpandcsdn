$(function(){
	var count = 10;
	
	function expand(){
		var ok = false;
		var e = $('.hide-article-box');
		if(e.length > 0){
			ok = true;
			e.remove();
			$('#article_content').removeAttr('style');
		}
		
		console.log("expand", ok, count);
		
		if(!ok && --count){
			setTimeout(expand, 500);
		}
	}
	
	expand();
});