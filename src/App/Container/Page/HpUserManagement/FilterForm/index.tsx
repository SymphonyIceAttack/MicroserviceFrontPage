import { Button, Form, Input, Select, Row, Col } from 'antd'
import React from 'react'
import { SearchOutlined, RestFilled } from '@ant-design/icons'
import { ReadHpUserManagementFormDataType } from '../types'

export type FilterFormType = Pick<
    ReadHpUserManagementFormDataType,
    'userId' | 'username'
> | null
type Props = {
    saveFilterParams: (FilterParams:FilterFormType) => void
}
//
const App: React.FC<Props> = ({ saveFilterParams }) => {
    const [form] = Form.useForm<FilterFormType>()

    const onFinish = (values: FilterFormType) => {
        //TODO getFilterList
        saveFilterParams(values)
    }

    const onReset = () => {
        form.resetFields()
    }

    return (
        <Form
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}>
            <Row gutter={10} wrap={false}>
                <Col span={10}>
                    <Form.Item
                        name="userId"
                        label="用户编码"
                        rules={[{ required: false }]}>
                        <Input placeholder="请输入用户编码" />
                    </Form.Item>
                </Col>
                <Col span={10}>
                    <Form.Item
                        name="username"
                        label="用户名称"
                        rules={[{ required: false }]}>
                        <Input placeholder="请输入用户名称" />
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ marginRight: '10px' }}
                            icon={<SearchOutlined />}>
                            搜索
                        </Button>
                        <Button
                            htmlType="button"
                            onClick={onReset}
                            icon={<RestFilled />}>
                            重置
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}

export default App
