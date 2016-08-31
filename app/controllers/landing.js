import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sendRSVP() {
      const guest = this.store.createRecord('guest', {
        name: 'Ignacio Rivas',
        email: 'ignacio@rivas.com',
        food: 'carne, puto',
        createdAt: Date.now()
      });

      guest.save().then(() => {
        console.log('saved!');
      }).catch(() => {
        console.log('something went wrong..');
      });
    }
  }
});
