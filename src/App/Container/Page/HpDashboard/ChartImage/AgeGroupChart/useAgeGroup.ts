import { Api } from '@/hook/Axios'
import queryHook from '@/hook/queryHook'
import React, { useEffect, useState } from 'react'

type AgeGroupDatatype = {
    ageGroup: string
    recordCount: number
}

export default () => {
    const [AgeGroupData, setAgeGroupData] = useState<AgeGroupDatatype[]>([])
    useEffect(() => {
        Api.get('/hms1/dv1/AgeNum')
            .then(queryHook<{ rows: AgeGroupDatatype[] }>)
            .then((res) => {
                setAgeGroupData(res.rows)
            })
    }, [])

    return [AgeGroupData]
}
