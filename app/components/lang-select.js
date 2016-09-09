import Ember from 'ember';
import Cookies from 'ember-cli-js-cookie';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),

  locale: Ember.computed('i18n.locale', function() {
    return this.get('i18n.locale');
  }),

  actions: {
    setLocale(locale) {
      this.set('i18n.locale', locale);
      Cookies.set('locale', locale);
      $('body, html').animate({ scrollTop: 0 }, 800);
    }
  }
});
