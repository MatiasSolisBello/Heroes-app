(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{24:function(e,r,a){},35:function(e,r,a){"use strict";a.r(r);var c=a(1),s=a(17),t=a.n(s),i=a(7),n=a(2),l=a(8),o=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],h=(a(24),a(0)),u=function(e){var r=e.id,a=e.superhero,c=e.publisher,s=e.alter_ego,t=e.first_appearance,n=e.characters;return Object(h.jsxs)(i.b,{to:"./hero/".concat(r),className:"my-card",children:[Object(h.jsx)("img",{src:"./assets/heroes/".concat(r,".jpg"),className:"img img-responsive",alt:a}),Object(h.jsx)("div",{className:"profile-name",children:a}),Object(h.jsx)("div",{className:"profile-position",children:s}),Object(h.jsx)("div",{className:"profile-overview",children:Object(h.jsx)("div",{className:"profile-overview",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-ms-4",children:[Object(h.jsx)("h3",{children:c}),Object(h.jsxs)("p",{children:["Primera aparici\xf3n: ",Object(h.jsx)("br",{}),t]}),s!==n&&Object(h.jsx)("p",{children:n})]})})})})]})},p=function(e){var r=function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("Publicher no es correcto");return o.filter((function(r){return r.publisher===e}))}(e.publisher);return Object(h.jsx)("div",{className:"card-columns",children:r.map((function(e){return Object(h.jsx)(u,Object(l.a)({},e),e.id)}))})},b=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"DC"}),Object(h.jsx)("hr",{}),Object(h.jsx)(p,{publisher:"DC Comics"})]})},j=function(e){var r=e.history,a=Object(n.h)().heroeId,s=Object(c.useMemo)((function(){return e=a,o.find((function(r){return r.id===e}));var e}),[a]);if(!s)return Object(h.jsx)(n.a,{to:"/"});var t=s.superhero,i=s.publisher,l=s.alter_ego,u=s.first_appearance,p=s.characters;return Object(h.jsxs)("div",{className:"row mt-5",children:[Object(h.jsx)("div",{className:"col-6",children:Object(h.jsx)("img",{src:"../assets/heroes/".concat(a,".jpg"),alt:t,className:"img-thumbnail"})}),Object(h.jsxs)("div",{className:"col-6",children:[Object(h.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(h.jsxs)("li",{className:"list-group-item",children:[" ",Object(h.jsx)("b",{children:" Alter ego: "})," ",l," "]}),Object(h.jsxs)("li",{className:"list-group-item",children:[" ",Object(h.jsx)("b",{children:" Publisher: "})," ",i," "]}),Object(h.jsxs)("li",{className:"list-group-item",children:[" ",Object(h.jsx)("b",{children:" First appearance: "})," ",u," "]})]}),Object(h.jsx)("h5",{children:" Characters "}),Object(h.jsxs)("p",{children:[" ",p," "]}),Object(h.jsx)("button",{className:"btn btn-outline-info",onClick:function(){r.length<=2?r.push("/"):r.goBack()},children:"Return"})]})]})},d=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Marvel"}),Object(h.jsx)("hr",{}),Object(h.jsx)(p,{publisher:"Marvel Comics"})]})},m=function(){return Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(i.b,{className:"navbar-brand",to:"/",children:"HeroesApp"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarText",children:Object(h.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(i.c,{activeclass:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(i.c,{activeclass:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(i.c,{activeclass:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})})]})})]})})},v=a(13),x=a(19),O=a.n(x),f=a(12),g=function(e){var r=e.history,a=Object(n.g)(),s=O.a.parse(a.search).q,t=void 0===s?"":s,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(c.useState)(e),a=Object(v.a)(r,2),s=a[0],t=a[1];return[s,function(e){var r=e.target;t(Object(l.a)(Object(l.a)({},s),{},Object(f.a)({},r.name,r.value)))},function(){t(e)}]}({searchText:t}),p=Object(v.a)(i,2),b=p[0],j=p[1],d=b.searchText,m=Object(c.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),o.filter((function(r){return r.superhero.toLocaleLowerCase().includes(e)})))}(t)}),[t]);return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:"Busqueda"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.push("?q=".concat(d))},children:[Object(h.jsx)("input",{type:"text",placeholder:"Encuentra tu heroe",className:"form-control text-center",name:"searchText",autoComplete:"off",value:d,onChange:j}),Object(h.jsx)("button",{type:"submit",className:"btn btn-block btn-outline-primary",children:"Buscar"})]}),Object(h.jsx)("hr",{}),""===t&&Object(h.jsx)("div",{className:"alert alert-info",children:"Busca un heroe"}),""!==t&&0===m.length&&Object(h.jsxs)("div",{className:"alert alert-danger",children:["There is no a hero with ",t]}),m.map((function(e){return Object(h.jsx)(u,Object(l.a)({},e),e.id)}))]})},C=function(){return Object(h.jsxs)(i.a,{children:[Object(h.jsx)(m,{}),Object(h.jsx)("div",{className:"container mt-3",children:Object(h.jsxs)(n.d,{children:[Object(h.jsx)(n.b,{exact:!0,path:"/marvel",component:d}),Object(h.jsx)(n.b,{exact:!0,path:"/hero/:heroeId",component:j}),Object(h.jsx)(n.b,{exact:!0,path:"/dc",component:b}),Object(h.jsx)(n.b,{exact:!0,path:"/search",component:g}),Object(h.jsx)(n.a,{to:"/search"})]})})]})},_=function(){return Object(h.jsx)(C,{})};t.a.render(Object(h.jsx)(_,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.fbf0ced7.chunk.js.map