import { usePaginatedQuery } from 'react-query'
import axios from 'axios'


export const fetchPlanets = async (key: any, page: any) => {
    const res = await axios.get(`https://swapi.dev/api/planets/?page=${page}`);
    return res.data;
}

export default function usePlanets(page: any) {
    return usePaginatedQuery(['planets', page], fetchPlanets);
}



