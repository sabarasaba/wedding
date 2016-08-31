import Ember from 'ember';

export default Ember.Component.extend({
  food: ['meat', 'chicken', 'veggie'],
  chosedFood: null,

  actions: {
    onFocusOut(value) {
      const id = this.get('guest').id;

      this.sendAction('onChange', {
        attr: 'name',
        value,
        id
      });
    },

    onFoodChanged(value) {
      const id = this.get('guest').id;
      this.set('chosenFood', value);

      this.sendAction('onChange', {
        attr: 'food',
        value,
        id
      });
    },

    remove() {
      this.remove();
    }
  }
});
