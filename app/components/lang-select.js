import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),

  locale: Ember.computed('i18n.locale', function() {
    return this.get('i18n.locale');
  }),

  actions: {
    setLocale(locale) {
      this.set('i18n.locale', locale);
    }
  }
});

