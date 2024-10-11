import { Type_api_register, Type_register } from "./types";

export const formatRegisterData = (data: Type_register) : Type_api_register => {
    return {
        username: data.username,
        email: data.email,
        password: data.password
    }
}