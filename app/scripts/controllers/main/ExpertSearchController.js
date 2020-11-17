(function (module) {
    mifosX.controllers = _.extend(module, {
        ExpertSearchController: function (scope, resourceFactory, location) {
        	scope.dashModel = 'dashboard';
            scope.switch = function() {
	        	location.path('/credit-provider/KADSWEF/richdashboard');
			}
            
            scope.searchParams = ['create client', 'clients', 'create group', 'groups', 'centers', 'create center', 'configuration', 'tasks', 'templates', 'system users',
                                  'create template', 'create loan product', 'create saving product', 'roles', 'add role', 'configure maker checker tasks',
                                  'users', 'loan products', 'charges', 'saving products', 'offices', 'create office', 'currency configurations', 'user settings',
                                  'create user', 'employees', 'create employee', 'manage funds', 'offices', 'chart of accounts', 'frequent postings', 'Journal entry',
                                  'search transaction', 'account closure', 'accounting rules', 'add accounting rule', 'data tables', 'create data table', 'add code',
                                  'jobs', 'codes', 'reports', 'create report', 'holidays', 'create holiday', 'create charge', 'product mix', 'add member', 'add product mix',
                                  'bulk loan reassignment', 'audit', 'create accounting closure', 'enter collection sheet', 'navigation', 'accounting', 'organization', 'system'];
            scope.search = function () {
		      switch (this.formData.search) {
		          case 'create client':
		              location.path('/credit-provider/KADSWEF/createclient');
		              break;
		          case 'clients':
		              location.path('/credit-provider/KADSWEF/clients');
		              break;
		          case 'create group':
		              location.path('/credit-provider/KADSWEF/creategroup');
		              break;
		          case 'groups':
		              location.path('/credit-provider/KADSWEF/groups');
		              break;
		          case 'create center':
		              location.path('/credit-provider/KADSWEF/createcenter');
		              break;
		          case 'centers':
		              location.path('/credit-provider/KADSWEF/centers');
		              break;
		          case 'configuration':
		              location.path('/credit-provider/KADSWEF/global');
		              break;
		          case 'tasks':
		              location.path('/credit-provider/KADSWEF/tasks');
		              break;
		          case 'templates':
		              location.path('/credit-provider/KADSWEF/templates');
		              break;
		          case 'create template':
		              location.path('/credit-provider/KADSWEF/createtemplate');
		              break;
		          case 'create loan product':
		              location.path('/credit-provider/KADSWEF/createloanproduct');
		              break;
		          case 'create saving product':
		              location.path('/credit-provider/KADSWEF/createsavingproduct');
		              break;
		          case 'roles':
		              location.path('/credit-provider/KADSWEF/admin/roles');
		              break;
		          case 'add role':
		              location.path('/credit-provider/KADSWEF/admin/addrole');
		              break;
		          case 'configure maker checker tasks':
		              location.path('/credit-provider/KADSWEF/admin/viewmctasks');
		              break;
		          case 'loan products':
		              location.path('/credit-provider/KADSWEF/loanproducts');
		              break;
		          case 'charges':
		              location.path('/credit-provider/KADSWEF/charges');
		              break;
		          case 'saving products':
		              location.path('/credit-provider/KADSWEF/savingproducts');
		              break;
		          case 'offices':
		              location.path('/credit-provider/KADSWEF/offices');
		              break;
		          case 'create office':
		              location.path('/credit-provider/KADSWEF/createoffice');
		              break;
		          case 'currency configurations':
		              location.path('/credit-provider/KADSWEF/currconfig');
		              break;
		          case 'user settings':
		              location.path('/credit-provider/KADSWEF/usersetting');
		              break;
		          case 'employees':
		              location.path('/credit-provider/KADSWEF/employees');
		              break;
		          case 'create employee':
		              location.path('/credit-provider/KADSWEF/createemployee');
		              break;
		          case 'manage funds':
		              location.path('/credit-provider/KADSWEF/managefunds');
		              break;
		          case 'chart of accounts':
		              location.path('/credit-provider/KADSWEF/accounting_coa');
		              break;
		          case 'frequent postings':
		              location.path('/credit-provider/KADSWEF/freqposting');
		              break;
		          case 'journal entry':
		              location.path('/credit-provider/KADSWEF/journalentry');
		              break;
		          case 'search transaction':
		              location.path('/credit-provider/KADSWEF/searchtransaction');
		              break;
		          case 'account closure':
		              location.path('/credit-provider/KADSWEF/accounts_closure');
		              break;
		          case 'accounting rules':
		              location.path('/credit-provider/KADSWEF/accounting_rules');
		              break;
		          case 'add accounting rule':
		              location.path('/credit-provider/KADSWEF/add_accrule');
		              break;
		          case 'data tables':
		              location.path('/credit-provider/KADSWEF/datatables');
		              break;
		          case 'create data table':
		              location.path('/credit-provider/KADSWEF/createdatatable');
		              break;
		          case 'add code':
		              location.path('/credit-provider/KADSWEF/addcode');
		              break;
		          case 'jobs':
		              location.path('/credit-provider/KADSWEF/jobs');
		              break;
		          case 'codes':
		              location.path('/credit-provider/KADSWEF/codes');
		              break;
		          case 'reports':
		              location.path('/credit-provider/KADSWEF/reports');
		              break;
		          case 'create report':
		              location.path('/credit-provider/KADSWEF/createreport');
		              break;
		          case 'holidays':
		              location.path('/credit-provider/KADSWEF/holidays');
		              break;
		          case 'create holiday':
		              location.path('/credit-provider/KADSWEF/createholiday');
		              break;
		          case 'add member':
		              location.path('/credit-provider/KADSWEF/addmember');
		              break;
		          case 'create charge':
		              location.path('/credit-provider/KADSWEF/createcharge');
		              break;
		          case 'enter collection sheet':
		              location.path('/credit-provider/KADSWEF/entercollectionsheet');
		              break;
		          case 'product mix':
		              location.path('/credit-provider/KADSWEF/productmix');
		              break;
		          case 'add product mix':
		              location.path('/credit-provider/KADSWEF/addproductmix');
		              break;
		          case 'bulk loan reassignment':
		              location.path('/credit-provider/KADSWEF/bulkloan');
		              break;
		          case 'audit':
		              location.path('/credit-provider/KADSWEF/audit');
		              break;
		          case 'create accounting closure':
		              location.path('/credit-provider/KADSWEF/createclosure');
		              break;
		          case 'navigation':
		              location.path('/credit-provider/KADSWEF/nav/offices');
		              break;
		          case 'accounting':
		              location.path('/credit-provider/KADSWEF/accounting');
		              break;
		          case 'organization':
		              location.path('/credit-provider/KADSWEF/organization');
		              break;
		          case 'system':
		              location.path('/credit-provider/KADSWEF/system');
		              break;
		          case 'system users':
		              location.path('/credit-provider/KADSWEF/admin/users');
		              break;
		          default:
		              location.path('/credit-provider/KADSWEF/home');
		      }
            }

        }

    });
    mifosX.ng.application.controller('ExpertSearchController', ['$scope', 'ResourceFactory', '$location', mifosX.controllers.ExpertSearchController]).run(function ($log) {
        $log.info("ExpertSearchController initialized");
    });
}(mifosX.controllers || {}));

