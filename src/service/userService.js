define([], function(){
	var User = function(){};

	User.prototype.getUserInfo = function(){
		return {
			name: 'zhangsan',
			age: 28,
			email: 'zs@gmail.com'
		}
	};

	return User;
})