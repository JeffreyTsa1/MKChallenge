import { Button, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import * as React from 'react';
import './form.css';
import { spacing } from '@material-ui/system'



interface Values {
    name: string;
    email: string;
    msg: string; // This is not a large enough variable type but for now it'll do.
}


interface Props {
    onSubmit: (values: Values) => void; //Values as my parameter

}

export const MkForm: React.FC<Props> = ({ onSubmit }) => {
    return (
        <Formik
        initialValues={{name: '', email: '', msg: ''}} 
        onSubmit={(values) => {
            onSubmit(values);
            alert("Form Submitted!")
        }}>
            {({ values, handleChange, handleBlur}) => (
                <Form>
                    <div id="formWrapper">
                        <div className="smallTextFields">
                            <TextField 
                                name="name" 
                                id="outlined-basic" 
                                label="Name" 
                                fullWidth
                                required
                                variant="outlined"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />
                            
                            <TextField 
                                name="email" 
                                fullWidth
                                id="outlined-basic" 
                                label="Email"
                                required
                                variant="outlined"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />
                        </div>
                        <div className="largeTextFields">
                            <TextField 
                                name="msg" 
                                id="outlined-basic" 
                                label="Message" 
                                fullWidth
                                multiline
                                required
                                rows="5"
                                variant="outlined"
                                value={values.msg}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="largeBodyText"
                                />

                        </div>
                    </div>
                    <Button type="submit" size="large" color="secondary" variant='contained'>Submit</Button>
                </Form>
            )}
        </Formik>
    );
}