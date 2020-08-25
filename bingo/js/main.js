$(function() {
	// BINGO
	//

	$("button#bingono").click(function(){
		console.log($("input#n").val);
		$("button.field").removeClass('clicked');
		$("ul#callednumbers").text('');
		$.getJSON("bingono?all", function(numbers, status){
			$.each(numbers, function(index, number){
				$("ul#callednumbers").append($('<li>', {text: number} ).addClass('hidden').addClass('test')) 
			});
		});
		$("button#bingonext").removeClass('hidden');
	});

	$("button#bingonext").click(function(){
		console.log('f' + $("li.test.hidden").first().text());
		var f = 'f' + $("li.test.hidden").first().text();
		$('#'+f).addClass('clicked');
		console.log(f);
		$("li.test.hidden").first().removeClass('hidden');
	});

	$("button.field").click(function(){
		$(this).toggleClass('clicked');	
	});
	$("button#bingosheet").click(function(){
		$.getJSON("bingono", function(data, status){
			console.log("Data: " + data.n + "\nStatus: " + status);
			$("button.field").removeClass('clicked');
			$("button#f1").text(data.n[0]);
			$("button#f2").text(data.n[1]);
			$("button#f3").text(data.n[2]);
			$("button#f4").text(data.n[3]);
			$("button#f5").text(data.n[4]);
			$("button#f6").text(data.n[5]);
			$("button#f7").text(data.n[6]);
			$("button#f8").text(data.n[7]);
			$("button#f9").text(data.n[8]);
			$("button#f10").text(data.n[9]);
			$("button#f11").text(data.n[10]);
			$("button#f12").text(data.n[11]);
			$("button#f13").text(data.n[12]);
			$("button#f14").text(data.n[13]);
			$("button#f15").text(data.n[14]);
			$("button#f16").text(data.n[15]);
			$("button#f17").text(data.n[16]);
			$("button#f18").text(data.n[17]);
			$("button#f19").text(data.n[18]);
			$("button#f20").text(data.n[19]);
			$("button#f21").text(data.n[20]);
			$("button#f22").text(data.n[21]);
			$("button#f23").text(data.n[22]);
			$("button#f24").text(data.n[23]);
			$("button#f25").text(data.n[24]);
		});
	}); 
});
