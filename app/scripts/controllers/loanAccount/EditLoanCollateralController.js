(function (module) {
    mifosX.controllers = _.extend(module, {
        EditLoanCollateralController: function (scope, resourceFactory, routeParams, location) {

            scope.loanId = routeParams.loanId;
            scope.collateralId = routeParams.id;
            resourceFactory.loanResource.get({ resourceType: 'collaterals', loanId: scope.loanId, resourceId: scope.collateralId, template: true }, function (data) {
                scope.formData = {collateralTypeId: data.type.id, value: data.value, description: data.description};
                scope.collateralTypes = data.allowedCollateralTypes;
            });

            scope.cancel = function () {
                location.path('/credit-provider/KADSWEF/viewloanaccount/' + scope.loanId);
            };

            scope.submit = function () {
                this.formData.locale = scope.optlang.code;
                resourceFactory.loanResource.put({resourceType: 'collaterals', resourceId: scope.collateralId, loanId: scope.loanId}, this.formData, function (data) {
                    location.path('/credit-provider/KADSWEF/viewloanaccount/' + data.loanId);
                });
            };

        }
    });
    mifosX.ng.application.controller('EditLoanCollateralController', ['$scope', 'ResourceFactory', '$routeParams', '$location', mifosX.controllers.EditLoanCollateralController]).run(function ($log) {
        $log.info("EditLoanCollateralController initialized");
    });
}(mifosX.controllers || {}));
