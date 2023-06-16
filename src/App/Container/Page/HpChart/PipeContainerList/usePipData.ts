import { useEffect, useState } from 'react'
import React from 'react'
import { Api } from '@/hook/Axios'
import queryHook from '@/hook/queryHook'

type MaxSpecialtyNumtype = { percentage: number }
type MaxWardype = { occupancyRate: number }
type MaxPaidype = { percentage: number }
type MaxPendingype = { percentage: number }

export default (): [
    typeof MaxSpeciaty,
    typeof MaxWard,
    typeof MaxPaid,
    typeof MaxPending
] => {
    // 排班占比最多列表
    const [MaxSpeciaty, setMaxSpeciaty] = useState<MaxSpecialtyNumtype[]>([])
    //病房占有率列表
    const [MaxWard, setMaxWard] = useState<MaxWardype[]>([])

    //完成付款列表
    const [MaxPaid, setMaxPaid] = useState<MaxPaidype[]>([])

    //未完成付款列表
    const [MaxPending, setMaxPending] = useState<MaxPendingype[]>([])
    useEffect(() => {
        Api.get('/hms1/dv2/MaxSpecialtyNum')
            .then(queryHook<{ rows: [MaxSpecialtyNumtype] }>)
            .then((res) => {
                setMaxSpeciaty(res.rows)
            })
        Api.get('/hms1/dv2/Ward')
            .then(queryHook<{ rows: [MaxWardype] }>)
            .then((res) => {
                setMaxWard(res.rows)
            })
        Api.get('/hms1/dv2/Paid')
            .then(queryHook<{ rows: [MaxPaidype] }>)
            .then((res) => {
                setMaxPaid(res.rows)
            })
        Api.get('/hms1/dv2/Pending')
            .then(queryHook<{ rows: [MaxPendingype] }>)
            .then((res) => {
                setMaxPending(res.rows)
            })
    }, [])

    return [MaxSpeciaty, MaxWard, MaxPaid, MaxPending]
}
