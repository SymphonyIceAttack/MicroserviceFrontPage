import React, { useState } from 'react'
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem
}

const items: MenuItem[] = [
    getItem('HpUserManagement', '/', <DesktopOutlined />),
    getItem(
        'HpDoctorManagement',
        '/layout/HpDoctorManagement',
        <DesktopOutlined />
    ),
    getItem(
        'HpRecordsManagement',
        '/layout/HpRecordsManagement',
        <DesktopOutlined />
    ),
    getItem(
        'HpMedicationManagement',
        '/layout/HpMedicationManagement',
        <DesktopOutlined />
    ),
    getItem(
        'HpNurseManagement',
        '/layout/HpNurseManagement',
        <DesktopOutlined />
    ),
    getItem(
        'HpPatientManagement',
        '/layout/HpPatientManagement',
        <DesktopOutlined />
    ),
    getItem(
        'HpScheduleManagement',
        '/layout/HpScheduleManagement',
        <DesktopOutlined />
    ),
    getItem(
        'HpWardManagement',
        '/layout/HpWardManagement',
        <DesktopOutlined />
    ),
    getItem(
        'HpBillingManagement',
        '/layout/HpBillingManagement',
        <DesktopOutlined />
    ),
    getItem('HpDashboard', '/layout/HpDashboard', <DesktopOutlined />),
    getItem('HpChart', '/layout/HpChart', <DesktopOutlined />),
]

const App: React.FC = ({}) => {
    const [collapsed, setCollapsed] = useState(false)
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: '100%', overflow: 'scroll' }}>
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        items={items}
                        onClick={(value) => {
                            navigate(value.key)
                        }}
                    />
                </div>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb
                        style={{ margin: '16px 0' }}
                        items={[
                            {
                                title: pathname,
                            },
                        ]}
                    />
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}>
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default App
