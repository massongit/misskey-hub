import{_ as o,o as l,c as d,b as r,w as n,a as e,d as t,r as i}from"./app.0abd6ed9.js";const c={},h=e("h1",{id:"notes-replies",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-replies","aria-hidden":"true"},"#"),t(),e("code",null,"notes/replies")],-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),_=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1);function f(u,y){const a=i("MkSchemaViewer"),s=i("ClientOnly");return l(),d("div",null,[h,m,r(s,null,{default:n(()=>[r(a,{schema:{type:"object",properties:{noteId:{type:"string",format:"misskey:id"},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},limit:{type:"integer",minimum:1,maximum:100,default:10}},required:["noteId"]}})]),_:1}),p,r(s,null,{default:n(()=>[r(a,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}}})]),_:1}),_])}var b=o(c,[["render",f],["__file","replies.html.vue"]]);export{b as default};