import type { ColumnsType } from 'antd/es/table'
import { Button, Table, Space } from 'antd'
import { EditFilled, DeleteColumnOutlined } from '@ant-design/icons'
import { ReadHpMedicationManagementFormDataType } from '../types'
export type DataType = ReadHpMedicationManagementFormDataType & {
    key: string
}
export const columns = (
    editeFunc: (value: any, record: DataType) => void,
    deleteFunc: (value: any, record: DataType) => void
): ColumnsType<DataType> => [
    {
        title: '药品ID',
        dataIndex: 'medicationId',
    },
    {
        title: '药品名称',
        dataIndex: 'name',
    },
    {
        title: '药品规格',
        dataIndex: 'specification',
    },
    {
        title: '库存量',
        dataIndex: 'stockQuantity',
    },
    {
        title: '药品的价格',
        dataIndex: 'price',
    },
    {
        title: '操作',
        dataIndex: 'medicationId',
        align: 'center',
        render: (value, record) => (
            <Space>
                <Button
                    icon={<EditFilled />}
                    type="link"
                    onClick={() => {
                        editeFunc(value, record)
                    }}>
                    修改
                </Button>
                <Button
                    icon={<DeleteColumnOutlined />}
                    type="link"
                    onClick={() => {
                        deleteFunc(value, record)
                    }}>
                    删除
                </Button>
            </Space>
        ),
    },
]
