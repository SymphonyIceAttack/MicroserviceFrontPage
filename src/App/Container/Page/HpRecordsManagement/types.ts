import React from 'react'
export type HpRecordsManagementFormDataType = {
    recordId: React.Key
    patientId: string
    doctorId: string
    diagnosisResult: string
    prescription: string
}

export type ReadHpRecordsManagementFormDataType = HpRecordsManagementFormDataType
