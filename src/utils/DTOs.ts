export type CreateUserDTO = {
    username: string;
    email: string;
    password: string;
    confirm_password: string;
    github_id: string;
    github_avatar: string;
    facebook_id: string;
    facebook_avatar: string;
    google_id: string;
    google_avatar: string;
};

export type UpdateUserDTO = {
    id: string;
    username: string;
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

export type CreateBookDTO = {
    id: string;
    title: string;
    year_release: number;
    price: number;
    image: string;
    genres: string;
    pages: string;
    author: string;
    amazon_link: string;
    resume: string;
    updated_at: string;
};

export interface CreateBlogDTO {
    title: string;
    image: string;
    category: string;
    resume: string;
    body: string;
}

export interface UpdateBlogDTO {
    id: string;
    title: string;
    image: string;
    category: string;
    resume: string;
    body: string;
}

export type CreateGameDTO = {
    id: string;
    title: string;
    price: number;
    year_release: number;
    platforms: string;
    genres: string;
    developer: string;
    image: string;
    igdb_link: string;
    igdb_rating: number;
    amazon_link: string;
    resume: string;
};

export type CreateMovieDTO = {
    id: string;
    title: string;
    year_release: number;
    image: string;
    tmdb_link: string;
    tmdb_rating: string;
    justwatch_link: string;
    resume: string;
    duration: string;
    genres: string;
};

export type CreateTVShowDTO = {
    id: string;
    title: string;
    year_release: number;
    image: string;
    tmdb_link: string;
    tmdb_rating: string;
    justwatch_link: string;
    resume: string;
    duration: string;
    genres: string;
};

export type SendContactDTO = {
    name: string;
    email: string;
    subject: string;
    message: string;
};
