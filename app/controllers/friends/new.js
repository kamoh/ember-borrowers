import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.email',
    'model.first_name',
    'model.last_name',
    'model.twitter',
    {
      get() {
        return !Ember.isEmpty(this.get('model.email')) &&
          !Ember.isEmpty(this.get('model.firstName')) &&
          !Ember.isEmpty(this.get('model.lastName')) &&
          !Ember.isEmpty(this.get('model.twitter'));
      }
    }
  ),
  actions: {
    save() {
      // console.log('+- save action in friends new controller');
      if (this.get('isValid')){
        this.get('model').save().then((friend) => {
          this.transitionToRoute('friends.show', friend);
        });
      } else {
        this.set('errorMessage', 'You have to fill out all the fields');
      }
      
      return false;
    },
    cancel() {
      // console.log('+- cancel action in friends new controller');
      this.transitionToRoute('friends');
      
      return false;
    }
  }
});
