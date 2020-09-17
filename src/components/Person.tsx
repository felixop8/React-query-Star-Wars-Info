import React from 'react'

export default function Person({person}: any) {
    return (
        <div className="card">
            <h3>{person.name}</h3>
            <p>Gender - {person.gender}</p>
            <p>Birth year - {person.birth_year}</p>
        </div>
    )
}
