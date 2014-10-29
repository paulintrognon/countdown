(function () {
    var app = angular.module('countdown', []);

    app.controller('CountdownController', ['$scope', '$interval', function($scope, $interval) {
        var endTime = new Date("2014-10-31T19:00:00");
        $scope.hours = 0;
        $scope.minutes = 0;
        $scope.seconds = 0;

        updateTime();
        $interval(updateTime, 1000);

        function updateTime() {
            var now = new Date();
            var remainingTime = endTime - now;
            $scope.hours = Math.floor(remainingTime / (60 * 60 * 1000));
            $scope.minutes = Math.floor((remainingTime / (60 * 1000)) - ($scope.hours * 60));
            $scope.seconds = Math.floor((remainingTime / (1000)) - ($scope.hours * 3600) - ($scope.minutes * 60));
        }
    }]).directive('number', ['$interval', function () {

        return {
            restrict: 'E',
            templateUrl: 'partials/number.html',
            scope: {
                num: '=info'
            },
            controller: function () {
                this.getDigits = function (number) {
                    return [
                        Math.trunc(number / 10),
                        number % 10
                    ];
                }
            },
            controllerAs: 'numberDrawer'
        }
    }]).directive('digit', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/digit.html',
            controller: function () {
                this.getTemplate = getDigitTemplate
            },
            controllerAs: 'digitDrawer'
        };
    });
})();

var templates = [
    [
        // 0
        '***',
        '* *',
        '* *',
        '* *',
        '***'
    ], [
        // 1
        ' * ',
        '** ',
        ' * ',
        ' * ',
        '***'
    ], [
        // 2
        '***',
        '  *',
        '***',
        '*  ',
        '***'
    ], [
        // 3
        '***',
        '  *',
        '***',
        '  *',
        '***'
    ], [
        // 4
        '*  ',
        '*  ',
        '* *',
        '***',
        '  *'
    ], [
        // 5
        '***',
        '*  ',
        '***',
        '  *',
        '***'
    ], [
        // 6
        '***',
        '*  ',
        '***',
        '* *',
        '***'
    ], [
        // 7
        '***',
        '  *',
        ' **',
        '  *',
        '  *'
    ], [
        // 8
        '***',
        '* *',
        '***',
        '* *',
        '***'
    ], [
        // 9
        '***',
        '* *',
        '***',
        '  *',
        '***'
    ]
];

function getDigitTemplate(n) {
    return templates[n];
}