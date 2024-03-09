import { CONFIG } from "../constans/config";

const request = ({url, headers}) => {
    return fetch(url, {
        headers: headers
    }).then(chechResponse)
}

const chechResponse = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const getMovies = () => request(CONFIG.moviesApiConfig)


