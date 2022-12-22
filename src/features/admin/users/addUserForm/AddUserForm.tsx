import React from 'react';
import {FormikErrors, useFormik} from 'formik';
import {CreateUsersPeqType} from '../../admin-api';
import {InputWithValidation} from '../../inputWithValidation/InputWithValidation';
import {StyledFormButton} from '../../../../components/formButton/FormButton';
import {Input} from 'antd';


const MAX_LOGIN_LENGTH = 10;
const MIN_LOGIN_LENGTH = 3;
const MAX_PASSWORD_LENGTH = 20;
const MIN_PASSWORD_LENGTH = 6;


// const reEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$;
// const reLogin = /^[a-zA-Z0-9_-]*$;\

type PropsType = {
    onSubmitHandler: (values:CreateUsersPeqType) => void;
}


export const AddUserForm = ({onSubmitHandler}: PropsType) => {

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            email: '',
        },
        validate: (values) => {
            const errors: FormikErrors<CreateUsersPeqType> = {};

            const {login, password, email} = values;

            if (!login) {
                errors.login = 'The field is required'
            } else if (login.length > MAX_LOGIN_LENGTH) {
                errors.login = `Max length is ${MAX_LOGIN_LENGTH} symbols`
            } else if (login.length < MIN_LOGIN_LENGTH) {
                errors.login = `Min length is ${MIN_LOGIN_LENGTH} symbols`
            }
            // else if (!re.test(email)) {
            //     errors.email = 'Enter a valid email'
            // }

            if (!password) {
                errors.password = 'The field is required'
            } else if (password.length > MAX_PASSWORD_LENGTH) {
                errors.password = `Max length is ${MAX_PASSWORD_LENGTH} symbols`
            } else if (password.length < MIN_PASSWORD_LENGTH) {
                errors.password = `Min length is ${MIN_PASSWORD_LENGTH} symbols`
            }

            if (!email) {
                errors.email = 'The field is required'
            }
            // else if (!re.test(email)) {
            //         errors.email = 'Enter a valid email'
            // }

            return errors
        },
        onSubmit: (values) => {
            // console.log(values)
            onSubmitHandler(values);
            formik.resetForm();
        }
    });

    const {getFieldProps, handleSubmit, errors, touched} = formik;

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <InputWithValidation touched={touched.email} errors={errors.email} text={'Email of the user'}>
                    <Input {...getFieldProps('email')} name={'email'}/>
                </InputWithValidation>

                <InputWithValidation touched={touched.login} errors={errors.login} text={'Username'}>
                    <Input {...getFieldProps('login')} name={'login'}/>
                </InputWithValidation>

                <InputWithValidation touched={touched.password} errors={errors.password} text={'Password'}>
                    <Input.Password {...getFieldProps('password')}/>
                </InputWithValidation>

                <StyledFormButton type={'submit'}>Add user</StyledFormButton>
            </form>
        </div>
    );
};
