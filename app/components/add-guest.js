import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),

  chosedStarter: null,
  chosedMain: null,

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
      const id = this.get('guest').id;
      this.set('chosenStarter', value);

      this.sendAction('onChange', {
        attr: 'foodStarter',
        value,
        id
      });
    },

    onMainChanged(value) {
      const id = this.get('guest').id;
      this.set('chosenMain', value);

      this.sendAction('onChange', {
        attr: 'foodMain',
        value,
        id
      });
    },

    remove() {
      const id = this.get('guest').id;
      this.sendAction('removeGuest', id);

      this.remove();
    }
  }
});
