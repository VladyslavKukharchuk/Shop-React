export let ShopAPI = `https://62ff55cb9350a1e548dc4623.mockapi.io`;

export const Api = async (url: string, method = `GET`, obj?: object) => {
    try {
        interface optionType {
            method: string,
            [key: string]: any
        }

        let options: optionType = {
            method: method,
            headers: {
                "Content-type": "application/json"
            }
        }

        if (obj) options.body = JSON.stringify(obj);

        let request = await fetch(url, options),
            response = await request.json();

        return response;
    } catch (err) {
        console.log(`In catch: ${err}`);
    }
}