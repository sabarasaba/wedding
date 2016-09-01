import Ember from 'ember';

export default Ember.Component.extend({
  food: ['meat', 'chicken', 'veggie'],
  chosedFood: null,

  actions: {
    onFoodChanged(value) {
      this.set('chosenFood', value);

      this.sendAction('onInviteeChange', {
        attr: 'food',
        value
      });
    }
  }
});
