import Ember from 'ember';

export default Ember.Component.extend({
  food: ['meat', 'chicken', 'veggie'],
  chosedFood: null,

  actions: {

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
      const id = this.get('guest').id;
      this.sendAction('removeGuest', id);

      this.remove();
    }
  }
});
