
$(document).ready(function() {
	
	function changeAudio(sourceUrl) {
			var audio = $("#audioplayer");      
			console.log(sourceUrl);
			$("#audiosource").attr("src", sourceUrl);
			/****************/
			audio[0].pause();
			audio[0].load();//suspends and restores all audio element

			//audio[0].play(); changed based on Sprachprofi's comment below
			audio[0].oncanplaythrough = audio[0].play();
			/****************/
		}
		
	
		
	
	// $("#volume").slider({
  	// min: 0,
  	// max: 100,
  	// value: 0,
		// range: "min",
  	// slide: function(event, ui) {
    	// // setVolume(ui.value / 100);
		// $("#audioplayer").volume(ui.value/100);
		
  	// }
	// });
	
	// var myMedia = document.createElement('audio');
	// $('#player').append(myMedia);
	// myMedia.id = "myMedia";

	// var audiofile = 'video_3.mp3';
	// playAudio(audiofile, 0);
	
	// function playAudio(fileName, myVolume) {
			// myMedia.src = fileName;
			// myMedia.setAttribute('loop', 'loop');
    	// setVolume(myVolume);
    	// myMedia.play();
	// }
	
	// function setVolume(myVolume) {
    // var myMedia = document.getElementById('myMedia');
    // myMedia.volume = myVolume;
	// }
	
	$("#aromabtn").click(function() {
		var cat = $("#aromabtn").val();
		var randNumber = Math.floor((Math.random() * 5) + 1);
		var music = cat + randNumber + '.mp3';
		console.log(music);
		changeAudio(music);
			
	});
	
	
	$("#delmar-cincobtn").click(function() {
		var cat = $("#delmar-cincobtn").val();
		var randNumber = Math.floor((Math.random() * 5) + 1);
		var music = cat + randNumber + '.mp3';
		console.log(music);
		changeAudio(music);
			
	});
	
	$("#ibiza-magicbtn").click(function() {
		var cat = $("#ibiza-magicbtn").val();
		var randNumber = Math.floor((Math.random() * 5) + 1);
		var music = cat + randNumber + '.mp3';
		console.log(music);
		changeAudio(music);
			
	});
	
	$("#anti-stressbtn").click(function() {
		var cat = $("#anti-stressbtn").val();
		var randNumber = Math.floor((Math.random() * 5) + 1);
		var music = cat + randNumber + '.mp3';
		console.log(music);
		changeAudio(music);
			
	});
	
	$("#delmar-classicbtn").click(function() {
		var cat = $("#delmar-classicbtn").val();
		var randNumber = Math.floor((Math.random() * 5) + 1);
		var music = cat + randNumber + '.mp3';
		console.log(music);
		changeAudio(music);
			
	});
	
	$("#spabtn").click(function() {
		var cat = $("#spabtn").val();
		var randNumber = Math.floor((Math.random() * 5) + 1);
		var music = cat + randNumber + '.mp3';
		console.log(music);
		changeAudio(music);
			
	});
	
	
});
	
	
	


