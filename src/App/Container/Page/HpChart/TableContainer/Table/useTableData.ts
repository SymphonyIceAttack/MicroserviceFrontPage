import { Api } from '@/hook/Axios'
import queryHook from '@/hook/queryHook'
import React, { useEffect, useState } from 'react'
import type { tableDataType } from '.'
export default () => {
    const [tableData, setTableData] = useState<tableDataType[]>([])
    useEffect(() => {
        Api.get('/hms1/dv2/MedicalNum')
            .then(queryHook<{ rows: tableDataType[] }>)
            .then((res) => {
                setTableData(res.rows)
            })
    }, [])

    return [tableData]
}
