import React, {useEffect} from 'react';
import {Image} from '../../../../components/image/Image';
import defaultImage from '../../../../assets/images/defaultImage.png';
import {FormikErrors, useFormik} from 'formik';
import {InputWithValidation} from '../../blogs/blogForm/inputWithValidation/InputWithValidation';
import style from './PostForm.module.css';
import {useAppDispatch} from '../../../../common/hooks';
import {getBlogs} from '../../../blogs/blogs-reducer';
import {useSelector} from 'react-redux';
import {getBlogsSelector} from '../../../../common/selectors/selectors';

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
    isNewPost: boolean
}

export const PostForm = ({buttonTitle, onSubmitHandler, isNewPost}: PropsType) => {
    const dispatch = useAppDispatch();
    const blogs = useSelector(getBlogsSelector);

    const formik = useFormik({
        initialValues: {
            title: '',
            blogId: '',
            content: '',
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

                <InputWithValidation
                    touched={touched.title} errors={errors.title} text={'Post Name'} getFieldProps={getFieldProps}
                    value={'title'}
                />

                {isNewPost ?
                    <>
                        <span className={style.text}>Blog</span>
                        <div>
                            <select value={values.blogId}
                                    onChange={handleChange}
                                    name="blogId"
                                    className={style.select}
                            >
                                {blogs.map((option) => {
                                    return <option value={option.id}>{option.name}</option>
                                })}
                            </select>
                            <div className={style.error}>{touched.blogId && errors.blogId}</div>
                        </div>
                    </>
                    : ''
                }
                <InputWithValidation
                    touched={touched.content} errors={errors.content} text={'Description'}
                    getFieldProps={getFieldProps}
                    value={'content'}
                    rows={6}
                    panel={true}
                />
                <button className={style.submitButton} type="submit">{buttonTitle}</button>
            </form>
        </div>
    );
};
