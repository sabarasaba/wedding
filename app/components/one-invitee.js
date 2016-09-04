import Ember from 'ember';

export default Ember.Component.extend({
  starters: ['empanadita', 'chochito', 'chorizito'],
  chosenStarter: null,

  mains: ['meat', 'chicken', 'veggie'],
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
