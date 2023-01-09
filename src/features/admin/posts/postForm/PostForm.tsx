import React, {useEffect} from 'react';
import {Image} from '../../../../components/image/Image';
import defaultImage from '../../../../assets/images/defaultImage.png';
import {FormikErrors, useFormik} from 'formik';
import {InputWithValidation} from '../../inputWithValidation/InputWithValidation';
import style from './PostForm.module.css';
import {useAppDispatch} from '../../../../common/hooks';
import {getBlogs} from '../../../blogs/blogs-reducer';
import {useSelector} from 'react-redux';
import {getBlogsSelector} from '../../../../common/selectors/selectors';
import {StyledFormButton} from '../../../../components/buttons/formButton/FormButton';
import {Input} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import {EditPanel} from './editPanel/EditPanel';

export type ValuesType = {
    title: string;
    blogId?: string;
    content: string;
}

const MAX_TITLE_LENGTH = 30;
const MAX_CONTENT_LENGTH = 1000;


type PropsType = {
    buttonTitle: string;
    onSubmitHandler: (values: ValuesType) => void;
    isNewPost: boolean;
    initialTitle?: string;
    initialContent?: string;

}

export const PostForm = ({buttonTitle, onSubmitHandler, isNewPost, initialTitle = '', initialContent = '', }: PropsType) => {
    const dispatch = useAppDispatch();
    const blogs = useSelector(getBlogsSelector);

    const formik = useFormik({
        initialValues: {
            title: initialTitle,
            blogId: '',
            content: initialContent,
        },
        validate: (values) => {
            const errors: FormikErrors<ValuesType> = {};
            const {title, content, blogId} = values;

            if (!title) {
                errors.title = 'The field is required'
            } else if (title.length > MAX_TITLE_LENGTH) {
                errors.title = `Max length is ${MAX_TITLE_LENGTH} symbols`
            }

            if (isNewPost && !blogId) {
                errors.blogId = 'The field is required'
            }

            if (!content) {
                errors.content = 'The field is required'
            } else if (content.length > MAX_CONTENT_LENGTH) {
                errors.content = `Max length is ${MAX_CONTENT_LENGTH} symbols`
            }
            return errors
        },
        onSubmit: (values) => {
            onSubmitHandler(values);
            formik.resetForm();
        }
    })


    useEffect(() => {
        dispatch(getBlogs());
    }, [])

    const {touched, errors, getFieldProps, handleSubmit, handleChange, values} = formik;
    return (
        <div>
            <Image alt={'post image'} defaultImage={defaultImage} width={'300px'}/>

            <form onSubmit={handleSubmit}>

                <InputWithValidation touched={touched.title} errors={errors.title} text={'Post Name'}>
                    <Input  {...getFieldProps('title')} name={'title'}/>
                </InputWithValidation>

                {isNewPost ?
                    <>
                        <InputWithValidation touched={touched.blogId} errors={errors.blogId} text={'Blog'}>
                            <select value={values.blogId}
                                    onChange={handleChange}
                                    name="blogId"
                                    className={style.select}
                            >
                                {blogs.map((option) => {
                                    return <option value={option.id}>{option.name}</option>
                                })}
                            </select>
                        </InputWithValidation>
                    </>
                    : ''
                }
                <InputWithValidation touched={touched.content} errors={errors.content} text={'Description'}>
                    <>
                        <EditPanel/>
                        <TextArea  {...getFieldProps('content')} name={'content'} rows={6}/>
                    </>
                </InputWithValidation>
                <StyledFormButton type={'submit'}>{buttonTitle}</StyledFormButton>
            </form>
        </div>
    );
};
