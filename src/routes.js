import {
    Dashboard, 
    Person,
    LocalHotel,
    
    LocalPharmacyOutlined,
    AttachMoney } from '@material-ui/icons'
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import ContentCutIcon from '@mui/icons-material/ContentCut';

import MyTabs from 'Components/MyTabs'

import CustomerNew from 'views/customer/CustomerNew'
import DashboardPage from 'views/Dashboard/Dashoard.js'
import TableList from 'views/tableList/TableList'
import OPDNavbar from 'Components/Navbars/OPDNavbar';
const dashboardRoutes = [
    {
        path: '/dashboard',
        name: "Dashboard",
        icon: Dashboard,
        component: DashboardPage,
        layout: "/admin",
        navs: OPDNavbar
 


    },
    {
        path: '/patient',
        name: "OPD",
        icon: Person,
        component: TableList,
        layout: "/admin",
        

        


    },
    {
        path: '/custom',
        name: "IPD",
        icon: LocalHotel,
        component: TableList,
        layout: "/admin",
       

    


    },
    {
        path: '/l',
        name: "Emergency",
        icon: LocalPharmacyOutlined,
        component: TableList,
        layout: "/admin",
       

    


    },
    {
        path: '/k',
        name: "OT",
        icon: ContentCutIcon,
        component: TableList,
        layout: "/admin",
       

    


    },
    {
        path: '/h',
        name: "Laborotory",
        icon:  BiotechOutlinedIcon,
        component: TableList,
        layout: "/admin",
       

    


    },
    {
        path: '/g',
        name: "Imaging",
        icon: PsychologyOutlinedIcon,
        component: TableList,
        layout: "/admin",
       

    


    }
    
]
export default dashboardRoutes