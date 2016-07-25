define([], function(){
	var Book = function(){};

	Book.prototype.getAll = function(){
		return [{name:'Pro Javascript'},{name:'Pro AngularJs'}];
	};

	return Book;
});