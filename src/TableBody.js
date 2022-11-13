import React from 'react'

const TableBody = ({ charactersData, removeCharacter }) => {
    const rows = charactersData.map((row, index) => {
        return (<tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>
                <button onClick={() => removeCharacter(index)} >Delete</button>
            </td>
        </tr>)
    })
    return (

        <tbody>{rows}</tbody>
    )
}

export default TableBody