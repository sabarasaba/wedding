import Ember from 'ember';
import Cookies from 'ember-cli-js-cookie';

export default Ember.Route.extend({
  i18n: Ember.inject.service(),

  afterModel: function() {
    this.set('i18n.locale', Cookies.get('locale') || 'en');
  }
});
