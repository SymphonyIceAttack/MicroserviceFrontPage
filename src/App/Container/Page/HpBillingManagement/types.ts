import React from 'react'
export type HpBillingManagementFormDataType = {
    billingId: React.Key
    recordId: string
    amount: number
    paymentStatus: string
}

export type ReadHpBillingManagementFormDataType =
    HpBillingManagementFormDataType
