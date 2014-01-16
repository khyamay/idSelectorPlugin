$.fn.logID = function () {
	return this.each(function(){
		console.log(this.id);
	});
};