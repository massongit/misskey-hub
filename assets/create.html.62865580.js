import{_ as c,o as i,c as d,b as r,w as n,a as e,d as a,r as o}from"./app.0abd6ed9.js";const l={},h=e("h1",{id:"users-lists-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#users-lists-create","aria-hidden":"true"},"#"),a(),e("code",null,"users/lists/create")],-1),_=e("p",null,"Credential required.",-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),p=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1);function f(x,b){const s=o("MkSchemaViewer"),t=o("ClientOnly");return i(),d("div",null,[h,_,m,r(t,null,{default:n(()=>[r(s,{schema:{type:"object",properties:{name:{type:"string",minLength:1,maxLength:100}},required:["name"]}})]),_:1}),u,r(t,null,{default:n(()=>[r(s,{schema:{type:"object",optional:!1,nullable:!1,ref:"UserList",$ref:"misskey://UserList"}})]),_:1}),p])}var k=c(l,[["render",f],["__file","create.html.vue"]]);export{k as default};