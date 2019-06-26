window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = (e) => { 
	if(e.results[0].isFinal)
		document.body.innerHTML = ( e.results[0][0].transcript  );
};

recognition.onaudiostart = e => {
  console.log("audio capture started");
}

recognition.onaudioend = e => {
  console.log("audio capture ended");
}


const audio = new Audio();
audio.src = "brasil.ogg";
audio.preload = "auto";
audio.volume = 0.2 ;

audio.oncanplay = () => {
	console.log('ready');
}

audio.onended = () => {
	recognition.stop();
}

document.body.innerHTML = "Clique em qualquer lugar na página...";

document.addEventListener("click",function(){
	recognition.start();
	audio.play();
});
