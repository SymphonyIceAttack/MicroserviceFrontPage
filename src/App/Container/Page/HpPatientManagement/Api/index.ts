import queryHook from '@/hook/queryHook'
import { Api } from '@/hook/Axios'
import type { ReadHpPatientManagementFormDataType } from '../types'
import { FilterFormType } from '../FilterForm'

export const getAllUsrList = (FilterParams: FilterFormType) => {
    return Api.get('/hms1/patient/list').then(
        queryHook<{ rows: ReadHpPatientManagementFormDataType[] }>
    )
}

export const addUserOneRow = (
    Userdata: Omit<ReadHpPatientManagementFormDataType, 'patientId'>
) => {
    return new Promise((res, rej) => {
        res(Userdata)
    })
}

export const editUserOneRow = (userId: ReadHpPatientManagementFormDataType) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}

export const deleteUserOneRow = (
    userId: ReadHpPatientManagementFormDataType['patientId']
) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}
export const deleteUserMuRow = (
    userIds: ReadHpPatientManagementFormDataType['patientId'][]
) => {
    return new Promise((res, rej) => {
        res(userIds)
    })
}
