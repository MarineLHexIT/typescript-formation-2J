const first_version = () => {

    // First way to do things
    let subscription: string = '';

    // initialize subscription with user data

    switch ( subscription ) {
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

const second_version = () => {

    // Second way to do things
    const SUBSCRIPTION_FREE = 'free';
    const SUBSCRIPTION_BILLING = 'billing';
    // other kinds of subscriptions in const

    let subscription: string = '';

    // initialize subscription with user data

    switch ( subscription ) {
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

const enum_version = () => {

    enum SUBSCRIPTION {
        FREE = 'free',
        BILLING = 'billing'
    }

    const getSubscription = (): SUBSCRIPTION => {
        return SUBSCRIPTION.FREE;
    };

    let subscription: SUBSCRIPTION = getSubscription();

    // initialize subscription with user data

    switch ( subscription ) {
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