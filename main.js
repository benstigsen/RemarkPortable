var slideshow;

// Load file and read content
function loadFile(event)
{
	var selectedFile = event.target.files[0];

	var reader = new FileReader();
	reader.onload = function(event) {
		document.getElementById('source').innerHTML = event.target.result;
	};
	
	reader.readAsText(selectedFile);
}

// Rebuild slides and delete previous
function loadContent()
{
	document.documentElement.className = '';
	document.body.className = '';

	var x = document.querySelectorAll('div[class^=remark]');

	for (var i = 0; i < x.length; i++)
	{
		(x[i]).parentNode.removeChild(x[i]);
	}

	slideshow = remark.create();
	slideshow.gotoFirstSlide();
}

window.onload = function() {
	// Hide buttons on fullscreen
	var btn_load = document.getElementById('load');
	var btn_file = document.getElementById('file');

	window.addEventListener('resize', function(event){
		if (!window.screenTop && !window.screenY) 
		{
		  btn_load.style.display = "none";
			btn_file.style.display = "none";
		}
		else
		{
			btn_load.style.display = "inline";
			btn_file.style.display = "inline";
		}
	});
};


loadContent();
