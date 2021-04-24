import { Formik } from 'formik';
import React from 'react'

interface EditFieldProps {
instructionOrIngredient:string
}

export const EditField: React.FC<EditFieldProps> = ({instructionOrIngredient, ...props}) => {
  let form 

  if(instructionOrIngredient ==='instruction'){
    form = (
      <Formik initialValues={}>

      </Formik>
    )
  }
  return ();
}