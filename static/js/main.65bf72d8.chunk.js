(this.webpackJsonpsummary=this.webpackJsonpsummary||[]).push([[0],{102:function(e){e.exports=JSON.parse('[{"id":1,"name":"Berdyev Damil","age":"18 years","phone":"+7-(777)-369-22-86","email":"berdyevwork@mail.ru","text":"I am a meticulous Front-end developer with over 2 years of experience focused on crafting clean, creative and user\u2011friendly experiences. I develop responsive single page applications using modern web technologies, carefully thinking about the architecture and code.","photo":""},{"id":2,"name":"Ashrafulin Ramil","age":"18 years","phone":"+7-(700)-487-01-80","email":"ramilashrafulinfrontend@gmail.com","text":"I am a frontend developer with two years of development experience. Participated in commercial development on a freelance platform. Also I have worked at MindSet as a trainee frontend developer and participated in the development of a startup project. I write adaptive SPA applications using modern technologies, observing the structure of the project.","photo":""}]')},460:function(e,t,a){},466:function(e,t,a){"use strict";a.r(t);var i=a(4),n=a.n(i),c=a(42),s=a.n(c),o=a(11),r=function(e){e(!1),document.body.style.overflow="auto",document.body.style.paddingRight="0"},l=a(101),d=a.n(l),m=a(1),p=function(e){var t=e.fill;return Object(m.jsx)("svg",{className:"header__decor",x:"0px",y:"0px",viewBox:"0 186.5 1920 113.5",children:Object(m.jsx)("polygon",{points:"0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 ",fill:t})})},j=a(66),u=(a(449),a(450),a.p+"static/media/AboutMe.650aba18.png"),b=function(){return Object(m.jsx)("div",{className:"about__left",children:Object(m.jsx)("img",{className:"about__image",src:u,alt:"About me"})})},h=function(e){var t=e.label,a=e.value;return Object(m.jsxs)("li",{className:"about__item",children:[Object(m.jsxs)("label",{className:"about__label",children:[t,":"]}),Object(m.jsx)("span",{className:"about__value",children:a})]})},x=function(e){var t=[{Name:e.name,id:"1"},{Age:e.age,id:"2"},{Phone:e.phone,id:"3"},{Email:e.email,id:"4"}];return Object(m.jsx)("ul",{className:"about__list",children:t.map((function(e){var t=Object.keys(e)[0],a=Object.values(e)[0];return Object(m.jsx)(h,{label:t,value:a},e.id)}))})},g=function(e){var t=e.content;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("p",{className:"about__text",children:t})})},_=function(e){e(!0),document.body.style.overflow="hidden",document.body.style.paddingRight="3px"},f=function(e){var t=e.text,a=e.abs;return a?Object(m.jsx)("button",{className:"button",onClick:function(){return a&&_(a)},children:t}):Object(m.jsx)("a",{className:"button",href:"/",children:t})},O=function(e){var t=e.text;return Object(m.jsx)("h2",{className:"about__title",children:t})},v=function(e){var t=e.name,a=e.age,i=e.phone,n=e.email,c=e.text,s=e.abs;return Object(m.jsxs)("div",{className:"about__right",children:[Object(m.jsx)(O,{text:"About Me"}),Object(m.jsx)("div",{className:"about__box",children:Object(m.jsx)(g,{content:c})}),Object(m.jsx)(x,{name:t,age:a,phone:i,email:n}),Object(m.jsx)(f,{text:"More About",abs:s})]})},k=a(102),N=a(17);N.c.use([N.b,N.a]);var w=function(e){var t=e.abs;return Object(m.jsx)(j.a,{pagination:{dynamicBullets:!0},navigation:!0,grabCursor:!0,className:"mySwiper",children:k.map((function(e){var a=e.id,i=e.name,n=e.age,c=e.phone,s=e.email,o=e.text;return Object(m.jsx)(j.b,{children:Object(m.jsxs)("div",{className:"about__inner",children:[Object(m.jsx)(b,{}),Object(m.jsx)(v,{name:i,age:n,phone:c,email:s,text:o,abs:function(){return t({name:i,age:n,phone:c,email:s})}})]})},a)}))})},S=function(e){var t=e.abs;return Object(m.jsxs)("section",{className:"about",id:"about",children:[Object(m.jsx)(w,{abs:t}),Object(m.jsx)(p,{fill:"#202020"}),Object(m.jsx)(d.a,{className:"about__decor",params:{particles:{number:{value:50},size:{value:5}},interactivity:{events:{onhover:{enable:!0,mode:"grab"}}}}}),Object(m.jsx)("div",{className:"line"})]})},y=function(e){var t=e.setActive;return Object(m.jsx)("button",{className:"modal__close",onClick:function(){return r(t)}})},I=function(e){var t=e.active,a=e.setActive,i=e.children;return Object(m.jsx)("div",{className:t?"modal active":"modal",onClick:function(){return r(a)},children:Object(m.jsxs)("div",{className:"modal__inner",onClick:function(e){return e.stopPropagation()},children:[Object(m.jsx)("div",{className:"modal__header",children:Object(m.jsx)(y,{setActive:a})}),Object(m.jsx)("div",{className:"modal__body",children:i})]})})},M=function(e){var t=e.procent,a=e.name,i=e.color,n=e.active;return Object(m.jsxs)("div",{className:"about-modal__skill",children:[Object(m.jsxs)("div",{className:"about-modal__progress ".concat(i),children:[Object(m.jsx)("span",{className:"about-modal__progress-left",children:Object(m.jsx)("span",{className:n?"about-modal__progress-bar":""})}),Object(m.jsx)("span",{className:"about-modal__progress-right",children:Object(m.jsx)("span",{className:n?"about-modal__progress-bar":""})}),Object(m.jsx)("span",{className:"about-modal__progress-value",children:t})]}),Object(m.jsx)("span",{className:"about-modal__text",children:a})]})},T=function(e){var t=e.active,a=e.data;return Object(m.jsxs)("div",{className:"about-modal",children:[Object(m.jsx)("h2",{className:"about-modal__title",children:"My skills"}),Object(m.jsxs)("div",{className:"about-modal__skills",children:[Object(m.jsx)(M,{procent:"90%",name:"HTML/CSS",color:"yellow",active:t}),Object(m.jsx)(M,{procent:"65%",name:"JavaScript",color:"blue",active:t}),Object(m.jsx)(M,{procent:"75%",name:"React/Redux",color:"red",active:t}),Object(m.jsx)(M,{procent:"80%",name:"TypeScript",color:"green",active:t})]}),Object(m.jsx)(x,{name:a.name,age:a.age,phone:a.phone,email:a.email})]})},R=function(e){var t=e.workCardData;return Object(m.jsxs)("div",{className:"work-modal",children:[Object(m.jsx)("h2",{className:"work-modal__title",children:null===t||void 0===t?void 0:t.title}),Object(m.jsxs)("div",{className:"work-modal__short-info",children:[Object(m.jsxs)("p",{className:"work-modal__info-text",children:["Client Name",Object(m.jsx)("span",{children:null===t||void 0===t?void 0:t.clientName})]}),Object(m.jsxs)("p",{className:"work-modal__info-text",children:["Project Value",Object(m.jsx)("span",{children:null===t||void 0===t?void 0:t.projectValue})]}),Object(m.jsxs)("p",{className:"work-modal__info-text",children:["Date",Object(m.jsx)("span",{children:null===t||void 0===t?void 0:t.date})]})]}),Object(m.jsxs)("div",{className:"work-modal__text-block",children:[Object(m.jsx)("p",{className:"work-modal__text-description",children:null===t||void 0===t?void 0:t.descriptionFirst}),Object(m.jsx)("p",{className:"work-modal__text-description",children:null===t||void 0===t?void 0:t.descriptionSecond})]}),Object(m.jsxs)("div",{className:"work-modal__images-block",children:[Object(m.jsx)("img",{src:null===t||void 0===t?void 0:t.exampleImageFirst,alt:"test",className:"work-modal__image"}),Object(m.jsx)("img",{src:null===t||void 0===t?void 0:t.exampleImageSecond,alt:"test",className:"work-modal__image"})]}),Object(m.jsxs)("div",{className:"work-modal__link-box",children:[Object(m.jsx)("p",{className:"work-modal__link-title",children:"Link"}),Object(m.jsx)("a",{className:"work-modal__link",href:null===t||void 0===t?void 0:t.link,children:null===t||void 0===t?void 0:t.link})]})]})},C=function(e){var t=e.handleOpenWorkModal,a=e.handleSetWorkCardInfo,n=e.title,c=e.shortDescription,s=e.mainImage,r=Object(i.useState)(!1),l=Object(o.a)(r,2),d=l[0],p=l[1];return Object(m.jsxs)("div",{className:"works__card",onMouseEnter:function(){p(!0)},onMouseLeave:function(){p(!1)},children:[Object(m.jsx)("img",{src:s,alt:"test",className:"".concat(d?"works__card-image-opacity":""," works__card-image")}),Object(m.jsxs)("div",{className:"".concat(d?"works__card-info-active":"works__card-info-unactive"," works__card-info"),children:[Object(m.jsx)("p",{className:"works__card-title",children:n}),Object(m.jsx)("p",{className:"works__card-text",children:c}),Object(m.jsx)("button",{className:"works__card-button",onClick:function(){_(t),a()},children:"View Work"})]})]})},F=a.p+"static/media/Stellar Burgers.aff84fed.png",E=a.p+"static/media/StellarBurgersExample1.8f4c088b.png",L=a.p+"static/media/StellarBurgersExample2.26192ef7.png",D=a.p+"static/media/QR-code-mainImage.571624fd.jpg",A=a.p+"static/media/qrMenuFirstImage.7a9945cb.png",W=a.p+"static/media/qrMenuSecondImage.a89bed87.png",J=a.p+"static/media/my-korea.ea751386.jpg",P=a.p+"static/media/myKoreaFirstImage.02315abb.png",B=a.p+"static/media/myKoreaSecondImage.67488ea6.png",V=a.p+"static/media/kalibrisFirstImage.effd969b.png",K=a.p+"static/media/kalibrisSecondImage.6b1b0986.png",H=a.p+"static/media/kalibrisMain.6c1e73d5.jpeg",z=a.p+"static/media/gleeFirstImage.98423489.png",q=a.p+"static/media/gleeSecondImage.6ba0cd91.png",G=a.p+"static/media/gleeMain.74436309.jpg",Q=a.p+"static/media/marchoFirstImage.05718290.png",U=a.p+"static/media/marchoSecondImage.77dd0dca.png",Y=[{title:"Stellar Burgers",shortDescription:"Yandex Practicum Project",clientName:"-",projectValue:"-",date:"28 Oct 2021",descriptionFirst:"The idea of \u200b\u200bthe project is to create a web application for the fictional company Stellar Burgers, which is based on the sale of fast food",descriptionSecond:"A project created for the purpose of learning React. This project uses modern technologies such as React, Redux, WebSocket, TypeScript, React Roter, REST API.",mainImage:F,exampleImageFirst:E,exampleImageSecond:L,link:"https://ramiltanker.github.io/react-burger/",id:1},{title:"QR-MENU",shortDescription:"QR-menu for Tino Pizza",clientName:"Tino Pizza",projectValue:"-",date:"10 Oct 2021",descriptionFirst:"The application was created to remove the traditional menu and replace it with a more modern counterpart. The application works by scanning a QR code with a phone camera.",descriptionSecond:"The application was created using technologies such as React, React Router, React Transition Group, Redux",mainImage:D,exampleImageFirst:A,exampleImageSecond:W,link:"https://qr-menu-jhu5fqc95-ramiltanker.vercel.app/",id:2},{title:"My Korea",shortDescription:"My Korea for Education",clientName:"-",projectValue:"-",date:"15 June 2021",descriptionFirst:"A project created to help students study in Korea. The site contains information about universities, grants and other information.",descriptionSecond:"The project is written using the React library in JavaScript.",mainImage:J,exampleImageFirst:P,exampleImageSecond:B,link:"https://ramiltanker.github.io/mykorea/",id:3},{title:"Kalibris",shortDescription:"Safe & Easy payments",clientName:"-",projectValue:"-",date:"11 May 2021",descriptionFirst:"If you, too, are among the handful of people who are afraid (and rightly so) to hand over their credit information online, we're here for you!",descriptionSecond:"TheKalibris allows you to get a virtual credit card number in less than 60 seconds and pay with it online! What are you waiting for?",mainImage:H,exampleImageFirst:V,exampleImageSecond:K,link:"https://xleevenx.github.io/TheKabibris/index-en.html",id:4},{title:"Glee",shortDescription:"Smart and Trendy",clientName:"-",projectValue:"-",date:"20 December 2020",descriptionFirst:"Mission of our creative house",descriptionSecond:"Sale of high-quality, branded and designer furniture.",mainImage:G,exampleImageFirst:z,exampleImageSecond:q,link:"https://xleevenx.github.io/Glee/index.html",id:5},{title:"Marcho",shortDescription:"Clothes Shop",clientName:"-",projectValue:"-",date:"20 Jan 2021",descriptionFirst:"The site is designed for the Marcho clothing store",descriptionSecond:"The site provides a huge selection of clothes, its purchase, adding to the cart, and so on.",mainImage:a.p+"static/media/marchoMain.f04b73db.jpg",exampleImageFirst:Q,exampleImageSecond:U,link:"https://xleevenx.github.io/Marcho-s-online-shop/",id:6}],X=function(e){var t=e.handleOpenWorkModal,a=e.handleSetWorkCardInfo;return Object(m.jsx)("div",{className:"works__cards-container",children:Y.map((function(e){var i=e.title,n=e.shortDescription,c=e.clientName,s=e.projectValue,o=e.date,r=e.descriptionFirst,l=e.descriptionSecond,d=e.mainImage,p=e.exampleImageFirst,j=e.exampleImageSecond,u=e.link,b=e.id,h={title:i,clientName:c,projectValue:s,date:o,descriptionFirst:r,descriptionSecond:l,exampleImageFirst:p,exampleImageSecond:j,link:u};return Object(m.jsx)(C,{handleOpenWorkModal:t,handleSetWorkCardInfo:function(){return a(h)},title:i,shortDescription:n,clientName:c,projectValue:s,date:o,descriptionFirst:r,descriptionSecond:l,mainImage:d,exampleImageFirst:p,exampleImageSecond:j},b)}))})},Z=function(e){var t=e.handleOpenWorkModal,a=e.handleSetWorkCardInfo;return Object(m.jsxs)("section",{className:"works",id:"projects",children:[Object(m.jsx)("h2",{className:"works__title",children:"Latest Project"}),Object(m.jsx)(X,{handleOpenWorkModal:t,handleSetWorkCardInfo:a}),Object(m.jsx)(p,{fill:"#2a2a2a"})]})},$=a(44),ee=function(e){var t=e.name,a=e.info,i=e.link,c=e.icon,s=n.a.useState(!1),r=Object(o.a)(s,2),l=r[0],d=r[1];return Object(m.jsxs)("div",{className:"skills__card",onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:[Object(m.jsxs)("div",{className:"skills__image-container",children:[Object(m.jsxs)("div",{className:"".concat(l?"skills__dots-container-rotate":"skills__dots-container"," skills__dots-container"),children:[Object(m.jsx)("div",{className:"skills__dot-one"}),Object(m.jsx)("div",{className:"skills__dot-two"})]}),c]}),Object(m.jsxs)("div",{className:"skills__card-info",children:[Object(m.jsx)("p",{className:"skills__card-title",children:t}),Object(m.jsx)("p",{className:"skills__card-text",children:a})]}),Object(m.jsx)("a",{className:"skills__card-button",href:i,children:"READ MORE"})]})},te=a(45),ae=a(46),ie=a(103),ne=a(104),ce=[{id:0,name:"React",info:"React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.",link:"https://reactjs.org/docs/getting-started.html",icon:Object(m.jsx)(te.b,{className:"skills__card-image"})},{id:1,name:"Redux",info:"Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",link:"https://redux.js.org/",icon:Object(m.jsx)(ae.a,{className:"skills__card-image"})},{id:2,name:"JavaScript",info:"JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",icon:Object(m.jsx)(te.a,{className:"skills__card-image"})},{id:3,name:"CSS",info:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",link:"https://en.wikipedia.org/wiki/CSS",icon:Object(m.jsx)(ie.a,{className:"skills__card-image"})},{id:4,name:"HTML",info:"The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",link:"https://en.wikipedia.org/wiki/HTML",icon:Object(m.jsx)(ne.a,{className:"skills__card-image"})},{id:5,name:"TypeScript",info:"TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript\u2019s features, and an additional layer on top of these: TypeScript\u2019s type system. For example, JavaScript provides language primitives like string and number, but it doesn\u2019t check that you\u2019ve consistently assigned these. TypeScript does.",link:"https://www.typescriptlang.org/docs/",icon:Object(m.jsx)(ae.b,{className:"skills__card-image"})}],se=function(e){return Object($.a)(e),Object(m.jsx)("div",{className:"skills__cards-container",children:ce.map((function(e){var t=e.id,a=e.name,i=e.info,n=e.link,c=e.icon;return Object(m.jsx)(ee,{name:a,info:i,link:n,icon:c},t)}))})},oe=function(e){return Object($.a)(e),Object(m.jsxs)("section",{className:"skills",id:"skills",children:[Object(m.jsx)("h2",{className:"skills__title",children:"Our Skills"}),Object(m.jsx)(se,{}),Object(m.jsx)(p,{fill:"#2a2a2a"})]})},re=function(e){var t=e.name1,a=e.textName1,i=e.title,n=e.name2,c=e.textName2,s=e.icon;return Object(m.jsxs)("div",{className:"contacts__card",children:[Object(m.jsx)("div",{className:"contacts__image-box",children:s}),Object(m.jsx)("p",{className:"contacts__title",children:i}),Object(m.jsxs)("div",{className:"contacts__box",children:[Object(m.jsx)("p",{className:"contacts__name",children:t}),Object(m.jsx)("p",{className:"contacts__text",children:a})]}),Object(m.jsxs)("div",{className:"contacts__box",children:[Object(m.jsx)("p",{className:"contacts__name",children:n}),Object(m.jsx)("p",{className:"contacts__text",children:c})]})]})},le=a(105),de=a(106),me=a(107),pe=[{id:0,name1:"Ramil",textName1:"Kazakhstan, Taldykorgan",title:"Address",name2:"Damil",textName2:"Kazakhstan, Taldykorgan",icon:Object(m.jsx)(le.a,{className:"contacts__image"})},{id:1,name1:"Ramil",textName1:"ramilashrafulinfrontend@gmail.com",title:"Email",name2:"Damil",textName2:"-",icon:Object(m.jsx)(de.a,{className:"contacts__image"})},{id:2,name1:"Ramil",textName1:"+7 (700) 487-01-80",title:"Phone",name2:"Damil",textName2:"+7 (777) 369-22-86",icon:Object(m.jsx)(me.a,{className:"contacts__image"})}],je=function(){return Object(m.jsxs)("section",{className:"contacts",id:"contacts",children:[Object(m.jsx)("div",{className:"contacts__container",children:pe.map((function(e){var t=e.name1,a=e.textName1,i=e.title,n=e.name2,c=e.textName2,s=e.icon,o=e.id;return Object(m.jsx)(re,{name1:t,textName1:a,title:i,name2:n,textName2:c,icon:s},o)}))}),Object(m.jsx)(p,{fill:"#202020"})]})},ue=function(e){var t=e.socialLink,a=e.icon;return Object(m.jsx)("li",{className:"footer__li",children:Object(m.jsx)("a",{className:"footer__link",href:t,children:a})})},be=function(e){var t=e.logoText;return Object(m.jsx)("a",{className:"logo",href:"/",children:Object(m.jsx)("div",{className:"logo__text",children:t})})},he=a(108),xe=a(47),ge=Object(m.jsx)(he.a,{className:"footer__icon"}),_e=Object(m.jsx)(xe.a,{className:"footer__icon"}),fe=Object(m.jsx)(xe.b,{className:"footer__icon"}),Oe=[{id:0,name:"Ramil",socialLinks:[{id:0,socialLink:"https://www.instagram.com/ashrafulin_/?hl=ru",icon:ge},{id:1,socialLink:"https://t.me/niceguygg",icon:_e},{id:2,socialLink:"https://api.whatsapp.com/send?phone=77004870180&text=",icon:fe}]},{id:1,name:"Damil",socialLinks:[{id:0,socialLink:"",icon:ge},{id:1,socialLink:"",icon:_e},{id:2,socialLink:"",icon:fe}]}],ve=function(){return Object(m.jsxs)("footer",{className:"footer",id:"footer",children:[Object(m.jsx)(be,{logoText:"RD"}),Object(m.jsx)("div",{className:"footer__wrap",children:Oe.map((function(e){var t=e.name,a=e.socialLinks,i=e.id;return Object(m.jsxs)("div",{className:"footer__box",children:[Object(m.jsxs)("p",{className:"footer__name",children:[t,":"]}),Object(m.jsx)("ul",{className:"footer__list",children:a.map((function(e){var t=e.socialLink,a=e.icon,i=e.id;return Object(m.jsx)(ue,{socialLink:t,icon:a},i)}))})]},i)}))}),Object(m.jsx)("p",{className:"footer__text",children:"Follow and Contact us :)"})]})},ke=function(e){var t=e.title,a=e.time,i=e.description;return Object(m.jsxs)("div",{className:"experience__card",children:[Object(m.jsxs)("div",{className:"experience__box",children:[Object(m.jsx)("p",{className:"experience__proffession",children:t}),Object(m.jsx)("p",{className:"experience__time",children:a})]}),Object(m.jsx)("p",{className:"experience__description",children:i})]})},Ne=function(e){var t=e.lastExp,a=e.name,i=e.isRamil,c=e.isDamil,s=n.a.useState(!1),r=Object(o.a)(s,2),l=r[0],d=r[1];return n.a.useEffect((function(){"Ramil"===a?d(i):"Damil"===a&&d(c)}),[a,i,c]),Object(m.jsx)("div",{className:"".concat(l?"experience__container-show":""," experience__container"),children:t.map((function(e){var t=e.id,a=e.title,i=e.time,n=e.description;return Object(m.jsx)(ke,{title:a,time:i,description:n},t)}))})},we=[{id:0,name:"Ramil",lastExp:[{id:0,title:"Yandex Practicum",time:"2019-2021",description:"I have been studied at Yandex Practicum. I took two courses, a web developer and a react developer. I have been received two diplomas on completion of courses, and was also able to delve into the profession in detail and deeply, which allowed him to become a Junior developer."},{id:1,title:"Freelance platform fl.ru",time:"6 month",description:"I have been worked on a freelance platform. Gained experience in commercial development. I got the skills to communicate with customers, learned to read the terms of reference."},{id:2,title:"MindSet company",time:"3-4 month",description:"I have been worked as an intern at MindSet as a frontend developer intern. Participated in the development of the Start-Up project. Performed Team Lead tasks."}]},{id:1,name:"Damil",lastExp:[{id:1,title:"Freelance platform fl.ru",time:"6 month",description:"I have been worked on a freelance platform. Gained experience in commercial development. I got the skills to communicate with customers, learned to read the terms of reference."},{id:0,title:"IT-Incubator",time:"2020-2021",description:"I have been studied at IT-Incubator. I have studied JavaScript more deeply. I got acquainted with the React library and started writing code in TypeScript."}]}],Se=function(){var e=Object(i.useState)(!0),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(!1),s=Object(o.a)(c,2),r=s[0],l=s[1],d=function(e){"ramil"===e.target.id?(l(!1),n(!0)):"damil"===e.target.id&&(n(!1),l(!0))};return Object(m.jsxs)("section",{className:"experience",id:"experience",children:[Object(m.jsx)("h2",{className:"experience__title",children:"Our Experience"}),Object(m.jsxs)("div",{className:"experience__filter",children:[Object(m.jsx)("button",{className:"".concat(a?"experience__button-active":""," experience__button"),id:"ramil",onClick:function(e){d(e)},children:"Ramil"}),Object(m.jsx)("button",{className:"".concat(r?"experience__button-active":""," experience__button"),id:"damil",onClick:function(e){d(e)},children:"Damil"})]}),we.map((function(e){var t=e.id,i=e.lastExp,n=e.name;return Object(m.jsx)(Ne,{lastExp:i,name:n,isRamil:a,isDamil:r},t)})),Object(m.jsx)(p,{fill:"#202020"})]})},ye=a(110),Ie=a(109),Me=function(e){var t=e.img,a=e.title,i=e.to;return Object(m.jsx)(Ie.Link,{className:"menu__card ",ignoreCancelEvents:!0,to:i,spy:!0,smooth:!0,offset:-100,children:Object(m.jsxs)("div",{className:"menu__link",children:[Object(m.jsx)("img",{src:t,alt:a,className:"menu__image"}),Object(m.jsx)("p",{className:"menu__text",children:a})]})})},Te=a.p+"static/media/testForMenu.a7ab5a42.png",Re=a.p+"static/media/works.a3acac34.png",Ce=a.p+"static/media/experience.ad0762bd.png",Fe=a.p+"static/media/skills.06b6e786.png",Ee=a.p+"static/media/contacts.ae3cb457.png",Le=(a.p,[{id:0,img:Te,title:"HOME",to:"home"},{id:1,img:Te,title:"ABOUT",to:"about"},{id:2,img:Re,title:"PROJECTS",to:"projects"},{id:3,img:Ce,title:"EXPERIENCE",to:"experience"},{id:4,img:Fe,title:"SKILLS",to:"skills"},{id:5,img:Ee,title:"CONTACTS",to:"contacts"}]),De=function(e){var t=e.isMenuActive,a=e.handleCloseBurgerMenu;return Object(m.jsxs)("section",{className:"".concat(t?"menu__active":""," menu"),children:[Object(m.jsx)("button",{className:"menu__close-button",onClick:a,children:Object(m.jsx)(ye.a,{className:"menu__close-icon"})}),Object(m.jsx)("div",{className:"menu__wrapper",children:Le.map((function(e){var t=e.img,a=e.title,i=e.id,n=e.to;return Object(m.jsx)(Me,{img:t,title:a,to:n},i)}))})]})},Ae=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)({}),s=Object(o.a)(c,2),l=s[0],d=s[1],p=Object(i.useState)(!1),j=Object(o.a)(p,2),u=j[0],b=j[1],h=Object(i.useState)(),x=Object(o.a)(h,2),g=x[0],_=x[1],f=Object(i.useState)(!1),O=Object(o.a)(f,2),v=O[0],k=O[1];Object(i.useEffect)((function(){var e=function(e){"Escape"===e.key&&(r(n),r(b))};return document.addEventListener("keydown",(function(t){e(t)})),function(){document.removeEventListener("keydown",(function(t){e(t)}))}}),[]);return Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(S,{abs:function(e){console.log(1),n(!0),d(e)}}),Object(m.jsx)(Z,{handleOpenWorkModal:b,handleSetWorkCardInfo:function(e){_(e)}}),Object(m.jsx)(Se,{}),Object(m.jsx)(oe,{}),Object(m.jsx)(je,{}),Object(m.jsx)(ve,{}),Object(m.jsx)(De,{isMenuActive:v,handleCloseBurgerMenu:function(){k(!1)}}),Object(m.jsx)(I,{active:a,setActive:n,children:Object(m.jsx)(T,{active:a,data:l})}),Object(m.jsx)(I,{active:u,setActive:b,children:Object(m.jsx)(R,{workCardData:g})})]})};a(460),a(461);s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(Ae,{})}),document.getElementById("root"))}},[[466,1,2]]]);
//# sourceMappingURL=main.65bf72d8.chunk.js.map