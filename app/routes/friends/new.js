import Ember from 'ember';

export default Ember.Route.extend({

  // actions: {
  //   save() {
  //     console.log('+-- save action bubbled up to friends new route');
  // 
  //     return true;
  //   },
  //   cancel() {
  //     console.log('+-- cancel action bubbled up to friends new route');
  // 
  //     return true;
  //   }
  // }

  model() {
    return this.store.createRecord('friend');
  }

});
