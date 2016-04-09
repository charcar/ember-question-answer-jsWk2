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
// Did not end up implementing the update category feature. I had a lot of trouble
// figuring out how to return the correct model that took in the right question
// but also included all of the categories.
