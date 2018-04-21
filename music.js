	$("#volume").slider({
  	min: 0,
  	max: 100,
  	value: 0,
		range: "min",
  	slide: function(event, ui) {
    	setVolume(ui.value / 100);
  	}
	});
	
	var myMedia = document.createElement('audio');
	$('#player').append(myMedia);
	myMedia.id = "myMedia";

	var audiofile = 'video_3.mp3';
	playAudio(audiofile, 0);
	
	function playAudio(fileName, myVolume) {
			myMedia.src = fileName;
			myMedia.setAttribute('loop', 'loop');
    	setVolume(myVolume);
    	myMedia.play();
	}
	
	function setVolume(myVolume) {
    var myMedia = document.getElementById('myMedia');
    myMedia.volume = myVolume;
	}


