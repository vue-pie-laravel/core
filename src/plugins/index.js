import Vue from 'vue'
import { plugins } from '~/config'

const requirePlugin = require.context('.', true, /(index\.js)/);

requirePlugin.keys().forEach(source => {

    const context = source.match(/\/(\w+)\//);

    if(!!context) {

        const name = context[context.index];
        const plugin = requirePlugin(source);

        if(plugins.hasOwnProperty(name)) {

            const config = plugins[name] || {};
            const enabled = config.enabled == null ? true : config.enabled;

            if(enabled) {

                Vue.use(plugin.default || plugin, config);

            }
            
        }

    }

});
