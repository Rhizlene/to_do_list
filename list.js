let MyApp = angular.module("myApp", []);

let tableau = [
    { name: "Faire les courses", isEditing: false },
    { name: "Appeler Bob", isEditing: false }
];

MyApp.controller("ControleurListe", function($scope) {
    $scope.list = tableau;
    $scope.newTask = "";

    $scope.add = function() {
        if ($scope.newTask !== "") {
            tableau.push({ name: $scope.newTask, isEditing: false });
            $scope.newTask = ""; 
        } else {
            alert("Le champ ne peut pas être vide.");
        }
    }

    $scope.update = function(task,index) {

        let li = document.querySelectorAll("li")[index];
        let liInput = li.querySelector("#liInput");

        if (task.isEditing) {

            liInput.style.backgroundColor = 'white';
            li.style.backgroundColor = 'white';

            if (task.name !== "") {
                task.isEditing = false;
            } else {
                alert("Le champ ne peut pas être vide.");
            }
        } else {
            task.isEditing = true;

            //gérer text cursor
            liInput.focus();
            liInput.style.caretColor = 'orange';

            liInput.style.backgroundColor = '#fcf9f2';
            li.style.backgroundColor = '#fcf9f2';
        }
    }

    $scope.delete = function(index) {
        $scope.list.splice(index, 1);
    }
});
