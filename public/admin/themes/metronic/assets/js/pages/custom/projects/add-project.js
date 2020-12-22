!function(e){var t={};function o(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(r,i,function(t){return e[t]}.bind(null,i));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=494)}({494:function(e,t,o){e.exports=o(495)},495:function(e,t,o){"use strict";var r,i,n,a,s=(a=[],{init:function(){r=KTUtil.getById("kt_projects_add"),i=KTUtil.getById("kt_projects_add_form"),(n=new KTWizard(r,{startStep:1,clickableSteps:!0})).on("beforeNext",(function(e){n.stop(),a[e.getStep()-1].validate().then((function(e){"Valid"==e?(n.goNext(),KTUtil.scrollTop()):Swal.fire({text:"Sorry, looks like there are some errors detected, please try again.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn font-weight-bold btn-light"}}).then((function(){KTUtil.scrollTop()}))}))})),n.on("change",(function(e){KTUtil.scrollTop()})),a.push(FormValidation.formValidation(i,{fields:{projectname:{validators:{notEmpty:{message:"Project name is required"}}},projectowner:{validators:{notEmpty:{message:"Project owner is required"}}},customername:{validators:{notEmpty:{message:"Customer name is required"}}},phone:{validators:{notEmpty:{message:"Phone is required"},phone:{country:"US",message:"The value is not a valid US phone number. (e.g 5554443333)"}}},email:{validators:{notEmpty:{message:"Email is required"},emailAddress:{message:"The value is not a valid email address"}}},companywebsite:{validators:{notEmpty:{message:"Website URL is required"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap}})),a.push(FormValidation.formValidation(i,{fields:{communication:{validators:{choice:{min:1,message:"Please select at least 1 option"}}},language:{validators:{notEmpty:{message:"Please select a language"}}},timezone:{validators:{notEmpty:{message:"Please select a timezone"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap}})),a.push(FormValidation.formValidation(i,{fields:{address1:{validators:{notEmpty:{message:"Address is required"}}},postcode:{validators:{notEmpty:{message:"Postcode is required"}}},city:{validators:{notEmpty:{message:"City is required"}}},state:{validators:{notEmpty:{message:"state is required"}}},country:{validators:{notEmpty:{message:"Country is required"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap}})),new KTImageInput("kt_projects_add_avatar")}});jQuery(document).ready((function(){s.init()}))}});