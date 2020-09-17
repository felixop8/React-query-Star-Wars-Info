import React, {useState} from 'react'
import usePeople from '../hooks/usePeople'
import Person from './Person'
import Pagination from './Pagination'

export default function People() {
    const [page, setPage] = useState(1);

    const {
        resolvedData,
        latestData,
        isLoading,
        isError,
        isSuccess,
        isFetching
      } = usePeople(page)


    return (
        <div>
            <h2>People</h2>
            {isLoading ? <p>Loading...</p> : ''}
            {isError ? <p>Error fetching data.</p> : ''}
            {isSuccess ? (
                <div>
                    {resolvedData.results.map((person: any) => <Person key={person.name} person={person}/>)}
                    {resolvedData.count / resolvedData.results.length > 1 ? 
                        (
                            <Pagination 
                                latestData={latestData} 
                                page={page} 
                                setPage={setPage}
                                isFetching={isFetching}
                            />
                        ) : 
                        ''
                    }
                </div>
            ) : ''}
        </div>
    )
}
