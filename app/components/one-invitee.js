import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),

  chosenStarter: null,
  chosenMain: null,

  starters: Ember.computed('i18n.locale', function() {
    return [
      this.get('i18n').t('food.starter1'),
      this.get('i18n').t('food.starter2'),
      this.get('i18n').t('food.starter3')
    ];
  }),

  mains: Ember.computed('i18n.locale', function() {
    return [
      this.get('i18n').t('food.main1'),
      this.get('i18n').t('food.main2'),
      this.get('i18n').t('food.main3')
    ];
  }),

  actions: {
    onStarterChanged(value) {
      this.set('chosenStarter', value);

      this.sendAction('onInviteeChange', {
        attr: 'foodStarter',
        value
      });
    },

    onMainChanged(value) {
      this.set('chosenMain', value);

      this.sendAction('onInviteeChange', {
        attr: 'foodMain',
        value
      });
    }
  }
});
