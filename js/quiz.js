var app = angular.module('quizApp', []);

app.controller('quizController', function ($scope, $rootScope, $interval, $window) {

	$scope.show1 = true;
	$scope.show2 = true;
	$scope.show3 = true;
	$scope.show4 = true;
	$scope.show5 = true;
	$scope.show6 = true;
	$scope.show7 = true;
	$scope.show8 = true;
	$scope.show9 = true;
	$scope.show10 = true;
	$scope.show11 = true;
	$scope.show12 = true;
	$scope.show13 = true;
	$scope.show14 = true;
	$scope.show15 = true;
	$scope.show16 = true;
	$scope.show17 = true;
	$scope.show18 = true;
	$scope.show19 = true;
	$scope.show20 = true;
	$scope.com = true;
	$scope.res = true;
	$scope.ended = false;

	$scope.hideFirst = function () {
		$scope.show1 = false;
	}

	$scope.hideSecond = function () {
		$scope.show2 = false;
	}

	$scope.hideThird = function () {
		$scope.show3 = false;
	}

	$scope.hideFourth = function () {
		$scope.show4 = false;
	}

	$scope.hideFifth = function () {
		$scope.show5 = false;
	}

	$scope.hideSixth = function () {
		$scope.show6 = false;
	}

	$scope.hideSeventh = function () {
		$scope.show7 = false;
	}	

	$scope.hideEigth = function () {
		$scope.show8 = false;
	}

	$scope.hideNinth = function () {
		$scope.show9 = false;
	}

	$scope.hideTenth = function () {
		$scope.show10 = false;
	}

	$scope.hideEleventh = function () {
		$scope.show11 = false;
	}

	$scope.hideTwelve = function () {
		$scope.show12 = false;
	}

	$scope.hideThirteen = function () {
		$scope.show13 = false;
	}

	$scope.hideFourteen = function () {
		$scope.show14 = false;
	}

	$scope.hideFifteen = function () {
		$scope.show15 = false;
	}

	$scope.hideSixteen = function () {
		$scope.show16 = false;
	}

	$scope.hideSeventeen = function () {
		$scope.show17 = false;
	}

	$scope.hideEighteen = function () {
		$scope.show18 = false;
	}

	$scope.hideNineteen = function () {
		$scope.show19 = false;
	}

	$scope.hideTwenty = function () {
		$scope.show20 = false;
		$scope.ended = true;
	}

	$scope.completed = function () {
		$scope.com = false;
	}

	$rootScope.quizData = [
		{
			// Question 2
			questionText: 'HTML stands for : ',
			answers: [
				{ansText: 'Hyper Text Markup Language'},
				{ansText: 'Hyper Transfer Markup Language'},
				{ansText: 'Hyper Text Marking Language'},
				{ansText: 'None of the above'}
			], 
			// Question 2
			questionText2: 'HTML is developed by : ',
			answers2: [
				{ansText: 'James Ghosling'},
				{ansText: 'Tim Berners Lee'},
				{ansText: 'Steve Jobs'},
				{ansText: 'Rasmus Lerdorf'}
			],
			// Question 3
			questionText3: 'HTML is a: ',
			answers3: [
				{ansText: 'Programming Language'},
				{ansText: 'Scripting Language'},
				{ansText: 'Rendering Language'},
				{ansText: 'Styling Language'}
			] ,
			// Question 4
			questionText4: 'Which tag is used to underline text ? ',
			answers4: [
				{ansText: '<ul>'},
				{ansText: '<u>'},
				{ansText: '<underline>'},
				{ansText: '<un>'}
			], 
			// Question 5
			questionText5: 'Which tag is used to for table header columns ? ',
			answers5: [
				{ansText: '<th>'},
				{ansText: '<theader>'},
				{ansText: '<header>'},
				{ansText: '<theading>'}
			],
			// Question 6
			questionText6: 'Which tag is used to insert image in HTML ? ',
			answers6: [
				{ansText: '<image>'},
				{ansText: '<picture>'},
				{ansText: '<figure>'},
				{ansText: '<img>'}
			],
			// Question 7
			questionText7: 'Which tag is used for creating Unordered Lists ? ',
			answers7: [
				{ansText: '<uol>'},
				{ansText: '<unordered>'},
				{ansText: '<ul>'},
				{ansText: '<ult>'}
			],
			// Question 8
			questionText8: 'Which tag is used for creating Options List in HTML forms ? ',
			answers8: [
				{ansText: '<select>'},
				{ansText: '<oplist>'},
				{ansText: '<list>'},
				{ansText: '<optlist>'}
			],
			// Question 9
			questionText9: 'Which of the following is the HTML5 input ? ',
			answers9: [
				{ansText: '<input type="checkbox">'},
				{ansText: '<input type="text">'},
				{ansText: '<input type="radio">'},
				{ansText: '<input type="date">'}
			],
			// Question 10
			questionText10: 'The declaration of HTML5 is : ',
			answers10: [
				{ansText: '<!DOCTYPE html>'},
				{ansText: '<!doctype html>'},
				{ansText: '<DOCTYPE html>'},
				{ansText: '<!DOCTYPE HTML>'}
			],
			// Question 11
			questionText11: 'CSS stands for: ',
			answers11: [
				{ansText: 'Core Style Sheet'},
				{ansText: 'Cascade Style Sheet'},
				{ansText: 'Cascading Style Sheet'},
				{ansText: 'Clear Stying Service'}
			],
			// Question 12
			questionText12: 'CSS can be used in HTML using : ',
			answers12: [
				{ansText: '<styles> tag'},
				{ansText: '<stylesheet> tag'},
				{ansText: '<stying> tag'},
				{ansText: '<style> tag'}
			],
			// Question 13
			questionText13: 'In CSS, following property is used to change fonts : ',
			answers13: [
				{ansText: 'face'},
				{ansText: 'font-face'},
				{ansText: 'font-style'},
				{ansText: 'font-family'}
			],
			// Question 14
			questionText14: 'In CSS, following property is used to change text color : ',
			answers14: [
				{ansText: 'font-color'},
				{ansText: 'text-face'},
				{ansText: 'foreground-color'},
				{ansText: 'color'}
			],
			// Question 15
			questionText15: 'In CSS, animation can be created using : ',
			answers15: [
				{ansText: 'keyframes'},
				{ansText: '@animation'},
				{ansText: '@keyframes'},
				{ansText: '@animate'}
			],
			// Question 16
			questionText16: 'In CSS, p.last selects : ',
			answers16: [
				{ansText: 'All p elements with Class last'},
				{ansText: 'All p elements with ID last'},
				{ansText: 'All p elements'},
				{ansText: 'First p element'}
			],
			// Question 17
			questionText17: 'In CSS, h1+h2 selects : ',
			answers17: [
				{ansText: 'All siblings of h1 with name h2'},
				{ansText: 'Direct sibling of h1 with name h2'},
				{ansText: 'All children of h1 with name h2'},
				{ansText: 'Direct children of h1 with name h2'}
			],
			// Question 18
			questionText18: 'In CSS, h1~h2 selects : ',
			answers18: [
				{ansText: 'All siblings of h1 with name h2'},
				{ansText: 'Direct sibling of h1 with name h2'},
				{ansText: 'All children of h1 with name h2'},
				{ansText: 'Direct children of h1 with name h2'}
			],
			// Question 19
			questionText19: 'In CSS, a:hover selects all anchor element when : ',
			answers19: [
				{ansText: 'They are being focused'},
				{ansText: 'Their focus has been lost'},
				{ansText: 'They are being hovered'},
				{ansText: 'They are being clicked'}
			],
			// Question 20
			questionText20: 'In CSS, which of the following makes CSS3 properties work in Chrome & Safari browsers ? ',
			answers20: [
				{ansText: '-ms-'},
				{ansText: '-o-'},
				{ansText: '-moz-'},
				{ansText: '-webkit-'}
			]   
		}
	];

	// Array that stores answers
	$rootScope.quizAnswers = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
	// Answers length
	$rootScope.totalAnswers = $rootScope.quizAnswers.length;

});

app.directive('changed', function ($rootScope) {
	return function (scope, elem, attrs) {
		elem.on('change', function () {
			// Checking if answer 1 is correct
			if (elem.val() == $rootScope.quizData[0].answers[0].ansText) {
				$rootScope.quizAnswers[0] = true;
			} 

			// Checking if answer 2 is correct
			if (elem.val() == $rootScope.quizData[0].answers2[1].ansText) {
				$rootScope.quizAnswers[1] = true;
			}

			function checkCorrect (ans) {
				return ans == true;
			}

			// Checking if answer 3 is correct
			if (elem.val() == $rootScope.quizData[0].answers3[2].ansText) {
				$rootScope.quizAnswers[2] = true;
			}

			// Checking if answer 4 is correct
			if (elem.val() == $rootScope.quizData[0].answers4[1].ansText) {
				$rootScope.quizAnswers[3] = true;
			}

			// Checking if answer 5 is correct
			if (elem.val() == $rootScope.quizData[0].answers5[0].ansText) {
				$rootScope.quizAnswers[4] = true;
			}

			// Checking if answer 6 is correct
			if (elem.val() == $rootScope.quizData[0].answers6[3].ansText) {
				$rootScope.quizAnswers[5] = true;
			}

			// Checking if answer 7 is correct
			if (elem.val() == $rootScope.quizData[0].answers7[2].ansText) {
				$rootScope.quizAnswers[6] = true;
			}

			// Checking if answer 8 is correct
			if (elem.val() == $rootScope.quizData[0].answers8[0].ansText) {
				$rootScope.quizAnswers[7] = true;
			}

			// Checking if answer 9 is correct
			if (elem.val() == $rootScope.quizData[0].answers9[3].ansText) {
				$rootScope.quizAnswers[8] = true;
			}

			// Checking if answer 10 is correct
			if (elem.val() == $rootScope.quizData[0].answers10[0].ansText) {
				$rootScope.quizAnswers[9] = true;
			}

			// Checking if answer 11 is correct
			if (elem.val() == $rootScope.quizData[0].answers11[2].ansText) {
				$rootScope.quizAnswers[10] = true;
			}

			// Checking if answer 12 is correct
			if (elem.val() == $rootScope.quizData[0].answers12[3].ansText) {
				$rootScope.quizAnswers[11] = true;
			}

			// Checking if answer 13 is correct
			if (elem.val() == $rootScope.quizData[0].answers13[3].ansText) {
				$rootScope.quizAnswers[12] = true;
			}

			// Checking if answer 14 is correct
			if (elem.val() == $rootScope.quizData[0].answers14[3].ansText) {
				$rootScope.quizAnswers[13] = true;
			}

			// Checking if answer 15 is correct
			if (elem.val() == $rootScope.quizData[0].answers15[2].ansText) {
				$rootScope.quizAnswers[14] = true;
			}

			// Checking if answer 16 is correct
			if (elem.val() == $rootScope.quizData[0].answers16[0].ansText) {
				$rootScope.quizAnswers[15] = true;
			}

			// Checking if answer 17 is correct
			if (elem.val() == $rootScope.quizData[0].answers17[1].ansText) {
				$rootScope.quizAnswers[16] = true;
			}

			// Checking if answer 18 is correct
			if (elem.val() == $rootScope.quizData[0].answers18[0].ansText) {
				$rootScope.quizAnswers[17] = true;
			}

			// Checking if answer 19 is correct
			if (elem.val() == $rootScope.quizData[0].answers19[2].ansText) {
				$rootScope.quizAnswers[18] = true;
			}

			// Checking if answer 20 is correct
			if (elem.val() == $rootScope.quizData[0].answers20[3].ansText) {
				$rootScope.quizAnswers[19] = true;
			}

			// Isolating correct answers
			function checkCorrect (ans) {
				return ans == true;
			}

			filteredArray = $rootScope.quizAnswers.filter(checkCorrect);

			$rootScope.correctAnswers = filteredArray.length;

			console.log($rootScope.correctAnswers);
			
		});
		
	}
});
