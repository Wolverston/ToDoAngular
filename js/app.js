/*!
 ** Todo-Sortable-List Example App
 ** Licensed under the Apache License v2.0
 ** http://www.apache.org/licenses/LICENSE-2.0
 ** Built by Jay Kanakiya ( @techiejayk )
 **/
"use strict";

var App = angular.module("todo", ["LocalStorageModule"]);

App.controller("TodoCtrl", function ($scope, localStorageService) {
	$scope.a = true;
	$scope.init = function () {

		if (localStorageService.get("todoList") === null) {
			$scope.todos = [
				{
					taskName: "Создать ToDo на Angular",
					isDone: true
				},
				{
					taskName: "Поверхностно разобраться в механике Angular",
					isDone: true
				},
				{
					taskName: "Сдать это задание",
					isDone: true
				},
				{
					taskName: "Попросить проверить остальные выполненные задания",
					isDone: false
				}
  		];
		} else {
			$scope.todos = localStorageService.get("todoList");
		}
		$scope.show = "All";

	};

	$scope.addTodo = function () {
		if ($scope.newTodo !== undefined) {
			$scope.todos.splice(0, 0, {
				taskName: $scope.newTodo
				, isDone: false
			});
		}
		$scope.newTodo = "";
	};

	$scope.deleteTodo = function (index) {
		$scope.todos.splice(index, 1);
	};

	$scope.toggle = function () {
		$scope.a = !$scope.a;
	};

	$scope.clearDone = function () {
		var oldList = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldList, function (todo) {
			if (!todo.isDone) $scope.todos.push(todo);
		});
		$scope.$apply;
	}

	$scope.showFn = function (todo) {
		if ($scope.show === "All") {
			return true;
		} else if (!todo.isDone && $scope.show === "Incomplete") {
			return true;
		}
	};

	$scope.save = function () {
		if ($scope.todos.length !=0) {
		localStorageService.add("todoList", angular.toJson($scope.todos))
		} else {
			localStorageService.add("todoList", null);
		}
	}
});