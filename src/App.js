import React, { useState } from 'react'
import Form from './Form'
import Table from './Table'
const App = () => {

    const [characters, setCharacters] = useState(
        []
    )

    const removeCharacter = (index) => {
        setCharacters(characters.filter((character, i) => {
            return i !== index
        }))
    }

    const handleSubmit = (character) => {
        setCharacters([...characters, character])
    }
    return (

        <div className='container'>
            <h1>React Practice</h1>
            {/* pass characters data with property name (charactersData)through to the child component */}
            <Table charactersData={characters} removeCharacter={removeCharacter} />

            <Form handleSubmit={handleSubmit} />
        </div>
    )
}

export default App