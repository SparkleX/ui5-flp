sap.ui.define(
	["sap/ushell/adapters/local/LaunchPageAdapter"],
	function (BaseClass) {
		"use strict";
		const theClass =  function (oUnused, sParameter, oAdapterConfiguration) {
			BaseClass.call(this, oUnused, sParameter, oAdapterConfiguration);
			const that = {};
			that.removeTile = this.removeTile;
			this.removeTile = function (oGroup, oTile) {
				const rt = that.removeTile.call(that, oGroup, oTile);
				alert(1);
				return rt;
			}
		}
		theClass.prototype = Object.create(BaseClass.prototype);
		return theClass;
	}, true
);
