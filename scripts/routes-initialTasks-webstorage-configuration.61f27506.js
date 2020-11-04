(function (mifosX) {
    var defineRoutes = function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html'
            })
            .when('/credit-provider/KADSWEF/login', {
                templateUrl: 'views/login.html'
            })
            .when('/credit-provider/KADSWEF/home', {
                templateUrl: 'views/home.html'
            })
            .when('/credit-provider/KADSWEF/richdashboard', {
                templateUrl: 'views/private/rich_dashboard.html'
            })
            .when('/credit-provider/KADSWEF/products', {
                templateUrl: 'views/products/products.html'
            })
            .when('/credit-provider/KADSWEF/templates', {
                templateUrl: 'views/templates/templates.html'
            })
            .when('/credit-provider/KADSWEF/createstandinginstruction/:officeId/:clientId/:accountType', {
                templateUrl: 'views/accounttransfers/create_standinginstruction.html'
            })
            .when('/credit-provider/KADSWEF/editstandinginstruction/:instructionId/:from', {
                templateUrl: 'views/accounttransfers/edit_standinginstruction.html'
            })
            .when('/credit-provider/KADSWEF/viewstandinginstruction/:instructionId', {
                templateUrl: 'views/accounttransfers/view_standinginstruction.html'
            })
            .when('/credit-provider/KADSWEF/liststandinginstructions/:officeId/:clientId', {
                templateUrl: 'views/accounttransfers/list_standinginstruction.html'
            })
            .when('/credit-provider/KADSWEF/listaccounttransactions/:instructionId', {
                templateUrl: 'views/accounttransfers/list_transactions.html'
            })
            .when('/credit-provider/KADSWEF/standinginstructions/history', {
                templateUrl: 'views/accounttransfers/standinginstructions_history.html'
            })
            .when('/credit-provider/KADSWEF/createtemplate', {
                templateUrl: 'views/templates/createtemplate.html'
            })
            .when('/credit-provider/KADSWEF/viewtemplate/:id', {
                templateUrl: 'views/templates/viewtemplate.html'
            })
            .when('/credit-provider/KADSWEF/edittemplate/:id', {
                templateUrl: 'views/templates/edittemplate.html'
            })
            .when('/credit-provider/KADSWEF/createloanproduct', {
                templateUrl: 'views/products/createloanproduct.html'
            })
            .when('/credit-provider/KADSWEF/editloanproduct/:id', {
                templateUrl: 'views/products/editloanproduct.html'
            })
            .when('/credit-provider/KADSWEF/createsavingproduct', {
                templateUrl: 'views/products/createsavingproduct.html'
            })
            .when('/credit-provider/KADSWEF/editsavingproduct/:id', {
                templateUrl: 'views/products/editsavingproduct.html'
            })
            .when('/credit-provider/KADSWEF/admin/viewrole/:id', {
                templateUrl: 'views/administration/viewrole.html'
            })
            .when('/credit-provider/KADSWEF/admin/roles', {
                templateUrl: 'views/administration/roles.html'
            })
            .when('/credit-provider/KADSWEF/admin/addrole', {
                templateUrl: 'views/administration/addrole.html'
            })
            .when('/credit-provider/KADSWEF/admin/viewmctasks', {
                templateUrl: 'views/administration/makerchecker.html'
            })
            .when('/credit-provider/KADSWEF/admin/users', {
                templateUrl: 'views/administration/users.html'
            })
            .when('/credit-provider/KADSWEF/clients', {
                templateUrl: 'views/clients/clients.html'
            })
            .when('/credit-provider/KADSWEF/createclient', {
                templateUrl: 'views/clients/createclient.html'
            })
            .when('/credit-provider/KADSWEF/editclient/:id', {
                templateUrl: 'views/clients/editclient.html'
            })
            .when('/credit-provider/KADSWEF/viewclient/:id', {
                templateUrl: 'views/clients/viewclient.html'
            })
            .when('/credit-provider/KADSWEF/viewclient/:id/addcharge', {
                templateUrl: 'views/clients/addnewclientcharge.html'
            })
            .when('/credit-provider/KADSWEF/viewclient/:id/paycharge/:chargeid', {
                templateUrl: 'views/clients/payclientcharge.html'
            })
            .when('/credit-provider/KADSWEF/viewclient/:clientId/charges/:chargeId', {
                templateUrl: 'views/clients/viewclientcharge.html'
            })
            .when('/credit-provider/KADSWEF/viewclient/:id/chargeoverview', {
                templateUrl: 'views/clients/clientchargeoverview.html'
            })
            .when('/credit-provider/KADSWEF/clientscreenreport/:clientId', {
                templateUrl: 'views/clients/clientscreenreport.html'
            })
            .when('/credit-provider/KADSWEF/client/:id/:action', {
                templateUrl: 'views/clients/clientactions.html'
            })
            .when('/credit-provider/KADSWEF/transferclient/:id', {
                templateUrl: 'views/clients/transferclient.html'
            })
            .when('/credit-provider/KADSWEF/addclientdocument/:clientId', {
                templateUrl: 'views/clients/addclientdocument.html'
            })
            .when('/credit-provider/KADSWEF/clientclosedloanaccount/:clientId', {
                templateUrl: 'views/clients/clientclosedloanaccount.html'
            })
            .when('/credit-provider/KADSWEF/clientclosedsavingaccount/:clientId', {
                templateUrl: 'views/clients/clientclosedsavingaccount.html'
            })
            .when('/credit-provider/KADSWEF/addclientidentifier/:clientId', {
                templateUrl: 'views/clients/addclientidentifier.html'
            })
            .when('/credit-provider/KADSWEF/addclientidentifierdocument/:clientId/:resourceId', {
                templateUrl: 'views/clients/addclientidentifierdocument.html'
            })
            .when('/credit-provider/KADSWEF/survey/:clientId', {
                templateUrl: 'views/clients/survey.html'
            })
            .when('/credit-provider/KADSWEF/viewsurvey/:id', {
                templateUrl: 'views/surveys/viewsurvey.html'
            })
            .when('/credit-provider/KADSWEF/clients/survey/:clientId', {
                templateUrl: 'views/surveys/viewclientsurvey.html'
            })
            .when('/credit-provider/KADSWEF/newclientloanaccount/:clientId', {
                templateUrl: 'views/loans/newloanaccount.html'
            })
            .when('/credit-provider/KADSWEF/newgrouploanaccount/:groupId', {
                templateUrl: 'views/loans/newloanaccount.html'
            })
            .when('/credit-provider/KADSWEF/newindividualjlgloanaccount/:groupId/:clientId', {
                templateUrl: 'views/loans/newloanaccount.html'
            })
            .when('/credit-provider/KADSWEF/newjlgloanaccount/:groupId', {
                templateUrl: 'views/loans/newjlgloanaccount.html'
            })
            .when('/credit-provider/KADSWEF/newglimaccount/:groupId', {
                templateUrl: 'views/loans/newglimaccount.html'
            })
            .when('/credit-provider/KADSWEF/viewloanaccount/:id', {
                templateUrl: 'views/loans/viewloanaccountdetails.html'
            })
            .when('/credit-provider/KADSWEF/viewglimaccount/:groupId/:id/:glimId', {
                templateUrl: 'views/loans/viewglimaccount.html'
            })
            .when('/credit-provider/KADSWEF/viewgsimaccount/:groupId/:gsimAccountNumber', {
                templateUrl: 'views/savings/viewgsimaccount.html'
            })
            .when('/credit-provider/KADSWEF/adjustrepaymentschedule/:accountId', {
                templateUrl: 'views/loans/AdjustRepaymentSchdule.html'
            })
            .when('/credit-provider/KADSWEF/loanaccount/:id/:action', {
                templateUrl: 'views/loans/loanaccountactions.html'
            })
            .when('/credit-provider/KADSWEF/glimloanaccount/:id/:action/:glimId/:groupId', {
                templateUrl: 'views/loans/glimloanaccountactions.html'
            })
            .when('/credit-provider/KADSWEF/loanaccountcharge/:id/:action/:chargeId', {
                templateUrl: 'views/loans/loanaccountactions.html'
            })
            .when('/credit-provider/KADSWEF/loandisbursedetail/:id/:action/:disbursementId', {
                templateUrl: 'views/loans/loanaccountactions.html'
            })
            .when('/credit-provider/KADSWEF/loandisbursedetail/:id/:action', {
                templateUrl: 'views/loans/loanaccountactions.html'
            })
            .when('/credit-provider/KADSWEF/editloanaccount/:id', {
                templateUrl: 'views/loans/editloanaccount.html'
            })
            .when('/credit-provider/KADSWEF/loanscreenreport/:loanId', {
                templateUrl: 'views/loans/loanscreenreport.html'
            })
            .when('/credit-provider/KADSWEF/addloancharge/:id', {
                templateUrl: 'views/loans/addloancharge.html'
            })
            .when('/credit-provider/KADSWEF/addcollateral/:id', {
                templateUrl: 'views/loans/addloancollateral.html'
            })
            .when('/credit-provider/KADSWEF/loan/:loanId/editcollateral/:id', {
                templateUrl: 'views/loans/editloancollateral.html'
            })
            .when('/credit-provider/KADSWEF/loan/:loanId/viewcollateral/:id', {
                templateUrl: 'views/loans/viewloancollateral.html'
            })
            .when('/credit-provider/KADSWEF/loan/:loanId/viewcharge/:id', {
                templateUrl: 'views/loans/viewloancharge.html'
            })
            .when('/credit-provider/KADSWEF/loan/:loanId/editcharge/:id', {
                templateUrl: 'views/loans/editloancharge.html'
            })
            .when('/credit-provider/KADSWEF/assignloanofficer/:id', {
                templateUrl: 'views/loans/assignloanofficer.html'
            })
            .when('/credit-provider/KADSWEF/addloandocument/:loanId', {
                templateUrl: 'views/loans/addloandocument.html'
            })
            .when('/credit-provider/KADSWEF/viewloantrxn/:accountId/trxnId/:id', {
                templateUrl: 'views/loans/view_loan_transaction.html'
            })
            .when('/credit-provider/KADSWEF/organization', {
                templateUrl: 'views/administration/organization.html'
            })
            .when('/credit-provider/KADSWEF/system', {
                templateUrl: 'views/administration/system.html'
            })
            .when('/credit-provider/KADSWEF/loanproducts', {
                templateUrl: 'views/products/loanproducts.html'
            })
            .when('/credit-provider/KADSWEF/charges', {
                templateUrl: 'views/products/charges.html'
            })
            .when('/credit-provider/KADSWEF/viewcharge/:id', {
                templateUrl: 'views/products/viewcharge.html'
            })
            .when('/credit-provider/KADSWEF/floatingrates', {
                templateUrl: 'views/products/floatingrates/FloatingRates.html'
            })
            .when('/credit-provider/KADSWEF/createfloatingrate', {
                templateUrl: 'views/products/floatingrates/CreateFloatingRate.html'
            })
            .when('/credit-provider/KADSWEF/viewfloatingrate/:floatingRateId', {
                templateUrl: 'views/products/floatingrates/ViewFloatingRate.html'
            })
            .when('/credit-provider/KADSWEF/editfloatingrate/:floatingRateId', {
                templateUrl: 'views/products/floatingrates/EditFloatingRate.html'
            })

            .when('/credit-provider/KADSWEF/savingproducts', {
                templateUrl: 'views/products/savingproducts.html'
            })
            .when('/credit-provider/KADSWEF/shareproducts', {
                templateUrl: 'views/products/shareproducts.html'
            })
            .when('/credit-provider/KADSWEF/createshareproduct', {
                templateUrl: 'views/products/createshareproduct.html'
            })
            .when('/credit-provider/KADSWEF/editshareproduct/:id', {
                templateUrl: 'views/products/editshareproduct.html'
            })
            .when('/credit-provider/KADSWEF/viewshareproduct/:id', {
                templateUrl: 'views/products/viewshareproduct.html'
            })
            .when('/credit-provider/KADSWEF/viewsavingproduct/:id', {
                templateUrl: 'views/products/viewsavingproduct.html'
            })
            .when('/credit-provider/KADSWEF/fixeddepositproducts', {
                templateUrl: 'views/products/fixeddepositproducts.html'
            })
            .when('/credit-provider/KADSWEF/viewfixeddepositproduct/:productId', {
                templateUrl: 'views/products/viewfixeddepositproduct.html'
            })
            .when('/credit-provider/KADSWEF/createfixeddepositproduct', {
                templateUrl: 'views/products/createfixeddepositproduct.html'
            })
            .when('/credit-provider/KADSWEF/editfixeddepositproduct/:productId', {
                templateUrl: 'views/products/editfixeddepositproduct.html'
            })
            .when('/credit-provider/KADSWEF/recurringdepositproducts', {
                templateUrl: 'views/products/recurringdepositproducts.html'
            })
            .when('/credit-provider/KADSWEF/viewrecurringdepositproduct/:productId', {
                templateUrl: 'views/products/viewrecurringdepositproduct.html'
            })
            .when('/credit-provider/KADSWEF/createrecurringdepositproduct', {
                templateUrl: 'views/products/createrecurringdepositproduct.html'
            })
            .when('/credit-provider/KADSWEF/editrecurringdepositproduct/:productId', {
                templateUrl: 'views/products/editrecurringdepositproduct.html'
            })
            .when('/credit-provider/KADSWEF/createinterestratechart/:productId/:productName/:productType', {
                templateUrl: 'views/products/createinterestratechart.html'
            })
            .when('/credit-provider/KADSWEF/interestratecharts/:productId/:productName/:productType', {
                templateUrl: 'views/products/interestratecharts.html'
            })
            .when('/credit-provider/KADSWEF/editinterestratecharts/:chartId/:productId/:productName/:productType', {
                templateUrl: 'views/products/editinterestratechart.html'
            })
            .when('/credit-provider/KADSWEF/offices', {
                templateUrl: 'views/organization/offices.html'
            })
            .when('/credit-provider/KADSWEF/createoffice', {
                templateUrl: 'views/organization/createoffice.html'
            })
            .when('/credit-provider/KADSWEF/viewoffice/:id', {
                templateUrl: 'views/organization/viewoffice.html'
            })
            .when('/credit-provider/KADSWEF/editoffice/:id', {
                templateUrl: 'views/organization/editoffice.html'
            })
            .when('/credit-provider/KADSWEF/tasks', {
                templateUrl: 'views/tasks.html'
            })
            .when('/credit-provider/KADSWEF/currconfig', {
                templateUrl: 'views/organization/currencyconfig.html'
            })
            .when('/credit-provider/KADSWEF/search/:query', {
                templateUrl: 'views/search/glresults.html'
            })
            .when('/credit-provider/KADSWEF/viewloanproduct/:id', {
                templateUrl: 'views/products/viewloanproduct.html'
            })
            .when('/credit-provider/KADSWEF/usersetting', {
                templateUrl: 'views/administration/usersettings.html'
            })
            .when('/credit-provider/KADSWEF/users/', {
                templateUrl: 'views/administration/userslist.html'
            })
            .when('/credit-provider/KADSWEF/createuser/', {
                templateUrl: 'views/administration/createuser.html'
            })
            .when('/credit-provider/KADSWEF/viewuser/:id', {
                templateUrl: 'views/administration/viewuser.html'
            })
            .when('/credit-provider/KADSWEF/edituser/:id', {
                templateUrl: 'views/administration/edituser.html'
            })
            .when('/credit-provider/KADSWEF/employees', {
                templateUrl: 'views/organization/employees.html'
            })
            .when('/credit-provider/KADSWEF/viewemployee/:id', {
                templateUrl: 'views/organization/viewemployee.html'
            })
            .when('/credit-provider/KADSWEF/editemployee/:id', {
                templateUrl: 'views/organization/editemployee.html'
            })
            .when('/credit-provider/KADSWEF/createemployee/', {
                templateUrl: 'views/organization/createemployee.html'
            })
            .when('/credit-provider/KADSWEF/managefunds/', {
                templateUrl: 'views/organization/managefunds.html'
            })
            .when('/credit-provider/KADSWEF/nav/offices', {
                templateUrl: 'views/navigation/offices.html'
            })
            .when('/credit-provider/KADSWEF/accounting', {
                templateUrl: 'views/accounting/accounting.html'
            })
            .when('/credit-provider/KADSWEF/accounting_coa', {
                templateUrl: 'views/accounting/accounting_coa.html'
            })
            .when('/credit-provider/KADSWEF/createglaccount', {
                templateUrl: 'views/accounting/createglaccounting.html'
            })
            .when('/credit-provider/KADSWEF/viewglaccount/:id', {
                templateUrl: 'views/accounting/viewglaccounting.html'
            })
            .when('/credit-provider/KADSWEF/editglaccount/:id', {
                templateUrl: 'views/accounting/editglaccounting.html'
            })
            .when('/credit-provider/KADSWEF/freqposting', {
                templateUrl: 'views/accounting/freqposting.html'
            })
            .when('/credit-provider/KADSWEF/viewtransactions/:transactionId', {
                templateUrl: 'views/accounting/view_transactions.html'
            })
            .when('/credit-provider/KADSWEF/journalentry', {
                templateUrl: 'views/accounting/journalentry_posting.html'
            })
            .when('/credit-provider/KADSWEF/searchtransaction', {
                templateUrl: 'views/accounting/search_transaction.html'
            })
            .when('/credit-provider/KADSWEF/accounts_closure', {
                templateUrl: 'views/accounting/accounts_closure.html'
            })
            .when('/credit-provider/KADSWEF/view_close_accounting/:id', {
                templateUrl: 'views/accounting/view_close_accounting.html'
            })
            .when('/credit-provider/KADSWEF/accounting_rules', {
                templateUrl: 'views/accounting/accounting_rules.html'
            })
            .when('/credit-provider/KADSWEF/viewaccrule/:id', {
                templateUrl: 'views/accounting/view_acc_rule.html'
            })
            .when('/credit-provider/KADSWEF/add_accrule', {
                templateUrl: 'views/accounting/add_acc_rule.html'
            })
            .when('/credit-provider/KADSWEF/editaccrule/:id', {
                templateUrl: 'views/accounting/edit_acc_rule.html'
            })
            .when('/credit-provider/KADSWEF/run_periodic_accrual',{
                templateUrl: 'views/accounting/periodic_accrual_accounting.html'
            })
            .when('/credit-provider/KADSWEF/openingbalances',{
                templateUrl: 'views/accounting/openingbalances.html'
            })
            .when('/credit-provider/KADSWEF/viewprovisioningentries',{
                templateUrl: 'views/accounting/provisioning/ProvisioningEntries.html'
            })
            .when('/credit-provider/KADSWEF/createprovisioningentries',{
                templateUrl: 'views/accounting/provisioning/CreateProvisioningEntries.html'
            })
            .when('/credit-provider/KADSWEF/viewprovisioningentry/:entryId',{
                templateUrl: 'views/accounting/provisioning/ViewProvisioningEntry.html'
            })
            .when('/credit-provider/KADSWEF/viewprovisioningjournalentry/:entryId',{
                templateUrl: 'views/accounting/provisioning/ViewProvisioningJournalEntries.html'
            })
            .when('/credit-provider/KADSWEF/viewcode/:id', {
                templateUrl: 'views/system/viewcode.html'
            })
            .when('/credit-provider/KADSWEF/datatables', {
                templateUrl: 'views/system/datatables.html'
            })
            .when('/credit-provider/KADSWEF/viewdatatable/:tableName', {
                templateUrl: 'views/system/viewdatatable.html'
            })
            .when('/credit-provider/KADSWEF/createdatatable', {
                templateUrl: 'views/system/createdatatable.html'
            })
            .when('/credit-provider/KADSWEF/editdatatable/:tableName', {
                templateUrl: 'views/system/editdatatable.html'
            })
            .when('/credit-provider/KADSWEF/makedatatableentry/:tableName/:entityId', {
                templateUrl: 'views/system/makedatatableentry.html'
            })
            .when('/credit-provider/KADSWEF/viewdatatableentry/:tableName/:entityId/:resourceId', {
                templateUrl: 'views/system/viewdatatableentry.html'
            })
            .when('/credit-provider/KADSWEF/viewsingledatatableentry/:tableName/:entityId', {
                templateUrl: 'views/system/viewdatatableentry.html'
            })
            .when('/credit-provider/KADSWEF/addcode', {
                templateUrl: 'views/system/addcode.html'
            })
            .when('/credit-provider/KADSWEF/jobs', {
                templateUrl: 'views/system/schedulerjobs.html'
            })
            .when('/credit-provider/KADSWEF/viewschedulerjob/:id', {
                templateUrl: 'views/system/viewschedulerjob.html'
            })
            .when('/credit-provider/KADSWEF/editschedulerjob/:id', {
                templateUrl: 'views/system/editschedulerjob.html'
            })
            .when('/credit-provider/KADSWEF/viewhistory/:id', {
                templateUrl: 'views/system/viewschedulerjobhistory.html'
            })
            .when('/credit-provider/KADSWEF/codes', {
                templateUrl: 'views/system/codes.html'
            })
            .when('/credit-provider/KADSWEF/editcode/:id', {
                templateUrl: 'views/system/editcode.html'
            })
            .when('/credit-provider/KADSWEF/hooks', {
                templateUrl: 'views/system/hooks.html'
            })
            .when('/credit-provider/KADSWEF/viewhook/:id', {
                templateUrl: 'views/system/viewhook.html'
            })
            .when('/credit-provider/KADSWEF/addhook', {
                templateUrl: 'views/system/addhook.html'
            })
            .when('/credit-provider/KADSWEF/edithook/:id', {
                templateUrl: 'views/system/edithook.html'
            })
            .when('/credit-provider/KADSWEF/entitytoentitymapping', {
                templateUrl: 'views/system/entitytoentitymapping.html'
            })
            .when('/credit-provider/KADSWEF/reports', {
                templateUrl: 'views/system/reports.html'
            })
            .when('/credit-provider/KADSWEF/system/viewreport/:id', {
                templateUrl: 'views/system/viewreport.html'
            })
            .when('/credit-provider/KADSWEF/createreport', {
                templateUrl: 'views/system/createreport.html'
            })
            .when('/credit-provider/KADSWEF/editreport/:id', {
                templateUrl: 'views/system/editreport.html'
            })
            .when('/credit-provider/KADSWEF/accountnumberpreferences', {
                templateUrl: 'views/system/accountnumberpreferences.html'
            })
            .when('/credit-provider/KADSWEF/addaccountnumberpreferences', {
                templateUrl: 'views/system/addaccountnumberpreferences.html'
            })
            .when('/credit-provider/KADSWEF/viewaccountnumberpreferences/:id', {
                templateUrl: 'views/system/viewaccountnumberpreferences.html'
            })
            .when('/credit-provider/KADSWEF/editaccountnumberpreferences/:id', {
                templateUrl: 'views/system/editaccountnumberpreferences.html'
            })
            .when('/credit-provider/KADSWEF/holidays', {
                templateUrl: 'views/organization/holidays.html'
            })
            .when('/credit-provider/KADSWEF/createholiday', {
                templateUrl: 'views/organization/createholiday.html'
            })
            .when('/credit-provider/KADSWEF/viewholiday/:id', {
                templateUrl: 'views/organization/viewholiday.html'
            })
            .when('/credit-provider/KADSWEF/editholiday/:id', {
                templateUrl: 'views/organization/editholiday.html'
            })
            .when('/credit-provider/KADSWEF/workingdays', {
                templateUrl: 'views/organization/workingdays.html'
            })
            .when('/credit-provider/KADSWEF/passwordpreferences', {
                templateUrl: 'views/organization/passwordpreferences.html'
            })
            .when('/credit-provider/KADSWEF/viewpaymenttype/', {
                templateUrl: 'views/organization/viewpaymenttype.html'
            })
            .when('/credit-provider/KADSWEF/createPaymentType/', {
                templateUrl: 'views/organization/createpaymenttype.html'
            })
            .when('/credit-provider/KADSWEF/editPaymentType/:id', {
                templateUrl: 'views/organization/editpaymenttype.html'
            })
            .when('/credit-provider/KADSWEF/reports/:type', {
                templateUrl: 'views/reports/view_reports.html'
            })
            .when('/credit-provider/KADSWEF/run_report/:name', {
                templateUrl: 'views/reports/run_reports.html'
            })
            .when('/credit-provider/KADSWEF/xbrl', {
                templateUrl: 'views/reports/xbrl.html'
            })
            .when('/credit-provider/KADSWEF/xbrlreport', {
                templateUrl: 'views/reports/xbrlreport.html'
            })
            .when('/credit-provider/KADSWEF/new_client_saving_application/:clientId', {
                templateUrl: 'views/savings/new_saving_account_application.html'
            })
            .when('/credit-provider/KADSWEF/new_gsim_application/:groupId', {
                templateUrl: 'views/savings/gsimapplication.html'
            })
            .when('/credit-provider/KADSWEF/new_group_saving_application/:groupId', {
                templateUrl: 'views/savings/new_saving_account_application.html'
            })
            .when('/credit-provider/KADSWEF/new_group_saving_application/:groupId/:centerEntity', {
                templateUrl: 'views/savings/new_saving_account_application.html'
            })
            .when('/credit-provider/KADSWEF/new_jlg_saving_application/:groupId/:clientId', {
                templateUrl: 'views/savings/new_saving_account_application.html'
            })
            .when('/credit-provider/KADSWEF/viewsavingaccount/:id', {
                templateUrl: 'views/savings/view_saving_account_details.html'
            })
            .when('/credit-provider/KADSWEF/savings/:savingId/viewcharge/:id', {
                templateUrl: 'views/savings/viewsavingscharge.html'
            })
            .when('/credit-provider/KADSWEF/viewonholdtransactions/:savingsId/:fromPath/:fromPathId', {
                templateUrl: 'views/savings/list_onhold_transactions.html'
            })
            .when('/credit-provider/KADSWEF/groups', {
                templateUrl: 'views/groups/groups.html'
            })
            .when('/credit-provider/KADSWEF/creategroup', {
                templateUrl: 'views/groups/creategroup.html'
            })
            .when('/credit-provider/KADSWEF/attachmeeting/:id/:entityType', {
                templateUrl: 'views/groups/attachmeeting.html'
            })
            .when('/credit-provider/KADSWEF/editcalendarbasedonmeetingdates/:entityType/:groupOrCenterId/:calendarId', {
                templateUrl: 'views/groups/editmeeting_based_on_meeting_date.html'
            })
            .when('/credit-provider/KADSWEF/editcalendar/:entityType/:groupOrCenterId/:calendarId', {
                templateUrl: 'views/groups/editmeeting.html'
            })
            .when('/credit-provider/KADSWEF/editsavingaccount/:id', {
                templateUrl: 'views/savings/edit_saving_account_application.html'
            })
            .when('/credit-provider/KADSWEF/editgsimaccount/:parentGSIMId/:gsimChildAccountId/:groupId/:gsimAccountNumber', {
                templateUrl: 'views/savings/edit_gsim_account_application.html'
            })
            .when('/credit-provider/KADSWEF/addnewmember/:groupId/:parentGSIMAccounNo/:gsimChildAccountId', {
                templateUrl: 'views/savings/addNewMemberToGSIM.html'
            })
            .when('/credit-provider/KADSWEF/savingaccount/:id/:action', {
                templateUrl: 'views/savings/saving_account_actions.html'
            })
            .when('/credit-provider/KADSWEF/gsimaccount/:parentId/:childId/:action/:groupId/:gsimAccountNumber', {
                templateUrl: 'views/savings/gsim_account_actions.html'
            })
            .when('/credit-provider/KADSWEF/savingaccountcharge/:id/:action/:chargeId', {
                templateUrl: 'views/savings/saving_account_actions.html'
            })
            .when('/credit-provider/KADSWEF/savingaccounts/:id/charges', {
                templateUrl: 'views/savings/addnewsavingscharge.html'
            })
            .when('/credit-provider/KADSWEF/viewaccounttransfers/:id', {
                templateUrl: 'views/accounttransfers/view_accounttransfer.html'
            })
            .when('/credit-provider/KADSWEF/accounttransfers/:accountType/:accountId', {
                templateUrl: 'views/accounttransfers/make_accounttransfer.html'
            })
            .when('/credit-provider/KADSWEF/viewsavingtrxn/:accountId/trxnId/:id', {
                templateUrl: 'views/savings/view_saving_transaction.html'
            })
            .when('/credit-provider/KADSWEF/newclientfixeddepositaccount/:clientId', {
                templateUrl: 'views/deposits/fixed/newapplication.html'
            })
            .when('/credit-provider/KADSWEF/viewfixeddepositaccount/:id', {
                templateUrl: 'views/deposits/fixed/viewaccountdetails.html'
            })
            .when('/credit-provider/KADSWEF/editfixeddepositaccount/:id', {
                templateUrl: 'views/deposits/fixed/edit_account_application.html'
            })
            .when('/credit-provider/KADSWEF/fixeddepositaccount/:id/charges', {
                templateUrl: 'views/deposits/fixed/add_new_fixed_deposit_charge.html'
            })
            .when('/credit-provider/KADSWEF/fixeddepositaccount/:id/:action', {
                templateUrl: 'views/deposits/fixed/fixed_deposit_account_actions.html'
            })
            .when('/credit-provider/KADSWEF/fixeddepositaccountcharge/:id/:action/:chargeId', {
                templateUrl: 'views/deposits/fixed/fixed_deposit_account_actions.html'
            })
            .when('/credit-provider/KADSWEF/viewfixeddepositaccounttrxn/:accountId/:transactionId', {
                templateUrl: 'views/deposits/fixed/view_fixed_deposit_transaction.html'
            })
            .when('/credit-provider/KADSWEF/newclientrecurringdepositaccount/:clientId', {
                templateUrl: 'views/deposits/recurring/newapplication.html'
            })
            .when('/credit-provider/KADSWEF/viewrecurringdepositaccount/:id', {
                templateUrl: 'views/deposits/recurring/viewaccountdetails.html'
            })
            .when('/credit-provider/KADSWEF/editrecurringdepositaccount/:id', {
                templateUrl: 'views/deposits/recurring/edit_account_application.html'
            })
            .when('/credit-provider/KADSWEF/recurringdepositaccount/:id/charges', {
                templateUrl: 'views/deposits/recurring/add_new_recurring_deposit_charge.html'
            })
            .when('/credit-provider/KADSWEF/recurringdepositaccount/:id/:action', {
                templateUrl: 'views/deposits/recurring/recurring_deposit_account_actions.html'
            })
            .when('/credit-provider/KADSWEF/recurringdepositaccountcharge/:id/:action/:chargeId', {
                templateUrl: 'views/deposits/recurring/recurring_deposit_account_actions.html'
            })
            .when('/credit-provider/KADSWEF/viewrecurringdepositaccounttrxn/:accountId/:transactionId', {
                templateUrl: 'views/deposits/recurring/view_recurring_deposit_transaction.html'
            })
            .when('/credit-provider/KADSWEF/viewgroup/:id', {
                templateUrl: 'views/groups/viewgroup.html'
            })
            .when('/credit-provider/KADSWEF/editgroup/:id', {
                templateUrl: 'views/groups/editgroup.html'
            })
            .when('/credit-provider/KADSWEF/addmember', {
                templateUrl: 'views/clients/createclient.html'
            })
            .when('/credit-provider/KADSWEF/groupattendance', {
                templateUrl: 'views/groups/groupattendance.html'
            })
            .when('/credit-provider/KADSWEF/closegroup/:id', {
                templateUrl: 'views/groups/closegroup.html'
            })
            .when('/credit-provider/KADSWEF/groupclosedloanaccount/:groupId', {
                templateUrl: 'views/groups/groupclosedloanaccount.html'
            })
            .when('/credit-provider/KADSWEF/groupclosedsavingaccount/:groupId', {
                templateUrl: 'views/groups/groupclosedsavingaccount.html'
            })
            .when('/credit-provider/KADSWEF/addrole/:id', {
                templateUrl: 'views/groups/addrole.html'
            })
            .when('/credit-provider/KADSWEF/membermanage/:id', {
                templateUrl: 'views/groups/membermanage.html'
            })
            .when('/credit-provider/KADSWEF/transferclients/:id', {
                templateUrl: 'views/groups/transferclients.html'
            })
            .when('/credit-provider/KADSWEF/centers', {
                templateUrl: 'views/centers/centers.html'
            })
            .when('/credit-provider/KADSWEF/viewcenter/:id', {
                templateUrl: 'views/centers/viewcenter.html'
            })
            .when('/credit-provider/KADSWEF/createcenter', {
                templateUrl: 'views/centers/createcenter.html'
            })
            .when('/credit-provider/KADSWEF/editcenter/:id', {
                templateUrl: 'views/centers/editcenter.html'
            })
            .when('/credit-provider/KADSWEF/closecenter/:id', {
                templateUrl: 'views/centers/closecenter.html'
            })
            .when('/credit-provider/KADSWEF/managegroupmembers/:id', {
                templateUrl: 'views/centers/managegroupmembers.html'
            })
            .when('/credit-provider/KADSWEF/addgroup', {
                templateUrl: 'views/groups/creategroup.html'
            })
            .when('/credit-provider/KADSWEF/centerattendance', {
                templateUrl: 'views/centers/centerattendance.html'
            })
            .when('/credit-provider/KADSWEF/createcharge', {
                templateUrl: 'views/products/createcharge.html'
            })
            .when('/credit-provider/KADSWEF/editcharge/:id', {
                templateUrl: 'views/products/editcharge.html'
            })
            .when('/credit-provider/KADSWEF/productivesheet/:officeId/:officeName/:meetingDate/:staffId', {
                templateUrl: 'views/collection/productivecollectionsheet.html'
            })
            .when('/credit-provider/KADSWEF/entercollectionsheet', {
                templateUrl: 'views/collection/collectionsheet.html'
            })
            .when('/credit-provider/KADSWEF/individualcollectionsheet', {
                templateUrl: 'views/collection/individualcollectionsheet.html'
            })
            .when('/credit-provider/KADSWEF/assignstaff/:id/:entityType', {
                templateUrl: 'views/groups/assignstaff.html'
            })
            .when('/credit-provider/KADSWEF/global', {
                templateUrl: 'views/administration/global.html'
            })
            .when('/credit-provider/KADSWEF/configurations/:configId/editconfig', {
                templateUrl: 'views/administration/editGlobalConfiguration.html'
            })
            .when('/credit-provider/KADSWEF/productmix', {
                templateUrl: 'views/products/productmix/productmix.html'
            })
            .when('/credit-provider/KADSWEF/viewproductmix/:id', {
                templateUrl: 'views/products/productmix/viewproductmix.html'
            })
            .when('/credit-provider/KADSWEF/editproductmix/:id', {
                templateUrl: 'views/products/productmix/editproductmix.html'
            })
            .when('/credit-provider/KADSWEF/addproductmix', {
                templateUrl: 'views/products/productmix/addproductmix.html'
            })
            .when('/credit-provider/KADSWEF/bulkloan', {
                templateUrl: 'views/organization/bulkloan.html'
            })
            .when('/credit-provider/KADSWEF/audit', {
                templateUrl: 'views/system/audit.html'
            })
            .when('/credit-provider/KADSWEF/viewaudit/:id', {
                templateUrl: 'views/system/viewaudit.html'
            })
            .when('/credit-provider/KADSWEF/createclosure', {
                templateUrl: 'views/accounting/createclosure.html'
            })
            .when('/credit-provider/KADSWEF/guarantor/:id', {
                templateUrl: 'views/loans/guarantor.html'
            })
            .when('/credit-provider/KADSWEF/listguarantors/:id', {
                templateUrl: 'views/loans/list_guarantor.html'
            })
            .when('/credit-provider/KADSWEF/viewcheckerinbox/:id', {
                templateUrl: 'views/system/viewcheckerinbox.html'
            })
            .when('/credit-provider/KADSWEF/editguarantor/:id/:loanId', {
                templateUrl: 'views/loans/editguarantor.html'
            })
            .when('/credit-provider/KADSWEF/viewguarantortransactions/:savingsId/:fundingId/:fromPath/:fromPathId', {
                templateUrl: 'views/savings/list_onhold_transactions.html'
            })
            .when('/credit-provider/KADSWEF/expertsearch', {
                templateUrl: 'views/expertsearch.html'
            })
            .when('/credit-provider/KADSWEF/profile', {
                templateUrl: 'views/profile.html'
            })
            .when('/credit-provider/KADSWEF/viewMakerCheckerTask/:commandId', {
                templateUrl: 'views/system/viewMakerCheckerTask.html'
            })
            .when('/credit-provider/KADSWEF/help', {
                templateUrl: 'views/help.html'
            })
            .when('/credit-provider/KADSWEF/checkeractionperformed', {
                templateUrl: 'views/system/checkerActionPerformed.html'
            })
            .when('/credit-provider/KADSWEF/advsearch', {
                templateUrl: 'views/search/advsearch.html'
            })
            .when('/credit-provider/KADSWEF/editfinancialactivitymapping/:mappingId', {
                templateUrl: 'views/accounting/edit_financial_activity_mapping.html'
            })
            .when('/credit-provider/KADSWEF/viewfinancialactivitymapping/:mappingId', {
                templateUrl: 'views/accounting/view_financial_activity.html'
            })
            .when('/credit-provider/KADSWEF/financialactivityaccountmappings', {
                templateUrl: 'views/accounting/financial_accounting_mapping.html'
            })
            .when('/credit-provider/KADSWEF/addfinancialmapping', {
                templateUrl: 'views/accounting/add_financial_accounting_mapping.html'
            })
            .when('/credit-provider/KADSWEF/assignsavingsofficer/:id', {
                templateUrl: 'views/savings/assignsavingsofficer.html'
            })
            .when('/credit-provider/KADSWEF/unassignsavingsofficer/:id', {
                templateUrl: 'views/savings/unassignsavingsofficer.html'
            })
            .when('/credit-provider/KADSWEF/tellers', {
                templateUrl: 'views/organization/cashmgmt/tellers.html'
            })
            .when('/credit-provider/KADSWEF/createTeller', {
                templateUrl: 'views/organization/cashmgmt/createTeller.html'
            })
            .when('/credit-provider/KADSWEF/viewtellers/:id', {
                templateUrl: 'views/organization/cashmgmt/viewTeller.html'
            })
            .when('/credit-provider/KADSWEF/tellers/:tellerId/cashiers', {
                templateUrl: 'views/organization/cashmgmt/cashiersForTeller.html'
            })
            .when('/credit-provider/KADSWEF/tellers/:tellerId/cashiers/:cashierId', {
                templateUrl: 'views/organization/cashmgmt/viewCashiersForTeller.html'
            })
            .when('/credit-provider/KADSWEF/tellers/:tellerId/cashiers/:cashierId/txns/:currencyCode', {
                templateUrl: 'views/organization/cashmgmt/cashierTransactions.html'
            })
            .when('/credit-provider/KADSWEF/tellers/:tellerId/cashiers/:cashierId/actions/:action', {
                templateUrl: 'views/organization/cashmgmt/cashierFundsAllocationSettlement.html'
            })
            .when('/credit-provider/KADSWEF/tellers/:tellerId/cashiers/:cashierId/settle', {
                templateUrl: 'views/organization/cashmgmt/cashierFundsAllocationSettlement.html'
            })
            .when('/credit-provider/KADSWEF/tellers/:tellerId/createCashierForTeller', {
                templateUrl: 'views/organization/cashmgmt/createCashier.html'
            })
            .when('/credit-provider/KADSWEF/editteller/:id', {
                templateUrl: 'views/organization/cashmgmt/editTeller.html'
            })
            .when('/credit-provider/KADSWEF/tellers/:tellerId/editcashier/:id', {
                templateUrl: 'views/organization/cashmgmt/editcashier.html'
            })
            .when('/credit-provider/KADSWEF/externalservices', {
                templateUrl: 'views/administration/externalServices.html'
            })
            .when('/credit-provider/KADSWEF/externalservices/:externalServicesType', {
                templateUrl: 'views/administration/viewExternalServicesConfiguration.html'
            })
            .when('/credit-provider/KADSWEF/externalservices/:externalServicesType/editconfig', {
                templateUrl: 'views/administration/editExternalServicesConfiguration.html'
            })
            .when('/credit-provider/KADSWEF/twofactorconfig', {
                templateUrl: 'views/administration/viewTwoFactorConfig.html'
            })
            .when('/credit-provider/KADSWEF/twofactorconfig/edit/:configType', {
                templateUrl: 'views/administration/editTwoFactorConfig.html'
            })
            .when('/credit-provider/KADSWEF/loans/:loanId/reschedule/', {
                templateUrl: 'views/loans/rescheduleloans.html'
            })
            .when('/credit-provider/KADSWEF/loans/:loanId/viewreschedulerequest/:requestId', {
                templateUrl: 'views/loans/viewreschedulerequest.html'
            })
            .when('/credit-provider/KADSWEF/loans/:loanId/approvereschedulerequest/:requestId', {
                templateUrl: 'views/loans/approveloanreschedule.html'
            })
            .when('/credit-provider/KADSWEF/loans/:loanId/rejectreschedulerequest/:requestId', {
                templateUrl: 'views/loans/rejectloanreschedule.html'
            })
            .when('/credit-provider/KADSWEF/loans/:loanId/previewloanrepaymentschedule/:requestId', {
                templateUrl: 'views/loans/previewloanrepaymentschedule.html'
            })
            .when('/credit-provider/KADSWEF/viewallprovisionings', {
                templateUrl: 'views/organization/provisioning/ViewAllProvisioningCriteria.html'
            })
            .when('/credit-provider/KADSWEF/createprovisioningcriteria', {
                templateUrl: 'views/organization/provisioning/CreateProvisioningCriteria.html'
            })
            .when('/credit-provider/KADSWEF/viewprovisioningcriteria/:criteriaId', {
                templateUrl: 'views/organization/provisioning/ViewProvisioningCriteria.html'
            })
            .when('/credit-provider/KADSWEF/editprovisioningcriteria/:criteriaId', {
                templateUrl: 'views/organization/provisioning/EditProvisioningCriteria.html'
            })
            .when('/credit-provider/KADSWEF/taxconfiguration',{
                templateUrl: 'views/products/tax/TaxConfigurations.html'
            })
            .when('/credit-provider/KADSWEF/createtaxcomponent', {
                templateUrl: 'views/products/tax/CreateTaxComponent.html'
            })
            .when('/credit-provider/KADSWEF/taxcomponents', {
                templateUrl: 'views/products/tax/TaxComponents.html'
            })
            .when('/credit-provider/KADSWEF/viewtaxcomponent/:taxComponentId', {
                templateUrl: 'views/products/tax/ViewTaxComponent.html'
            })
            .when('/credit-provider/KADSWEF/edittaxcomponent/:taxComponentId', {
                templateUrl: 'views/products/tax/EditTaxComponent.html'
            })
            .when('/credit-provider/KADSWEF/createtaxgroup', {
                templateUrl: 'views/products/tax/CreateTaxGroup.html'
            })
            .when('/credit-provider/KADSWEF/taxgroups', {
                templateUrl: 'views/products/tax/TaxGroups.html'
            })
            .when('/credit-provider/KADSWEF/viewtaxgroup/:taxGroupId', {
                templateUrl: 'views/products/tax/ViewTaxGroup.html'
            })
            .when('/credit-provider/KADSWEF/edittaxgroup/:taxGroupId', {
                templateUrl: 'views/products/tax/EditTaxGroup.html'
            })
            .when('/credit-provider/KADSWEF/createshareaccount/:clientId', {
                templateUrl: 'views/shares/createshareaccount.html'
            })
            .when('/credit-provider/KADSWEF/viewshareaccount/:id', {
                templateUrl: 'views/shares/viewshareaccount.html'
            })
            .when('/credit-provider/KADSWEF/editshareaccount/:accountId', {
                templateUrl: 'views/shares/editshareaccount.html'
            })
            .when('/credit-provider/KADSWEF/shareaccount/:accountId/:action', {
                templateUrl: 'views/shares/shareaccountactions.html'
            })
            .when('/credit-provider/KADSWEF/shareaccount/:accountId/purchasedshares/:purchasedSharesId/:action', {
                templateUrl: 'views/shares/shareaccountactions.html'
            })
            .when('/credit-provider/KADSWEF/dividends/:productId/', {
                templateUrl: 'views/products/dividendlisting.html'
            })
            .when('/credit-provider/KADSWEF/dividends/:productId/dividend/:dividendId/:status', {
                templateUrl: 'views/products/viewdividends.html'
            })
            .when('/credit-provider/KADSWEF/shareproduct/:productId/:action', {
                templateUrl: 'views/products/shareproductactions.html'
            })
            .when('/credit-provider/KADSWEF/shareproduct/:productId/:dividendId/:action', {
                templateUrl: 'views/products/shareproductactions.html'
            })
            .when('/credit-provider/KADSWEF/loanforeclosure/:id', {
                templateUrl: 'views/loans/loanforeclosure.html'
            })
            .when('/credit-provider/KADSWEF/address/:id', {
                templateUrl: 'views/administration/AddressForm.html'
            })
            .when('/credit-provider/KADSWEF/editAddress/:addrType/:addrId/:clientId', {
                templateUrl: 'views/administration/EditAddress.html'
            })
            .when('/credit-provider/KADSWEF/smscampaigns', {
                templateUrl: 'views/organization/smscampaigns/smscampaigns.html'
            })
            .when('/credit-provider/KADSWEF/createsmscampaign', {
                templateUrl: 'views/organization/smscampaigns/createsmscampaign.html'
            })
            .when('/credit-provider/KADSWEF/viewsmscampaign/:campaignId', {
                templateUrl: 'views/organization/smscampaigns/viewsmscampaign.html'
            })
            .when('/credit-provider/KADSWEF/editsmscampaign/:campaignId', {
                templateUrl: 'views/organization/smscampaigns/editsmscampaign.html'
            })
            .when('/credit-provider/KADSWEF/entitydatatablechecks', {
                templateUrl: 'views/organization/entitydatatablechecks/entitydatatablechecks.html'
            })
            .when('/credit-provider/KADSWEF/notifications', {
                templateUrl: 'views/notification/notifications.html'
            })
            .when('/credit-provider/KADSWEF/surveys',{
                templateUrl: 'views/surveys/surveys.html'
            })
            .when('/credit-provider/KADSWEF/surveys/add',{
                templateUrl: 'views/surveys/createsurvey.html'
            })
            .when('/credit-provider/KADSWEF/editsurvey/:id',{
                templateUrl: 'views/surveys/editsurvey.html'
            })
            .when('/credit-provider/KADSWEF/editfamilymember/:clientId/:familyMemberId', {
                templateUrl: 'views/clients/editfamilymembers.html'
            })
            .when('/credit-provider/KADSWEF/addfamilymembers/:clientId/', {
                templateUrl: 'views/clients/addfamilymembers.html'
            })
            .when('/credit-provider/KADSWEF/bulkimportoffices', {
                 templateUrl: 'views/organization/bulkimport/bulkimportoffices.html'
             })
             .when('/credit-provider/KADSWEF/bulkimportclients', {
                 templateUrl: 'views/organization/bulkimport/bulkimportclients.html'
             })
            .when('/credit-provider/KADSWEF/bulkimportloanaccounts', {
            templateUrl: 'views/organization/bulkimport/bulkimportloanaccounts.html'
            })
            .when('/credit-provider/KADSWEF/bulkimportloanrepayments', {
                templateUrl: 'views/organization/bulkimport/bulkimportloanrepayments.html'
            })
            .when('/credit-provider/KADSWEF/bulkimportguarantor', {
                templateUrl: 'views/organization/bulkimport/bulkimportguarantor.html'
            })
            .when('/credit-provider/KADSWEF/bulkimportsavingsaccounts', {
                templateUrl: 'views/organization/bulkimport/bulkimportsavingsaccounts.html'
            })
            .when('/credit-provider/KADSWEF/bulkimportsavingsaccountstransactions', {
                templateUrl: 'views/organization/bulkimport/bulkimportsavingsaccountstransactions.html'
            })
            .when('/credit-provider/KADSWEF/bulkimportrecurringdeposits', {
                templateUrl: 'views/organization/bulkimport/bulkimportrecurringdeposits.html'
            })
            .when('/credit-provider/KADSWEF/bulkimportrecurringdepositstransactions', {
                templateUrl: 'views/organization/bulkimport/bulkimportrecurringdepositstransactions.html'
            })
            .when('/credit-provider/KADSWEF/bulkimportshareaccounts', {
                templateUrl: 'views/organization/bulkimport/bulkimportshareaccounts.html'
            })
            .when('/credit-provider/KADSWEF/bulkimportfixeddepositaccounts', {
                templateUrl: 'views/organization/bulkimport/bulkimportfixeddepositaccounts.html'
            })
            .when('/credit-provider/KADSWEF/bulkimportfixeddeposittransactions', {
                templateUrl: 'views/organization/bulkimport/bulkimportfixeddeposittransactions.html'
            })
            .when('/credit-provider/KADSWEF/bulkimportcoa', {
                templateUrl: 'views/organization/bulkimport/bulkimportcoa.html'
            })
            .when('/credit-provider/KADSWEF/bulkimportjournalentries', {
                templateUrl: 'views/organization/bulkimport/bulkimportjournalentries.html'
            })
            .when('/credit-provider/KADSWEF/bulkimportgroup', {
                templateUrl: 'views/organization/bulkimport/bulkimportgroup.html'
            })
            .when('/credit-provider/KADSWEF/bulkimportcenters', {
                templateUrl: 'views/organization/bulkimport/bulkimportcenters.html'
            })
            .when('/credit-provider/KADSWEF/bulkimportemployees', {
                templateUrl: 'views/organization/bulkimport/bulkimportemployees.html'
            })
            .when('/credit-provider/KADSWEF/bulkimportusers', {
                templateUrl: 'views/organization/bulkimport/bulkimportusers.html'
            })
            .when('/credit-provider/KADSWEF/bulkimport', {
                templateUrl: 'views/organization/bulkimport/bulkimport.html'
            })
			.when('/credit-provider/KADSWEF/adhocquery/', {
                templateUrl: 'views/adhocquery/adhocquerylists.html'
            })
            .when('/credit-provider/KADSWEF/createadhocquery/', {
                templateUrl: 'views/adhocquery/createadhocquery.html'
            })
            .when('/credit-provider/KADSWEF/viewadhocquery/:id', {
                templateUrl: 'views/adhocquery/viewadhocquery.html'
            })
            .when('/credit-provider/KADSWEF/editadhocquery/:id', {
                templateUrl: 'views/adhocquery/editadhocquery.html'
            })
            .when('/credit-provider/KADSWEF/selfservice/createuser/:clientId',{
                templateUrl: 'views/selfservice/createuser.html'
            })
            .when('/credit-provider/KADSWEF/externalservicesCB/CreditBureau', {
                templateUrl: 'views/administration/CreditBureauSummary.html'
            })
             .when('/credit-provider/KADSWEF/externalservicesCB/CreditBureau/addcb', {
                 templateUrl: 'views/administration/addNewCreditBureau.html'
            })
            .when('/credit-provider/KADSWEF/externalservicesCB/CreditBureau/mapcblp', {
                templateUrl: 'views/administration/MapCreditBureauToLP.html'
            })
            .when('/credit-provider/KADSWEF/rates', {
                templateUrl: 'views/products/rates.html'
            })
            .when('/credit-provider/KADSWEF/createrate', {
                templateUrl: 'views/products/createrate.html'
            })
            .when('/credit-provider/KADSWEF/viewrate/:rateId', {
                templateUrl: 'views/products/viewrate.html'
            })
            .when('/credit-provider/KADSWEF/editrate/:rateId', {
                templateUrl: 'views/products/editrate.html'
            })
            .otherwise({
                templateUrl: "views/errors/404.html"
            });
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(false);
    };
    mifosX.ng.application.config(defineRoutes).run(function ($log) {
        $log.info("Routes definition completed");
    });
}(mifosX || {}));
;
(function (mifosX) {
    var defineHeaders = function ($httpProvider, $translateProvider, ResourceFactoryProvider, HttpServiceProvider, $idleProvider, $keepaliveProvider, IDLE_DURATION, WARN_DURATION, KEEPALIVE_INTERVAL) {
        var mainLink = getLocation(window.location.href);
        var baseApiUrl = "https://demo.mifos.io";
        var host = "";
        var portNumber = "";
        //accessing from openmf server
        if (mainLink.hostname.indexOf('mifos.io') >= 0) {
            var hostname = window.location.hostname;
            console.log('hostname---' + hostname);
            domains = hostname.split('.');
            console.log('domains---' + domains);
            // For multi tenant hosting
            if (domains[0] == "demo") {
                $httpProvider.defaults.headers.common['Fineract-Platform-TenantId'] = 'default';
                ResourceFactoryProvider.setTenantIdenetifier('default');
                console.log("demo server", domains[0]);
            } else {
                $httpProvider.defaults.headers.common['Fineract-Platform-TenantId'] = domains[0];
                ResourceFactoryProvider.setTenantIdenetifier(domains[0]);
                console.log("other than demo server", domains[0]);
            }
            host = "https://" + mainLink.hostname;
            console.log('hostname from mainLink = ', host);
        }
        //accessing from a file system or other servers
        else {
            if (mainLink.hostname != "") {
                baseApiUrl = "https://" + mainLink.hostname + (mainLink.port ? ':' + mainLink.port : '');
            }

            if (QueryParameters["baseApiUrl"]) {
                baseApiUrl = QueryParameters["baseApiUrl"];
            }
            var queryLink = getLocation(baseApiUrl);
            host = "https://" + queryLink.hostname + (queryLink.port ? ':' + queryLink.port : '');
            portNumber = queryLink.port;

            $httpProvider.defaults.headers.common['Fineract-Platform-TenantId'] = 'default';
            ResourceFactoryProvider.setTenantIdenetifier('default');
            if (QueryParameters["tenantIdentifier"]) {
                $httpProvider.defaults.headers.common['Fineract-Platform-TenantId'] = QueryParameters["tenantIdentifier"];
                ResourceFactoryProvider.setTenantIdenetifier(QueryParameters["tenantIdentifier"]);
            }
        }

        ResourceFactoryProvider.setBaseUrl(host);
        HttpServiceProvider.addRequestInterceptor('demoUrl', function (config) {
            return _.extend(config, {url: host + config.url });
        });

        // Enable CORS! (see e.g. http://enable-cors.org/)
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        //Set headers
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';

        // Configure i18n and preffer language
        //$translateProvider.translations('en', translationsEN);
        //$translateProvider.translations('de', translationsDE);
        $translateProvider.useSanitizeValueStrategy('escaped');
        $translateProvider.useStaticFilesLoader({
            prefix: 'global-translations/locale-',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.fallbackLanguage('en');
        //Timeout settings.
        $idleProvider.idleDuration(IDLE_DURATION); //Idle time 
        $idleProvider.warningDuration(WARN_DURATION); //warning time(sec)
        $keepaliveProvider.interval(KEEPALIVE_INTERVAL); //keep-alive ping
    };
    mifosX.ng.application.config(defineHeaders).run(function ($log, $idle) {
        $log.info("Initial tasks are done!");
        $idle.watch();
    });
}(mifosX || {}));

getLocation = function (href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

QueryParameters = (function () {
    var result = {};
    if (window.location.search) {
        // split up the query string and store in an associative array
        var params = window.location.search.slice(1).split("&");
        for (var i = 0; i < params.length; i++) {
            var tmp = params[i].split("=");
            result[tmp[0]] = unescape(tmp[1]);
        }
    }
    return result;
}());
;define(['angular', 'webstorage'], function (angular) {
    angular.module('webStorageModule')
        .constant('prefix', 'mifosX')
        .run(function ($log, webStorage) {
            if (webStorage.isSupported) {
                if (webStorage.local.isSupported) {
                    $log.info('Using local storage');
                } else if (webStorage.session.isSupported) {
                    $log.info('Using session storage');
                } else {
                    $log.warn('Using memory storage: a page reload will clear all stored data');
                }
            }
        });
});
