import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('landing', {path: '/'});
  this.route('thank-you', {path: '/thanks'});
  this.route('error');
});

export default Router;
