import { Api } from '@/hook/Axios'
import queryHook from '@/hook/queryHook'
import React, { useEffect, useState } from 'react'

type TableDatatype = {
    name: string
    stockQuantity: number
    specification: string
    price:number
}

export default () => {
    const [TableData, setTableData] = useState<TableDatatype[]>([])
    useEffect(() => {
        Api.get('/hms1/dv1/Medication')
            .then(queryHook<{ rows: TableDatatype[] }>)
            .then((res) => {
                setTableData(res.rows)
            })
    }, [])

    return [TableData]
}
