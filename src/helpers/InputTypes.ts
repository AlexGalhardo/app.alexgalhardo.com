export type inputCreateUser = {
    username: string;
    email: string;
    password: string;
    confirm_password: string;
    github_id: string;
    facebook_id: string;
    google_id: string;
};

export type inputUpdateUser = {
    id: string;
    email: string;
    older_password: string;
    new_password: string;
    document: string;
    phone: string;
    birth_date: string;
    address_zipcode: string;
    address_street: string;
    address_street_number: string;
    address_neighborhood: string;
    address_city: string;
    address_state: string;
    address_country: string;
};

export type inputContactObject = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export type inputShopTransactionObject = {
    transaction_id: string;
    total_amount: number;
    card_id: string;
    card_brand: string;
    card_exp_month: number;
    card_exp_year: number;
    card_last4: number;
    currency: string;
    paid: boolean;
    products_amount: number;
    products: string;
    stripe_customer_id: string;
    user_id: string;
    user_email: string;
    user_phone: string;
    user_name: string;
    shipping_address_zipcode: string;
    shipping_address_street: string;
    shipping_address_street_number: number;
    shipping_address_neighborhood: string;
    shipping_address_city: string;
    shipping_address_state: string;
    shipping_address_country: string;
    shipping_carrier: string;
    shipping_fee: number;
};

export type inputSubscriptionTransactionObject = {
    transaction_id: string;
    status: string;
    card_id: string;
    card_brand: string;
    card_exp_month: number;
    card_exp_year: number;
    card_last4: number;
    plan_id: string;
    plan_name: string;
    plan_amount: number;
    current_period_start: string;
    current_period_end: string;
    cancel_at_period_end: boolean;
    stripe_customer_id: string;
    user_id: string;
    user_email: string;
    user_name: string;
};
