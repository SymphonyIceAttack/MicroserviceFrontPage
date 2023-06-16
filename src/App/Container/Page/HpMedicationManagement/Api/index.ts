import queryHook from '@/hook/queryHook'
import { Api } from '@/hook/Axios'
import type { ReadHpMedicationManagementFormDataType } from '../types'
import { FilterFormType } from '../FilterForm'

export const getAllUsrList = (FilterParams: FilterFormType) => {
    return Api.get('/hms1/medication/list').then(
        queryHook<{ rows: ReadHpMedicationManagementFormDataType[] }>
    )
}

export const addUserOneRow = (
    Userdata: Omit<ReadHpMedicationManagementFormDataType, 'medicationId'>
) => {
    return new Promise((res, rej) => {
        res(Userdata)
    })
}

export const editUserOneRow = (userId: ReadHpMedicationManagementFormDataType) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}

export const deleteUserOneRow = (
    userId: ReadHpMedicationManagementFormDataType['medicationId']
) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}
export const deleteUserMuRow = (
    userIds: ReadHpMedicationManagementFormDataType['medicationId'][]
) => {
    return new Promise((res, rej) => {
        res(userIds)
    })
}
