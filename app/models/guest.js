import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  foodStarter: DS.attr('string'),
  foodMain: DS.attr('string'),
  trakai: DS.attr('boolean'),
  notes: DS.attr('string'),
  invited_by: DS.attr('string'),
  createdAt: DS.attr('number')
});
