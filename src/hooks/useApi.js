import { useEffect, useState } from "react"

export const useApi = (url) => {
  

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null
    })
  
    const getData = async () => {
        if (!url) return
        try {
            const response = await fetch(url)
            const data = await response.json()
            setState({
                data: data,
                isLoading: false,
                errors: null
            })
        } catch (error) {
            console.log(error);
            setState({
                data: null,
                isLoading: false,
                errors: error
            })
        }
        
    }

    useEffect( () => {
        getData()
    }, [url])
  

    return {
    ...state
  }
}
