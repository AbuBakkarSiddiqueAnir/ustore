

const fetchApi = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const res = await fetch(url, {
        method:'GET',
        headers: {
            "Content-Type": 'application/json'
        }
    })

    const data = await res.json();
    return {data}
}

const getAllProducts = async (): Promise<string> => {
    const products = await fetchApi()

    return JSON.stringify(products.data)
}

export default  getAllProducts