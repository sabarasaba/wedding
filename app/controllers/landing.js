import Ember from 'ember';

export default Ember.Controller.extend({
  guests: [],

  invitee: {
    name: '',
    email: '',
    food: ''
  },

  actions: {
    addGuest() {
      const count = this.get('guests').length;

      this.get('guests').pushObject({
        name: '',
        food: '',
        id: count
      });
    },

    onInviteeChange(what) {
      const invitee = this.get('invitee');

      this.set('invitee', Object.assign({}, invitee, {
        food: what.value
      }));
    },

    removeGuest(id) {
      const guests = this.get('guests');
      guests.splice(id, 1);

      this.set('guests', guests);
    },

    onChange(what) {
      const guests = this.get('guests');

      if (what.attr === 'food') {
        guests[what.id].food = what.value;
        this.set('guests', guests);
      }
    },

    sendRSVP() {
      console.log('INVITEE==>');
      console.log(this.get('invitee'));
      console.log('GUESTS==>');
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
