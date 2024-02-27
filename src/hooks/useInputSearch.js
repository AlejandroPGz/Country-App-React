import { useState } from "react"

export const useForm = (initialForm) => {

    const [formState, setFormState ] = useState(initialForm)
    const onInputChange = (event) => {
        // const {name, value} = event.target
        const name = event.target.name
        const value = event.target.value
        setFormState({
            [name]: value
        })
    }

    return {
        ...formState,
        formState,
        onInputChange
    }

}
