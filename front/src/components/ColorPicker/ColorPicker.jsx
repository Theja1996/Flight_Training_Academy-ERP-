import * as $ from 'jquery';
import 'jquery-minicolors';
import 'jquery-minicolors/jquery.minicolors.css';
import React, { useRef,useEffect, useState } from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
  div.minicolors-theme-default input.minicolors-input {
    height: 28px;
    border-radius: 3px;
    border: 1px solid #ccc;
  }
`;

// interface IProps {
//   value: string;
//   onChange: (newColor: string) => void;
// }

export default function ColorPicker(props)  {
  const[inputElement,setinputElement]=useState(null)
  const {value, onChange, ...restProps} =props

  useEffect(() => {
      if(inputElement){
        if (value !== inputElement.value) {
            let jelement=$(inputElement)
            jelement.minicolors('settings', {change: null});
            jelement.minicolors('value', value);
            jelement.minicolors('settings', {change: onChange});
          }
      }

  }, [inputElement])

  useEffect(() => {
      if(inputElement){
        const settings = {
            control: 'wheel',
            change: (hex) => {
            //  onChange(hex);
            }};
            let jelement=$(inputElement)
      
            jelement.minicolors(settings);
      }

  }, [inputElement])
    
    return(
      <StyledContainer {...restProps}>
        <input
          type='text'
          ref={(input)=>setinputElement(input)}
          defaultValue={value}
        />
      </StyledContainer>
    );
  }

