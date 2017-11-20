var questionListControllers = angular.module('questionListControllers', ['ngStorage']);

/**
 * questionListController
 */
questionListControllers.controller('questionListController', ['$scope','$http','$location','$localStorage',
	function($scope,$http,$location,$localStorage){
	 $scope.question = "aaa";
	 $scope.$storage = $localStorage;
	 $scope.questionId=[];
	 var questionContainer=[];
	 $http({
  method: 'GET',
  url: './mock/demo.json'
}).then(function successCallback(response) {
    response.data.questions.forEach(function(val,index,arr){
	questionContainer[index]=val;
})
    $scope.questionId=questionContainer;
  }, function errorCallback(response) {
  });

   $scope.goToOneQuestion = function (questionId) {
        $localStorage.$reset(questionContainer[questionId]);
        $location.path("/oneQuestion");
    }

}]);

/**
 * signInController
 */
questionListControllers.controller('signInController', ["$scope", "$location","$http", function($scope,$location,$http){
	    $scope.signUp = function () {
	    	 $http({
  					method: 'GET',
  					url: 'http://172.20.10.3:8080/queryUser/1'
				}).then(function successCallback(response) {
						console.log("signUp");
  						}, function errorCallback(response) {
  						});
						console.log("error");
    				}
    	$scope.goToQuestionList = function(){
			$location.path('/questionList')
    		console.log('go to question list')
    	}
    	$scope.goToSignUp = function(){
    		$location.path('/signUp')
    		console.log('go to sign register view')
    	}
    	$scope.goToStudentHome = function(){
    		var userName = document.getElementById('userNameInputId').value
    		if(userName == 'Erlich'){
    			$location.path('/studentHome')
    		}else if (userName == 'Richard'){
    			$location.path('/studentHome_2')
    		}else if (userName == 'Gavin'){
    			$location.path('/teacherHome')
    		}else if (userName == 'Peter'){
    			$location.path('/teacherHome_2')
    		}else{
    			alert("Please input right account/password")
    		}
    	}
   //  	$scope.goToTeacherHome = function(){
			// var userName = document.getElementById('userNameInputId').value
   //  		if(userName == 'Gavin'){
   //  			$location.path('/teacherHome')
   //  		}else if (userName == 'Peter'){
   //  			$location.path('/teacherHome_2')
   //  		}else{
   //  			alert("Please input right account/password")
   //  		}
   //  	}
}]);


questionListControllers.controller('studentHomeController',['$scope','$location','$http',function($scope,$location,$http){
		$http({
  			method: 'GET',
  			url: './mock/studentList.json'
		}).then(function successCallback(response) {
			$scope.studentList = response;
  		}, function errorCallback(response) {
  		});
  		$http({
  			method: 'GET',
  			url: './mock/studentStatistics.json'
		}).then(function successCallback(response) {
			$scope.studentStatistics = response.data;
  		}, function errorCallback(response) {
  		});
    	$scope.goToQuestionList = function(){
			$location.path('/questionList')
    		console.log('go to question list')
    	};
    	$scope.goToOneStatistics = function(){
    		$location.path('/studentStatistics')
    	}	
}]);

questionListControllers.controller('teacherHomeController',['$scope','$location','$http',function($scope,$location,$http){
		$http({
  			method: 'GET',
  			url: './mock/studentList.json'
		}).then(function successCallback(response) {
			$scope.studentList = response;
  		}, function errorCallback(response) {
  		});
  		$scope.teacherToStudent = function(name){
    		if(name.indexOf('Erlich') !== -1){
    			$location.path('/studentHome')
    		}else if(name.indexOf('Richard') !== -1){
    			$location.path('/studentHome_2')
    		}else{
    			alert("No data yet!")
    		}
    	};
      $scope.assignHomework = function(name){
        $location.path('/assignHomework')
        console.log("Assign Homework");
      };  		
}]);
questionListControllers.controller('assignHomeworkController',['$scope','$location','$http',function($scope,$location,$http){
    $http({
        method: 'GET',
        url: './mock/assignHomework.json'
    }).then(function successCallback(response) {
      $scope.assignHomework = response.data.questions;
      }, function errorCallback(response) {
      });     
}]);

/**
 * oneQuestionController
 */
questionListControllers.controller('oneQuestionController', ["$scope", "$location", '$localStorage',"$http",function($scope,$location,$localStorage,$http){
	    $scope.question=$localStorage;
	    
	    $scope.showFraction = function(){
	    	if (this.show2==true||this.show3==true) {
	    		this.show2=false;this.show3=false;
	    		this.show1=true;
	    		angular.element("frac").find("div")[0].style="margin-bottom:0px;border-color:#000000;border-width:1px;border-style:solid;height:50px !important;width:50px;"
	    		angular.element("frac").find("div")[1].style="margin-bottom:0px;border-color:#000000;border-width:1px;border-style:solid;height:50px !important;width:50px;"
	    	}
	    	else if (this.show2==false&&this.show3==false){
	    		this.show1=true;
	    		angular.element("frac").find("div")[0].style="margin-bottom:0px;border-color:#000000;border-width:1px;border-style:solid;height:50px !important;width:50px;"
	    		angular.element("frac").find("div")[1].style="margin-bottom:0px;border-color:#000000;border-width:1px;border-style:solid;height:50px !important;width:50px;"
	    	}
	    },

	    $scope.showSquare = function(){
	    	if (this.show1==true||this.show3==true) {
				this.show1=false;this.show3=false;
	    		this.show2=true;
	    		angular.element("square").find("div")[0].style="margin-bottom:0px;border-color:#000000;border-width:1px;border-style:solid;height:30px !important;width:30px;"
	    		angular.element("square").find("div")[1].style="margin-bottom:0px;border-color:#000000;border-width:1px;border-style:solid;height:50px !important;width:50px;margin-left:30px;"}
	    	else if (this.show1==false&&this.show3==false){
	    		this.show2=true;
	    		angular.element("square").find("div")[0].style="margin-bottom:0px;border-color:#000000;border-width:1px;border-style:solid;height:30px !important;width:30px;"
	    		angular.element("square").find("div")[1].style="margin-bottom:0px;border-color:#000000;border-width:1px;border-style:solid;height:50px !important;width:50px;margin-left:30px;"
	    	}
	    },

	    $scope.showSqrt = function(){
	    	if (this.show1==true||this.show2==true) {
	    		this.show1=false;this.show2=false;
	    		this.show3=true;
	    		angular.element("sqrt").find("div")[0].style="margin-bottom:0px;border-color:#000000;border-width:1px;border-style:solid;height:30px !important;width:30px;margin-left:50px;"
	    		angular.element("sqrt").find("div")[1].style="margin-bottom:0px;border-color:#000000;border-width:1px;border-style:solid;height:50px !important;width:50px;"}
	    	else if (this.show1==false&&this.show2==false){
	    		this.show3=true;
	    		angular.element("sqrt").find("div")[0].style="margin-bottom:0px;border-color:#000000;border-width:1px;border-style:solid;height:30px !important;width:30px;margin-left:50px;"
	    		angular.element("sqrt").find("div")[1].style="margin-bottom:0px;border-color:#000000;border-width:1px;border-style:solid;height:50px !important;width:50px;"
	    	}
	    },

	    $scope.submitAnswer = function(){
	    	if(this.show1==true){
	    	   var para1 = angular.element("frac").find("blank")[0].textContent;
	    	   var para2 = angular.element("frac").find("blank")[1].textContent;
	    	   var mathSymbol="frac";
	    	}else if(this.show2==true){
	    	   var para1 = angular.element("sqrt").find("blank")[0].textContent;
	    	   var para2 = angular.element("sqrt").find("blank")[1].textContent;
	    	   var mathSymbol="square";
	    	}else if(this.show3==true){
	    	   var para1 = angular.element("square").find("blank")[0].textContent;
	    	   var para2 = angular.element("square").find("blank")[1].textContent;
	    	   var mathSymbol="sqrt";
	    	}
	    	var oAnswer= {
				"para1":para1,
				"para2":para2,
				"mathSymbol":mathSymbol
			};
	    $http.post('./mock/answerDemo.json', oAnswer).then(function(){
            console.log("post successfully");
        });
	    	console.log(para1);
	    	console.log(para2);
	    },

	    $scope.submitChoiceA = function(){
	    	console.log("submit A");
	    },
	    $scope.submitChoiceB = function(){
	    	console.log("submit B");
	    },
	    $scope.submitChoiceC = function(){
	    	console.log("submit C");
	    },
	    $scope.submitChoiceD = function(){
	    	console.log("submit D");
	    }
	    //var oEditor = CKEDITOR.instances
	    $scope.submitCKEditor = function(){
	    	var oData = CKEDITOR.instances.editor.getData()
	    	console.log("transfering data to backend" + oData);
	    }
}]);



/**
 * Directives:fracContainer,sqrtContainer,squareContainer
 */
questionListControllers.directive('blank', function() {
    return {
        restrict: 'E',
        template: '<div contenteditable="true">0</div>',
        transclude: true
    };
});

questionListControllers.directive('frac', function() {
    return {
        restrict: 'E',
        templateUrl: './templates/fracTemplate.html',
        transclude: true,
        link:function(scope,element,attrs){
        	scope.show1=false;
        }
    };
});

questionListControllers.directive('sqrt', function() {
    return {
        restrict: 'E',
        templateUrl: './templates/sqrtTemplate.html',
        transclude: true,
        link:function(scope,element,attrs){
        	scope.show2=false;
        }
    };
});

questionListControllers.directive('square', function() {
    return {
        restrict: 'E',
        templateUrl: './templates/squareTemplate.html',
        transclude: true,
        link:function(scope,element,attrs){
        	scope.show3=false;
        }
    };
});












