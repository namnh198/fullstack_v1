var btnPr_Bar = document.getElementById('btnPr_Bar');
var progressbar = document.getElementById('progressbar');
var txtPr_Bar = document.getElementById('txtPr_Bar');

var controlBox = document.getElementById('controlBox');
var rangCtrlBox = document.getElementById('rangCtrlBox');

var width = 0;
var progressBar = null;

function runProgressBar() {
	if(width >=100) {
		btnPr_Bar.innerHTML = "Reset";
		clearInterval(progressBar);
	} else {
		width++;
		progressbar.style.width= width + "%";
		txtPr_Bar.innerHTML= width + "%";
	}
}

function startProgressBar() {
	if(btnPr_Bar.innerHTML == 'Reset') {
		clearInterval(progressBar);
		width = 0;
		progressBar = setInterval(runProgressBar, 100);
	}
	else if (btnPr_Bar.innerHTML == 'Start') {
		clearInterval(progressBar);
		btnPr_Bar.innerHTML = 'Stop';
		progressBar = setInterval(runProgressBar, 100);
	}
	else if(btnPr_Bar.innerHTML == 'Stop') {
		clearInterval(progressBar);
		btnPr_Bar.innerHTML = 'Continue';
	}
	else if(btnPr_Bar.innerHTML == 'Continue') {
		btnPr_Bar.innerHTML = 'Stop';
		progressBar = setInterval(runProgressBar, 100);
	}
}

function ctrlBox(value) {
	var box_w = document.getElementsByClassName('ctrl_box')[0].offsetWidth;
	var box_w = box_w - controlBox.offsetWidth;

	marginLeft = (box_w * value) / 100;
	controlBox.style.left = marginLeft + 'px';
	controlBox.innerHTML = value + '%';
}

btnPr_Bar.onclick = function(){
	startProgressBar();
}

rangCtrlBox.oninput = function() {
	ctrlBox(rangCtrlBox.value);
}