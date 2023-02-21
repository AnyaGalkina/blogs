import React from 'react';
import {FormikErrors, useFormik} from 'formik';
import {InputWithValidation} from '../../../../../admin/inputWithValidation/InputWithValidation';
import TextArea from 'antd/es/input/TextArea';
import {StyledFormButton, StyledFormButtonWhite} from '../../../../../../components/buttons/formButton/FormButton';
import {Flex} from '../../../../../../components/styled/Flex';

const MAX_LENGTH = 300;
const MIN_LENGTH = 20;

type PropsType = {
    onEditCancelClickHandler: () => void;
    onEditCommentClickHandler: (value: string) => void;
    currentContent: string;
}

export const EditableComment = ({currentContent, onEditCancelClickHandler, onEditCommentClickHandler}: PropsType) => {
    const formik = useFormik({
        initialValues: {
            content: currentContent
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
            onEditCommentClickHandler(values.content);
            formik.resetForm();
        }
    });


    const {getFieldProps, handleSubmit, errors, touched} = formik;

    // const [currentContent, setCurrentContent] = useState(content);

    // const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     // setCurrentContent(event.currentTarget.value);
    // }
    //
    // const onEditCommentClick = () => {
    //     onEditCommentClickHandler(currentContent)
    // }

    // const onCancelClickHandler = () => {
    //     onEditCancelClickHandler();
    // }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <InputWithValidation touched={touched.content} errors={errors.content} text={''}>
                        <TextArea rows={4}
                                  {...getFieldProps('content')} name={'content'}
                            // value={}
                            // onChange={onInputChange}
                        />
                    </InputWithValidation>
                    <Flex justify={'end'}>
                        <div style={{width: '300px'}}>
                            <Flex justify={'space-between'}>
                                <StyledFormButtonWhite onClick={onEditCancelClickHandler}>Cancel</StyledFormButtonWhite>
                                <StyledFormButton type={'submit'}>Edit comment</StyledFormButton>
                            </Flex>
                        </div>
                    </Flex>
                </form>
            </div>
            {/*<button onClick={onEditCancelClickHandler}>Cancel</button>*/}
            {/*<button onClick={onEditCommentClick}>Edit comment</button>*/}
        </div>
    );
};
