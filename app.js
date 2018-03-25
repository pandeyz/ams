'use strict';

var ams = angular.module('ams', []);

ams.controller('AssociateController', function($scope, formservices) {
    $scope.associate = {
        name: 'name',
        phone: '123',
        address: '123 test lane',
        specialization: ['java', 'php']
    };
    //$scope.specialization = ['text', 'tt'];

    $scope.addSpecialization = function() {
        if( $scope.associate.specialization.indexOf($scope.newSpecialization) )
        {
            $scope.associate.specialization.push($scope.newSpecialization);
            $scope.newSpecialization = '';
        }
        else
        {
            alert("\""+$scope.newSpecialization+"\" already exist!");
        }
    };

    $scope.removeSpecialization = function(index) {
        $scope.associate.specialization.splice(index, 1);
    }

    $scope.addAssociate = function() {
        var data = {
            name    : $scope.associate.name,
            phone   : $scope.associate.phone,
            address : $scope.associate.address,
            specialization: $scope.associate.specialization,
            action  : 'addAssociate'
        };

        var response = formservices.addAssociate(data);

        console.log(data);
    }
});

ams.factory("formservices", function($http) {
    var obj = {};

    /*obj.getFormTemplate = function(formTemplateID){
        return $http.get(url + '/administrator/form/get_form/' + formTemplateID);
    };*/

    obj.addAssociate = function(data) {
        $http({
            method : "POST",
            data : data,
            url : 'http://localhost/ams/api/api.php'
        }).then(function(response) {
            var response = JSON.parse(response);
            
        });
    };

    /*obj.deleteFormTemplate = function (id) {
        return $http.delete(url + '/administrator/form/delete/' + id).then(function (response) {
            if(response) {
                window.location = url+"/administrator/form/list";
            }
        });
    };*/

    return obj;
});