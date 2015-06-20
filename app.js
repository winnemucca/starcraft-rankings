
angular.module('myApp',['ui.bootstrap','angularUtils.directives.dirPagination'])
.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('app/bower_components/angular-utils-pagination/dirPagination.tpl.html');
})
.controller('MainCtrl',function($scope,$http) {

$http.get('rankings.json').success(function(data) {
	console.log('success');

	$scope.currentPage = 1;
	$scope.pageSize = 10;


	var columns = data.cols;
	var rows = data.data;
	console.log(columns);
	var newarray = [];
	for(var y = 0; y<rows.length; y++) {
		var newObject = {};
		for (var i = 0; i < columns.length; i++) {
			newObject[columns[i]] = rows[y][i];
		}
		newarray.push(newObject);
	}
	// console.log(newarray);


	$scope.userDescriptions=newarray;
	console.log($scope.userDescriptions);



});

})

.controller('PaginationDemoCtrl', function ($scope, $log) {
  $scope.totalItems = 64;
  $scope.currentPage = 4;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;
});


