export enum HttpMethodTypes {
    POST = 'POST',
    GET = 'GET'
}

export const useFetch = async (url: URL, httpMethodType: HttpMethodTypes, body?: object) => {
    try {
        const response = await fetch(url, {
            mode: 'cors',
            method: httpMethodType,
            headers: {
                'content-type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) throw new Error("Ha ocurrido un error al obtener los datos.");

        const responseJson = await response.json();
        return responseJson;
    }
    catch (err: Error | any) {
        throw err.message;
    }
}