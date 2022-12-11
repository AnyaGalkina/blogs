import React from 'react';
import style from './InputWithValidation.module.css';
import {Input} from 'antd';
import {FieldInputProps, FormikErrors, FormikTouched} from 'formik';
import TextArea from 'antd/es/input/TextArea';
import {
    DownOutlined,
    UnorderedListOutlined,
    PlaySquareOutlined,
    PictureOutlined,
    LinkOutlined,
    StrikethroughOutlined,
    BoldOutlined,
    ItalicOutlined,
    OrderedListOutlined,
    EditFilled,
    PlayCircleOutlined,
    QuestionCircleOutlined,
    FileImageOutlined
} from '@ant-design/icons';

type PropsType = {
    touched: boolean | undefined;
    errors: string | undefined;
    placeholder?: string;
    text: string;
    getFieldProps: (nameOrOptions: string) => FieldInputProps<any>;
    value: string;
    rows?: number;
    panel?: boolean
}

export const InputWithValidation = ({
                                        touched,
                                        rows,
                                        errors,
                                        placeholder,
                                        text,
                                        getFieldProps,
                                        value,
                                        panel = false
                                    }: PropsType) => {
    return (
        <div>
            <span className={style.text}>{text}</span>
            {rows
                ? <>
                    {panel
                        ?
                        <>
                            <div>
                                <div>
                                    <span>H1</span>
                                    <span>H2</span>
                                    <BoldOutlined/>
                                    <ItalicOutlined/>
                                    <StrikethroughOutlined/>
                                    {/*???*/}
                                    <UnorderedListOutlined/>
                                    <OrderedListOutlined/>
                                    <EditFilled/>
                                    <DownOutlined/>
                                </div>
                                <div>
                                    <LinkOutlined/>
                                    <PictureOutlined/>
                                    <PlaySquareOutlined />
                                    {/*<FileImageOutlined/>*/}
                                    {/*<PlayCircleOutlined/>*/}
                                </div>

                                <div>
                                    {/*???*/}
                                    <QuestionCircleOutlined/>
                                </div>

                            </div>
                            <TextArea rows={rows} placeholder={placeholder}{...getFieldProps(value)}/>

                        </>
                        : <TextArea rows={rows} placeholder={placeholder}{...getFieldProps(value)}/>
                    }

                </>
                : <Input placeholder={placeholder}{...getFieldProps(value)}/>
            }

            <div className={style.error}>{touched && errors}</div>
        </div>
    );
};
