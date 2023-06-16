import queryHook from '@/hook/queryHook'
import { Api } from '@/hook/Axios'
import type { HpRecordsManagementFormDataType } from '../types'
import { FilterFormType } from '../FilterForm'

export const getAllUsrList = (FilterParams: FilterFormType) => {
    return Api.get('/hms1/records/list').then(
        queryHook<{ rows: HpRecordsManagementFormDataType[] }>
    )
}

export const addUserOneRow = (
    Userdata: Omit<HpRecordsManagementFormDataType, 'recordId'>
) => {
    return new Promise((res, rej) => {
        res(Userdata)
    })
}

export const editUserOneRow = (userId: HpRecordsManagementFormDataType) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}

export const deleteUserOneRow = (
    userId: HpRecordsManagementFormDataType['recordId']
) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}
export const deleteUserMuRow = (
    userIds: HpRecordsManagementFormDataType['recordId'][]
) => {
    return new Promise((res, rej) => {
        res(userIds)
    })
}
