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
	
	cor:"3"
	createdAt:1480879288715
	imageUrl:"http://vaidape.com.br/wp-content/uploads/2016/11/05-704x420.jpg"
	text:"Tá afim de aproveitar seu sábado com adrenalina? Se você curte um role de skate ou se amarra em ver as manobras da galera, não deixe de passar no CEU Butantã no sabadão,  dia 10 de dezembro."
	title:"CEU Butantã recebe festival de música e skate na pista do Butanclan"
},
{
	cor:"2"
	createdAt:1480879345347
	imageUrl:"http://vaidape.com.br/wp-content/uploads/2016/11/MAR%C3%83IWATS%C3%89D%C3%89_02-6-1280x420.jpg"
	text: "Na manhã desta quinta-feira (24), no Museu do Índio, no bairro de Botafogo, no Rio de Janeiro (RJ), aconteceu a abertura do Lançamento do Plano de Gestão da Terra Indígena Marãiwatsédé, retomada definitivamente pelo povo Xavante quase 50 anos depois da expulsão da população de seu território original.↵↵O Plano de Gestão é um documento que serve para melhorar a articulação e o diálogo dos Xavante com as instituições responsáveis pelo mapeamento, fiscalização e vigilância das terras. Além disso, publicação organiza e sistematiza um modelo produção e de vida que garanta a sustentabilidade e a diversidade ainda existente na região."
	title:"Marãiwatsédé: a história de luta do povo Xavante no Mato Grosso não terminou"
},
{cor:""createdAt:1480879377466imageUrl:"http://vaidape.com.br/wp-content/uploads/2016/11/09_churrasco-1280x420.jpg"text:"A série Afro-Feminista é uma homenagem à mistura de duas forças emancipadoras: feminismo e cultura afro. A mulher negra no Brasil e no mundo é refém do racismo e misoginia. Ela enfrenta uma grande variedade de questões, incluindo abuso sexual, violência doméstica, violência policial, os estereótipos culturais, a desigualdade de renda, a falta de cuidados de saúde e educação, etc.↵↵Ela é sub-representada na política e na mídia e tem tomado recentemente sua luta para as ruas, às redes sociais, na música mainstream e festivais de arte. O coletivo kolor rio participa deste movimento via provocação visual."title:"Série fotográfica ‘Afro-feminista’ é uma provocação visual ao racismo e misognia"
},
{cor:"5"createdAt:1480879427844imageUrl:"http://vaidape.com.br/wp-content/uploads/2016/11/2tamborcaraca-1056x1080.jpg"text:"A Companhia Caracaxá realizará um cortejo de celebração dos 13 anos de estrada no próximo sábado (3), no bairro do Butantã. O grupo trabalha a linguagem do maracatu de baque virado, manifestação popular da região litorânea do estado de Pernambuco. A concentração do evento está marcada para às 12h e a saída do cortejo prevista para às 16h, na rua Dr. Cícero de Alencar 122, entre a avenida Corifeu de Azevedo Marques e o início da Rodovia Raposo Tavares."title:"Cia. Caracaxá comemora seus 13 anos de maracatu no bairro do Butantã"
}];

