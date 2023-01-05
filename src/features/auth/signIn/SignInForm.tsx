import React from 'react';
import {FormikErrors, useFormik} from 'formik';
import {InputWithValidation} from '../../admin/inputWithValidation/InputWithValidation';
import {StyledFormButton} from '../../../components/buttons/formButton/FormButton';
import {Input} from 'antd';
import {LoginReqType} from '../auth-api';


const MAX_PASSWORD_LENGTH = 20;
const MIN_PASSWORD_LENGTH = 6;

type PropsType = {
    onSubmitHandler: (values: LoginReqType) => void;
    buttonTitle: string;
    // isSignUp?: string;
}


export const SignInForm = ({onSubmitHandler, buttonTitle}: PropsType) => {

    const formik = useFormik({
        initialValues: {
            loginOrEmail: '',
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrors<LoginReqType> = {};

            const {loginOrEmail, password} = values;

            if (!loginOrEmail) {
                errors.loginOrEmail = 'The field is required'
            }

            if (!password) {
                errors.password = 'The field is required'
            } else if (password.length > MAX_PASSWORD_LENGTH) {
                errors.password = `Max length is ${MAX_PASSWORD_LENGTH} symbols`
            } else if (password.length < MIN_PASSWORD_LENGTH) {
                errors.password = `Min length is ${MIN_PASSWORD_LENGTH} symbols`
            }

            return errors
        },
        onSubmit: (values) => {
            onSubmitHandler(values);
        }
    });

    const {getFieldProps, handleSubmit, errors, touched} = formik;

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <InputWithValidation touched={touched.loginOrEmail} errors={errors.loginOrEmail}
                                     text={'Email or Username'}>
                    <Input {...getFieldProps('loginOrEmail')} name={'loginOrEmail'}/>
                </InputWithValidation>

                <InputWithValidation touched={touched.password} errors={errors.password} text={'Password'}>
                    <Input.Password {...getFieldProps('password')}/>
                </InputWithValidation>

                <div style={{marginTop: '10px'}}>
                    <StyledFormButton type={'submit'}>{buttonTitle}</StyledFormButton>
                </div>
            </form>
        </div>
    );
};
