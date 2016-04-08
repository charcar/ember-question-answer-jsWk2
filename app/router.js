import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('question' , {path: 'question/:question_id'});
  this.route('categories');
  this.route('about');
  this.route('lifestyle');
  this.route('labor');
  this.route('infant');
});

export default Router;
