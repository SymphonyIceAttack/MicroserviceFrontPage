import type { ColumnsType } from 'antd/es/table'
import { Button, Table, Space } from 'antd'
import { EditFilled, DeleteColumnOutlined } from '@ant-design/icons'
import { ReadHpWardManagementFormDataType } from '../types'
export type DataType = ReadHpWardManagementFormDataType & {
    key: string
}
export const columns = (
    editeFunc: (value: any, record: DataType) => void,
    deleteFunc: (value: any, record: DataType) => void
): ColumnsType<DataType> => [
    {
        title: '病房号',
        dataIndex: 'wardId',
    },
    {
        title: '床位数量',
        dataIndex: 'bedCount',
    },
    {
        title: '病房状态',
        dataIndex: 'wardStatus',
    },
    {
        title: '操作',
        dataIndex: 'wardId',
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
