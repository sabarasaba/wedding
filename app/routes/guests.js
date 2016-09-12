import Ember from 'ember';

export default Ember.Route.extend({
  title: 'Guest list - Ignacio & Vaiva',

  model: function() {
    return this.store.findAll('guest', {
      orderBy: 'name'
    }).then((arrModel) => {
      return arrModel.toArray().reverse();
    });
  }

});
