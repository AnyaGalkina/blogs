import React from 'react';
import {Image} from '../../../../components/image/Image';
import defaultImage from '../../../../assets/images/defaultImage.png';
import {FormikErrors, useFormik} from 'formik';
import {Dropdown, Typography, Space} from 'antd';
import {InputWithValidation} from '../../blogs/blogForm/inputWithValidation/InputWithValidation';
import {DownOutlined} from '@ant-design/icons';
import style from './PostForm.module.css';

export type ValuesType = {
    title: string;
    // blogName?: string;
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
    const formik = useFormik({
        initialValues: {
            title: '',
            // blogName: 'test',
            content: '',
        },
        validate: (values) => {
            const errors: FormikErrors<ValuesType> = {};
            // const {title, content, blogName} = values;
            const {title, content, } = values;

            if (!title) {
                errors.title = 'The field is required'
            } else if (title.length > MAX_TITLE_LENGTH) {
                errors.title = `Max length is ${MAX_TITLE_LENGTH} symbols`
            }

            // if (!blogName) {
            //     errors.blogName = 'The field is required'
            // }

            if (!content) {
                errors.content = 'The field is required'
            } else if (content.length > MAX_CONTENT_LENGTH) {
                errors.content = `Max length is ${MAX_CONTENT_LENGTH} symbols`
            }
            return errors
        },
        onSubmit: (values) => {
            console.log(values)
            debugger
            onSubmitHandler(values);
            formik.resetForm();
        }
    })

    const {touched, errors, getFieldProps, handleSubmit} = formik;
    return (
        <div>
            <Image alt={'post image'} defaultImage={defaultImage} styleImage={style.formImage}/>

            <form onSubmit={handleSubmit}>

                <InputWithValidation
                    touched={touched.title} errors={errors.title} text={'Post Name'} getFieldProps={getFieldProps}
                    value={'title'}
                />

                {isNewPost ?
                    <>
                        <h3>Blog</h3>
                        <Dropdown>
                            <Typography.Link>
                                <Space>
                                    Choose a blog
                                    <DownOutlined/>
                                </Space>
                            </Typography.Link>
                        </Dropdown>

                    </>
                    : ''
                }
                <InputWithValidation
                    touched={touched.content} errors={errors.content} text={'Description'} getFieldProps={getFieldProps}
                    value={'content'}
                    rows={6}
                    panel={true}
                />
                <button style={{backgroundColor: '#f9346b', color: 'white'}} type="submit">{buttonTitle}</button>
            </form>
        </div>
    );
};
