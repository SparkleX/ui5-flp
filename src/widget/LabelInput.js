sap.ui.define(["sap/ui/core/Control", "sap/m/Label", "sap/m/Input"], function (BaseClass, Label, Input) {
	"use strict";
	var theClass = BaseClass.extend("demo.widget.LabelInput", {
		metadata: {
			properties: {
				text: { type: "string", group: "Behavior" },
				value: { type: "string", group: "Data" }
			},
			aggregations: {
				_label: { type: "sap.m.Label", multiple: false},
				_input: { type: "sap.m.Input", multiple: false}
			},
			//designtime: "demo/widget/designtime/LabelInput.designtime"
		}
	});

	theClass.prototype.applySettings = function (mSettings, oScope) {
		this.oLabel = new Label({
			id: `${this.getId()}-label`,
			text: mSettings.text,
			width: "33%"
		});
		this.setAggregation("_label", this.oLabel);

		this.oInput = new Input({
			id: `${this.getId()}-input`,
			value: mSettings.value
		});
		this.setAggregation("_input", this.oInput);		
		BaseClass.prototype.applySettings.call(this, mSettings, oScope);
	};

	theClass.prototype.setValue = function (val) {
		this.oInput.setValue(val);
	};
	theClass.prototype.getValue = function () {
		alert('error');
	};
	theClass.prototype.setText = function (val) {
		this.setProperty("text", val);
		//this.oLabel.setText(val);
	};
	return theClass;
});
