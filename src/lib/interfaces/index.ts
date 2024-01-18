export interface LoginDetail {
    email: string,
    password: string
}

export interface CreateAccountDetail {
    email: string,
    password: string,
    name: string,
    comfirmPassword: string
}

export interface BookDetail {
    bookTitle: string,
    author: string,
    avgRating: number,
    bookImg: string,
    id: string
}

export interface LoginData {
    isLogin: boolean
};