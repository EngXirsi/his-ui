
import { TextField ,makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    input: {
        // height:"70px !important"
        // height: "1.4375em",
        // border: "0px",
        // boxSizing: "content-box",
        // background: "none",
        // margin: 0,
        // display :"block",
        // width: "100%",
        // padding: 8.5px14px




    }
})

export default function Input(props) {
    const classes = useStyles()

    const { name, label, value,error=null, onChange } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            className={classes.input}
            size = "small"
            // onChange={onChange}
            // {...(error && {error:true,helperText:error})}
        />
    )
}