
{'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope',function($scope) {
        $scope.convertToRoman = function(input){

            var numeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         // Ones
                ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
                ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],        // Hundreds
				["","M","MM","MMM"]];  										// Upto 3999
                
            var numeral = "";
            var digits = input.toString().split('').reverse();
            for (var i=0; i < digits.length; i++){
                numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
            }
            $scope.outputNumber =  numeral;
            /*return numeral;*/
        }


    }]);}
