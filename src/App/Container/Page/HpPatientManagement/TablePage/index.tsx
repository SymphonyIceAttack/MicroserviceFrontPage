import React, { useState } from 'react'
import { Table } from 'antd'
import { DataType, columns } from './ColumnsdataType'
import { deleteUserOneRow } from '../Api'
import { ReadHpPatientManagementFormDataType } from '../types'
import { nanoid } from 'nanoid'

interface Props {
    data: ReadHpPatientManagementFormDataType[]
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
                        SetSeletRowKey(record.patientId)
                    },
                    (value, record) => {
                        //TODO deleteOneRow
                        deleteUserOneRow(record.patientId)
                    }
                )}
                dataSource={data.map((item) => ({
                    ...item,
                    key: item.patientId as string,
                }))}
            />
        </div>
    )
}

export default App
