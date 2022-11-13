import React from 'react'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
const Table = ({ charactersData, removeCharacter }) => {
    return (
        <table>
            <TableHeader />
            <TableBody charactersData={charactersData} removeCharacter={removeCharacter} />
        </table>
    )
}

export default Table