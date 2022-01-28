import MyTabs from "Components/MyTabs"
import Patient from "views/HIS/Patient"

const OPDNavbar = [
    {
        path: '/patient',
        name: "Patients",
      
     
        layout: "/admin",
        content: Patient


    },
    {
        path: '/table',
        name: "Appointments",
      
     
        layout: "/admin"


    },
    {
        path: '/table',
        name: "Vital Sings",
      
     
        layout: "/admin"


    },
    {
        path: '/table',
        name: "Physician",
      
     
        layout: "/admin"


    },
    {
        path: '/table',
        name: "Billing",
      
     
        layout: "/admin"


    },
]

export default OPDNavbar
