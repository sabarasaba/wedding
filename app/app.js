import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

console.log('%c You sneaky bastard!', 'background: green; color: white; display: block; font-size: 20px');
console.log('In case you\'re curious, its written with Ember+Firebase. You can have a look at the sources here https://github.com/sabarasaba/wedding');

loadInitializers(App, config.modulePrefix);

export default App;
