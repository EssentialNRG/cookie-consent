'use strict';

class Events {
    static get ON_INIT() {
        return 'init';
    };

    static get ON_CONSENT_FIRST_ACTION() {
        return 'consent:first-action';
    };

    static get ON_CONSENT_ACCEPTED() {
        return 'consent:accepted';
    };

    static get ON_CONSENT_CHANGED() {
        return 'consent:changed';
    };
}

module.exports = Events;
