import React, {ReactElement, memo} from 'react';
import {StyledInputError} from '../../../components/styled/StyledInputError';
import {StyledGreyText} from '../../../components/styled/StyledGreyText';


type PropsType = {
    touched: boolean | undefined;
    errors: string | undefined;
    children: ReactElement;
    text: string;
}

export const InputWithValidation = memo(({
                                        touched,
                                        children,
                                        errors,
                                        text,
                                    }: PropsType) => {
    return (
        <div>
            <StyledGreyText>{text}</StyledGreyText>
            {children}
            <StyledInputError>{touched && errors}</StyledInputError>
        </div>
    );
});
