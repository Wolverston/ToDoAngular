function mainCtrl($scope){
//	var str = JSON.parse(localStorage.getItem("itemList"));
	$scope.list = [{
		name: '1',
		done: false
	},{
		name:'2',
		done:true
	}];
	//$scope.items = [str];
	
	$scope.addItem = function(){	//DONE
		if ($scope.item !== undefined){
			$scope.list.push({name:$scope.item, done:false});
			$scope.item = undefined;
		}
	};
	
	$scope.toggleDone = function(){
		
    angular.forEach($scope.list, function(todo) {
      if (todo.done) {
				console.dir(todo);//angular.todo.css("display","none");
			}
    });
		
	};
	
	//Удаляем завершенные
	$scope.clearList = function(){
		var oldList = $scope.list;
    $scope.list = [];
    angular.forEach(oldList, function(todo) {
      if (!todo.done) $scope.list.push(todo);
    });
	};
	
	$scope.add = function(){
		
	};
	
	$scope.done = function(){
		var button = angular.element(document.querySelector("body")).find('button');
		if (button.attr(name) == 'Done'){
				alert('')
		}
	};
	
	$scope.remove = function(index){
		$scope.todos.splice(index, 1);
	};
	
	$scope.save = function(){
//		var str = JSON.stringify(list, ["text", "done"]);	
//					localStorage.setItem('addresses', str);
	};
};


var app = angular.module('ToDoList', []);

app.controller('mainCtrl', mainCtrl);