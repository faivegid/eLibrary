import { AUTH_COOKIE } from '$lib/const';
import type { LoginData } from '$lib/interfaces';
import type { PageServerLoad } from './$types';
import type { Actions, Cookies, ServerLoadEvent } from '@sveltejs/kit';

export const load: PageServerLoad = (event: ServerLoadEvent) => {
    var loginData: LoginData = {
        isLogin: false
    }

    var auth = event.cookies.get(AUTH_COOKIE);
    if (auth) {
        console.log(auth);
        loginData.isLogin = true;
    }

    return loginData;
};

export const actions: Actions = {
    login: async ({ cookies: Cookies, request: Request }) => {
        const data = await Request.formData();
        console.log(data);
    },
};