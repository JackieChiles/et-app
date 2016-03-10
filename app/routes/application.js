export default Ember.Route.extend({
    intl: Ember.inject.service(),
    beforeModel() {
        //return this.get('intl').setLocale('en-us');
        //return this.get('intl').setLocale('en-gb');
        return this.get('intl').setLocale('es');
    }
});
