import React from 'react';
import {FormikErrors, useFormik} from 'formik';
import {InputWithValidation} from '../../../admin/inputWithValidation/InputWithValidation';
import {Input} from 'antd';
import {StyledGreyText} from '../../../../components/styled/StyledGreyText';
import {StyledFormButton} from '../../../../components/buttons/formButton/FormButton';

type PropsType = {
    onSubmitHandler: (value: RecoveryPasswordValuesType) => void;
}

export type RecoveryPasswordValuesType = {email: string}

export const RecoveryPasswordForm = ({onSubmitHandler}: PropsType) => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate: (values) => {
            const errors: FormikErrors<RecoveryPasswordValuesType> = {};

            const {email} = values;

            if (!email) {
                errors.email = 'The field is required'
            }
            // else if (!re.test(email)) {
            //         errors.email = 'Enter a valid email'
            // }

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
                <InputWithValidation touched={touched.email} errors={errors.email} text={'Email'}>
                    <Input {...getFieldProps('email')} name={'email'}/>
                </InputWithValidation>

                <StyledGreyText>Enter your email address and we send you further instructions</StyledGreyText>

                <div style={{marginTop: '10px'}}>
                    <StyledFormButton type={'submit'}>Send instructions</StyledFormButton>
                </div>
            </form>

        </div>
    );
};
