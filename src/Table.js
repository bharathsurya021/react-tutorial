import React from 'react'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
const Table = ({ charactersData }) => {
    return (
        <table>
            <TableHeader />
            <TableBody charactersData={charactersData} />
        </table>
    )
}

export default Table