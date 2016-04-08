import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },

    update(question) {
      var params = {
        inquiry:this.get('inquiry'),
        author:this.get('author'),
        notes:this.get('notes'),
        category:this.get('category')
      };
      this.set('editQuestionForm', false);
      this.sendAction('edit', question, params);
    }
  }
});
