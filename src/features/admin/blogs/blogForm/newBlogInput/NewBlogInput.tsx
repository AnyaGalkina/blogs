import React from 'react';
import style from './NewBlogInput.module.css';
import {Input} from 'antd';
import {FieldInputProps, FormikErrors, FormikTouched} from 'formik';
import TextArea from 'antd/es/input/TextArea';

type PropsType = {
    touched: boolean | undefined;
    errors: string | undefined;
    placeholder?: string;
    text: string;
    getFieldProps: (nameOrOptions: string) => FieldInputProps<any>;
    value: string;
    rows?: number;
}

export const NewBlogInput = ({touched, rows, errors, placeholder, text, getFieldProps, value}: PropsType) => {
    return (
        <div>
            <span className={style.text}>{text}</span>
            {rows
                ? <TextArea rows={rows} placeholder={placeholder}{...getFieldProps(value)}/>
                : <Input placeholder={placeholder}{...getFieldProps(value)}/>
            }

            <div className={style.error}>{touched && errors}</div>
        </div>
    );
};
