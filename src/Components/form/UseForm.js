import { useState } from "react";
import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: 0,
          
        }
    }
}))
export function useForm(initialFValues) {


    const [values, setValues] = useState(initialFValues);
    return {
        values,
        setValues,
    }
}


export function Form(props) {

    const classes = useStyles();
    const { children, ...other } = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}