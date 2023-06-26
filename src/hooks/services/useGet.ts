import { useState, useEffect } from 'react'
import axios from "../../axios/instance"

export const useGet = <T>(url: string = '/') => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const loadingData = async () => {

        try {
            const { data } = await axios.get<T>(url);

            setData(data);
        } catch (error) {
            console.error(error)
        }

        setLoading(false)
    }

    useEffect(() => {
        loadingData()
    }, [])

    return {
        data,
        loading,
        loadingData
    }
}