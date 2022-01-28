
import {Dashboard} from '@material-ui/icons'
import MyTabs from 'Components/MyTabs'

import CustomerNew from 'views/customer/CustomerNew'
import DashboardPage from 'views/Dashboard/Dashoard.js'
import Patient from 'views/HIS/Patient'
import PatientView from 'views/HIS/PatientView'
import TableList from 'views/tableList/TableList'
const dashboardRoutes = [
    {
        path: '/patient',
     
     
        component: Patient,
        layout: "/admin",
 


    },
    {
        path: '/patientview',
       
     
        component: PatientView,
        layout: "/admin",
 


    },
    
]
export default dashboardRoutes