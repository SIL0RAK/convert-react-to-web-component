import angular from 'angular';


angular.module('multi-users-counter', [])
    .controller('controller', function($scope) {
    $scope.users = [
        { name: 'Jonas', score: 10 },
        { name: 'Simas', score: 20 },
        { name: 'Petras', score: 30 },
        { name: 'Zigmas', score: 40 },
        { name: 'Rimas', score: 50 },
    ];

    $scope.addPoint = (userName) => {
        $scope.users.forEach(({ name, score }, index) => {
            if (userName === name) {
                $scope.users[index] = { name, score: score + 1 };
            }
        });
    }

    $scope.removePoint = (userName) => {
        $scope.users.forEach(({ name, score }, index) => {
            if (userName === name) {
                $scope.users[index] = { name, score: score - 1 };
            }
        });
    }

    $scope.delete = (userName) => {
        $scope.users.forEach(({ name }, index) => {
            if (userName === name) {
                $scope.users.splice(index, 1);
            }
        });
    }
});
