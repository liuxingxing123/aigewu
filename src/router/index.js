import Vue from 'vue'
import Router from 'vue-router'

import infor from '../components/webManage/backstage_infor/backstage_infor.vue';
import shop from '../components/webManage/backstage_shop/backstage_shop.vue';
import menber from '../components/webManage/backstage_menber/backstage_menber.vue';
import transation from '../components/webManage/backstage_transation/backstage_transation.vue';

import empmanages from '../components/webManage/backstage_menber/empmanage/empmanage.vue';
import card from '../components/webManage/backstage_menber/backstage_card/backstage_card.vue';
import integral from '../components/webManage/backstage_menber/backstage_integral/backstage_integral.vue';
import personal from '../components/webManage/backstage_menber/backstage_personal/backstage_personal';

import poststructureManage from '../components/webManage/backstage_menber/empmanage/poststructureManage/poststructureManage.vue';
import postManage from '../components/webManage/backstage_menber/empmanage/postManage/postManage.vue';
import salesmanManage from '../components/webManage/backstage_menber/empmanage/salesmanManage/salesmanManage.vue';
import staffManage from '../components/webManage/backstage_menber/empmanage/staffManage/staffManage.vue';

import integralm from '../components/webManage/backstage_menber/backstage_integral/integralManage/integralManage.vue';
import integralShopManage from '../components/webManage/backstage_menber/backstage_integral/integralShopManage/integralShopManage.vue';
import backManage from '../components/webManage/backstage_menber/backstage_integral/backManage/backManage.vue';

import cardManage from '../components/webManage/backstage_menber/backstage_card/cardManage/cardManage.vue';

import companyManage from '../components/webManage/backstage_menber/backstage_personal/companyManage/companyManage.vue';
import personalManage from '../components/webManage/backstage_menber/backstage_personal/personalManage/personalManage.vue';

import stockManage from '../components/webManage/backstage_infor/stockManage/stockManage.vue';
import financeManage from '../components/webManage/backstage_infor/financeManage/financeManage.vue';
import productManage from '../components/webManage/backstage_infor/productManage/productManage.vue';

import classificationManage from '../components/webManage/backstage_infor/productManage/classificationManage/classificationManage.vue';
import producsManage from '../components/webManage/backstage_infor/productManage/producsManage/producsManage.vue';

import financesManage from '../components/webManage/backstage_infor/financeManage/financesManage/financesManage.vue';

import stocksManage from '../components/webManage/backstage_infor/stockManage/stocksManage/stocksManage.vue';
import purchaseManage from '../components/webManage/backstage_infor/stockManage/purchaseManage/purchaseManage.vue';
import proNumManage from '../components/webManage/backstage_infor/stockManage/proNumManage/proNumManage.vue';
import libraryManage from '../components/webManage/backstage_infor/stockManage/libraryManage/libraryManage.vue';

import qualityManage from '../components/webManage/backstage_transation/qualityManage/qualityManage.vue';
import orderManage from '../components/webManage/backstage_transation/orderManage/orderManage.vue';
import contractManage from '../components/webManage/backstage_transation/contractManage/contractManage.vue';

import createOrderManage from '../components/webManage/backstage_transation/orderManage/createOrderManage/createOrderManage.vue';
import ordersManage from '../components/webManage/backstage_transation/orderManage/ordersManage/ordersManage.vue';

import contractsManage from '../components/webManage/backstage_transation/contractManage/contractsManage/contractsManage.vue';

import qualitysManage from '../components/webManage/backstage_transation/qualityManage/qualitysManage/qualitysManage.vue';

import newsManage from '../components/webManage/backstage_shop/newsManage/newsManage.vue';
import caseManage from '../components/webManage/backstage_shop/caseManage/caseManage.vue';
import liveManage from '../components/webManage/backstage_shop/liveManage/liveManage.vue';
import recommendManage from '../components/webManage/backstage_shop/recommendManage/recommendManage.vue';
import scompanyManage from '../components/webManage/backstage_shop/scompanyManage/scompanyManage.vue';

import scompanysManage from '../components/webManage/backstage_shop/scompanyManage/scompanysManage/scompanysManage.vue';
import recommendsManage from '../components/webManage/backstage_shop/recommendManage/recommendsManage/recommendsManage.vue';
import newssManage from '../components/webManage/backstage_shop/newsManage/newssManage/newssManage.vue';
import livesManage from '../components/webManage/backstage_shop/liveManage/livesManage/livesManage.vue';
import casesManage from '../components/webManage/backstage_shop/caseManage/casesManage/casesManage.vue';

import userlogin from '../components/login/userlogin.vue';
import managelogin from '../components/login/managelogin.vue';
import webindex from '../components/webhome/webindex.vue';
import webmanage from '../components/webManage/webmanage.vue';

//创建异步组件并 分开打包
const Admin = r => require.ensure([], () => r(require('@/components/manageWebManage/Admin/Admin.vue')), 'Admin')
const homepage = r => require.ensure([], () => r(require('@/components/managewebhome/homepage/homepage.vue')), 'homepage')
const adminstystemcontrol = r => require.ensure([], () => r(require('@/components/manageWebManage/adminstystemcontrol/adminstystemcontrol.vue')), 'adminstystemcontrol')
const audit = r => require.ensure([], () => r(require('@/components/manageWebManage/audit/audit.vue')), 'audit')
const signup = r => require.ensure([], () => r(require('@/components/manageWebManage/signup/signup.vue')), 'signup')
const score = r => require.ensure([], () => r(require('@/components/manageWebManage/score/score.vue')), 'score')
const advertising = r => require.ensure([], () => r(require('@/components/manageWebManage/advertising/advertising.vue')), 'advertising')
const live = r => require.ensure([], () => r(require('@/components/manageWebManage/live/live.vue')), 'live')
const shoping = r => require.ensure([], () => r(require('@/components/manageWebManage/shoping/shoping.vue')), 'shoping')
const App = r => require.ensure([], () => r(require('@/App')), 'App')

Vue.use(Router)

export default new Router({
  routes: [
  
    {path: '/userlogin', component: userlogin},
    {path: '/managelogin', component: managelogin},
    {path: '/webindex', component: webindex},
    {path: '/webmanage', component: webmanage,
    children:[

    	 {path: '/infor', component: infor,
      children: [
          {
              path: '/stockManage',
              component: stockManage,
              children: [
                  {
                      path: '/stocksManage',
                      component: stocksManage
                  },
                  {
                      path: '/purchaseManage',
                      component: purchaseManage
                  },
                  {
                      path: '/proNumManage',
                      component: proNumManage
                  },
                  {
                      path: '/libraryManage',
                      component: libraryManage
                  }
              ]
          },
          {
              path: '/productManage',
              component: productManage,
              children: [
                  {
                      path: '/classificationManage',
                      component: classificationManage
                  },
                  {
                      path: '/producsManage',
                      component: producsManage
                  }
              ]
          },
          {
              path: '/financeManage',
              component: financeManage,
              children: [
                  {
                      path: '/financesManage',
                      component: financesManage
                  }
              ]
          }
      ]
  },
  {path: '/shop', component: shop,
      children: [
          {
              path: '/newsManage',
              component: newsManage,
              children: [
                  {
                      path: '/newssManage',
                      component: newssManage
                  }
              ]
          },
          {
              path: '/caseManage',
              component: caseManage,
              children: [
                  {
                      path: '/casesManage',
                      component: casesManage
                  }
              ]
          },
          {
              path: '/liveManage',
              component: liveManage,
              children: [
                  {
                      path: '/livesManage',
                      component: livesManage
                  }
              ]
          },
          {
              path: '/recommendManage',
              component: recommendManage,
              children: [
                  {
                      path: '/recommendsManage',
                      component: recommendsManage
                  }
              ]
          },
          {
              path: '/scompanyManage',
              component: scompanyManage,
              children: [
                  {
                      path: '/scompanysManage',
                      component: scompanysManage
                  }
              ]
          }
      ]
  },
  {path: '/menber', component: menber,
      children: [
          {
              path: '/empmanages',
              component: empmanages,
              children: [
                  {
                      path: '/poststructureManage',
                      component: poststructureManage
                  },
                  {
                      path: '/postManage',
                      component: postManage
                  },
                  {
                      path: '/salesmanManage',
                      component: salesmanManage
                  },
                  {
                      path: '/staffManage',
                      component: staffManage
                  }
                  ]
          },
          {
              path: '/card',
              component: card,
              children: [
                  {
                      path: '/cardManage',
                      component: cardManage
                  }
              ]
          },
          {
              path: '/integral',
              component: integral,
              children: [
                  {
                      path: '/integralm',
                      component: integralm
                  },
                  {
                      path: '/integralShopManage',
                      component: integralShopManage
                  },
                  {
                      path: '/backManage',
                      component: backManage
                  }
              ]
          },
          {
              path: '/personal',
              component: personal,
              children: [
                  {
                      path: '/companyManage',
                      component: companyManage
                  },
                  {
                      path: '/personalManage',
                      component: personalManage
                  }
              ]
          }
  ]
  },
  {path: '/transation', component: transation,
      children: [
          {
              path: '/qualityManage',
              component: qualityManage,
              children: [
                  {
                      path: '/qualitysManage',
                      component: qualitysManage
                  }
              ]
          },
          {
              path: '/orderManage',
              component: orderManage,
              children: [
                  {
                      path: '/ordersManage',
                      component: ordersManage
                  },
                  {
                      path: '/createOrderManage',
                      component: createOrderManage
                  }
              ]
          },
          {
              path: '/contractManage',
              component: contractManage,
              children: [
                  {
                      path: '/contractsManage',
                      component: contractsManage
                  }
              ]
          }
      ]
  }
    ]
},




    //刘星星的路由
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
     {
      path: '/admin',
      name: 'Admin',
      component: Admin,
       children: [
       		{
		      path: '/adminstystemcontrol',
		      name: 'adminstystemcontrol',
		      component: adminstystemcontrol
		    },
		     {
		      path: '/audit',
		      name: 'audit',
		      component: audit
		    }, {
		      path: '/signup',
		      name: 'signup',
		      component: signup
		    }, {
		      path: '/score',
		      name: 'score',
		      component: score
		    }, {
		      path: '/advertising',
		      name: 'advertising',
		      component: advertising
		    }, {
		      path: '/live',
		      name: 'live',
		      component: live
		    }, {
		      path: '/shoping',
		      name: 'shoping',
		      component: shoping
		    }
       ]
    },
    { path: '/a', redirect: '/admin' }
  ],
  mode:'history',
  linkActiveClass:'active'
})
