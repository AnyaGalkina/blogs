import React from 'react';
import defaultBlogImage from '../../assets/images/defaultImage.png';
import styled from 'styled-components';


const StyledImage = styled.img`
  margin: ${({
               // @ts-ignore
               margin}) => margin || '0px'};
  width: ${({width}) => width || '70'}; 
  height: ${({height}) => height || '70'}; 
  border-radius: ${({
                      // @ts-ignore
                      radius}) => radius || '0'};
`

type PropsType = {
    alt: string;
    src?: string;
    defaultImage?: string;
    height?: string;
    width?: string;
    radius?: string;
    margin?: string;
}


export const Image = ({alt, src, defaultImage, ...props}: PropsType) => {
    return (
        <StyledImage alt={alt} src={src ? src : defaultImage ? defaultImage : defaultBlogImage} {...props}/>
    );
};
