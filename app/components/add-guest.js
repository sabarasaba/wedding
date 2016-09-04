import Ember from 'ember';

export default Ember.Component.extend({
  starters: ['empanadita', 'chochito', 'chorizito'],
  chosedStarter: null,
  mains: ['meat', 'chicken', 'veggie'],
  chosedMain: null,

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
