import { useState } from "react"
import Cookies from "universal-cookie"

export default () : [string | null, (token: string | null) => void] => {
    const cookies = new Cookies();
    const [token, setCookie] = useState<string | null>(cookies.get("rzd_auth_token"));
    const setToken = (token: string | null) => {
        cookies.set("rzd_auth_token", token);
        setCookie(token);

    }
    return [token, setToken];
}