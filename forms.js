import React from 'react'

export default function Forms() {
    const [formData, setFormData] = React.useState(
        {firstName:"", lastName:"", email:"", comment:"", isFriendly:true}
    )

    console.log(formData.comment)
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value

            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='First Name'
                onChange={handleChange}
                name = "firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder='Last Name'
                onChange={handleChange}
                name = "lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder='Email'
                onChange={handleChange}
                name = "email"
                value={formData.email}
            />
            <textarea
                value={formData.comment}
                onChange={handleChange}
                name = "comment"
            />
            <input
                type="checkbox"
                id='isFriendly'
                checked={formData.isFriendly}
                onChange = {handleChange}
                name = "isFriendly"
            />
            <label htmlFor='isFriendly'>Are you friendly</label>
            <button type='submit'>submit</button>

        </form>
    )
}