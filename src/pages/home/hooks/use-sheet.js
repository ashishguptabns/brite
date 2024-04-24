import { useEffect, useState } from 'react'
import { fetchSheet } from '../../../lib/data-service'

export const useSheet = (id) => {

    const [rows, setRows] = useState([])
    const [cols, setCols] = useState([])

    useEffect(() => {
        fetchSheet(id).then(data => {
            setRows([...data[0]])
            setCols([...data[1]])
        })
    }, [])


    return { rows, cols }
}