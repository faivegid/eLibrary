import type { ValidationError } from "./index";

export function validatePassword(password: string): ValidationError {
    let error: ValidationError = { validationMessage: "" };

    if (!password) {
        error.validationMessage = "Password is required";
    } else if (password.length < 8) {
        error.validationMessage = "Password must be at least 8 characters long";
    } else if (!/[A-Z]/.test(password)) {
        error.validationMessage = "Password must contain at least one uppercase letter";
    } else if (!/\d/.test(password)) {
        error.validationMessage = "Password must contain at least one number";
    } else {
        error.validationMessage = "";
    }

    return error;
}

export function validateComfirmPassword(password: string, comfirmPassword: string): ValidationError {
    let error: ValidationError = { validationMessage: "" };

    if (!password) {
        error.validationMessage = "comfirm password is required";
    } else if (password !== comfirmPassword) {
        error.validationMessage = "password does not match";
    }

    return error;
}

export function validateEmail(email: string): ValidationError {
    let error: ValidationError = { validationMessage: "" };

    if (!email) {
        error.validationMessage = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.validationMessage = "Invalid email format";
    } else {
        error.validationMessage = "";
    }

    return error;
}