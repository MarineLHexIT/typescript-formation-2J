var first_version = function () {
    // First way to do things
    var subscription = '';
    // initialize subscription with user data
    switch (subscription) {
        case 'free':
            // do something
            break;
        case 'billing':
            // do something
            break;
        default:
            throw new Error('Invalid subscription value');
    }
};
var second_version = function () {
    // Second way to do things
    var SUBSCRIPTION_FREE = 'free';
    var SUBSCRIPTION_BILLING = 'billing';
    // other kinds of subscriptions in const
    var subscription = '';
    // initialize subscription with user data
    switch (subscription) {
        case SUBSCRIPTION_FREE:
            // do something
            break;
        case SUBSCRIPTION_BILLING:
            // do something
            break;
        default:
            throw new Error('Invalid subscription value');
    }
};
var enum_version = function () {
    var SUBSCRIPTION;
    (function (SUBSCRIPTION) {
        SUBSCRIPTION["FREE"] = "free";
        SUBSCRIPTION["BILLING"] = "billing";
    })(SUBSCRIPTION || (SUBSCRIPTION = {}));
    var getSubscription = function () {
        return SUBSCRIPTION.FREE;
    };
    var subscription = getSubscription();
    // initialize subscription with user data
    switch (subscription) {
        case SUBSCRIPTION.FREE:
            // do something
            break;
        case SUBSCRIPTION.BILLING:
            // do something
            break;
        default:
            throw new Error('Invalid subscription value');
    }
};
