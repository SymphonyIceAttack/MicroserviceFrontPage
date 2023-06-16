/**
 * 自定义一个简易的 获取“数据”的钩子
 */
import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'
import { getAllUsrList } from '../Api'
import type { FilterFormType } from '../FilterForm'
import { ReadHpScheduleManagementFormDataType } from '../types'
export function useCustomFetch(FilterParams: FilterFormType) {
    // 传入一个真正获取数据的函数
    const [data, setData] = useState<
        ReadHpScheduleManagementFormDataType[] | null
    >(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        // 处理数据
        getAllUsrList(FilterParams)
            .then((res) => {
                console.log('fetch', res)

                setData(res.rows)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    // 这里会在获取到数据之后才会置为 false，也就是才会返回数据
    if (loading) {
        throw Promise.resolve(null) // 这里抛出一个 Promise
    } else {
        return data
    }
}
