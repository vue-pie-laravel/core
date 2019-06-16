import Vue from 'vue'
import { plugins } from '~/config'

class VueAfterInit {

    constructor (vm) {

        if(! VueAfterInit.instance ) {

            this.hooks = [];

            VueAfterInit.instanced = false;
            VueAfterInit.instance = this;

        }

        if(! VueAfterInit.instanced ) {

            VueAfterInit.instanced = vm && vm.hasOwnProperty('_isVue');

            VueAfterInit.instance.hooks.forEach(hook => {

                hook(vm);

            })

        }

        return VueAfterInit.instance;

    }

    registerHook (hook) {

        this.hooks.push(hook);

    }

}

const onAfterInit = (vm) => { return new VueAfterInit(vm) };
const requirePlugin = require.context('.', true, /(index\.js)/);

Vue.mixin({

   beforeMount() {

       onAfterInit(this);

   }

});

requirePlugin.keys().forEach(source => {

    const context = source.match(/\/(\w+)\//);

    if(context != null) {

        const name = context[context.index];
        const plugin = requirePlugin(source);

        if(plugins.hasOwnProperty(name)) {

            const config = plugins[name] || {};
            const enabled = config.enabled == null ? true : config.enabled;

            if(enabled) {

                if(plugin.hook) {

                    onAfterInit().registerHook(plugin.hook)

                }

                Vue.use(plugin.default || plugin, config);

            }
            
        }

    }

});
