import queryHook from '@/hook/queryHook'
import { Api } from '@/hook/Axios'
import type { HpDoctorManagementFormDataType } from '../types'
import { FilterFormType } from '../FilterForm'
import { nanoid } from 'nanoid'

export const getAllUsrList = (FilterParams: FilterFormType) => {
    return Api.get('/hms1/doctor/list').then(
        queryHook<{ rows: HpDoctorManagementFormDataType[] }>
    )
}

export const addUserOneRow = (
    Userdata: Omit<HpDoctorManagementFormDataType, 'doctorId'>
) => {
    return Api.post('/hms1/doctor', {
        ...Userdata,
        doctorId: Math.floor(Math.random() * 1000) + '',
    })
}

export const editUserOneRow = (userdata: HpDoctorManagementFormDataType) => {
    return Api.put('/hms1/doctor', {
        ...userdata,
    })
}

export const deleteUserOneRow = (
    userId: HpDoctorManagementFormDataType['doctorId']
) => {
    return Api.delete(`hms1/doctor/${userId}`)
}
export const deleteUserMuRow = (
    userIds: HpDoctorManagementFormDataType['doctorId'][]
) => {
    return new Promise((res, rej) => {
        res(userIds)
    })
}
