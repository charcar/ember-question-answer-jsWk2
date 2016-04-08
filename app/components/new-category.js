import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,
  actions: {
    categoryFormShow() {
      this.set('addNewCategory', true);
    },

    saveCategory1() {
      var params = {
        name: this.get('name'),
      };
      this.sendAction('saveCategory2', params);
      this.set('addNewCategory', false);
      this.set('name', '');
    }
  }
});
