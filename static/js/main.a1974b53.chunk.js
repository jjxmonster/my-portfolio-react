(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{36:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var o=a(0),c=a(1),s=a.n(c),n=a(23),r=a.n(n),i=(a(36),a(14)),l=a(18),d=a(5),u={isUserMovingForward:!1,isUserCheckProject:!1,handleMoveChange:function(){},handleChangeIsProjectChecked:function(){},handleSetDefaultisProjectChecked:function(){}},j=Object(c.createContext)(u),m=a(11),h=a.n(m),b=a(3),p=a(7),x=(a(44),a(4)),f=function(){var e=document.querySelector(".menuSpace p"),t=document.querySelectorAll(".icon");e.style.visibility="hidden";var a=x.a.timeline({defaults:{ease:"power3.ease"}});a.add("start"),t.forEach((function(e){a.to(e,{opacity:0,duration:.2},"start")})),a.to(".box1",{width:"0px",height:"0px",duration:.3},"start"),a.to(".box2",{width:"0px",height:"0px",duration:.3},"start"),a.to(".header",{y:-100,opacity:0,duration:.3},"start")},y=a(12),O=function(e){Object(c.useEffect)((function(){!function(){var e=document.querySelector(".socialWrapper").childNodes,t=x.a.timeline({defaults:{ease:"power3.ease"}});e.forEach((function(e,a){a<3?t.from(e,{opacity:0,duration:.5,scale:.5,delay:"0.".concat(a)},"start"):t.from(e,{opacity:0,duration:.5,x:50},"start")}))}()}),[]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"socialWrapper",children:[Object(o.jsx)("a",{target:"_blank",href:"https://www.facebook.com/kuba.tarabasz/",children:Object(o.jsx)(b.a,{className:"socialIcon",icon:y.c})}),Object(o.jsx)("a",{target:"_blank",href:"https://github.com/jjxmonster",children:Object(o.jsx)(b.a,{className:"socialIcon",icon:y.e})}),Object(o.jsx)("a",{target:"_blank",href:"https://www.instagram.com/jjxmonster/",children:Object(o.jsx)(b.a,{className:"socialIcon",icon:y.f})}),Object(o.jsx)("div",{className:"backSocialIcon",onClick:function(){var t=x.a.timeline({defaults:{ease:"power3.ease"}});t.to(".backSocialIcon",{backgroundColor:"rgb(165, 165, 165)",width:"100%",duration:.5},"start"),t.to("#socialBackIcon",{opacity:0,duration:.4},"start"),setTimeout((function(){e.handleUnMountSocialIcons()}),400)},children:Object(o.jsx)(b.a,{icon:p.a,id:"socialBackIcon"})})]})})},v=function(){var e=Object(c.useContext)(j),t=e.isUserMovingForward,a=e.handleSetDefaultisProjectChecked,s=Object(c.useState)(!1),n=Object(i.a)(s,2),r=n[0],l=n[1];return Object(c.useEffect)((function(){t?function(){var e=document.querySelectorAll(".icon"),t=x.a.timeline({defaults:{ease:"power3.ease"}});t.to(".box1",{rotate:45,width:"1px",height:"1px",duration:0}),t.to(".box2",{rotate:-45,width:"1px",height:"1px",duration:0}),t.from(".header",{y:-100,opacity:0,duration:.7},"start"),t.to(".box1",{width:"95%",height:"8vh",borderRadius:"50px",duration:.8},"start"),t.to(".box2",{width:"95%",height:"8vh",borderRadius:"50px",duration:.8},"start"),e.forEach((function(e){t.to(e,{visibility:"visible",opacity:1,delay:.5},"start")}))}():function(){var e=x.a.timeline({defaults:{ease:"power3.ease"}}),t=document.querySelectorAll(".icon");e.add("start"),e.from(".header",{y:100,opacity:0,duration:.7,delay:.1},"start"),e.from(".box1",{translateX:"-50vw",duration:1,opacity:0},"start"),e.from(".box2",{translateX:"50vw",duration:1,opacity:0},"start"),e.to(".box1",{rotate:45,delay:1,duration:.5},"start"),e.to(".box2",{rotate:-45,delay:1,duration:.5},"start"),e.to(".box1",{width:"95%",borderRadius:"50px",delay:1.5},"start"),e.to(".box2",{width:"95%",borderRadius:"50px",delay:1.5},"start"),t.forEach((function(t){e.to(t,{visibility:"visible",opacity:1,duration:.5,delay:1.8},"start")}))}(),function(){var e=document.querySelector(".menuSpace p"),t=document.querySelector(".box1"),a=document.querySelector(".box2"),o=document.querySelectorAll(".icon"),c=["PROJECTS","ABOUT ME","CONTACT","SOCIAL"];o.forEach((function(o,s){o.addEventListener("mouseover",(function(){t.classList.add("white"),a.classList.add("white"),e.classList.add("animationInfo"),e.textContent=c[s]})),o.addEventListener("mouseout",(function(){t.classList.remove("white"),a.classList.remove("white"),e.textContent=""}))}))}(),a()}),[]),Object(o.jsxs)("div",{className:"homePage",children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{children:"Jakub Tarabasz"}),Object(o.jsx)("p",{children:"Front-End React Developer"})]}),Object(o.jsx)("div",{className:"main",children:Object(o.jsxs)("div",{className:"menu",children:[Object(o.jsx)(h.a,{delay:1e3,to:"/projects",replace:!1,children:Object(o.jsx)(b.a,{onClick:f,className:"icon1 icon",icon:p.e})}),Object(o.jsx)(h.a,{delay:1e3,to:"/about",replace:!1,children:Object(o.jsx)(b.a,{onClick:f,className:"icon2 icon",icon:p.f})}),Object(o.jsx)(h.a,{delay:1e3,to:"/contact",replace:!1,children:Object(o.jsx)(b.a,{onClick:f,className:"icon3 icon",icon:p.d})}),Object(o.jsx)(b.a,{className:"icon4 icon",onClick:function(){!function(){var e=document.querySelectorAll(".icon"),t=x.a.timeline({defaults:{ease:"power1.ease"}});t.to(".box1",{rotate:0,duration:.5},"start"),t.to(".box2",{rotate:0,duration:.5},"start"),t.to(".menuSpace",{visibility:"hidden",duration:.1},"start"),e.forEach((function(e){t.to(e,{visibility:"hidden",opacity:0,duration:.2},"start")})),t.to(".box2",{backgroundColor:"white",duration:.2,delay:.5},"start")}(),setTimeout((function(){l(!0)}),500)},icon:p.c}),Object(o.jsx)("div",{className:"menuSpace",children:Object(o.jsx)("p",{})}),Object(o.jsx)("div",{className:"box1"}),Object(o.jsx)("div",{className:"box2",children:r?Object(o.jsx)(O,{handleUnMountSocialIcons:function(){!function(){var e=document.querySelectorAll(".icon"),t=x.a.timeline({defaults:{ease:"power1.ease"}});t.to(".box1",{rotate:45,duration:.5},"start"),t.to(".box2",{rotate:-45,duration:.5},"start"),t.to(".menuSpace",{visibility:"visible",duration:.1},"start"),t.to(".box2",{backgroundColor:"",duration:.2},"start"),e.forEach((function(e){t.to(e,{visibility:"visible",opacity:1,duration:.1},"start")}))}(),l(!1)}}):null})]})}),Object(o.jsx)("footer",{children:"\xa9 Copyright 2020 by Jakub Tarabasz. All Rights Reserved."})]})},g=function(){var e=document.querySelector(".app"),t=document.querySelector(".welcome"),a=x.a.timeline({defaults:{ease:"power3.ease"}});e.style=" overflow: hidden",t.classList.add("rollWelcome"),a.to(".spanBck",{opacity:0,duration:.2},"start"),a.to(".aboutHeader",{y:-100,opacity:0,duration:.5},"start"),a.to(".aboutContent",{y:-100,opacity:0,delay:.3,duration:.5},"start"),a.to(".mainSkills",{opacity:0,y:-100,duration:.5},"start"),a.to(".otherSkills",{opacity:0,y:-100,delay:.2,duration:.5},"start"),a.to(".langSkills",{opacity:0,y:-100,delay:.4,duration:.5},"start"),a.to(".aboutPage",{height:0,delay:.7,duration:1},"start")},S=function(e){return window.innerWidth>1200?Object(o.jsx)("span",{onClick:e.onUnMountFunction,className:"spanBck",children:"HOME"}):Object(o.jsx)(b.a,{onClick:e.onUnMountFunction,className:"backIcon",icon:p.b})},w=(a(45),a.p+"static/media/me.05a8def5.jpg"),N=function(){var e=Object(c.useContext)(j).handleMoveChange;return Object(c.useEffect)((function(){!function(){var e=document.querySelector(".app"),t=document.querySelector(".welcome div h1"),a=document.querySelector(".welcome div h2"),o=document.querySelector(".welcome div span"),c=x.a.timeline({defaults:{ease:"power3.ease"}});e.style=" overflow: visible",c.from(".aboutPage",{height:0,duration:1},"start"),c.to(".aboutHeader",{visibility:"visible",delay:.5},"start"),c.to(".aboutContent",{visibility:"visible",delay:.5},"start"),c.from(".imageSpace",{delay:4.5,y:-100,opacity:0,duration:.5},"start"),c.from(".textSpace #top",{x:-50,opacity:0,delay:4.5,duration:.3},"start"),c.from(".textSpace #bottom",{x:-50,opacity:0,delay:4.7,duration:.3},"start"),c.from(".skillsTitle h1",{y:50,opacity:0,delay:5,duration:.5},"start"),c.from(".mainSkills",{opacity:0,y:-100,delay:5,duration:.5},"start"),c.from(".otherSkills",{opacity:0,y:-100,delay:5.2,duration:.5},"start"),c.from(".langSkills",{opacity:0,y:-100,delay:5.4,duration:.5},"start"),c.from(".spanBck",{opacity:0,y:10,delay:5.4,duration:.2},"start");var s=0,n=0,r="HELLO, MY NAME IS",i="JAKUB";setTimeout((function(){var e=setInterval((function(){t.textContent+=r[s],++s===r.length&&clearInterval(e)}),100)}),1e3),setTimeout((function(){var e=setInterval((function(){a.textContent+=i[n],++n===i.length&&clearInterval(e)}),100)}),2750),setTimeout((function(){o.textContent="|",setInterval((function(){o.classList.toggle("active")}),400)}),4e3),window.innerWidth<1200&&c.fromTo(".aboutPage",{height:0,duration:1},{height:"200%"},"start")}(),e()}),[]),Object(o.jsxs)("div",{className:"aboutPage",children:[Object(o.jsxs)("div",{className:"aboutHeader",children:[Object(o.jsx)("div",{className:"aboutTitle aboutFlex",children:Object(o.jsxs)("div",{className:"welcome",children:[Object(o.jsxs)("div",{children:["  ",Object(o.jsx)("h1",{})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{}),Object(o.jsx)("span",{})]})]})}),Object(o.jsx)("div",{className:"aboutImage aboutFlex",children:Object(o.jsxs)("div",{className:"imageSpace",children:[Object(o.jsx)("p",{className:"imageText",children:"yes, it's me!"}),Object(o.jsx)("img",{src:w,alt:"mejpg"})]})})]}),Object(o.jsxs)("div",{className:"aboutContent ",children:[Object(o.jsx)("div",{className:"aboutText aboutFlex",children:Object(o.jsxs)("div",{className:"textSpace",children:[Object(o.jsx)("p",{id:"top",children:"I'm React Front-End Developer from Poland. I'm 18 yo and I learn Front-End since april 2018 and React since 2020."}),Object(o.jsx)("p",{id:"bottom",children:"Besides coding, gym and computer games is my hobby, also i like reading books, I love The Witcher of Sapkowski."})]})}),Object(o.jsxs)("div",{className:"aboutSkills aboutFlex",children:[Object(o.jsx)("div",{className:"skillsTitle",children:Object(o.jsx)("h1",{children:"SKILLS"})}),Object(o.jsxs)("div",{className:"skills",children:[Object(o.jsxs)("div",{className:"mainSkills",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"MAIN"})}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"beforeReact before",children:Object(o.jsx)("p",{children:Object(o.jsx)(b.a,{className:"skillsIcon",icon:y.i})})}),Object(o.jsx)("li",{className:"beforeJs before",children:Object(o.jsx)("p",{children:Object(o.jsx)(b.a,{className:"skillsIcon",icon:y.g})})}),Object(o.jsx)("li",{className:"beforeRwd before",children:Object(o.jsx)("p",{children:"RWD"})}),Object(o.jsx)("li",{className:"beforeCss before",children:Object(o.jsx)("p",{children:Object(o.jsx)(b.a,{className:"skillsIcon",icon:y.a})})})]})]}),Object(o.jsxs)("div",{className:"otherSkills",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"OTHERS"})}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"beforeCpp before",children:Object(o.jsx)("p",{children:Object(o.jsx)(b.a,{className:"skillsIcon",icon:y.b})})}),Object(o.jsx)("li",{className:"beforeGsap before",children:Object(o.jsx)("p",{children:"GSAP"})}),Object(o.jsx)("li",{className:"beforePhp before",children:Object(o.jsx)("p",{children:Object(o.jsx)(b.a,{className:"skillsIcon",icon:y.h})})}),Object(o.jsx)("li",{className:"beforeGit before",children:Object(o.jsx)("p",{children:Object(o.jsx)(b.a,{className:"skillsIcon",icon:y.d})})})]})]}),Object(o.jsxs)("div",{className:"langSkills",children:[Object(o.jsx)("div",{className:"skillsTitle",children:Object(o.jsx)("h2",{children:"LANGUAGES"})}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"Polish"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"English"})})]})]})]})]})]}),Object(o.jsx)(h.a,{delay:1500,to:"/",replace:!1,children:Object(o.jsx)(S,{onUnMountFunction:g})})]})},k=function(){var e=document.querySelector(".welcomeProjects"),t=x.a.timeline({defaults:{ease:"power3.ease"}});e.classList.add("rollWelcome"),t.to(".spanBck",{opacity:0,duration:.2,ease:"none"},"start"),t.to(".projectsHeader",{opacity:0,y:-100,duration:.5,ease:"none"},"start"),t.to(".projectBox",{opacity:0,y:-100,duration:.5,dealy:.3,ease:"none"},"start"),t.to(".projectsContainer",{visibility:"hidden",duration:0,delay:.35},"start"),t.to(".projectsPage",{height:0,delay:.7,duration:1},"start")},C=function(){document.querySelector("body").style.overflow="hidden";var e=x.a.timeline({defaults:{ease:"power3.ease"}});e.to(".projectsHeader",{opacity:0,x:-100,duration:.2},"start"),e.to(".projectsContainer",{opacity:0,x:-100,duration:.2,delay:.1},"start"),e.to(".spanBck",{opacity:0,y:50,delay:.2,duration:.1},"start"),e.to(".projectsPage",{width:0,delay:.4,duration:1},"start")},E=a.p+"static/media/weatherapp.d97e18d2.jpg",P=a.p+"static/media/weatherapp2.3d4fa34f.jpg",I=a.p+"static/media/weatherapp3.ec9b5393.jpg",T=a.p+"static/media/weatherapp4.06b1d97f.jpg",q=a.p+"static/media/redfire.a6b3d53c.jpg",A=a.p+"static/media/redfire1.fbbced94.jpg",R=a.p+"static/media/redfire2.39e3930d.jpg",M=a.p+"static/media/restaurant.4608f21e.jpg",F=(a.p,a.p,[{id:1,name:"Weather App",linkName:"weatherapp",images:[E,P,I,T],description:"React aplication using free weather API, gets with fetch(). With smooth animations using GSAP. User is able to know the current temperature, humadity, pressure and wind speed.",technology:"React, React Hooks, GSAP, CSS, API",github:"https://github.com/jjxmonster/React-Weather-App"},{id:2,name:"REDFIRE",linkName:"redfire",images:[q,A,R],description:"React aplication with user and tournaments database about CS:GO tournaments. With login and register and of course user panel. Back-end made by Alan Adamczyk.",technology:"React, JavaScript, GSAP, CSS, API, JSON",github:""},{id:3,name:"Restaurant",linkName:"restaurant",images:[M],description:"Very simple React App about restaurant with menu and dish components and of course your order.",technology:"React, ReactRouter, CSS, API, JSON",github:""},{id:4,name:"To Do App",linkName:"todoapp",images:[a.p+"static/media/todoapp.923d9352.jpg"],description:"Very simple React To do App, where user can give date untill he want to do some taks and check when it's important and it's will have red color. When user done some task, he will see it in list in bottom.",technology:"React, JavaScript, CSS",github:""}]),B=(a(46),function(){var e=Object(c.useContext)(j),t=e.handleMoveChange,a=e.isUserCheckProject;return Object(c.useEffect)((function(){a?function(){document.querySelector("body").style.overflow="visible";var e=document.querySelector(".welcomeProjects h1"),t=document.querySelector(".welcomeProjects h2"),a=document.querySelector(".welcomeProjects span"),o=x.a.timeline({defaults:{ease:"power3.ease"}});e.textContent="CHECK OUT MY",t.textContent="PROJECTS",o.from(".projectsPage",{width:0,delay:.4,duration:1},"start"),o.from(".projectsHeader",{opacity:0,delay:1.1,duration:.2},"start"),o.from(".projectsHeader h1",{opacity:0,x:-100,delay:1.1,duration:.2},"start"),o.from(".projectsHeader h2",{opacity:0,x:-100,delay:1.1,duration:.2},"start"),o.from(".projectsContainer",{opacity:0,x:-100,duration:.2,delay:1.2},"start"),o.to(".projectsContainer",{visibility:"visible",delay:1.2},"start"),o.to(".projectBox",{opacity:1,duration:.1,delay:1.2},"start"),o.from(".spanBck",{opacity:0,y:10,delay:1.5,duration:.1},"start"),setTimeout((function(){a.textContent="|",setInterval((function(){a.classList.toggle("active")}),400)}),3500)}():function(){var e=document.querySelector(".app"),t=document.querySelector(".welcomeProjects h1"),a=document.querySelector(".welcomeProjects h2"),o=document.querySelector(".welcomeProjects span"),c=document.querySelector(".projectsContainer"),s=document.querySelectorAll(".projectBox"),n=x.a.timeline({defaults:{ease:"power3.ease"}});s.forEach((function(e){n.to(e,{opacity:0,y:-200,duration:0})})),n.from(".projectsPage",{height:0,duration:1},"start"),n.from(".spanBck",{opacity:0,y:10,delay:3.5,duration:.1},"start"),e.style=" overflow: hidden";var r=0,i=0,l="CHECK OUT MY",d="PROJECTS";setTimeout((function(){s.forEach((function(e){n.to(e,{opacity:1,y:0,duration:.1,delay:.1,ease:"none"})}))}),2e3),setTimeout((function(){c.style="visibility:visible";var e=setInterval((function(){t.textContent+=l[r],++r===l.length&&clearInterval(e)}),100)}),1e3),setTimeout((function(){var e=setInterval((function(){a.textContent+=d[i],++i===d.length&&clearInterval(e)}),100)}),2300),setTimeout((function(){o.textContent="|",setInterval((function(){o.classList.toggle("active")}),400)}),3500)}(),t()}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"projectsPage",children:[Object(o.jsx)("div",{className:"projectsHeader",children:Object(o.jsxs)("div",{className:"welcomeProjects",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{}),Object(o.jsx)("span",{})]})]})}),Object(o.jsx)("div",{className:"projectsContainer",children:F.map((function(e){return Object(o.jsxs)("div",{className:"projectBox",children:[Object(o.jsx)("img",{src:e.images[0],alt:e.name}),Object(o.jsx)(h.a,{delay:1e3,to:"/project/".concat(e.linkName),replace:!1,children:Object(o.jsx)("div",{onClick:C,className:"projectContent",children:Object(o.jsx)("h3",{children:e.name.toUpperCase()})})})]},e.id)}))}),Object(o.jsx)(h.a,{delay:1500,to:"/",replace:!1,children:Object(o.jsx)(S,{onUnMountFunction:k})})]})})}),U=a(25),L=a(26),H=a(27),W=a(30),J=a(29),_=a(28),D=a.n(_),G=function(){console.log("out");var e=x.a.timeline({defaults:{ease:"power3.ease"}});e.to(".spanBck",{opacity:0,duration:.2,ease:"none"},"start"),e.to(".contactHeader",{y:-100,opacity:0,duration:.5},"start"),e.to(".contactWrapper",{y:-100,opacity:0,delay:.2,duration:.5},"start"),e.to(".contactPage",{height:0,delay:.7,duration:1},"start"),document.querySelector("body").style.overflow="visible"},z=(a(49),function(e){Object(W.a)(a,e);var t=Object(J.a)(a);function a(){var e;Object(L.a)(this,a);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={from_name:"",email:"",message:"",nameError:null,mailError:null,messageError:null,showErrors:!1},e.errorMessages={name:"Name can't contain a number and is required.",mail:"Please enter a valid email.",message:"Please enter some message."},e}return Object(H.a)(a,[{key:"handleShowErrors",value:function(){this.formValidation(),this.setState({showErrors:!0})}},{key:"componentDidMount",value:function(){this.context.handleMoveChange(),function(){document.querySelector("body").style.overflow="hidden";var e=document.querySelector(".contactForm form").childNodes,t=document.querySelector(".welcomeContact h1"),a=document.querySelector(".welcomeContact h2"),o=document.querySelector(".welcomeContact span"),c=x.a.timeline({defaults:{ease:"power3.ease"}});c.from(".contactPage",{height:0,duration:1},"start"),c.from(".spanBck",{opacity:0,y:10,delay:4.5,duration:.1},"start"),c.from(".contactText",{opacity:0,y:100,delay:3.8,duration:.5},"start"),e.forEach((function(e,t){c.from(e,{opacity:0,y:100,delay:"4.".concat(t),duration:.5},"start")}));var s=0,n=0,r="IF YOU WANT",i="CONTACT ME";setTimeout((function(){var e=setInterval((function(){t.textContent+=r[s],++s===r.length&&clearInterval(e)}),100)}),1e3),setTimeout((function(){var e=setInterval((function(){a.textContent+=i[n],++n===i.length&&clearInterval(e)}),100)}),2200),setTimeout((function(){o.textContent="|",setInterval((function(){o.classList.toggle("active")}),400)}),3500)}()}},{key:"formValidation",value:function(){var e=this.state,t=e.from_name,a=e.email,o=e.message;/\d/.test(t)||""===t?this.setState({nameError:!0}):this.setState({nameError:!1}),-1!==a.indexOf("@")?this.setState({mailError:!1}):this.setState({mailError:!0}),o.length>5?this.setState({messageError:!1}):this.setState({messageError:!0})}},{key:"sendEmail",value:function(e){e.preventDefault();var t=this.state,a=t.nameError,o=t.mailError,c=t.messageError;!1===a&&!1===o&&!1===c&&(D.a.sendForm("service_ljad4dc","template_cez2xe7",e.target,"user_c3tVKssssylv8IrSad9b0").then((function(e){console.log(e.text),alert("Thank you, your message was sent.")}),(function(e){console.log(e.text)})),this.setState({from_name:"",email:"",message:"",nameError:null,mailError:null,messageError:null}))}},{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(U.a)({},t,e.target.value)),this.formValidation()}},{key:"render",value:function(){var e=this.state,t=e.from_name,a=e.email,c=e.message,s=e.nameError,n=e.mailError,r=e.messageError,i=e.showErrors;return Object(o.jsxs)("div",{className:"contactPage",children:[Object(o.jsx)("div",{className:"contactHeader",children:Object(o.jsxs)("div",{className:"welcomeContact",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{}),Object(o.jsx)("span",{})]})]})}),Object(o.jsxs)("div",{className:"contactWrapper",children:[Object(o.jsxs)("div",{className:"contactText",children:[Object(o.jsx)("h3",{children:"If you have any questions or offer, you can send me a message via form, or contact me on email."}),Object(o.jsxs)("a",{href:"mailTo:kuba.tarabasz@wp.pl",children:[Object(o.jsx)("span",{children:Object(o.jsx)(b.a,{icon:p.d})})," kuba.tarabasz@wp.pl"]})]}),Object(o.jsx)("div",{className:"contactForm",children:Object(o.jsxs)("form",{onSubmit:this.sendEmail.bind(this),children:[Object(o.jsxs)("div",{className:"formName",children:[Object(o.jsx)("input",{className:"input",type:"text",name:"from_name",placeholder:"Name",onChange:this.handleChange.bind(this),value:t}),i?Object(o.jsx)("p",{children:s?this.errorMessages.name:null}):null]}),Object(o.jsxs)("div",{className:"formMail",children:[Object(o.jsx)("input",{className:"input",type:"text",name:"email",placeholder:"Email",onChange:this.handleChange.bind(this),value:a}),i?Object(o.jsx)("p",{children:n?this.errorMessages.mail:null}):null]}),Object(o.jsxs)("div",{className:"formArea",children:[Object(o.jsx)("textarea",{name:"message",placeholder:"Message",onChange:this.handleChange.bind(this),value:c,cols:"30",rows:"10"}),i?Object(o.jsx)("p",{children:r?this.errorMessages.message:null}):null]}),Object(o.jsx)("input",{onClick:this.handleShowErrors.bind(this),className:"formSubmit",type:"submit",value:"Submit"})]})})]}),Object(o.jsx)(h.a,{delay:1500,to:"/",replace:!1,children:Object(o.jsx)(S,{onUnMountFunction:G})})]})}}]),a}(c.Component));z.contextType=j;var K=z,V=function(e){var t=e.images,a=t.map((function(e,t){return Object(o.jsx)("input",{type:"radio",name:"slide",id:"dot".concat(t+1),selected:!1},e)})),c=t.map((function(e){return Object(o.jsx)("img",{alt:e,src:e},e)})),s=t.map((function(e,t){return Object(o.jsx)("label",{htmlFor:"dot".concat(t+1)},e)}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"slider",children:[a,Object(o.jsx)("div",{className:"slides",children:Object(o.jsx)("div",{className:"overflow",children:Object(o.jsx)("div",{className:"image",children:c})})}),Object(o.jsx)("div",{className:"dots",children:s})]})})},Y=(a(50),function(e){var t=e.match,a=e.history,s=Object(c.useContext)(j).handleChangeIsProjectChecked;Object(c.useEffect)((function(){!function(){var e=x.a.timeline({defaults:{ease:"power3.ease"}});e.from(".projectPage",{width:0,duration:1},"start"),e.from(".projectHeader h1",{y:-100,opacity:0,scale:.5,duration:.5,delay:1.1},"start"),e.from(".aboutProject",{opacity:0,x:50,delay:1.5},"start"),e.from(".sliderWrapper",{opacity:0,x:50,delay:2},"start"),setTimeout((function(){document.querySelector("body").style.overflow="visible"}),500)}(),s()}),[]);var n=F.filter((function(e){return e.linkName===t.params.name}))[0];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"projectPage",children:[Object(o.jsx)("div",{className:"projectHeader",children:Object(o.jsx)("h1",{children:n.name})}),Object(o.jsxs)("div",{className:"projectWrapper",children:[Object(o.jsxs)("div",{className:"aboutProject",children:[Object(o.jsx)("p",{children:n.description}),Object(o.jsx)("div",{className:"technologies",children:Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"SKILLS = [  "}),n.technology," ",Object(o.jsx)("span",{children:"]"})]})})]}),Object(o.jsx)("div",{className:"sliderWrapper",children:Object(o.jsx)(V,{images:n.images})})]}),Object(o.jsx)("div",{className:"projectButtons",children:Object(o.jsxs)("span",{onClick:function(){!function(){var e=x.a.timeline({defaults:{ease:"power3.ease"}});document.querySelector("body").style.overflow="hidden",e.to(".backToProjects",{y:50,opacity:0,duration:.2},"start"),e.to(".projectHeader h1",{x:100,opacity:0,duration:.2},"start"),e.to(".aboutProject",{opacity:0,x:100,duration:.2},"start"),e.to(".sliderWrapper",{opacity:0,x:100,duration:.2},"start"),e.to(".projectPage",{width:"0%",duration:.7,delay:.5,padding:"0"},"start")}(),setTimeout((function(){a.goBack()}),1e3)},className:"backToProjects",children:[Object(o.jsx)(b.a,{icon:p.a,id:"projectsBackIcon"}),"PROJECTS"]})})]})})}),X=(a(51),function(){var e=Object(c.useState)(u.isUserMovingForward),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(u.isUserCheckProject),r=Object(i.a)(n,2),m=r[0],h=r[1];return Object(o.jsx)(l.BrowserRouter,{children:Object(o.jsx)("div",{className:"app",children:Object(o.jsx)(j.Provider,{value:{isUserMovingForward:a,isUserCheckProject:m,handleMoveChange:function(){s(!0)},handleChangeIsProjectChecked:function(){h(!0)},handleSetDefaultisProjectChecked:function(){h(!1)}},children:Object(o.jsxs)(d.g,{children:[Object(o.jsx)(d.d,{path:"/about",component:function(){return Object(o.jsx)(N,{})}}),Object(o.jsx)(d.d,{path:"/projects",component:function(){return Object(o.jsx)(B,{})}}),Object(o.jsx)(d.d,{path:"/project/:name",component:Y}),Object(o.jsx)(d.d,{path:"/contact",component:K}),Object(o.jsx)(d.d,{path:"/",component:function(){return Object(o.jsx)(v,{})}})]})})})})});r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(X,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.a1974b53.chunk.js.map