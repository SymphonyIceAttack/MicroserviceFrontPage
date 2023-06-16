import { Api } from '@/hook/Axios'
import queryHook from '@/hook/queryHook'
import React, { useEffect, useState } from 'react'

type NurseDatatype = {
    specialty: string
    nurseCount: number
}

export default () => {
    const [NurseData, setNurseData] = useState<NurseDatatype[]>([])
    useEffect(() => {
        Api.get('/hms1/dv1/NurseSpecialty')
            .then(queryHook<{ rows: NurseDatatype[] }>)
            .then((res) => {
                setNurseData(res.rows)
            })
    }, [])

    return [NurseData]
}
