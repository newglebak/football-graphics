angular.module('app')
    .controller('teamSettingsController', function($scope, TeamSettingsSvc) {
        $scope.data = {};

        TeamSettingsSvc.updateData();
        TeamSettingsSvc.getUpdates(function (data) {
            $scope.data = data;
            $scope.$digest();
        });

        $scope.newHomePlayer = {
            'name': '',
            'number': '',
            'filename': '',
            'description': ''
        }

        $scope.addHomePlayer = function () {
            if ($scope.newHomePlayer.name !== '') {
                if ($scope.newHomePlayer.number !== '') {
                    TeamSettingsSvc.addHomePlayer(newHomePlayer);
                    $scope.newHomePlayer = {
                        'name': '',
                        'number': '',
                        'filename': '',
                        'description': ''
                    }
                }
            }
        };

        $scope.newGuestPlayer = {
            'name': '',
            'number': '',
            'filename': '',
            'description': ''
        }

        $scope.addGuestPlayer = function () {
            if ($scope.newGuestPlayer.name !== '') {
                if ($scope.newGuestPlayer.number !== '') {
                    TeamSettingsSvc.addGuestPlayer(newGuestPlayer);
                    $scope.newGuestPlayer = {
                        'name': '',
                        'number': '',
                        'filename': '',
                        'description': ''
                    }
                }
            }
        };

        $scope.removeHomePlayer = function (id) {
            TeamSettingsSvc.removeHomePlayer(id);
        };

        $scope.removeGuestPlayer = function (id) {
            TeamSettingsSvc.removeGuestPlayer(id);
        };

        $scope.newHomeTeamName = '';

        $scope.changeHomeTeamName = function () {
            TeamSettingsSvc.changeHomeTeamName(newHomeTeamName);
            $scope.newHomeTeamName = '';
        };

        $scope.newGuestTeamName = '';

        $scope.changeGuestTeamName = function () {
            TeamSettingsSvc.changeGuestTeamName(newGuestTeamName);
            $scope.newGuestTeamName = '';
        };

        $scope.changeHomeColour = function () {
            TeamSettingsSvc.changeHomeTeamColour($scope.data.home.colour);
            $scope.newHomeColour = '';
        };

        $scope.changeGuestColour = function () {
            TeamSettingsSvc.changeGuestTeamColour($scope.data.guest.colour);
        };

    });
