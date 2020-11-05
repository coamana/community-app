(function (module) {
    mifosX.controllers = _.extend(module, {
        FloatingRatesController: function (scope, resourceFactory, location, dateFilter, translate) {
            scope.floatingrates = [];

            scope.routeTo = function (floatingRateId) {
                location.path('/credit-provider/KADSWEF/viewfloatingrate/' + floatingRateId);
            };

            resourceFactory.floatingrates.getAll(function (data) {
                scope.floatingrates = data;
            });
        }
    });
    mifosX.ng.application.controller('FloatingRatesController', ['$scope', 'ResourceFactory', '$location', 'dateFilter', '$translate', mifosX.controllers.FloatingRatesController]).run(function ($log) {
        $log.info("FloatingRatesController initialized");
    });
}(mifosX.controllers || {}));
