import React from 'react';
import TextArea from 'antd/es/input/TextArea';
import {FormikErrors, useFormik} from 'formik';
import {InputWithValidation} from '../../../../../admin/inputWithValidation/InputWithValidation';
import {StyledFormButton} from '../../../../../../components/buttons/formButton/FormButton';

const MAX_LENGTH = 300;
const MIN_LENGTH = 20;

type PropsType = {
    onSubmitHandler: (comment: string) => void;
}

export const AddCommentForm = ({onSubmitHandler}: PropsType) => {

    const formik = useFormik({
        initialValues: {
            content: ''
        },
        validate: (values): FormikErrors<{ content: string }> => {
            const errors: FormikErrors<{ content: string }> = {};
            const {content} = values;
            if (!content) {
                errors.content = 'The field is required';
            } else if (content.length > MAX_LENGTH) {
                errors.content = `Max length is ${MAX_LENGTH} symbols`
            } else if (content.length < MIN_LENGTH) {
                errors.content = `Minimum length is ${MIN_LENGTH} symbols`
            }
            return errors;
        },
        onSubmit: (values) => {
            onSubmitHandler(values.content);
            formik.resetForm();
        }
    });

    const {getFieldProps, handleSubmit, errors, touched} = formik;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <InputWithValidation touched={touched.content} errors={errors.content} text={''}>
                    <TextArea rows={4} {...getFieldProps('content')} name={'content'} />
                </InputWithValidation>
                <StyledFormButton type={'submit'}>Send a comment</StyledFormButton>
                {/*<StyledFormButton>Cancel</StyledFormButton>*/}
            </form>
        </div>
    );
};
