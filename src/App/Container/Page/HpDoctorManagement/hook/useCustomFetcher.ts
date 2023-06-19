/**
 * 自定义一个简易的 获取“数据”的钩子
 */
import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'
import { getAllUsrList } from '../Api'
import type { FilterFormType } from '../FilterForm'
import { ReadHpDoctorManagementFormDataType } from '../types'
export function useCustomFetch(
    FilterParams: FilterFormType
): [typeof loading, typeof data, typeof setLoading] {
    // 传入一个真正获取数据的函数
    const [data, setData] = useState<
        ReadHpDoctorManagementFormDataType[] | null
    >(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log(loading)

        loading &&
            getAllUsrList(FilterParams).then((res) => {
                console.log('fetch', res)

                setData(res.rows)
                setLoading(false)
            })
    }, [loading])

    return [loading, data, setLoading]
}
