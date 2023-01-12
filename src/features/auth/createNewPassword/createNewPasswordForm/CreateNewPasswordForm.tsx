import React, {ClipboardEvent, MouseEvent, useState} from 'react';
import {FormikErrors, useFormik} from 'formik';
import {InputWithValidation} from '../../../admin/inputWithValidation/InputWithValidation';
import {Input} from 'antd';
import {StyledFormButton} from '../../../../components/buttons/formButton/FormButton';

const MAX_PASSWORD_LENGTH = 20;
const MIN_PASSWORD_LENGTH = 6;

type PropsType = {
    onSubmitHandler: (password: string) => void;
}

type CreateNewPasswordType = {
    password: string;
    confirmPassword: string;
}

export const CreateNewPasswordForm = ({onSubmitHandler}: PropsType) => {
    const [geteratePassword] = useState('')
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validate: (values) => {
            const errors: FormikErrors<CreateNewPasswordType> = {};

            const {password, confirmPassword} = values;


            if (!password) {
                errors.password = 'The field is required'
            } else if (password.length > MAX_PASSWORD_LENGTH) {
                errors.password = `Max length is ${MAX_PASSWORD_LENGTH} symbols`
            } else if (password.length < MIN_PASSWORD_LENGTH) {
                errors.password = `Min length is ${MIN_PASSWORD_LENGTH} symbols`
            }

            if (!confirmPassword) {
                errors.confirmPassword = 'The field is required'
            } else if (confirmPassword.length > MAX_PASSWORD_LENGTH) {
                errors.confirmPassword = `Max length is ${MAX_PASSWORD_LENGTH} symbols`
            } else if (confirmPassword.length < MIN_PASSWORD_LENGTH) {
                errors.confirmPassword = `Min length is ${MIN_PASSWORD_LENGTH} symbols`
            } else if (confirmPassword !== password) {
                errors.confirmPassword = 'Passwords should be equal'
            }

            return errors
        },
        onSubmit: (values) => {
            onSubmitHandler(values.password);
        }
    });


    const {getFieldProps, handleSubmit, errors, touched} = formik;

    const handleChange = (event: ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();
    }
    const onMouseEnterHandler = (event: MouseEvent<HTMLInputElement>) => {

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <InputWithValidation touched={touched.password} errors={errors.password} text={'New password'}>
                    <Input.Password onMouseEnter={onMouseEnterHandler}
                                    onPaste={handleChange}
                                    onCopy={handleChange}
                                    // onKeyDown={onKeyPressHandler}
                                    {...getFieldProps('password')}/>
                </InputWithValidation>

                <InputWithValidation touched={touched.confirmPassword} errors={errors.confirmPassword}
                                     text={'Password confirmation'}>
                    <Input.Password
                        // onKeyDown={onKeyPressHandler}
                        onPaste={handleChange}
                        onCopy={handleChange}
                        {...getFieldProps('confirmPassword')}/>
                </InputWithValidation>

                <div style={{marginTop: '10px'}}>
                    <StyledFormButton type={'submit'}>Create new password</StyledFormButton>
                </div>
            </form>

        </div>
    );
};