import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  food: DS.attr('string'),
  notes: DS.attr('string'),
  invited_by: DS.attr('string'),
  createdAt: DS.attr('number')
});
