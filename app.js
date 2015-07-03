
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



$scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };

});


