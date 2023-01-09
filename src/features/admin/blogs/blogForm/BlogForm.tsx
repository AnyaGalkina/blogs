import React from 'react';
import {FormikErrors, useFormik} from 'formik';
import {Image} from '../../../../components/image/Image';
import defaultImage from '../../../../assets/images/defaultImage.png';
import {InputWithValidation} from '../../inputWithValidation/InputWithValidation';
import {NewBlogType} from '../../admin-api';
import {StyledFormButton} from '../../../../components/buttons/formButton/FormButton';
import {Input} from 'antd';
import TextArea from 'antd/es/input/TextArea';

const MAX_LENGTH = 500;
const re = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;


// const valueArr = [
//     {value: "name", text:  'Blog Name'},
//     {value: "websiteUrl", text:  'Website'},
//     {value: "description", text:  'Blog Description'},
// ];

type PropsType = {
    onSubmitHandler: (values: NewBlogType) => void;
    buttonTitle: string;
    initialName?: string;
    initialWebsite?: string;
    initialDescription?: string;
}


export const BlogForm = ({onSubmitHandler, buttonTitle, initialName = '', initialWebsite = '', initialDescription = ''  }: PropsType) => {

    const formik = useFormik({
        initialValues: {
            name: initialName,
            description: initialDescription,
            websiteUrl: initialWebsite,
        },
        validate: (values) => {
            const errors: FormikErrors<NewBlogType> = {};
            const {name, description, websiteUrl} = values;

            if (!name) {
                errors.name = 'The field is required'
            }
            if (!websiteUrl) {
                errors.websiteUrl = 'The field is required'
            } else if (!re.test(websiteUrl)) {
                errors.websiteUrl = 'Enter a valid url'
            }
            if (!description) {
                errors.description = 'The field is required'
            } else if (description.length > MAX_LENGTH) {
                errors.description = `Max length is ${MAX_LENGTH} symbols`
            }

            return errors
        },
        onSubmit: (values) => {
            onSubmitHandler(values);
            formik.resetForm();
        }
    });

    const {getFieldProps, handleSubmit, errors, touched} = formik;

    return (
        <div>
            <div>
                <Image alt={'blog image'} defaultImage={defaultImage}/>
                <form onSubmit={handleSubmit}>
                    {/*{valueArr.map(({value, text}) => {*/}
                    {/*    return(*/}
                    {/*       <InputWithValidation text={text} getFieldProps={getFieldProps} placeholder={''}*/}
                    {/*                     value={value} touched={touched}*/}
                    {/*                     errors={errors}*/}
                    {/*       />*/}
                    {/*    )*/}
                    {/*})*/}

                    {/*}*/}

                    <InputWithValidation text={'Blog Name'} touched={touched.name} errors={errors.name}>
                        <Input {...getFieldProps('name')} name={'name'}/>
                    </InputWithValidation>

                    <InputWithValidation text={'Website'} touched={touched.websiteUrl} errors={errors.websiteUrl}>
                        <Input {...getFieldProps('websiteUrl')} name={'websiteUrl'}/>
                    </InputWithValidation>

                    <InputWithValidation text={'Blog Description'}
                                         touched={touched.description}
                                         errors={errors.description}>
                        <TextArea {...getFieldProps('description')} name={'description'} rows={4}/>
                    </InputWithValidation>

                    <StyledFormButton type={'submit'}>{buttonTitle}</StyledFormButton>

                </form>
            </div>
        </div>
    );
};
