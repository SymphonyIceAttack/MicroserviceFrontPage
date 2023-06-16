import React from 'react'
import { Space, Table, Tag } from 'antd'
import useTableData from './useTableData'

const { Column, ColumnGroup } = Table

const App: React.FC = () => {
    const [TableData] = useTableData()
    return (
        <Table dataSource={TableData} style={{ marginTop: '30px' }}>
            <Column title="药品" dataIndex="name" key="name" align="center" />
            <Column
                title="库存数量"
                dataIndex="stockQuantity"
                key="stockQuantity"
                align="center"
            />
            <Column
                title="规格"
                dataIndex="specification"
                key="specification"
                align="center"
            />
            <Column title="单价" dataIndex="price" key="price" align="center" />
        </Table>
    )
}

export default App
