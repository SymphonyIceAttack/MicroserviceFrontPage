import React from 'react'
export type HpUserManagementFormDataType = {
    userId: React.Key
    username: string
    password: string
    role: string
}

export type ReadHpUserManagementFormDataType = Omit<
    HpUserManagementFormDataType,
    'password'
>
