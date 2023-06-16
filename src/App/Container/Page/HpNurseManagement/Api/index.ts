import queryHook from '@/hook/queryHook'
import { Api } from '@/hook/Axios'
import type { ReadHpNurseManagementFormDataType } from '../types'
import { FilterFormType } from '../FilterForm'

export const getAllUsrList = (FilterParams: FilterFormType) => {
    return Api.get('/hms1/nurse/list').then(
        queryHook<{ rows: ReadHpNurseManagementFormDataType[] }>
    )
}

export const addUserOneRow = (
    Userdata: Omit<ReadHpNurseManagementFormDataType, 'nurseId'>
) => {
    return new Promise((res, rej) => {
        res(Userdata)
    })
}

export const editUserOneRow = (userId: ReadHpNurseManagementFormDataType) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}

export const deleteUserOneRow = (
    userId: ReadHpNurseManagementFormDataType['nurseId']
) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}
export const deleteUserMuRow = (
    userIds: ReadHpNurseManagementFormDataType['nurseId'][]
) => {
    return new Promise((res, rej) => {
        res(userIds)
    })
}
