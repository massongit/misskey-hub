import{_ as o,o as d,c,b as t,w as s,a as e,d as a,r as i}from"./app.0abd6ed9.js";const l={},h=e("h1",{id:"clips-update",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#clips-update","aria-hidden":"true"},"#"),a(),e("code",null,"clips/update")],-1),p=e("p",null,"Credential required.",-1),_=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),m=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1),f=e("h3",{id:"no-such-clip",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-clip","aria-hidden":"true"},"#"),a(" NO_SUCH_CLIP")],-1),b=e("p",null,[a("ID: "),e("code",null,"b4d92d70-b216-46fa-9a3f-a8c811699257")],-1);function x(y,C){const r=i("MkSchemaViewer"),n=i("ClientOnly");return d(),c("div",null,[h,p,_,t(n,null,{default:s(()=>[t(r,{schema:{type:"object",properties:{clipId:{type:"string",format:"misskey:id"},name:{type:"string",minLength:1,maxLength:100},isPublic:{type:"boolean"},description:{type:"string",nullable:!0,minLength:1,maxLength:2048}},required:["clipId","name"]}})]),_:1}),u,t(n,null,{default:s(()=>[t(r,{schema:{type:"object",optional:!1,nullable:!1,ref:"Clip",$ref:"misskey://Clip"}})]),_:1}),m,f,b])}var k=o(l,[["render",x],["__file","update.html.vue"]]);export{k as default};