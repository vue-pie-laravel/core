# Plug and Play Application Plugins

Plugins are a convinent way to extend the Vue base class with custom mixins, directives and prototype methods.

The plugins are automatically loaded and mounted without having to manually register them, you can disable plugins with a config later explined.

In addition to standard extending there is an optional hook export that allows you to tap into a Vue `vm` instance after it has been created giving you full `$root` access and global event exposure so you can register listeners within your plugin and fire logic inside your plugin as well as fire your own Vue events.

This package also comes with application level life cycle events so that your plugin can perform logic on `app:` based events such as when initalization has compleated or user has authenticated.

Plugins can `emit` their own events and other plugins listen for them.

# Creating a Plugin

// TODO Document

### Plugin Configuration Data

// TODO Document

### Disabling a plugin

// TODO Document

## Plugin Hooks

A plugin hook allows you to hook into the Vue instance, `vm` is a reference to the instance of Vue that triggred it.

You can use this to acces the `$root` data and logic as well as any references and other features available.

For example you can use a hook to establish an event listener from within the plugin and run plugin logic on **Life Cycle Events** from Vue, App Events and Custom Events, See **Hook LifeCycle events** below for a list of supported default events.

```javascript
export const hook = (vm) => {

    vm.$on('app:initialized', () => {

        vm.authCheck();

    });

};
```

The above example triggers the `authCheck` method registered by another plugin.

It is easy to share logic btween plugins, establish events and listners between them as well as the main Vue instance and it's components.

### Hook LifeCycle events

// TODO Document

##### hook:beforeMount

##### hook:mounted

##### hook:beforeUpdate

##### hook:updated

##### app:booted

##### app:initializing

##### app:initialized

##### app:authenticating

##### app:authenticated
