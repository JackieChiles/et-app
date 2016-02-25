import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('et', function () {
        this.mount('et-engine');
    });
});

export default Router;
