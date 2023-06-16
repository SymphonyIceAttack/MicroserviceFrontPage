import type { ColumnsType } from 'antd/es/table'
import { Button, Table, Space } from 'antd'
import { EditFilled, DeleteColumnOutlined } from '@ant-design/icons'
import { ReadHpBillingManagementFormDataType } from '../types'
export type DataType = ReadHpBillingManagementFormDataType & {
    key: string
}
export const columns = (
    editeFunc: (value: any, record: DataType) => void,
    deleteFunc: (value: any, record: DataType) => void
): ColumnsType<DataType> => [
    {
        title: '费用ID',
        dataIndex: 'billingId',
    },
    {
        title: '就诊记录ID',
        dataIndex: 'recordId',
    },
    {
        title: '金额',
        dataIndex: 'amount',
    },
    {
        title: '支付状态',
        dataIndex: 'paymentStatus',
    },
    {
        title: '操作',
        dataIndex: 'billingId',
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
