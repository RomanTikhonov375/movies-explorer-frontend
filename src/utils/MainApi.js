import { CONFIG } from "../constans/config";


const getToken = () => {
    const token = localStorage.getItem('jwt');
    return token;
}

export class Api {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    //Method for handling an error in a request
    _checkResponse(res) {

        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    _request(url, options) {
        return fetch(`${this.baseUrl}` + `${url}`, options).then(this._checkResponse)

    }

    // Get movies 
    getMovies() {
        return this._request(`/movies`, {
            headers: {
                authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json'
            }
        })
    }


    // Route requests '/movies'
    // Create user movie
    setUserMovie({ country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
        owner }) {
        return this._request(`/movies`, {
            headers: {
                authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                country,
                director,
                duration,
                year,
                description,
                image,
                trailerLink,
                nameRU,
                nameEN,
                thumbnail,
                movieId,
                owner
            })
        })
    }

    // Delete user movie
    deleteMovie(movieId) {
        return this._request(`/movies/${movieId}/`, {
            headers: {
                authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        })
    }

    // Route requests 'user'

    //Get user information
    getUserInfo() {
        return this._request(`/users/me`, {
            headers: {
                authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json'
            }
        })
    }

    //Patch user information
    editingProfile({ name, email }) {
        return this._request(`/users/me`, {
            headers: {
                authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
    }

    // Register user request
    register({ name, password, email }) {
        return this._request(`/signup`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify({
                name: name,
                password: password,
                email: email
            })
        })
    }

    // Login user request
    login({ password, email }) {
        return this._request(`/signin`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify({
                password: password,
                email: email
            })
        })
    }

    // Check user jwt token requset
    checkToken(jwt) {
        return this._request(`/users/me`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`
            },
            method: 'GET'
        })
    }

}

export const mainApi = new Api(CONFIG.mainApiConfig);