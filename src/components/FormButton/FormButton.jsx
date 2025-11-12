import s from "./FormButton.module.sass";
import React from 'react';

const FormButton = ({text}) => {
  return (
    <button type='submit' className={s.button}>{text}</button>
  )
}

export default FormButton