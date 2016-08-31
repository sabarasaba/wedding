import Ember from 'ember';

export default Ember.Controller.extend({
  guests: [],

  actions: {
    addGuest() {
      const count = this.get('guests').length;

      this.get('guests').pushObject({
        name: '',
        food: '',
        id: count
      });
    },

    onChange(what) {
      //when this changes populate in guests property
      console.log(what);
    },

    sendRSVP() {
      console.log(this.get('guests'));
      //const guest = this.store.createRecord('guest', {
        //name: 'Ignacio Rivas',
        //email: 'ignacio@rivas.com',
        //food: 'carne, puto',
        //createdAt: Date.now()
      //});

      //guest.save().then(() => {
        //console.log('saved!');
      //}).catch(() => {
        //console.log('something went wrong..');
      //});
    }
  }
});
