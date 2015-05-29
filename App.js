function App ()	{
	this.getFlashObject = function(argument) {
		var obj = document.getElementById('flash-container');
		getMovie('flash-container').reload();
	};
	
	this.createObjectTag = function() {
		var obj = document.createElement('object');
		document.body.appendChild(obj);
	};
	
	this.getMovie = function(movieName) {
	    if (navigator.appName.indexOf("Microsoft") != -1) {
	        return window[movieName];
	    } else {
	        return document[movieName];
	    }
	}
};