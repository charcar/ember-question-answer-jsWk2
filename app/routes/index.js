import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer'),
      categories: this.store.findAll('category'),
    });
  },

  actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      var category = params.category;
      category.get('questions').addObject(newQuestion);
      newQuestion.save().then(function() {
        return category.save();
      });
      this.transitionTo('index');
    }
  }
});
