webpackJsonp([1],{"+6pM":function(t,n){},"+oYh":function(t,n){},"//SV":function(t,n){},"/Cq2":function(t,n){},0:function(t,n){},"19N8":function(t,n){},"2ihE":function(t,n){},"3BoZ":function(t,n){},"4Fkk":function(t,n){},"4J5w":function(t,n){},"6zYd":function(t,n){},"7CV0":function(t,n){},"9Wcu":function(t,n){},CI6h:function(t,n){},CRci:function(t,n){},Df5U:function(t,n){},ElUh:function(t,n){},GeKU:function(t,n){},H0ic:function(t,n){},HSEa:function(t,n){},Jurb:function(t,n){},JutY:function(t,n){},Kia0:function(t,n){},KyhM:function(t,n){},M1hR:function(t,n){},M8oh:function(t,n){},MO9o:function(t,n){},NCWV:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("qRXP"),r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"header"},[e("el-row",{staticClass:"header",attrs:{gutter:0}},[e("el-col",{attrs:{span:4,xs:0,sm:4,md:4,lg:4,xl:4}},[e("div",{staticClass:"grid-content bg-purple indexText"},[t._v("会员中心")])]),t._v(" "),e("el-col",{attrs:{span:16,xs:24,sm:16,md:16,lg:16,xl:16}},[e("div",{staticClass:"grid-content bg-purple"},[e("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[e("el-menu-item",{attrs:{index:"1"}},[e("router-link",{staticClass:"routerA",attrs:{to:"/staffManage"}},[t._v("会员服务")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"2"}},[e("router-link",{staticClass:"routerA",attrs:{to:"/producsManage"}},[t._v("信息管理")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"3"}},[e("router-link",{staticClass:"routerA",attrs:{to:"/createOrderManage"}},[t._v("交易管理")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"4"}},[e("router-link",{staticClass:"routerA",attrs:{to:"/scompanysManage"}},[t._v("商铺管理")])],1)],1),t._v(" "),e("div",{staticClass:"line"})],1)]),t._v(" "),e("el-col",{attrs:{span:4,xs:0,sm:4,md:4,lg:4,xl:4}},[e("div",{staticClass:"grid-content bg-purple indexText"},[t._v("登录人员名称")])])],1)],1),t._v(" "),e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]},s=e("/Xao")({data:function(){return{activeIndex:"1"}},methods:{}},r,!1,function(t){e("tRdn")},null,null).exports,a=e("ynTT"),o=e.n(a),u=(e("QTsQ"),e("zO6J")),l=e("y0Fx"),c={props:{iconList:{type:Array,default:function(){return[{}]}},listText:{type:Array,default:function(){return[{}]}},linkto:{type:Array,default:function(){return[{}]}}},data:function(){return{isCollapse:!1,activeIndex:"1",indexs:1}},methods:{handleSelect:function(t,n){console.log(t)}}},m={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"leftMenu"},[n("el-menu",{staticClass:"el-menu-vertical-demo leftmenuUl",attrs:{"default-active":"1-4-1",collapse:this.isCollapse}},[n("el-menu-item",{attrs:{index:"1"}},[n("router-link",{staticClass:"routerA",attrs:{to:this.linkto[0]}},[n("div",[n("i",{class:this.iconList[0]}),this._v(this._s(this.listText[0]))])])],1),this._v(" "),n("el-menu-item",{attrs:{index:"2"}},[n("router-link",{staticClass:"routerA",attrs:{to:this.linkto[1]}},[n("div",[n("i",{class:this.iconList[1]}),this._v(this._s(this.listText[1]))])])],1),this._v(" "),n("el-menu-item",{attrs:{index:"3"}},[n("router-link",{staticClass:"routerA",attrs:{to:this.linkto[2]}},[n("div",[n("i",{class:this.iconList[2]}),this._v(this._s(this.listText[2]))])])],1),this._v(" "),n("el-menu-item",{attrs:{index:"4"}},[n("router-link",{staticClass:"routerA",attrs:{to:this.linkto[3]}},[n("div",[n("i",{class:this.iconList[3]}),this._v(this._s(this.listText[3]))])])],1),this._v(" "),n("el-menu-item",{attrs:{index:"5"}},[n("router-link",{staticClass:"routerA",attrs:{to:this.linkto[4]}},[n("div",[n("i",{class:this.iconList[4]}),this._v(this._s(this.listText[4]))])])],1)],1)],1)},staticRenderFns:[]},h=e("/Xao")(c,m,!1,function(t){e("JutY")},null,null).exports,p={data:function(){return{iconList:["icon-cpxx","icon-cwgl","icon-kcgl","",""],listText:["产品管理","财务管理","库存管理","",""],linkto:["/productManage","/financeManage","/stockManage","",""]}},methods:{},components:{leftmenu:h}},d={render:function(){var t=this.$createElement,n=this._self._c||t;return n("el-container",[n("el-row",{staticClass:"mune",attrs:{gutter:0}},[n("el-col",{attrs:{span:4,xs:4,sm:4,md:4,lg:4,xl:4}},[n("leftmenu",{attrs:{iconList:this.iconList,listText:this.listText,linkto:this.linkto}})],1),this._v(" "),n("el-col",{attrs:{span:20,xs:20,sm:20,md:20,lg:20,xl:20}},[n("keep-alive",[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]},f=e("/Xao")(p,d,!1,function(t){e("KyhM")},null,null).exports,v={data:function(){return{iconList:["icon-gsgl","icon-tjcp","icon-zb","icon-al","icon-xw"],listText:["公司管理","推荐产品","公司直播","成功案例","公司新闻"],linkto:["/scompanyManage","/recommendManage","/liveManage","caseManage","newsManage"]}},methods:{},components:{leftmenu:h}},_={render:function(){var t=this.$createElement,n=this._self._c||t;return n("el-container",[n("el-row",{staticClass:"mune",attrs:{gutter:0}},[n("el-col",{attrs:{span:4,xs:4,sm:4,md:4,lg:4,xl:4}},[n("leftmenu",{attrs:{iconList:this.iconList,listText:this.listText,linkto:this.linkto}})],1),this._v(" "),n("el-col",{attrs:{span:20,xs:20,sm:20,md:20,lg:20,xl:20}},[n("keep-alive",[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]},g=e("/Xao")(v,_,!1,function(t){e("oQT7")},null,null).exports,x={data:function(){return{iconList:["icon-yggl","icon-jfgl","icon-mp","icon-grzl",""],listText:["员工管理","积分管理","客户名片","个人资料",""],linkto:["/empmanages","/integral","/card","/personal",""]}},methods:{},components:{leftmenu:h}},k={render:function(){var t=this.$createElement,n=this._self._c||t;return n("el-container",[n("el-row",{staticClass:"mune",attrs:{gutter:0}},[n("el-col",{attrs:{span:4,xs:4,sm:4,md:4,lg:4,xl:4}},[n("leftmenu",{attrs:{iconList:this.iconList,listText:this.listText,linkto:this.linkto}})],1),this._v(" "),n("el-col",{attrs:{span:20,xs:20,sm:20,md:20,lg:20,xl:20}},[n("keep-alive",[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]},M=e("/Xao")(x,k,!1,function(t){e("4J5w")},null,null).exports,R={data:function(){return{iconList:["icon-ddgl","icon-ht","icon-zl","",""],listText:["订单管理","合同模板","质量说明","",""],linkto:["/orderManage","/contractManage","/qualityManage","",""]}},methods:{},components:{leftmenu:h}},X={render:function(){var t=this.$createElement,n=this._self._c||t;return n("el-container",[n("el-row",{staticClass:"mune",attrs:{gutter:0}},[n("el-col",{attrs:{span:4,xs:4,sm:4,md:4,lg:4,xl:4}},[n("leftmenu",{attrs:{iconList:this.iconList,listText:this.listText,linkto:this.linkto}})],1),this._v(" "),n("el-col",{attrs:{span:20,xs:20,sm:20,md:20,lg:20,xl:20}},[n("keep-alive",[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]},E=e("/Xao")(R,X,!1,function(t){e("H0ic")},null,null).exports,F={props:{menus:{type:Array,default:function(){return[{}]}},routerlink:{type:Array,default:function(){return[{}]}}},data:function(){return{activeIndex:"1",indexs:1}},methods:{handleSelect:function(t,n){console.log(t)}}},$={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"mune"},[n("el-row",{staticClass:"mune",attrs:{gutter:0}},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":this.activeIndex,mode:"horizontal"},on:{select:this.handleSelect}},[n("el-col",{staticStyle:{"outline-color":"transparent"},attrs:{span:6,xs:6,sm:2,md:2,lg:2,xl:2}},[n("el-menu-item",{attrs:{index:"1"}},[n("router-link",{staticClass:"routerA",attrs:{to:this.routerlink[0]}},[this._v(this._s(this.menus[0]))])],1)],1),this._v(" "),n("el-col",{staticStyle:{"outline-color":"transparent"},attrs:{span:6,xs:6,sm:2,md:2,lg:2,xl:2}},[n("el-menu-item",{attrs:{index:"2"}},[n("router-link",{staticClass:"routerA",attrs:{to:this.routerlink[1]}},[this._v(this._s(this.menus[1]))])],1)],1),this._v(" "),n("el-col",{staticStyle:{"outline-color":"transparent"},attrs:{span:6,xs:6,sm:2,md:2,lg:2,xl:2}},[n("el-menu-item",{attrs:{index:"3"}},[n("router-link",{staticClass:"routerA",attrs:{to:this.routerlink[2]}},[this._v(this._s(this.menus[2]))])],1)],1),this._v(" "),n("el-col",{staticStyle:{"outline-color":"transparent"},attrs:{span:6,xs:6,sm:2,md:2,lg:2,xl:2}},[n("el-menu-item",{attrs:{index:"4"}},[n("router-link",{staticClass:"routerA",attrs:{to:this.routerlink[3]}},[this._v(this._s(this.menus[3]))])],1)],1)],1)],1),this._v(" "),n("div",{staticClass:"line"})],1)},staticRenderFns:[]},C=e("/Xao")(F,$,!1,function(t){e("ElUh")},null,null).exports,w={data:function(){return{menus:["会员管理","岗位管理","签约业务员","岗位结构"],routerlink:["/staffManage","/postManage","/salesmanManage","/poststructureManage"]}},components:{topmenu:C}},y={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("topmenu",{ref:"topmenu",attrs:{menus:this.menus,routerlink:this.routerlink}}),this._v(" "),n("div",[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]},T=e("/Xao")(w,y,!1,function(t){e("OxLz")},null,null).exports,b={data:function(){return{menus:["客户名片","","",""],routerlink:["/cardManage","","",""]}},components:{topmenu:C}},A={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("topmenu",{ref:"topmenu",attrs:{menus:this.menus,routerlink:this.routerlink}}),this._v(" "),n("div",[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]},U=e("/Xao")(b,A,!1,function(t){e("CRci")},null,null).exports,S={data:function(){return{menus:["积分管理","返现统计","积分商城",""],routerlink:["/integralm","/backManage","/integralShopManage",""]}},components:{topmenu:C}},L={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("topmenu",{ref:"topmenu",attrs:{menus:this.menus,routerlink:this.routerlink}}),this._v(" "),n("div",[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]},z=e("/Xao")(S,L,!1,function(t){e("UVJ+")},null,null).exports,J={data:function(){return{menus:["个人资料","公司资料","",""],routerlink:["/personalManage","/companyManage","",""]}},components:{topmenu:C}},Q={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("topmenu",{ref:"topmenu",attrs:{menus:this.menus,routerlink:this.routerlink}}),this._v(" "),n("div",[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]},Y=e("/Xao")(J,Q,!1,function(t){e("+oYh")},null,null).exports,q=e("QzkZ"),O=e.n(q),N={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("poststructureManage")])},staticRenderFns:[]},I=function(t){e("tRLA")},H=e("/Xao")(O.a,N,!1,I,null,null).exports,P=e("XXXX"),V=e.n(P),W={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("postManage")])},staticRenderFns:[]},Z=function(t){e("am6R")},G=e("/Xao")(V.a,W,!1,Z,null,null).exports,K=e("GeKU"),j=e.n(K),B={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("salesmanManage")])},staticRenderFns:[]},D=function(t){e("n19I")},tt=e("/Xao")(j.a,B,!1,D,null,null).exports,nt={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("el-row",{attrs:{gutter:0}},[e("el-col",{attrs:{xs:24,sm:10,md:10,lg:10,xl:10}},[e("div",{},[t._v("请输入搜索条件：\n                "),e("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.input,callback:function(n){t.input=n},expression:"input"}})],1)]),t._v(" "),e("el-col",{attrs:{xs:24,sm:6,md:8,lg:9,xl:11}},[e("el-button",{attrs:{type:"primary"}},[t._v("点击搜索")]),t._v(" "),e("el-button",{attrs:{type:"primary"}},[t._v("添加员工")])],1)],1)],1)},staticRenderFns:[]},et=e("/Xao")({data:function(){return{input:""}}},nt,!1,function(t){e("HSEa")},null,null).exports,it=e("bHni"),rt=e.n(it),st={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("integralManage")])},staticRenderFns:[]},at=function(t){e("9Wcu")},ot=e("/Xao")(rt.a,st,!1,at,null,null).exports,ut=e("prSu"),lt=e.n(ut),ct={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("integralShopManage")])},staticRenderFns:[]},mt=function(t){e("6zYd")},ht=e("/Xao")(lt.a,ct,!1,mt,null,null).exports,pt=e("RmS9"),dt=e.n(pt),ft={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("backManage")])},staticRenderFns:[]},vt=function(t){e("4Fkk")},_t=e("/Xao")(dt.a,ft,!1,vt,null,null).exports,gt=e("Df5U"),xt=e.n(gt),kt={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("cardManage")])},staticRenderFns:[]},Mt=function(t){e("cfRg")},Rt=e("/Xao")(xt.a,kt,!1,Mt,null,null).exports,Xt=e("z7AT"),Et=e.n(Xt),Ft={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("companyManage")])},staticRenderFns:[]},$t=function(t){e("tUb3")},Ct=e("/Xao")(Et.a,Ft,!1,$t,null,null).exports,wt=e("zA4P"),yt=e.n(wt),Tt={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("personalManage")])},staticRenderFns:[]},bt=function(t){e("Kia0")},At=e("/Xao")(yt.a,Tt,!1,bt,null,null).exports,Ut={data:function(){return{menus:["产品编号","采购/生产","出库","库存"],routerlink:["/proNumManage","/purchaseManage","/libraryManage","/stocksManage"]}},components:{topmenu:C}},St={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("topmenu",{ref:"topmenu",attrs:{menus:this.menus,routerlink:this.routerlink}}),this._v(" "),n("div",[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]},Lt=e("/Xao")(Ut,St,!1,function(t){e("QBui")},null,null).exports,zt={data:function(){return{menus:["财务管理","","",""],routerlink:["/financesManage","","",""]}},components:{topmenu:C}},Jt={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("topmenu",{ref:"topmenu",attrs:{menus:this.menus,routerlink:this.routerlink}}),this._v(" "),n("div",[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]},Qt=e("/Xao")(zt,Jt,!1,function(t){e("Ytwg")},null,null).exports,Yt={data:function(){return{menus:["产品管理","分类管理","",""],routerlink:["/producsManage","/classificationManage","",""]}},components:{topmenu:C}},qt={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("topmenu",{ref:"topmenu",attrs:{menus:this.menus,routerlink:this.routerlink}}),this._v(" "),n("div",[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]},Ot=e("/Xao")(Yt,qt,!1,function(t){e("zjGW")},null,null).exports,Nt=e("iF5t"),It=e.n(Nt),Ht={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("classificationManage")])},staticRenderFns:[]},Pt=function(t){e("qexg")},Vt=e("/Xao")(It.a,Ht,!1,Pt,null,null).exports,Wt=e("7CV0"),Zt=e.n(Wt),Gt={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("producsManage")])},staticRenderFns:[]},Kt=function(t){e("3BoZ")},jt=e("/Xao")(Zt.a,Gt,!1,Kt,null,null).exports,Bt=e("ugJw"),Dt=e.n(Bt),tn={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("financesManage")])},staticRenderFns:[]},nn=function(t){e("WaJ9")},en=e("/Xao")(Dt.a,tn,!1,nn,null,null).exports,rn=e("OUf5"),sn=e.n(rn),an={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("stocksManage")])},staticRenderFns:[]},on=function(t){e("q3uQ")},un=e("/Xao")(sn.a,an,!1,on,null,null).exports,ln=e("sm8A"),cn=e.n(ln),mn={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("purchaseManage")])},staticRenderFns:[]},hn=function(t){e("rkSU")},pn=e("/Xao")(cn.a,mn,!1,hn,null,null).exports,dn=e("v2mk"),fn=e.n(dn),vn={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("proNumManage")])},staticRenderFns:[]},_n=function(t){e("Jurb")},gn=e("/Xao")(fn.a,vn,!1,_n,null,null).exports,xn=e("QUR2"),kn=e.n(xn),Mn={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("libraryManage")])},staticRenderFns:[]},Rn=function(t){e("CI6h")},Xn=e("/Xao")(kn.a,Mn,!1,Rn,null,null).exports,En={data:function(){return{menus:["质量说明","","",""],routerlink:["/qualitysManage","","",""]}},components:{topmenu:C}},Fn={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("topmenu",{ref:"topmenu",attrs:{menus:this.menus,routerlink:this.routerlink}}),this._v(" "),n("div",[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]},$n=e("/Xao")(En,Fn,!1,function(t){e("2ihE")},null,null).exports,Cn={data:function(){return{menus:["创建订单","订单管理","",""],routerlink:["/createOrderManage","/ordersManage","",""]}},components:{topmenu:C}},wn={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("topmenu",{ref:"topmenu",attrs:{menus:this.menus,routerlink:this.routerlink}}),this._v(" "),n("div",[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]},yn=e("/Xao")(Cn,wn,!1,function(t){e("w2i8")},null,null).exports,Tn={data:function(){return{menus:["合同模板","","",""],routerlink:["/contractsManage","","",""]}},components:{topmenu:C}},bn={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("topmenu",{ref:"topmenu",attrs:{menus:this.menus,routerlink:this.routerlink}}),this._v(" "),n("div",[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]},An=e("/Xao")(Tn,bn,!1,function(t){e("pddX")},null,null).exports,Un=e("YCNT"),Sn=e.n(Un),Ln={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("createOrderManage")])},staticRenderFns:[]},zn=function(t){e("QkRT")},Jn=e("/Xao")(Sn.a,Ln,!1,zn,null,null).exports,Qn=e("USoo"),Yn=e.n(Qn),qn={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("ordersManage")])},staticRenderFns:[]},On=function(t){e("NCWV")},Nn=e("/Xao")(Yn.a,qn,!1,On,null,null).exports,In=e("+6pM"),Hn=e.n(In),Pn={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("contractsManage")])},staticRenderFns:[]},Vn=function(t){e("k3ZC")},Wn=e("/Xao")(Hn.a,Pn,!1,Vn,null,null).exports,Zn=e("anUD"),Gn=e.n(Zn),Kn={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("qualitysManage")])},staticRenderFns:[]},jn=function(t){e("eUuU")},Bn=e("/Xao")(Gn.a,Kn,!1,jn,null,null).exports,Dn={data:function(){return{menus:["公司新闻","","",""],routerlink:["/newssManage","","",""]}},components:{topmenu:C}},te={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("topmenu",{ref:"topmenu",attrs:{menus:this.menus,routerlink:this.routerlink}}),this._v(" "),n("div",[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]},ne=e("/Xao")(Dn,te,!1,function(t){e("19N8")},null,null).exports,ee={data:function(){return{menus:["成功案例","","",""],routerlink:["/casesManage","","",""]}},components:{topmenu:C}},ie={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("topmenu",{ref:"topmenu",attrs:{menus:this.menus,routerlink:this.routerlink}}),this._v(" "),n("div",[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]},re=e("/Xao")(ee,ie,!1,function(t){e("YtMJ")},null,null).exports,se={data:function(){return{menus:["公司直播","","",""],routerlink:["/livesManage","","",""]}},components:{topmenu:C}},ae={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("topmenu",{ref:"topmenu",attrs:{menus:this.menus,routerlink:this.routerlink}}),this._v(" "),n("div",[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]},oe=e("/Xao")(se,ae,!1,function(t){e("/Cq2")},null,null).exports,ue={data:function(){return{menus:["推荐产品","","",""],routerlink:["/recommendsManage","","",""]}},components:{topmenu:C}},le={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("topmenu",{ref:"topmenu",attrs:{menus:this.menus,routerlink:this.routerlink}}),this._v(" "),n("div",[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]},ce=e("/Xao")(ue,le,!1,function(t){e("b0hG")},null,null).exports,me={data:function(){return{menus:["公司管理","","",""],routerlink:["/scompanysManage","","",""]}},components:{topmenu:C}},he={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("topmenu",{ref:"topmenu",attrs:{menus:this.menus,routerlink:this.routerlink}}),this._v(" "),n("div",[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]},pe=e("/Xao")(me,he,!1,function(t){e("gy1p")},null,null).exports,de=e("PYiX"),fe=e.n(de),ve={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("scompanysManage")])},staticRenderFns:[]},_e=function(t){e("M8oh")},ge=e("/Xao")(fe.a,ve,!1,_e,null,null).exports,xe=e("l+tX"),ke=e.n(xe),Me={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("recommendsManage")])},staticRenderFns:[]},Re=function(t){e("T/fu")},Xe=e("/Xao")(ke.a,Me,!1,Re,null,null).exports,Ee=e("SUP1"),Fe=e.n(Ee),$e={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("newssManage")])},staticRenderFns:[]},Ce=function(t){e("xxb3")},we=e("/Xao")(Fe.a,$e,!1,Ce,null,null).exports,ye=e("M1hR"),Te=e.n(ye),be={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("livesManage")])},staticRenderFns:[]},Ae=function(t){e("iZ2c")},Ue=e("/Xao")(Te.a,be,!1,Ae,null,null).exports,Se=e("MO9o"),Le=e.n(Se),ze={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("casesManage")])},staticRenderFns:[]},Je=function(t){e("//SV")},Qe=e("/Xao")(Le.a,ze,!1,Je,null,null).exports;e("Rvnx");i.default.use(u.a),i.default.use(l.a),i.default.use(o.a),i.default.config.productionTip=!1;var Ye=[{path:"/infor",component:f,children:[{path:"/stockManage",component:Lt,children:[{path:"/stocksManage",component:un},{path:"/purchaseManage",component:pn},{path:"/proNumManage",component:gn},{path:"/libraryManage",component:Xn}]},{path:"/productManage",component:Ot,children:[{path:"/classificationManage",component:Vt},{path:"/producsManage",component:jt}]},{path:"/financeManage",component:Qt,children:[{path:"/financesManage",component:en}]}]},{path:"/shop",component:g,children:[{path:"/newsManage",component:ne,children:[{path:"/newssManage",component:we}]},{path:"/caseManage",component:re,children:[{path:"/casesManage",component:Qe}]},{path:"/liveManage",component:oe,children:[{path:"/livesManage",component:Ue}]},{path:"/recommendManage",component:ce,children:[{path:"/recommendsManage",component:Xe}]},{path:"/scompanyManage",component:pe,children:[{path:"/scompanysManage",component:ge}]}]},{path:"/menber",component:M,children:[{path:"/empmanages",component:T,children:[{path:"/poststructureManage",component:H},{path:"/postManage",component:G},{path:"/salesmanManage",component:tt},{path:"/staffManage",component:et}]},{path:"/card",component:U,children:[{path:"/cardManage",component:Rt}]},{path:"/integral",component:z,children:[{path:"/integralm",component:ot},{path:"/integralShopManage",component:ht},{path:"/backManage",component:_t}]},{path:"/personal",component:Y,children:[{path:"/companyManage",component:Ct},{path:"/personalManage",component:At}]}]},{path:"/transation",component:E,children:[{path:"/qualityManage",component:$n,children:[{path:"/qualitysManage",component:Bn}]},{path:"/orderManage",component:yn,children:[{path:"/ordersManage",component:Nn},{path:"/createOrderManage",component:Jn}]},{path:"/contractManage",component:An,children:[{path:"/contractsManage",component:Wn}]}]}],qe=new u.a({routes:Ye});new i.default({el:"#app",router:qe,template:"<App/>",components:{App:s}}),qe.push("/staffManage")},OUf5:function(t,n){},OxLz:function(t,n){},PYiX:function(t,n){},QBui:function(t,n){},QTsQ:function(t,n){},QUR2:function(t,n){},QkRT:function(t,n){},QzkZ:function(t,n){},RmS9:function(t,n){},Rvnx:function(t,n){},SUP1:function(t,n){},"T/fu":function(t,n){},USoo:function(t,n){},"UVJ+":function(t,n){},WaJ9:function(t,n){},XXXX:function(t,n){},YCNT:function(t,n){},YtMJ:function(t,n){},Ytwg:function(t,n){},am6R:function(t,n){},anUD:function(t,n){},b0hG:function(t,n){},bHni:function(t,n){},cfRg:function(t,n){},eUuU:function(t,n){},gy1p:function(t,n){},iF5t:function(t,n){},iZ2c:function(t,n){},k3ZC:function(t,n){},"l+tX":function(t,n){},n19I:function(t,n){},oQT7:function(t,n){},pddX:function(t,n){},prSu:function(t,n){},q3uQ:function(t,n){},qexg:function(t,n){},rkSU:function(t,n){},sm8A:function(t,n){},tRLA:function(t,n){},tRdn:function(t,n){},tUb3:function(t,n){},ugJw:function(t,n){},v2mk:function(t,n){},w2i8:function(t,n){},xxb3:function(t,n){},z7AT:function(t,n){},zA4P:function(t,n){},zjGW:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.ece4dbef3971861afad1.js.map