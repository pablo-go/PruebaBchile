var app = angular.module("bchApp", ["ui.bootstrap"]);

app.controller("bchController", function($scope) {

	//datos tabla
	var bchsall = [
        {'lorem': 'yyyyyyyyyyyy', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
		{'lorem': 'yyyyyyyyyyyy', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'yyyyyyyyyyyy', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'yyyyyyyyyyyy', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'yyyyyyyyyyyy', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'yyyyyyyyyyyy', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'yyyyyyyyyyyy', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$200.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$100.000'},
        {'lorem': 'xxxxxxxxxxxx', 'ipsum': 'xxxxxxxxxxxx', 'dolor': 'xxxxxxxxxxxx', 'sit': 'xxxxxxxxxxxx', 'amet': '$50.000'},
    ];
    
    //Paginador
	$scope.totalItems = bchsall.length;
	$scope.currentPage = 1;
	$scope.itemsPerPage = 10;
	
	$scope.$watch("currentPage", function() {
		setPagingData($scope.currentPage);
	});
	
	function setPagingData(page) {
		var pagedData = bchsall.slice(
		(page - 1) * $scope.itemsPerPage,
			page * $scope.itemsPerPage
		);
		$scope.bchs = pagedData;
	}
});