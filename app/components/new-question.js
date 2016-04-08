import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        inquiry:this.get('inquiry') ? this.get('inquiry') : "",
        author:this.get('author') ? this.get('author') : "",
        notes:this.get('notes') ? this.get('notes') : "",
        category:this.get('category')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
