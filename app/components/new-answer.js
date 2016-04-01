import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    answerSave1() {
      var params = {
        user:this.get('user') ? this.get('user') : "",
        response:this.get('response') ? this.get('response') : ""
        question:this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('answerSave2', params);
    }
  }
});
