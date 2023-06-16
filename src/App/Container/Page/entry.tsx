import { lazy } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
const Layout = lazy(() => import('../layout'))
const HpUserManagement = lazy(() => import('./HpUserManagement'))
const HpDoctorManagement = lazy(() => import('./HpDoctorManagement'))
const HpRecordsManagement = lazy(() => import('./HpRecordsManagement'))
const HpMedicationManagement = lazy(() => import('./HpMedicationManagement'))
const HpNurseManagement = lazy(() => import('./HpNurseManagement'))
const HpPatientManagement = lazy(() => import('./HpPatientManagement'))
const HpScheduleManagement = lazy(() => import('./HpScheduleManagement'))
const HpWardManagement = lazy(() => import('./HpWardManagement'))
const HpBillingManagement = lazy(() => import('./HpBillingManagement'))
const HpDashboard = lazy(() => import('./HpDashboard'))
const HpChart = lazy(() => import('./HpChart'))

export default () => {
    return useRoutes([
        {
            path: '/layout',
            element: <Layout />,
            children: [
                {
                    element: <HpUserManagement />,
                    index: true,
                },
                {
                    element: <HpDoctorManagement />,
                    path: 'HpDoctorManagement',
                },
                {
                    element: <HpRecordsManagement />,
                    path: 'HpRecordsManagement',
                },
                {
                    element: <HpMedicationManagement />,
                    path: 'HpMedicationManagement',
                },
                {
                    element: <HpNurseManagement />,
                    path: 'HpNurseManagement',
                },
                {
                    element: <HpPatientManagement />,
                    path: 'HpPatientManagement',
                },
                {
                    element: <HpScheduleManagement />,
                    path: 'HpScheduleManagement',
                },
                {
                    element: <HpWardManagement />,
                    path: 'HpWardManagement',
                },
                {
                    element: <HpBillingManagement />,
                    path: 'HpBillingManagement',
                },
                {
                    element: <HpDashboard />,
                    path: 'HpDashboard',
                },
                {
                    element: <HpChart />,
                    path: 'HpChart',
                },
            ],
        },
        {
            path: '/',
            element: <Navigate to={'/layout'} />,
        },
    ])
}
