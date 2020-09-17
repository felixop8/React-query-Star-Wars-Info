import React from 'react'

export default function Pagination({latestData, page, setPage, isFetching}: any) {
    return (
        <>
          <div className="pagination">
                <button
                    onClick={() => setPage((old:any) => Math.max(old - 1, 0))}
                    disabled={page === 1}
                >Previous</button>

                <span>{`Page: ${page}`}</span>

                <button
                    onClick={() =>
                    setPage((old: any) => (!latestData || !latestData.next ? old : old + 1))
                    }
                    disabled={!latestData || !latestData.next}
                >Next</button>

                {' '}
                <span>{isFetching && 'Background updating...'}</span>
            </div>  
        </>
    )
}
