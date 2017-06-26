sap.ui.define([
	"sap/ui/core/mvc/Controller"
	,"sap/m/MessageBox"
], function(Controller,Msg) {
	"use strict";

	return Controller.extend("FIRSTUI506.controller.Main", {
		onInit:function(){
		//	console.log("hello");
		//	var sName = sap.ui.getCore().byId("idMain--name").getValue();
		//	console.log(sName);
		},
		handleSubmit: function() {
			var sName = sap.ui.getCore().byId("idMain--name");
			var sNameValue = sName.getValue();
			var sAge = sap.ui.getCore().byId("idMain--age");
			var sAgeValue = sAge.getValue();
			var sCbo = sap.ui.getCore().byId("idMain--country");
			var selectCbo = sCbo.getSelectedItem();
			var selectCboText = selectCbo.getText();
			//console.log(sNameValue,sAgeValue,selectCboText);
			//sap.m.MessageBox.show(sNameValue+sAgeValue+selectCboText, {
			Msg.show(sNameValue+sAgeValue+selectCboText, {
				icon: sap.m.MessageBox.Icon.INFORMATION,
				title: "My message box title",
				actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO]
			});
			// 이전방식 
			// jQuery.sap.require("sap.m.MessageBox");
			// sap.m.MessageBox.show(sNameValue+sAgeValue+selectCboText, {
			// 	icon: sap.m.MessageBox.Icon.INFORMATION,
			// 	title: "My message box title",
			// 	actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO]
			// });
		},
		handleSelectionChange : function(){
			
			
		},
		change: function(evt) {
		//	alert("ddd");
			// var input = evt.getSource();
			// if (input.getValue() < 10) {
			// 	input.setValueState(sap.ui.core.ValueState.Error);
			// 	input.setValueStateText("Value must be at least 10");
			// } else {
			// 	input.setValueState(sap.ui.core.ValueState.None);
			// }
			var input = evt.getSource().getValue();
			if (input < 0 || input > 100) {
				evt.getSource().setValueState(sap.ui.core.ValueState.Error);
			} else {
				evt.getSource().setValueState(sap.ui.core.ValueState.None);
			}
		}
	});
});