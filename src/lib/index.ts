import { goto } from '$app/navigation';

export interface ValidationError {
    validationMessage: string
}

export function redirectTo(route: string) {
    goto(route);
}