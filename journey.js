
File.indexOf = function(term){
	for(var index in File.list){
		var file = File.list[index];
		if (file.equals(term) || file.url === term || file.object === term) {
			return index;
		}
	}
	return -1;
};
