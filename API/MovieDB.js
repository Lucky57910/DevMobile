const API_KEY = '34c5cbcc323b008f94ed75be71941791';

export async function tendance(page = 1 ) {
    try {
        const myHeaders = new Headers();
        const url = "https://api.themoviedb.org/3/movie/popular?page=" + page + "&language=fr&api_key=34c5cbcc323b008f94ed75be71941791";
        const response = await fetch(url, { headers: myHeaders });
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(`Error with function tendance ${error.message}`);
        throw error;
    }
};

export async function rechercheFilmDB(page = 1, query = "" ) {
    try {
        const myHeaders = new Headers();
        const url = "https://api.themoviedb.org/3/search/movie?page=" + page + "&query=" + query + "&language=fr&api_key=34c5cbcc323b008f94ed75be71941791";
        const response = await fetch(url, { headers: myHeaders });
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(`Error with function tendance ${error.message}`);
        throw error;
    }
};

export async function filmSearch(id=0) {
    try {
        const myHeaders = new Headers();
        const url = 'https://api.themoviedb.org/3/movie/' + id + '?language=fr&api_key=34c5cbcc323b008f94ed75be71941791';
        const response = await fetch(url, { headers: myHeaders });
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(`Error with function tendance ${error.message}`);
        throw error;
    }
};

export async function credit(id=0) {
    try {
        const myHeaders = new Headers();
        const url = 'https://api.themoviedb.org/3/movie/' + id + '/credits?language=fr&api_key=34c5cbcc323b008f94ed75be71941791';
        const response = await fetch(url, { headers: myHeaders });
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(`Error with function tendance ${error.message}`);
        throw error;
    }
};