import { Button, Form, Input, Select, Row, Col } from 'antd'
import React from 'react'
import { SearchOutlined, RestFilled } from '@ant-design/icons'
import { ReadHpNurseManagementFormDataType } from '../types'

export type FilterFormType = Pick<
    ReadHpNurseManagementFormDataType,
    'nurseId'
> | null
type Props = {
    saveFilterParams: (FilterParams: FilterFormType) => void
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
                        name="nurseId"
                        label="ID"
                        rules={[{ required: false }]}>
                        <Input placeholder="请输入ID" />
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
