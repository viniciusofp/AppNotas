var app = angular.module('myBlog', []);

app.controller('BlogContrl', ['$scope', function($scope){
	$scope.siteTitle = 'Hello';

	$scope.posts = archive;
	$scope.post = function(post){
		var newPost = { 
			title: $scope.title,
			text: $scope.text,
			cor: $scope.cor,
			imageUrl: $scope.imageUrl,
			createdAt: Date.now()
		}
		archive.push(newPost);
		$scope.title = '';
		$scope.text = '';
		$scope.imageUrl = '';

	}
	$scope.removerNota = function(post){
		console.log(archive.indexOf(post))
		archive.splice(archive.indexOf(post), 1);

	}
}]);

var archive = [{
	createdAt: 1480937608894,
	title: 'My first even Post',
	text: 'Hendrik\'s answer in the comments above will work but probably isn',
	cor: 1,
	imageUrl: 'http://bs.simplusmedia.com/i/730/838/banana-beneficios.jpg'
},
{
	createdAt: 1480937608894,
	title: 'My first odd Post',
	text: 'Hendrik\'s answer in the comments above will work but probably isn',
	cor: 2,
	imageUrl: 'http://www.saudedica.com.br/wp-content/uploads/2014/05/Benef%C3%ADcios-da-Ma%C3%A7%C3%A3.jpg'
},
{
	createdAt: 1480937608894,
	title: 'My first odd Post',
	text: 'Hendrik\'s answer in the comments above will work but probably isn',
	cor: 3,
	imageUrl: 'http://viniciusofp.com.br/wp-content/uploads/2016/03/olmoemcartazcapa-700x259.jpg'
},
{
	createdAt: 1480937608894,
	title: 'My first odd Post',
	text: 'Hendrik\'s answer in the comments above will work but probably isn',
	cor: 4
},
{
	createdAt: 1480937608894,
	title: 'My first odd Post',
	text: 'Hendrik\'s answer in the comments above will work but probably isn',
	cor: 5
}];