(function(){
	var usrname;
	var socket=io('http://172.24.32.43');
	socket.emit('index',{});
	var app=angular.module('Module',[]);
	app.controller('login',function(){
		this.username;
		this.password;
		this.submit=function(){
			socket.emit('authentication',{username: this.username, password: this.password});
			socket.on('invalid',function f(){
				document.getElementById('invlid').style.display="block";
				this.username="";
				this.password="";
			});
			socket.on('valid',function f(){
				usrname=this.username;
				window.open("home.html","_self");
			});
		};
	});



})();
