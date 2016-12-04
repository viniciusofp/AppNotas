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
	$scope.removerNota = function(i){
		console.log(i)
		archive.splice(i, 1);
	}
}]);

var archive = [{
	title: 'My first even Post',
	text: 'Hendrik\'s answer in the comments above will work but probably isn',
	cor: 1,
	imageUrl: 'http://bs.simplusmedia.com/i/730/838/banana-beneficios.jpg'
},
{
	title: 'My first odd Post',
	text: 'Hendrik\'s answer in the comments above will work but probably isn',
	cor: 2,
	imageUrl: 'http://www.saudedica.com.br/wp-content/uploads/2014/05/Benef%C3%ADcios-da-Ma%C3%A7%C3%A3.jpg'
},
{
	title: 'My first odd Post',
	text: 'Hendrik\'s answer in the comments above will work but probably isn',
	cor: 3,
	imageUrl: 'http://viniciusofp.com.br/wp-content/uploads/2016/03/olmoemcartazcapa-700x259.jpg'
},
{
	title: 'My first odd Post',
	text: 'Hendrik\'s answer in the comments above will work but probably isn',
	cor: 4
},
{
	title: 'My first odd Post',
	text: 'Hendrik\'s answer in the comments above will work but probably isn',
	cor: 5
}];