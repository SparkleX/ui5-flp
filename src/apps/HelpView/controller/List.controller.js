sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"sap/ui/core/Fragment",
		"sap/ui/model/json/JSONModel",
		"sap/viz/ui5/format/ChartFormatter",
		"sap/viz/ui5/controls/common/feeds/FeedItem",
	],
	function (Controller, MessageToast, Fragment, JSONModel, ChartFormatter, FeedItem) {
		"use strict";

		var theClass = Controller.extend("demo.apps.HelpView.controller.List", {
		});
		theClass.prototype.onInit = async function (evt) {
			const oJson = {
				value : "12345678.91"
			};
			const oModel = new JSONModel(oJson);
			this.getView().setModel(oModel);
		};
		theClass.prototype.onPress = function (evt) {
			const oModel = this.getView().getModel();
			console.info(oModel.getJSON());
		};
		return theClass;
	}
);
