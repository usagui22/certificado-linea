import { useField } from 'formik';
import React from 'react'

const FieldSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}: </label>
      <select 
        {...field} {...meta}
      />
      {meta.touched && meta.error?
      (<div className='error'>{meta.error}</div>)
      :null
      }
    </>
  )
}

export default FieldSelect;
