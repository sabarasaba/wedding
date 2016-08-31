import Ember from 'ember';
import AddGuest from '../components/add-guest';

export default Ember.Controller.extend({
  guests: [],

  actions: {
    addGuest() {
      this.get('guests').pushObject(1);
    },

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
