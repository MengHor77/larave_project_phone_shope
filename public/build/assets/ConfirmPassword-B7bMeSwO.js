import{d as m,T as l,c as d,o as p,w as t,a as e,u as a,Z as f,b as r,e as u,n as c,f as w}from"./app-BWUL7yxx.js";import{_}from"./GuestLayout.vue_vue_type_script_setup_true_lang-dLZ5D7o-.js";import{_ as b,a as x,b as g}from"./TextInput.vue_vue_type_script_setup_true_lang-DBjGlKeJ.js";import{P as y}from"./PrimaryButton-SAt1GTue.js";import"./ApplicationLogo-CjbCILCN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const C={class:"flex justify-end mt-4"},h=m({__name:"ConfirmPassword",setup(P){const s=l({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset()}})};return(V,o)=>(p(),d(_,null,{default:t(()=>[e(a(f),{title:"Confirm Password"}),o[2]||(o[2]=r("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1)),r("form",{onSubmit:w(i,["prevent"])},[r("div",null,[e(b,{for:"password",value:"Password"}),e(x,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":o[0]||(o[0]=n=>a(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),e(g,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),r("div",C,[e(y,{class:c(["ms-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>o[1]||(o[1]=[u(" Confirm ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}});export{h as default};
