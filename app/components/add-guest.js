import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onFocusOut(e) {
      const id = this.get('guest').id;

      this.sendAction('onChange', {
        attr: 'name',
        value: e,
        id
      });
    },

    remove() {
      this.remove();
    }
  }
});
