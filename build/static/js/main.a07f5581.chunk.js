(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{40:function(e,t,n){"use strict";n.r(t);var r=n(16),c=n.n(r),a=n(4),o=n(2),i=n(0);var u=function(e){return Object(i.jsxs)("div",{children:["filter shown with a ",Object(i.jsx)("input",{value:e.findName,onChange:e.searchName})]})};var d=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:e.addName,children:[Object(i.jsxs)("div",{children:["name:"," ",Object(i.jsx)("input",{value:e.newName,onChange:e.handleAddName,type:"text",placeholder:"type name..."})]}),Object(i.jsxs)("div",{children:["number:"," ",Object(i.jsx)("input",{value:e.newNumber,onChange:e.handleAddNumber,type:"tel",placeholder:"type number...",pattern:"[0-9]{10}"})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})})},s=n(3),l=n.n(s),j="/api/persons",m={retrieveData:function(){return l.a.get(j).then((function(e){return e.data}))},add:function(e){return l.a.post(j,e).then((function(e){return e.data}))},edit:function(e){l.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data})).catch((function(){return console.log("error")}))},update:function(e,t){l.a.put("".concat(j,"/").concat(e),t).then((function(e){return e.data})).catch((function(){return console.log("error")}))}};var h=function(e){return Object(i.jsx)("div",{children:e.findName.length<=0?e.persons.map((function(t){return Object(i.jsxs)("div",{children:[t.name," ",t.number," ",Object(i.jsx)("button",{onClick:function(){window.confirm("Do you want to delete ".concat(t.name))&&(m.edit(t.id),e.setPersons(e.persons.filter((function(e){return e.id!==t.id}))))},children:"delete"})]},t.id)})):e.persons.filter((function(t){return t.name.toLowerCase().startsWith(e.findName.toLowerCase())})).map((function(t){return Object(i.jsxs)("div",{children:[t.name," ",t.number," ",Object(i.jsx)("button",{onClick:function(){window.confirm("Do you want to delete ".concat(t.name))&&(m.edit(t.id),e.setPersons(e.persons.filter((function(e){return e.id!==t.id}))))},children:"delete"})]},t.id)}))})},b=function(){var e=Object(o.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)(""),s=Object(a.a)(c,2),l=s[0],j=s[1],b=Object(o.useState)(""),f=Object(a.a)(b,2),p=f[0],O=f[1],v=Object(o.useState)(""),x=Object(a.a)(v,2),w=x[0],N=x[1];Object(o.useEffect)((function(){m.retrieveData().then((function(e){r(e)})).catch((function(){return console.log("error")}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(u,{findName:w,searchName:function(e){return N(e.target.value)}}),Object(i.jsx)("h2",{children:"add a new"}),Object(i.jsx)(d,{addName:function(e){e.preventDefault();var t,c={name:l,number:p},a=(t=c,n.some((function(e){return e.name===t.name})));a>0?window.confirm("Do you want to replace the old number with the new number?")&&m.update(a,c):m.add(c).then((function(e){r(n.concat(e)),O("")})).catch((function(){return console.log("error")})),j("")},newName:l,handleAddName:function(e){return j(e.target.value)},newNumber:p,handleAddNumber:function(e){return O(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(h,{findName:w,persons:n,setPersons:r})]})};c.a.render(Object(i.jsx)(b,{notes:[{id:1,content:"HTML is easy",date:"2019-05-30T17:30:31.098Z",important:!0},{id:2,content:"Browser can execute only JavaScript",date:"2019-05-30T18:39:34.091Z",important:!1},{id:3,content:"GET and POST are the most important methods of HTTP protocol",date:"2019-05-30T19:20:14.298Z",important:!0}]}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a07f5581.chunk.js.map