import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  actions: {
    removeFromFavorites(index) {
      this.get('favorites').remove(index);
    }
  }
});
