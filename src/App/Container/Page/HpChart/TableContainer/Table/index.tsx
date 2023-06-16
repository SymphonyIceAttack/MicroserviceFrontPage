import React from 'react'
import { Space, Table, Tag } from 'antd'
import useTableData from './useTableData'
import { nanoid } from 'nanoid'

const { Column, ColumnGroup } = Table
export type tableDataType = {
    specialty: string
    patientCount: string
}

const App: React.FC = () => {
    const [tableData] = useTableData()
    return (
        <Table
            dataSource={tableData.map((item) => ({ key: nanoid(), ...item }))}
            style={{ flex: '1' }}>
            <ColumnGroup title="就诊患者排名前五的科室" align="center">
                <Column
                    title="科室名"
                    dataIndex="specialty"
                    key="specialty"
                    align="center"
                />
                <Column
                    title="就诊患者数量"
                    dataIndex="patientCount"
                    key="patientCount"
                    align="center"
                />
            </ColumnGroup>
        </Table>
    )
}

export default App
