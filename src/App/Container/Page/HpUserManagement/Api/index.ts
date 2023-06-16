import queryHook from '@/hook/queryHook'
import { Api } from '@/hook/Axios'
import type { ReadHpUserManagementFormDataType } from '../types'
import { FilterFormType } from '../FilterForm'

export const getAllUsrList = (FilterParams: FilterFormType) => {
    return Api.get('/hms1/user/list').then(
        queryHook<{ rows: ReadHpUserManagementFormDataType[] }>
    )
}

export const addUserOneRow = (
    Userdata: Omit<ReadHpUserManagementFormDataType, 'userId'>
) => {
    return new Promise((res, rej) => {
        res(Userdata)
    })
}

export const editUserOneRow = (userId: ReadHpUserManagementFormDataType) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}

export const deleteUserOneRow = (
    userId: ReadHpUserManagementFormDataType['userId']
) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}
export const deleteUserMuRow = (
    userIds: ReadHpUserManagementFormDataType['userId'][]
) => {
    return new Promise((res, rej) => {
        res(userIds)
    })
}
