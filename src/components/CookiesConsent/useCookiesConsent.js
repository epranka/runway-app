import { useState } from "react";

const getPersistentCookiesConsent = () => {
    return window.localStorage.getItem('cookiesConsent') === 'true';
}

const setPersistentCookiesConsent = () => {
    window.localStorage.setItem('cookiesConsent', true);
}

const useCookiesConsent = () => {
    const [cookiesConsent, setCookiesConsent] = useState(getPersistentCookiesConsent());

    const handleSetCookiesConsent = () => {
        setPersistentCookiesConsent();
        setCookiesConsent(true);
    }

    return [cookiesConsent, handleSetCookiesConsent];
}

export default useCookiesConsent;