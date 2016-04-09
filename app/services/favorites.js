import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  add(question) {
    this.get('questions').pushObject(question);
  },

  remove(index) {
    this.get('questions').removeAt(index);
  },

  favoriteCount: Ember.computed('questions.[]', function(){
    return this.get('questions.length');
  })
});
