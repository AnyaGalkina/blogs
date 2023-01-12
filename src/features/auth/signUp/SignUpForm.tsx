import React from 'react';
import {FormikErrors, useFormik} from 'formik';
import {CreateUserPeqType} from '../../admin/admin-api';
import {InputWithValidation} from '../../admin/inputWithValidation/InputWithValidation';
import {StyledFormButton} from '../../../components/buttons/formButton/FormButton';
import {Input} from 'antd';
import {StyledGreyText} from '../../../components/styled/StyledGreyText';
import {Flex} from '../../../components/styled/Flex';


const MAX_LOGIN_LENGTH = 10;
const MIN_LOGIN_LENGTH = 3;
const MAX_PASSWORD_LENGTH = 20;
const MIN_PASSWORD_LENGTH = 6;


// const reEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$;
// const reLogin = /^[a-zA-Z0-9_-]*$;\

type PropsType = {
    onSubmitHandler: (values: CreateUserPeqType) => void;
    buttonTitle: string;
    isSignUp?: string;
}


export const SignUpForm = ({onSubmitHandler, buttonTitle, isSignUp}: PropsType) => {

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            email: '',
        },
        validate: (values) => {
            const errors: FormikErrors<CreateUserPeqType> = {};

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
            onSubmitHandler(values);
        }
    });

    const {getFieldProps, handleSubmit, errors, touched} = formik;

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <InputWithValidation touched={touched.login} errors={errors.login} text={'Username'}>
                    <Input {...getFieldProps('login')} name={'login'}/>
                </InputWithValidation>

                <InputWithValidation touched={touched.email} errors={errors.email} text={'Email'}>
                    <Input {...getFieldProps('email')} name={'email'}/>
                </InputWithValidation>

                <InputWithValidation touched={touched.password} errors={errors.password} text={'Password'}>
                    <Input.Password {...getFieldProps('password')}/>
                </InputWithValidation>

                <Flex direction={'column'} align={'start'}>
                    <>
                        {isSignUp
                            ?
                            <StyledGreyText>
                                The link has been sent by email. If you don't received an email, sent link again
                            </StyledGreyText>
                            : ''
                        }
                        <StyledFormButton type={'submit'}>{buttonTitle}</StyledFormButton>
                    </>
                </Flex>
            </form>
        </div>
    );
};
