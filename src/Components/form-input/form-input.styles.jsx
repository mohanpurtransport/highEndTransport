import { styled, css } from "styled-components"

const subColor = 'grey';
const mainColor = 'black';

const FormLabelShrinkStyle = css`
    top: -14px;
    font-size: 12px;
    color: ${mainColor};
`



const FormLabel = styled(({shrink, ...restProps}) => <label {...restProps}/>)`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({shrink}) => shrink && FormLabelShrinkStyle};

`


const commonFormStyles = css`
  background: none;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }


`

const Input = styled.input`
  ${commonFormStyles}

  &:focus ~ ${FormLabel}{
    ${FormLabelShrinkStyle};
  }

`
const TextArea = styled.textarea`
  ${commonFormStyles}

  &:focus ~ ${FormLabel}{
    ${FormLabelShrinkStyle};
  }
  
`


const Group = styled.div`
  position: relative;
  margin: 45px 0;
`

const FlexGroup = styled(Group)`
  margin: 0;
`
const FlexFormLabelShrinkStyle = css`
  top: 10px;
  font-size: 12px;
  color: ${mainColor};
`

const FlexFormLabel = styled(FormLabel)`
  top: 35px;
  ${({shrink}) => shrink && FlexFormLabelShrinkStyle};
`
const commonFlexStyles = css`
flex: 1;

&:focus ~ ${FlexFormLabel}{
  ${FlexFormLabelShrinkStyle};
}
`
const FlexInput = styled(Input)`
  ${commonFlexStyles}

`

const FlexTextArea = styled(TextArea)`
  ${commonFlexStyles}
`

export {
    Group,
    Input,
    TextArea,
    FormLabel,
    FlexInput,
    FlexTextArea,
    FlexFormLabel,
    FlexGroup
}