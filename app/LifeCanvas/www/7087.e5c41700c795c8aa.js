"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7087],{7087:(Z,_,d)=>{d.r(_),d.d(_,{Tab1PageModule:()=>i});var a=d(8521),t=d(2228),y=d(557),T=d(4977),p=d(4230),h=d(5121),e=d(2687),v=d(7530);function f(s,c){if(1&s){const u=e.EpF();e.TgZ(0,"ion-list",14)(1,"ion-item",15),e.NdJ("click",function(){const m=e.CHM(u).$implicit,x=e.oxw();return e.KtG(x.openJournal(m.id))}),e.TgZ(2,"ion-label"),e._uU(3),e.qZA(),e.TgZ(4,"ion-label",16),e._uU(5),e.ALo(6,"date"),e.qZA()()()}if(2&s){const u=c.$implicit;e.xp6(3),e.Oqu(u.title),e.xp6(2),e.Oqu(e.xi3(6,2,u.date,"shortDate"))}}const r=[{path:"",component:(()=>{var s;class c{constructor(l,g,m){this.fileService=l,this.router=g,this.route=m}ngOnInit(){this.route.queryParamMap.subscribe(l=>{const g=l.get("name");g?this.name=g:h.u.get({key:"name"}).then(({value:m})=>{this.name=m})}),this.loadJournal(),this.route.params.subscribe(()=>{this.loadJournal()})}openJournal(l){this.router.navigateByUrl("/journal?id="+l)}loadJournal(){this.journal=this.fileService.readJournal()}}return(s=c).\u0275fac=function(l){return new(l||s)(e.Y36(v.I),e.Y36(p.F0),e.Y36(p.gz))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-tab1"]],inputs:{name:"name"},decls:44,vars:4,consts:[[1,"ion-no-border","drop-shadow"],["slot","start"],[1,"ion-no-margin"],["size","12",1,"ion-text-center","mb-4"],[1,"username-Label"],["size","2"],["alt","flower3","src","..\\assets\\icon\\Flower3.svg"],["size","10"],["src","..\\assets\\icon\\StartQuotes.svg"],["size","8"],["src","..\\assets\\icon\\EndQuotes.svg"],[1,"ion-no-padding","ion-no-margin","ion-text-end"],["color","primary",1,"text-center"],["size","12",4,"ngFor","ngForOf"],["size","12"],[3,"click"],["align","end"]],template:function(l,g){1&l&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-grid",2)(5,"ion-title"),e._uU(6,"Me"),e.qZA()()()(),e.TgZ(7,"ion-content")(8,"ion-card")(9,"ion-card-content")(10,"ion-row")(11,"ion-col",3)(12,"h3"),e._uU(13,"Welcome"),e.qZA(),e.TgZ(14,"ion-label",4),e._uU(15),e.qZA()(),e.TgZ(16,"ion-col",5)(17,"ion-thumbnail"),e._UZ(18,"img",6),e.qZA()(),e.TgZ(19,"ion-col",7)(20,"ion-label"),e._uU(21," Each day, I improve my life by becoming a better version myself! "),e.qZA()()()()(),e.TgZ(22,"ion-card")(23,"ion-card-content")(24,"ion-row")(25,"ion-col",5)(26,"ion-thumbnail"),e._UZ(27,"img",8),e.qZA()(),e.TgZ(28,"ion-col",9)(29,"ion-label"),e._uU(30,"Life is what happens when you're busy making other plans. "),e.qZA()(),e.TgZ(31,"ion-col",5)(32,"ion-thumbnail"),e._UZ(33,"img",10),e.qZA()(),e.TgZ(34,"ion-col",11)(35,"ion-label"),e._uU(36,"John Lennon"),e.qZA()()()()(),e.TgZ(37,"ion-card")(38,"ion-card-header")(39,"ion-card-title",12),e._uU(40,"My Journal"),e.qZA()(),e.TgZ(41,"ion-card-content"),e.YNc(42,f,7,5,"ion-list",13),e.ALo(43,"async"),e.qZA()()()),2&l&&(e.xp6(15),e.Oqu(g.name),e.xp6(27),e.Q6J("ngForOf",e.lcZ(43,2,g.journal)))},dependencies:[a.Sm,a.PM,a.FN,a.Zi,a.Dq,a.wI,a.W2,a.jY,a.Gu,a.Ie,a.Q$,a.q_,a.fG,a.Nd,a.Bs,a.wd,a.sr,t.sg,t.Ov,t.uU],styles:["ion-avatar[_ngcontent-%COMP%]{margin:10px auto;height:60px;width:60px}.username-Label[_ngcontent-%COMP%]{font-size:large;color:#e39478}.avatar-border[_ngcontent-%COMP%]{border-top:2px rgb(227,148,120) solid}"]}),c})()}];let n=(()=>{var s;class c{}return(s=c).\u0275fac=function(l){return new(l||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[p.Bz.forChild(r),p.Bz]}),c})(),i=(()=>{var s;class c{}return(s=c).\u0275fac=function(l){return new(l||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[a.Pc,t.ez,y.u5,T.e,n]}),c})()},7530:(Z,_,d)=>{d.d(_,{I:()=>p});var a=d(7791),t=d(6712),y=d(9317),T=d(2687);let p=(()=>{var h;class e{constructor(){var f=this;this.saveNote=function(){var o=(0,a.Z)(function*(r,n,i){let c,s=yield f.readNotes();if(s&&s.length>0)if(c=s,null==i){let u=parseInt(y.Fp(c,function(l){return l.id}).id);u++,c.push({id:u,data:r,title:n})}else c.forEach(u=>{u.id==i&&(u.data=r,u.title=n)});else c=[{id:0,data:r,title:n}];yield t.fy.writeFile({path:"notes.json",data:JSON.stringify(c),directory:t.tP.External,encoding:t.ez.UTF8})});return function(r,n,i){return o.apply(this,arguments)}}(),this.readNotes=(0,a.Z)(function*(){try{const o=yield t.fy.readFile({path:"notes.json",directory:t.tP.External,encoding:t.ez.UTF8});return JSON.parse(o.data.toString())}catch{return null}}),this.deleteNote=function(){var o=(0,a.Z)(function*(r){var n=yield f.readNotes();n=y.d1(n,function(i){return i.id==r});try{yield t.fy.writeFile({path:"notes.json",data:JSON.stringify(n),directory:t.tP.External,encoding:t.ez.UTF8})}catch(i){console.error(i)}});return function(r){return o.apply(this,arguments)}}(),this.saveTask=function(){var o=(0,a.Z)(function*(r){let n=yield f.readTasks();if(n&&n.length>0)if(null==r.id){let i=parseInt(y.Fp(n,function(s){return s.id}).id);i++,r.id=i,n.push(r)}else n.forEach(i=>{i.id==r.id&&(i.tasks=r.tasks)});else r.id=0,n=[r];yield t.fy.writeFile({path:"tasks.json",data:JSON.stringify(n),directory:t.tP.External,encoding:t.ez.UTF8})});return function(r){return o.apply(this,arguments)}}(),this.readTasks=(0,a.Z)(function*(){try{const o=yield t.fy.readFile({path:"tasks.json",directory:t.tP.External,encoding:t.ez.UTF8});return JSON.parse(o.data.toString())}catch{return null}}),this.deleteTask=function(){var o=(0,a.Z)(function*(r){var n=yield f.readTasks();n=y.d1(n,function(i){return i.id==r});try{yield t.fy.writeFile({path:"tasks.json",data:JSON.stringify(n),directory:t.tP.External,encoding:t.ez.UTF8})}catch(i){console.error(i)}});return function(r){return o.apply(this,arguments)}}(),this.saveJournal=function(){var o=(0,a.Z)(function*(r,n,i){let c,s=yield f.readJournal(),u=new Date;if(s)if(c=s,null==i){let l=parseInt(y.Fp(c,function(g){return g.id}).id);l++,c.push({id:l,data:r,title:n,date:u})}else c.forEach(l=>{l.id==i&&(l.data=r,l.title=n,l.date=u)});else c=[{id:0,data:r,title:n,date:u}];yield t.fy.writeFile({path:"journal.json",data:JSON.stringify(c),directory:t.tP.External,encoding:t.ez.UTF8})});return function(r,n,i){return o.apply(this,arguments)}}(),this.readJournal=(0,a.Z)(function*(){try{const o=yield t.fy.readFile({path:"journal.json",directory:t.tP.External,encoding:t.ez.UTF8});return JSON.parse(o.data.toString())}catch{return null}}),this.deleteJournal=function(){var o=(0,a.Z)(function*(r){var n=yield f.readJournal();n=y.d1(n,function(i){return i.id==r});try{yield t.fy.writeFile({path:"journal.json",data:JSON.stringify(n),directory:t.tP.External,encoding:t.ez.UTF8})}catch(i){console.error(i)}});return function(r){return o.apply(this,arguments)}}(),this.readQuotes=(0,a.Z)(function*(){try{const o=yield t.fy.readFile({path:"quotes.json",directory:t.tP.External,encoding:t.ez.UTF8});return JSON.parse(o.data.toString())}catch{return null}}),this.saveQuote=function(){var o=(0,a.Z)(function*(r,n){let i=yield f.readQuotes();i&&i.length>0?i.push({quote:r,author:n}):i=[{quote:r,author:n}],yield t.fy.writeFile({path:"quotes.json",data:JSON.stringify(i),directory:t.tP.External,encoding:t.ez.UTF8})});return function(r,n){return o.apply(this,arguments)}}(),this.deleteQuotes=function(){var o=(0,a.Z)(function*(r){var n=yield f.readQuotes();n=y.d1(n,function(i){return i.quote==r});try{yield t.fy.writeFile({path:"quotes.json",data:JSON.stringify(n),directory:t.tP.External,encoding:t.ez.UTF8})}catch(i){console.error(i)}});return function(r){return o.apply(this,arguments)}}(),this.readAffirmations=(0,a.Z)(function*(){try{const o=yield t.fy.readFile({path:"affirmations.json",directory:t.tP.External,encoding:t.ez.UTF8});return JSON.parse(o.data.toString())}catch{return null}}),this.saveAffirmation=function(){var o=(0,a.Z)(function*(r){let n=yield f.readAffirmations();n&&n.length>0?n.push({affirmation:r}):n=[{affirmation:r}],yield t.fy.writeFile({path:"affirmations.json",data:JSON.stringify(n),directory:t.tP.External,encoding:t.ez.UTF8})});return function(r){return o.apply(this,arguments)}}(),this.deleteAffirmation=function(){var o=(0,a.Z)(function*(r){var n=yield f.readAffirmations();n=y.d1(n,function(i){return i.affirmation.quote==r});try{yield t.fy.writeFile({path:"affirmations.json",data:JSON.stringify(n),directory:t.tP.External,encoding:t.ez.UTF8})}catch(i){console.error(i)}});return function(r){return o.apply(this,arguments)}}()}}return(h=e).\u0275fac=function(f){return new(f||h)},h.\u0275prov=T.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),e})()}}]);