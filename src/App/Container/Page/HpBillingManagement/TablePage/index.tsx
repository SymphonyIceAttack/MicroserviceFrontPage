import React, { useState } from 'react'
import { Table } from 'antd'
import { DataType, columns } from './ColumnsdataType'
import { deleteUserOneRow } from '../Api'
import { ReadHpBillingManagementFormDataType } from '../types'
import { nanoid } from 'nanoid'

interface Props {
    data: ReadHpBillingManagementFormDataType[]
    saveSelectedRowKeys: (newSelectedRowKeys: React.Key[]) => void
    SetSeletRowKey: (selectkey: React.Key) => void
    SelectedRowKeys: React.Key[]
    SetModal: (isModalShow: boolean) => void
    SetEdite: (isEdite: boolean) => void
}

const App: React.FC<Props> = ({
    data,
    saveSelectedRowKeys,
    SetSeletRowKey,
    SelectedRowKeys,
    SetModal,
    SetEdite,
}) => {
    const [loading, setLoading] = useState(false)

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        saveSelectedRowKeys(newSelectedRowKeys)
    }

    const rowSelection = {
        SelectedRowKeys,
        onChange: onSelectChange,
    }

    return (
        <div style={{ marginTop: '20px' }}>
            <Table
                rowSelection={rowSelection}
                columns={columns(
                    (value, record) => {
                        SetModal(true)
                        SetEdite(true)
                        SetSeletRowKey(record.billingId)
                    },
                    (value, record) => {
                        //TODO deleteOneRow
                        deleteUserOneRow(record.billingId)
                    }
                )}
                dataSource={data.map((item) => ({ ...item, key: nanoid() }))}
            />
        </div>
    )
}

export default App
