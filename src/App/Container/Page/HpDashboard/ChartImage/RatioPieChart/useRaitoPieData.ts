import { Api } from '@/hook/Axios'
import queryHook from '@/hook/queryHook'
import React, { useEffect, useState } from 'react'

type PieDatatype = {
    gender: string
    totalCount: number
}

export default () => {
    const [RatioPieData, setRatioPieData] = useState<PieDatatype[]>([])
    useEffect(() => {
        Api.get('/hms1/dv1/PercentageGender')
            .then(queryHook<{ rows: PieDatatype[] }>)
            .then((res) => {
                setRatioPieData(res.rows)
            })
    }, [])

    return [RatioPieData]
}
