import Vue from 'vue'
import Router from 'vue-router'
import Routes from './routes/web'

Vue.use(Router);

let router = new Router({

    mode: 'history',
    routes: Routes

});

router.afterEach((to) => {

    document.title = to.meta.title == null ? '' : to.meta.title;

});

export default router;
