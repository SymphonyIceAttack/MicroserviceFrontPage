import { Api } from '@/hook/Axios'
import queryHook from '@/hook/queryHook'
import React, { useEffect, useState } from 'react'
import type {MixLineDataType} from '.'
export default () => {
    const [MixLineData, setMixLineData] = useState<MixLineDataType[]>([])
    useEffect(() => {
        Api.get('/hms1/dv2/MailFemailMedical')
            .then(queryHook<{ rows: MixLineDataType[] }>)
            .then((res) => {
                setMixLineData(res.rows)
            })
    }, [])

    return [MixLineData]
}
