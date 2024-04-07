var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("auto play is set to " + video.autoplay)
	console.log("loop is set to " + video.loop)

});

// Plays the video
document.querySelector("#play").addEventListener("click", function() {
	let currentVolume = document.getElementById("slider").value;
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = `${currentVolume}%`;
});

// Pauses the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slows down the video by 10%
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= .90;
	console.log(`Speed is ${video.playbackRate}`)
})

// Speeds up the video by 10%
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate *= 1.10;
	console.log(`Speed is ${video.playbackRate}`)
})

// Skips the video ahead by 10 seconds
document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime < video.duration) {
		video.currentTime += 10;
		console.log(`Video current time is ${video.currentTime}`)
	}
	else {
		video.currentTime = 0;
		console.log(`Video current time is ${video.currentTime}`)
	}
})

// Mutes/unmutes the video
document.querySelector("#mute").addEventListener("click", function() {
	let muteText = document.querySelector("#mute").innerHTML
	if (muteText == "Mute") {
		video.muted = true;
		console.log("Mute");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		console.log("Unmute");
		document.querySelector("#mute").innerHTML = "Mute";
	}
})


// Changes the volume based on the slider and updates volume information
// document.querySelector("#slider").addEventListener("input", function () {
// 	let currentVolume = (document.getElementById("slider").value / 100)
// 	console.log(`The current value is ${currentVolume}`)
// })

document.querySelector("#slider").addEventListener("change", function () {
	const initialVolume = document.getElementById("slider").value / 100;
	let currentVolume = document.getElementById("slider").value / 100;
	document.querySelector("#volume").innerHTML = `${currentVolume*100}%`;
	video.volume = currentVolume;
	console.log(`The current value is ${initialVolume}`)
	console.log(`The current value is ${currentVolume}`)
	console.log(`<span id = "volume">${currentVolume*100}%</span>`)
})

// Applies "old school" styling to the video
document.querySelector("#vintage").addEventListener("click", function() {
	video.className="oldSchool";
	video.style.display="block";
	video.style.margin="0 auto";
})

// Restores "original" styling to the video
document.querySelector("#orig").addEventListener("click", function() {
	video.className="video";
	video.style.filter="none";
	video.style.border_radius="0";
})
