import React from 'react'

export default function NavBar({setPage, page}: any) {
    return (
        <div>
            <nav>
                <button 
                    onClick={() => setPage('planets')} 
                    className={page === 'planets' ? 'active' : ''}
                >Planets</button>
                <button 
                    onClick={() => setPage('people')}
                    className={page === 'people' ? 'active' : ''}
                >People</button>
            </nav>
        </div>
    )
}
