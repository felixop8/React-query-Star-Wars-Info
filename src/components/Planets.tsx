import React, {useState} from 'react'
import { useQueryCache } from 'react-query'
import usePlanets, {fetchPlanets} from '../hooks/usePlanets'
import Planet from './Planet'
import Pagination from './Pagination'

export default function Planets() {
    const cache = useQueryCache()
    const [page, setPage] = useState(1);

    const {
    resolvedData,
    latestData,
    isLoading,
    isError,
    isSuccess,
    isFetching
    } = usePlanets(page);


    // Pre-fetch the next page!
    React.useEffect(() => {
        if (latestData?.next) {
            cache.prefetchQuery(['planets', page + 1], fetchPlanets)
        }
    }, [latestData, page, cache])



    return (
        <div>
            <h2>Planets</h2>
            {isLoading ? <p>Loading...</p> : ''}
            {isError ? <p>Error fetching data.</p> : ''}
            {isSuccess ? (
                <div>
                    {
                    resolvedData.results.map((planet: any) => 
                        <Planet key={planet.name}  planet={planet}/>)
                    }
                    <Pagination 
                        latestData={latestData} 
                        page={page}
                        setPage={setPage}
                        isFetching={isFetching}
                    />
                </div>
                
            ) : ''}

            
        </div>
    )
}
