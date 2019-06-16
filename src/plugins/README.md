# Plug and Play Application Plugins

Plugins are a convinent way to extend the Vue base class with custom mixins, directives and prototype methods.

The plugins are automatically loaded and mounted without having to manually register them, you can disable plugins with a config later explined.

In addition to standard extending there is an optional hook export that allows you to tap into a Vue `vm` instance after it has been created giving you full `$root` access and global event exposure so you can register listeners within your plugin and fire logic inside your plugin as well as fire your own Vue events.

This package also comes with application level life cycle events so that your plugin can perform logic on `app:` based events such as when initalization has compleated or user has authenticated.

Plugins can `emit` their own events and other plugins listen for them.

# Creating a Plugin

// TODO

### Plugin Configuration Data

// TODO

### Disabling a plugin

// TODO

## Plugin Hooks

// TODO

### Hook LifeCycle events

// TODO

##### hook:beforeMount

##### hook:mounted

##### hook:beforeUpdate

##### hook:updated

##### app:initializing

##### app:initialized

##### app:authenticating

##### app:authenticated
