// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router';
import VueResource from 'vue-resource';

import infor from './components/webManage/backstage_infor/backstage_infor.vue';
import shop from './components/webManage/backstage_shop/backstage_shop.vue';
import menber from './components/webManage/backstage_menber/backstage_menber.vue';
import transation from './components/webManage/backstage_transation/backstage_transation.vue';

import empmanages from './components/webManage/backstage_menber/empmanage/empmanage.vue';
import card from './components/webManage/backstage_menber/backstage_card/backstage_card.vue';
import integral from './components/webManage/backstage_menber/backstage_integral/backstage_integral.vue';
import personal from './components/webManage/backstage_menber/backstage_personal/backstage_personal';

import poststructureManage from './components/webManage/backstage_menber/empmanage/poststructureManage/poststructureManage.vue';
import postManage from './components/webManage/backstage_menber/empmanage/postManage/postManage.vue';
import salesmanManage from './components/webManage/backstage_menber/empmanage/salesmanManage/salesmanManage.vue';
import staffManage from './components/webManage/backstage_menber/empmanage/staffManage/staffManage.vue';

import integralm from './components/webManage/backstage_menber/backstage_integral/integralManage/integralManage.vue';
import integralShopManage from './components/webManage/backstage_menber/backstage_integral/integralShopManage/integralShopManage.vue';
import backManage from './components/webManage/backstage_menber/backstage_integral/backManage/backManage.vue';

import cardManage from './components/webManage/backstage_menber/backstage_card/cardManage/cardManage.vue';

import companyManage from './components/webManage/backstage_menber/backstage_personal/companyManage/companyManage.vue';
import personalManage from './components/webManage/backstage_menber/backstage_personal/personalManage/personalManage.vue';

import stockManage from './components/webManage/backstage_infor/stockManage/stockManage.vue';
import financeManage from './components/webManage/backstage_infor/financeManage/financeManage.vue';
import productManage from './components/webManage/backstage_infor/productManage/productManage.vue';

import classificationManage from './components/webManage/backstage_infor/productManage/classificationManage/classificationManage.vue';
import producsManage from './components/webManage/backstage_infor/productManage/producsManage/producsManage.vue';

import financesManage from './components/webManage/backstage_infor/financeManage/financesManage/financesManage.vue';

import stocksManage from './components/webManage/backstage_infor/stockManage/stocksManage/stocksManage.vue';
import purchaseManage from './components/webManage/backstage_infor/stockManage/purchaseManage/purchaseManage.vue';
import proNumManage from './components/webManage/backstage_infor/stockManage/proNumManage/proNumManage.vue';
import libraryManage from './components/webManage/backstage_infor/stockManage/libraryManage/libraryManage.vue';

import qualityManage from './components/webManage/backstage_transation/qualityManage/qualityManage.vue';
import orderManage from './components/webManage/backstage_transation/orderManage/orderManage.vue';
import contractManage from './components/webManage/backstage_transation/contractManage/contractManage.vue';

import createOrderManage from './components/webManage/backstage_transation/orderManage/createOrderManage/createOrderManage.vue';
import ordersManage from './components/webManage/backstage_transation/orderManage/ordersManage/ordersManage.vue';

import contractsManage from './components/webManage/backstage_transation/contractManage/contractsManage/contractsManage.vue';

import qualitysManage from './components/webManage/backstage_transation/qualityManage/qualitysManage/qualitysManage.vue';

import newsManage from './components/webManage/backstage_shop/newsManage/newsManage.vue';
import caseManage from './components/webManage/backstage_shop/caseManage/caseManage.vue';
import liveManage from './components/webManage/backstage_shop/liveManage/liveManage.vue';
import recommendManage from './components/webManage/backstage_shop/recommendManage/recommendManage.vue';
import scompanyManage from './components/webManage/backstage_shop/scompanyManage/scompanyManage.vue';

import scompanysManage from './components/webManage/backstage_shop/scompanyManage/scompanysManage/scompanysManage.vue';
import recommendsManage from './components/webManage/backstage_shop/recommendManage/recommendsManage/recommendsManage.vue';
import newssManage from './components/webManage/backstage_shop/newsManage/newssManage/newssManage.vue';
import livesManage from './components/webManage/backstage_shop/liveManage/livesManage/livesManage.vue';
import casesManage from './components/webManage/backstage_shop/caseManage/casesManage/casesManage.vue';

import userlogin from './components/login/userlogin.vue';
import managelogin from './components/login/managelogin.vue';
import userindex from './components/userhome/userindex.vue';
import manageindex from './components/webhome/manageindex.vue';
import manage from './components/webManage/manage.vue';
import businessManage from './components/businessManage/businessManage.vue';

import './common/style/style.css';
Vue.use(Router);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.config.productionTip = false;

const routes = [
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
  },
    {path: '/userlogin', component: userlogin},
    {path: '/managelogin', component: managelogin},
    {path: '/userindex', component: userindex},
    {path: '/manageindex', component: manageindex},
    {path: '/manage', component: manage},
    {path: '/businessManage', component: businessManage}
];
const router = new Router({
  routes // （缩写）相当于 routes: routes
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
// router.push('/staffManage');
// router.push('/userlogin');