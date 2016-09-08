import Ember from 'ember';

export function isEqual(params) {
  return params.leftSidet === params.rightSide;
}

export default Ember.Helper.helper(isEqual);
