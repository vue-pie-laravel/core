<template>

    <transition mode="out-in">
        <component :is="layout"/>
    </transition>

</template>

<script>

    export default {

        name: 'App',
        
        computed: {

            meta() {
                return this.$router.currentRoute.meta;
            },

            layout() {

                if(this.isOffline)
                    return 'layout-offline';

                if (this.isInitializing)
                    return 'layout-initializing';
                
                if(this.$root.isAuthenticating)
                    return 'layout-initializing';

                if (this.isMaintenanceMode)
                    return 'layout-maintenance';

                let layout = this.meta.layout || 'default';

                // Current route does not require auth, render current layout.
                if (this.meta.hasOwnProperty('noAuth') && this.meta.noAuth)
                    return `layout-${layout}`;

                // The route requires auth, if not authenticated then render auth layout. 
                if (this.isAuthenticated === false)
                    return 'layout-auth';

                // User is authenticated, render current layout.
                return `layout-${layout}`;

            }

        }

    }

</script>
