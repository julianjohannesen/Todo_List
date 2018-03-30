var app = angular.module('myApp', []);  // Create an angular module 

/* Add a controller to the modeule and define the callback function */
app.controller('todoList', function($scope){
    // Initial list data
    let list = ['!! application', 'transmitter', 'hack', 'application'];
    $scope.tasks = list;    // Make it accessible to the template   

    $scope.newTask;         // Accessible variable for the input data

    // Objects to describe the level of importance and populate the dropdown
    let important = [
        { level: 'standard', symbol: ''},
        { level: 'important', symbol: '!'},
        { level: 'very important', symbol: '!!'}
    ];
    $scope.importance = important;  // Make it accesible to the template
    $scope.howImportant;            // Accessible variable for the select data

    $scope.add = false;     // Accessible boolean for manipulating the form element
    $scope.message = true;  // Accessible boolena for manipulating the warning message  

    $scope.regExp = /\!/g   // Accessible Regular Expressions in template js expressions

    $scope.taskComplete;    // Accessible variable for response from checkbox

    /**
     * Handles the submit event to add input to the list
     */
    $scope.addTask = function() {

        /* The user did not select a level of importance */
        if ($scope.howImportant === undefined) {
            $scope.message = false; // Display the warning message
        }
        else {
            // Add the importance symbol and the user input into the list
            $scope.tasks.push($scope.howImportant.symbol + ' ' + $scope.newTask);   
            $scope.newTask = '';                // Clear the user input
            $scope.howImportant = undefined;    // Clear the importance
            $scope.message = true;              // Remove the warning message if visible
        }
        console.log(list);  // Display the new list data
    }

    /**
     * Removes an item from the list
     * @param {number} pos The position of the selected item in the list
     */
    $scope.delete = function(pos) {
        $scope.tasks.splice(pos, 1);    // Removes one item at the passed in position
        console.log(list);              // Display the new list data
    }
});