import{o as c,c as i,a as e}from"./app.87e5d7c8.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const o="abcdefghijklmnopqrstuvwxyz",a={props:{space:{type:Number,required:!1,default:15}},setup(){return{id:Array.from(Array(32)).map(()=>o[Math.floor(Math.random()*o.length)]).join("")}}},d={fill:"none"},l=["id","width","height"],h=e("circle",{cx:"2",cy:"2",r:"2",fill:"currentColor"},null,-1),p=[h],_=["fill"];function f(s,u,t,r,m,g){return c(),i("svg",d,[e("defs",null,[e("pattern",{id:r.id,x:"0",y:"0",width:t.space,height:t.space,patternUnits:"userSpaceOnUse"},p,8,l)]),e("rect",{width:"100%",height:"100%",fill:`url(#${r.id})`},null,8,_)])}var j=n(a,[["render",f]]);export{j as default};
