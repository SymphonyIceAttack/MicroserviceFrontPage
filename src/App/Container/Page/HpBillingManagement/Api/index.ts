import queryHook from '@/hook/queryHook'
import { Api } from '@/hook/Axios'
import type { ReadHpBillingManagementFormDataType } from '../types'
import { FilterFormType } from '../FilterForm'

export const getAllUsrList = (FilterParams: FilterFormType) => {
    return Api.get('/hms1/billing/list').then(
        queryHook<{ rows: ReadHpBillingManagementFormDataType[] }>
    )
}

export const addUserOneRow = (
    Userdata: Omit<ReadHpBillingManagementFormDataType, 'billingId'>
) => {
    return new Promise((res, rej) => {
        res(Userdata)
    })
}

export const editUserOneRow = (userId: ReadHpBillingManagementFormDataType) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}

export const deleteUserOneRow = (
    userId: ReadHpBillingManagementFormDataType['billingId']
) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}
export const deleteUserMuRow = (
    userIds: ReadHpBillingManagementFormDataType['billingId'][]
) => {
    return new Promise((res, rej) => {
        res(userIds)
    })
}
