import http from '../http-common';
import {Item} from '../types/Item';
import { fetchAuthSession } from 'aws-amplify/auth';


const getAll = async() => {
    try {
        const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
        return http.get<Array<Item>>("/items", {
            headers:{
                Authorization:idToken?.toString()
            }
        });
      } catch (err) {
        console.log(err);
      }

    

}


const get = async(id: string) => {
    try {
        const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
        return http.get<Item>(`/items/${id}`);
        return http.get<Array<Item>>("/items", {
            headers:{
                Authorization:idToken?.toString()
            }
        });
      } catch (err) {
        console.log(err);
      }
}

const remove = async(id:string) => {

    return http.delete(`/items/${id}`)
}

const put = async(data: Item) => {
    return http.put (`/items`, data);
}

const ItemService = {

    getAll,
    get,
    remove,
    put
}

export default ItemService;
