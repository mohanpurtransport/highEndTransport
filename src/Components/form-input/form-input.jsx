import { Fragment } from "react"

import {
            Group,
            Input,
            TextArea,
            FormLabel,
            FlexInput,
            FlexTextArea,
            FlexFormLabel,
            FlexGroup
        } from './form-input.styles'

const FormInput = ({label, textArea, quoteFlex, ...otherProps}) => {
    return (
        <Fragment>
         {   quoteFlex ? 
            
            ( <FlexGroup>
                {
                    textArea ? <FlexTextArea {...otherProps} /> : <FlexInput {...otherProps} />
                }
                {
                    label && (<FlexFormLabel shrink={otherProps.value.length}>
                        {label}
                    </FlexFormLabel>)
                }
                </FlexGroup>) :

                (<Group>
                    {
                        textArea ? <TextArea {...otherProps} /> : <Input {...otherProps} />
                    }
                    {
                        label && (
                                <FormLabel shrink={otherProps.value.length}>
                                    {label}
                                </FormLabel>
                            )
                    }
                </Group>)}

        </Fragment>
    )
}

export default FormInput;



