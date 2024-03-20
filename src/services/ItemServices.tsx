import http from '../http-common';
import {Item} from '../types/Item';



const getAll = async() => {

    return http.get<Array<Item>>("/items");

}


const get = async(id: string) => {
    return http.get<Item>(`/items/${id}`);
}


const ItemService = {

    getAll,
    get
}

export default ItemService;
