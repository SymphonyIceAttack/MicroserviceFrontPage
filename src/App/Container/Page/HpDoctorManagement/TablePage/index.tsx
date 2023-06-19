import React, { useState } from 'react'
import { Table } from 'antd'
import { DataType, columns } from './ColumnsdataType'
import { deleteUserOneRow } from '../Api'
import { ReadHpDoctorManagementFormDataType } from '../types'
import { nanoid } from 'nanoid'

interface Props {
    data: ReadHpDoctorManagementFormDataType[]
    saveSelectedRowKeys: (newSelectedRowKeys: React.Key[]) => void
    SetSeletRowKey: (selectkey: React.Key) => void
    SelectedRowKeys: React.Key[]
    SetModal: (isModalShow: boolean) => void
    SetEdite: (isEdite: boolean) => void
    loading: boolean
    setLoading: () => void
}

const App: React.FC<Props> = ({
    data,
    saveSelectedRowKeys,
    SetSeletRowKey,
    SelectedRowKeys,
    SetModal,
    SetEdite,
    loading,
    setLoading,
}) => {
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
                loading={loading}
                rowSelection={rowSelection}
                columns={columns(
                    (value, record) => {
                        SetModal(true)
                        SetEdite(true)
                        SetSeletRowKey(record.doctorId)
                    },
                    (value, record) => {
                        //TODO deleteOneRow
                        deleteUserOneRow(record.doctorId)
                        setLoading()
                    }
                )}
                dataSource={data.map((item) => ({
                    ...item,
                    key: item.doctorId as string,
                }))}
            />
        </div>
    )
}

export default App
