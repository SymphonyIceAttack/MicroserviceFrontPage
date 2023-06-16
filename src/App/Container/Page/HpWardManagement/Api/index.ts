import queryHook from '@/hook/queryHook'
import { Api } from '@/hook/Axios'
import type { ReadHpWardManagementFormDataType } from '../types'
import { FilterFormType } from '../FilterForm'

export const getAllUsrList = (FilterParams: FilterFormType) => {
    return Api.get('/hms1/ward/list').then(
        queryHook<{ rows: ReadHpWardManagementFormDataType[] }>
    )
}

export const addUserOneRow = (
    Userdata: Omit<ReadHpWardManagementFormDataType, 'wardId'>
) => {
    return new Promise((res, rej) => {
        res(Userdata)
    })
}

export const editUserOneRow = (userId: ReadHpWardManagementFormDataType) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}

export const deleteUserOneRow = (
    userId: ReadHpWardManagementFormDataType['wardId']
) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}
export const deleteUserMuRow = (
    userIds: ReadHpWardManagementFormDataType['wardId'][]
) => {
    return new Promise((res, rej) => {
        res(userIds)
    })
}
