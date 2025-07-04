import React, { useId } from 'react'

interface InputFieldProps {
    label: string;
    type?: string;
}

const InputField: React.FC<InputFieldProps> = ({label, type='text'}) => {
    const id = useId();
  return (
    <div style={{marginBottom: '1rem'}}>
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} style={{marginLeft: '0.5rem'}}/>
    </div>
  )
}

export default InputField