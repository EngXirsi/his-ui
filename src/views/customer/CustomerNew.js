import { makeStyles } from '@material-ui/core'
import { display, fontWeight } from '@mui/system'
import {ChevronRight, Home} from '@material-ui/icons'
import CustomerForm from 'Components/form/CustomerForm'

const useStyles = makeStyles({
    pageHeader:{
        display: 'flex',
        "& h3":{
            margin: "0px",
                fontSize: "16px",
                paddingBottom: "1px",
        
                verticalAlign: "middle",
                textTransform: "capitalize"
        },
        "& span":{
            margin: "0px 0px 0px 8px",
           
                paddingBottom: "3px",
            
            color: "rgba(52, 49, 76, 0.38)",
            fontSize: "16"
            
        }

    },
    icon :{
        width:"1em",
        height:"1em",
        overflow: "hidden",
        textAlign: "center",
        flexShrink: 0,
        color: "rgb(25,118,210)",
        marginLeft: "8px",
        marginBottom: "4px",
        verticalAlign: "middle",
        display: "inline-block",
    }
})
export default function CustomerNew() {
    const classes = useStyles()
    return (
        <>
        <div className={classes.pageHeader}>
            <h3>New Customer</h3>
            <span>|</span>
            <Home className = {classes.icon }/> 
            <span><ChevronRight /></span>
            <span>Pages</span>
            <span><ChevronRight /></span>
            <span>New Customer</span>
        </div>
        <CustomerForm />

        </>
    )
}
