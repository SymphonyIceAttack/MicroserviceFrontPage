import queryHook from '@/hook/queryHook'
import { Api } from '@/hook/Axios'
import type { ReadHpScheduleManagementFormDataType } from '../types'
import { FilterFormType } from '../FilterForm'

export const getAllUsrList = (FilterParams: FilterFormType) => {
    return Api.get('/hms1/schedule/list').then(
        queryHook<{ rows: ReadHpScheduleManagementFormDataType[] }>
    )
}

export const addUserOneRow = (
    Userdata: Omit<ReadHpScheduleManagementFormDataType, 'scheduleId'>
) => {
    return new Promise((res, rej) => {
        res(Userdata)
    })
}

export const editUserOneRow = (userId: ReadHpScheduleManagementFormDataType) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}

export const deleteUserOneRow = (
    userId: ReadHpScheduleManagementFormDataType['scheduleId']
) => {
    return new Promise((res, rej) => {
        res(userId)
    })
}
export const deleteUserMuRow = (
    userIds: ReadHpScheduleManagementFormDataType['scheduleId'][]
) => {
    return new Promise((res, rej) => {
        res(userIds)
    })
}
