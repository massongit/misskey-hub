import{_ as c,o as n,c as i,b as a,w as o,a as e,d as r,e as h,r as d}from"./app.0abd6ed9.js";const l={},_=e("h1",{id:"blocking-delete",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#blocking-delete","aria-hidden":"true"},"#"),r(),e("code",null,"blocking/delete")],-1),f=e("p",null,"Credential required.",-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),b=h('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-user" tabindex="-1"><a class="header-anchor" href="#no-such-user" aria-hidden="true">#</a> NO_SUCH_USER</h3><p>ID: <code>8621d8bf-c358-4303-a066-5ea78610eb3f</code></p><h3 id="blockee-is-yourself" tabindex="-1"><a class="header-anchor" href="#blockee-is-yourself" aria-hidden="true">#</a> BLOCKEE_IS_YOURSELF</h3><p>ID: <code>06f6fac6-524b-473c-a354-e97a40ae6eac</code></p><h3 id="not-blocking" tabindex="-1"><a class="header-anchor" href="#not-blocking" aria-hidden="true">#</a> NOT_BLOCKING</h3><p>ID: <code>291b2efa-60c6-45c0-9f6a-045c8f9b02cd</code></p>',7);function m(k,x){const t=d("MkSchemaViewer"),s=d("ClientOnly");return n(),i("div",null,[_,f,u,a(s,null,{default:o(()=>[a(t,{schema:{type:"object",properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]}})]),_:1}),p,a(s,null,{default:o(()=>[a(t,{schema:{type:"object",optional:!1,nullable:!1,ref:"UserDetailedNotMe",$ref:"misskey://UserDetailedNotMe"}})]),_:1}),b])}var N=c(l,[["render",m],["__file","delete.html.vue"]]);export{N as default};