import { Card, CardContent, CardHeader, Divider, Grid , FormLabel } from '@material-ui/core'
import Controls from 'Components/controls/Controls.js'
import {useForm, Form } from 'Components/form/UseForm.js'
const genderItems = [
    { id: 'male', title: 'Business' },
    { id: 'female', title: 'Individual' },

]
const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}


export default function CustomerForm() {
    const {
        values,
        setValues,
    } = useForm(initialFValues);
    return (
        <div>
            <Card >
                <CardHeader
                title = "Add a New Customer"
                titleTypographyProps ={{fontSize:"16px" , lineHeight:1.5}}
                />
                  
                <Divider />
                <CardContent>
                <Form >
                <Grid container spacing={2}>
                <Grid item xs={2}>
                    
                Customer Type
              
                 </Grid>
                    <Grid item xs={10}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        // onChange={handleInputChange}
                        items={genderItems}
                    />
                    </Grid>
                    <Grid item xs={2}>
                    
                    Primary Contact
                  
                     </Grid>
            
                <Grid item xs={3}>
                    
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        // onChange={handleInputChange}
                        // error={errors.fullName}
                    />
                    </Grid>
                    <Grid item xs= {3}>

                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        // onChange={handleInputChange}
                        // error={errors.email}
                    />
                    </Grid>
                    <Grid item xs = {3}>
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        // onChange={handleInputChange}
                        // error={errors.mobile}
                    />
                

                </Grid>
                <Grid item xs={6}>
                 
                    {/* <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        // onChange={handleInputChange}
                        // options={employeeService.getDepartmentCollection()}
                        // error={errors.departmentId}
                    />
                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        // onChange={handleInputChange}
                    /> */}
                    <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        // onChange={handleInputChange}
                    />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            // onClick={resetForm}
                             />
                    </div>
                </Grid>
            </Grid>
        </Form>
                </CardContent>


            </Card>
        </div>
    )
}
