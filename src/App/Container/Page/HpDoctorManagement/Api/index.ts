import queryHook from '@/hook/queryHook'
import { Api } from '@/hook/Axios'
import type { HpDoctorManagementFormDataType } from '../types'
import { FilterFormType } from '../FilterForm'

export const getAllUsrList = (FilterParams: FilterFormType) => {
    return Api.get('/hms1/doctor/list').then(
        queryHook<{ rows: HpDoctorManagementFormDataType[] }>
    )
}

export const addUserOneRow = (
    Userdata: Omit<HpDoctorManagementFormDataType, 'doctorId'>
) => {
    return new Promise((res, rej) => {
        res(Userdata)
    })
}

export const editUserOneRow = (userId: HpDoctorManagementFormDataType) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}

export const deleteUserOneRow = (userId: HpDoctorManagementFormDataType['doctorId']) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}
export const deleteUserMuRow = (
    userIds: HpDoctorManagementFormDataType['doctorId'][]
) => {
    return new Promise((res, rej) => {
        res(userIds)
    })
}
