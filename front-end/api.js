const URL = "http://localhost:8001/pokemon";

export const getDatabaseContent = async () => {
    const method = "get";
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    return fetch(URL, { method, headers })
        .then(async (response) => {
            return await response.json();
        })
        .catch((error) => {
            console.error(error);
        });
};

export const postContentToDatabase = async () => {
    const method = "post";
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const body = JSON.stringify({
        name: "Random Pokemon",
        type: "Random Type"
    });

    return fetch(URL, { method, headers, body })
        .then(async (response) => {
            return await response.json();
        })
        .catch((error) => {
            console.error(error);
        });
};

export const removeToDatabase = async (id) => {
    if (!id) return;

    const method = "delete";
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    return fetch(URL + "/" + id, { method, headers })
        .then(async (response) => {
            return await response.json();
        })
        .catch((error) => {
            console.error(error);
        });
};


