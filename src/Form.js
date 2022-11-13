import React, { useState } from 'react'

const Form = ({ handleSubmit }) => {
    const [values, setValues] = useState({ name: '', job: '' })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const submitForm = () => {
        handleSubmit(values)
    }
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange} />
            <label htmlFor="job">Job</label>
            <input
                type="text"
                name="job"
                id="job"
                value={values.job}
                onChange={handleChange} />
            <input type="button" value="Submit" onClick={submitForm} />
        </form>
    )
}

export default Form