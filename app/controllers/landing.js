import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Controller.extend({
  guests: [],

  invitee: {
    name: '',
    email: '',
    food: '',
    notes: ''
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
      return;

      const invitee = this.get('invitee');
      const invitations = [];

      const createInvitation = data => this.store.createRecord('guest', data);

      invitations.push(createInvitation(invitee).save());

      const guests = this.get('guests').map((e) => {
        const el = Object.assign({}, e);
        el.invited_by = invitee.name;

        return createInvitation(_.omit(el, ['id'])).save();
      });

      Ember.RSVP.all(invitations.concat(guests))
        .then(() => {
          this.transitionToRoute('thank-you');
        })
        .catch(() => {
          this.transitionToRoute('error');
        });
    }
  }
});
