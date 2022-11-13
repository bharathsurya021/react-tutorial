import React from 'react'
import Table from './Table'
const App = () => {
    const characters = [
        {
            name: 'Bharath',
            job: 'Developer',
        },
        {
            name: 'karthick',
            job: 'Analyst',
        },
        {
            name: 'Surya',
            job: 'UI/UX designer',
        },
        {
            name: 'Dennis',
            job: 'Bartender',
        },
    ]
    return (

        <div className='container'>
            {/* pass characters data with property name (charactersData)through to the child component */}
            <Table charactersData={characters} />
        </div>
    )
}

export default App