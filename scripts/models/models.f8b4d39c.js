(function (module) {
    mifosX.models = _.extend(module, {
        CashierTxnAmount: function (data) {
            this.txnType = data.txnType.value;
            this.amount = data.txnAmount;

            this.cashInAmount = function () {
	        	if (this.txnType == 'Cash In') {
	      			return this.amount;
	      		} else {
	      			return '';
	      		}
    		};

    		this.cashOutAmount = function () {
	        	if (this.txnType == 'Cash Out') {
	      			return this.amount;
	      		} else {
	      			return '';
	      		}
    		};

    		this.allocAmount = function  () {
	        	if (this.txnType == 'Allocate Cash') {
	      			return this.amount;
	      		} else {
	      			return '';
	      		}
    		};

    		this.settleAmount = function  () {
	        	if (this.txnType == 'Settle Cash') {
	      			return this.amount;
	      		} else {
	      			return '';
	      		}
    		};
        }
    });
}(mifosX.models || {}));
;(function (module) {
    mifosX.models = _.extend(module, {
        ClientStatus: function () {

            this.getStatus = function (status) {
                return this.statusTypes[status];
            };

            this.allStatusTypes = function () {
                return Object.keys(this.statusTypes);
            };

            this.statusKnown = function (status) {
                return this.allStatusTypes().indexOf(status) > -1;
            };

            this.statusTypes = {
                "Pending": [
                    {
                        name: "label.button.edit",
                        href: "#/credit-provider/KADSWEF/editclient",
                        icon: "fa fa-edit",
                        taskPermissionName: "UPDATE_CLIENT"
                    },
                    {
                        name: "label.button.activate",
                        href: "#/credit-provider/KADSWEF/client",
                        subhref: "activate",
                        icon: "fa fa-check",
                        taskPermissionName: "ACTIVATE_CLIENT"
                    },
                    {
                        name: "label.button.close",
                        href: "#/credit-provider/KADSWEF/client",
                        subhref: "close",
                        icon: "fa fa-remove-circle",
                        taskPermissionName: "CLOSE_CLIENT"
                    },
                    {
                        name: "label.button.reject",
                        href: "#/credit-provider/KADSWEF/client",
                        subhref: "reject",
                        icon: "fa fa-remove-circle",
                        taskPermissionName: "REJECT_CLIENT"
                    },
                    {
                        name: "label.button.withdraw",
                        href: "#/credit-provider/KADSWEF/client",
                        subhref: "withdraw",
                        icon: "fa fa-remove-circle",
                        taskPermissionName: "WITHDRAW_CLIENT"
                    }
                ],
                "Closed":[
                    {
                        name: "label.button.reactivate",
                        href: "#/credit-provider/KADSWEF/client",
                        subhref: "reactivate",
                        icon: "fa fa-check",
                        taskPermissionName: "REACTIVATE_CLIENT"
                    }

                ],
                "Rejected":[
                    {
                        name: "label.button.undoReject",
                        href: "#/credit-provider/KADSWEF/client",
                        subhref: "undoReject",
                        icon: "icon-ok-sign",
                        taskPermissionName: "UNDOREJECT_CLIENT"
                    }

                ],
                "Withdrawn":[
                    {
                        name: "label.button.undoWithdrawn",
                        href: "#/credit-provider/KADSWEF/client",
                        subhref: "undoWithdrawn",
                        icon: "icon-ok-sign",
                        taskPermissionName: "UNDOWITHDRAWAL_CLIENT"
                    }


                ],
                "Active": [
                    {
                        name: "label.button.edit",
                        href: "#/credit-provider/KADSWEF/editclient",
                        icon: "fa fa-edit",
                        taskPermissionName: "UPDATE_CLIENT"
                    },
                    {
                        name: "label.button.newloan",
                        href: "#/credit-provider/KADSWEF/newclientloanaccount",
                        icon: "fa fa-plus",
                        taskPermissionName: "CREATE_LOAN"
                    },
                    {
                        name: "label.button.newsaving",
                        href: "#/credit-provider/KADSWEF/new_client_saving_application",
                        icon: "fa fa-plus",
                        taskPermissionName: "CREATE_SAVINGSACCOUNT"
                    },
                    {
                        name: "label.button.newcharge",
                        href: "#/credit-provider/KADSWEF/viewclient",
                        subhref: "addcharge",
                        icon: "fa fa-plus",
                        taskPermissionName: "CREATE_CLIENTCHARGE"
                    },
                    {
                        name: "label.button.transferclient",
                        href: "#/credit-provider/KADSWEF/transferclient",
                        icon: "fa fa-arrow-right",
                        taskPermissionName: "PROPOSETRANSFER_CLIENT"
                    },
                    {
                        name: "label.button.close",
                        href: "#/credit-provider/KADSWEF/client",
                        subhref: "close",
                        icon: "fa fa-times-circle-o",
                        taskPermissionName: "CLOSE_CLIENT"
                    },

                ],
                "Transfer in progress": [
                    {
                        name: "label.button.accepttransfer",
                        href: "#/credit-provider/KADSWEF/client",
                        subhref: "acceptclienttransfer",
                        icon: "fa fa-check",
                        taskPermissionName: "ACCEPTTRANSFER_CLIENT"
                    },
                    {
                        name: "label.button.rejecttransfer",
                        href: "#/credit-provider/KADSWEF/client",
                        subhref: "rejecttransfer",
                        icon: "fa fa-times",
                        taskPermissionName: "REJECTTRANSFER_CLIENT"
                    },
                    {
                        name: "label.button.undotransfer",
                        href: "#/credit-provider/KADSWEF/client",
                        subhref: "undotransfer",
                        icon: "fa fa-undo",
                        taskPermissionName: "WITHDRAWTRANSFER_CLIENT"
                    }
                ],
                "Transfer on hold": [
                    {
                        name: "label.button.undotransfer",
                        href: "#/credit-provider/KADSWEF/client",
                        subhref: "undotransfer",
                        icon: "fa fa-undo",
                        taskPermissionName: "WITHDRAWTRANSFER_CLIENT"
                    }
                ],
                "Assign Staff": {
                    name: "label.button.assignstaff",
                    href: "#/credit-provider/KADSWEF/client",
                    subhref: "assignstaff",
                    icon: "fa fa-user",
                    taskPermissionName: "ASSIGNSTAFF_CLIENT"
                }
            }
        }
    });
}(mifosX.models || {}));;(function(module) {
    mifosX.models = _.extend(module, {
        Langs: [
            { "name": "English", "code": "en" },
            { "name": "Français", "code": "fr" },
            { "name": "Español", "code": "es" },
            { "name": "Português", "code": "pt" },
            { "name": "Čeština", "code": "cs" },
            { "name": "中文", "code": "zh_CN" },
            { "name": "हिंदी", "code": "hi" },
            { "name": "ქართული", "code": "ka" },
            { "name": "ພາສາລາວ", "code": "lo" },
            { "name": "tiếng Việt", "code": "vi" },
            { "name": "မြန်မာ", "code": "my_MM" },
            { "name": "ဇော်ဂျီ", "code": "my" },
            { "name": "አማርኛ", "code": "et" },
            { "name": "తెలుగు", "code": "te"}
        ]
    });
}(mifosX.models || {}));
;(function (module) {
    mifosX.models = _.extend(module, {
        LoggedInUser: function (data) {
            this.name = data.username;
            this.userId = data.userId;
            this.userPermissions = data.userPermissions || data.permissions || [];

            this.getHomePageIdentifier = function () {
                var role = _.first(data.selectedRoles || data.roles);
                if (role.id in mifosX.models.roleMap) {
                    return mifosX.models.roleMap[role.id];
                } else {
                    return 'default';
                }
            };
        }
    });
}(mifosX.models || {}));
;(function (module) {
    mifosX.models = _.extend(module, {
        Role: function (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
        }
    });
}(mifosX.models || {}));
;(function (module) {
    mifosX.models = _.extend(module, {
        roleMap: {
            1: "superuser",
            2: "branchmanager",
            3: "funder"
        }
    });
}(mifosX.models || {}));
