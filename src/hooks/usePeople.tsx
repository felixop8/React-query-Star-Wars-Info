import { usePaginatedQuery } from 'react-query'
import axios from 'axios'


const fetchPeople = async (key:any, page:any) => {
    const res = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
    return res.data;
}

export default function usePeople(page: any) {
    return usePaginatedQuery(['people', page], fetchPeople, {
        staleTime: 0
    })
}
