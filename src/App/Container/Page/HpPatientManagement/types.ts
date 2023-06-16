import React from 'react'
export type HpPatientManagementFormDataType = {
    patientId: React.Key
    fullName: string
    gender: string
    age: number
    contact: string
}

export type ReadHpPatientManagementFormDataType =
    HpPatientManagementFormDataType
