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
	imageUrl: 'http://www.sorocabavirtual.com/b3/maca/img/as-macas.jpg'
},
{
	title: 'My first odd Post',
	text: 'Hendrik\'s answer in the comments above will work but probably isn',
	cor: 3,
	imageUrl: 'https://melhorcomsaude.com/wp-content/uploads/2013/10/mamao-fruta-extraordinaria-500x332.jpg'
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