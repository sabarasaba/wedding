import Ember from 'ember';

export default Ember.Component.extend({
  starters: [
    'Smoked salmon roll with fluffy ricotta cheese filling and ginger apple sauce',
    'Roasted tomato and eggplant salad with goat cheese, pine nuts, basil and pesto sauce',
    'chorizito'
  ],
  chosenStarter: null,

  mains: [
    'Zander fillet with fresh asparagus, cherry tomatoes and parsnip risotto in saffron sauce',
    'Chicken fillet stuffed with sun-dried tomatoes, parmesan cheese and basil with small potatoes seasoned with thyme, celery and pumpkin puree, caramelized apricots',
    'Beef tenderloin with cherry sauce, fried eggplant, balsamic onions, fried tomatoes, apricots, basil, potato flake'
  ],
  chosenMain: null,

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
