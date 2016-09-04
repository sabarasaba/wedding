import Ember from 'ember';
import _ from 'lodash/lodash';

function validateGuests(guests) {
  if (guests.length === 0) {
    return true;
  } else {
    return guests.reduce((prev, current) => prev && validateInvitee(current), true);
  }
}

function validateInvitee(invitee) {
  const data = _.omit(invitee, ['trakai', 'notes', 'id']);

  return Object.keys(data).reduce((prev, current) => prev && data[current] !== '', true);
}

export function validateRSVP(invitee, guests) {
  return validateInvitee(invitee) && validateGuests(guests);
}

export default Ember.Helper.helper(validateRSVP);
