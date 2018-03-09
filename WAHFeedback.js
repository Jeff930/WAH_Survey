var app = angular.module("WAHfeedback", []);

    app.service("FeedbackService", function(){
    	var output="";
    	var reaction="";

        this.displayConsult =  function(value){
        if (output.length<=5)
        	output =  output + value;
        return output;
        };

        this.clearConsult =  function(){
        	output =  output.substring(0,output.length-1)
        return output;
        };

        this.getReaction =  function(value){
        	reaction = value;
        	if (reaction==0){
            	reaction = "Ano ang hindi ninyo nagustuhan";
        	}else{
            	reaction = "Ano ang nagustuhan ninyo";
        	}
   			return(reaction);
        };

	});

    app.controller("WAHfeedbackCtrl", function($scope, FeedbackService, $timeout){
        $scope.getNumber = function(value){
            $scope.output = FeedbackService.displayConsult(value);
        };

        $scope.clear = function(){
            $scope.output = FeedbackService.clearConsult();
        };

        $scope.showReaction = function(){
        	document.getElementById('Home').style.display = "none";
            document.getElementById('Reaction').style.display = "block";
        };

        $scope.showCategory = function(){
        	document.getElementById('Reaction').style.display = "none";
            document.getElementById('Category').style.display = "block";
        };

        $scope.showThanks = function(){
        	document.getElementById('Category').style.display = "none";
            document.getElementById('Thanks').style.display = "block";
        };

        $scope.startTimer = function(){
            $timeout($scope.showHome, 4000);
        };

        $scope.showHome = function(){
        	document.getElementById('Thanks').style.display = "none";
            document.getElementById('Home').style.display = "block";
        };

        $scope.getReaction = function(value){
            $scope.reaction= FeedbackService.getReaction(value);
        };

    }); 