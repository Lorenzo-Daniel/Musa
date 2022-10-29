import React from 'react'
import { useTranslation } from 'react-i18next'

const Input = ({ valorInput, campoInvalido, name,type,label }) => {
  const [t] = useTranslation("global")
  return (
    <div className='input-group'>
      <div className={
        campoInvalido
          ? 'form-floating' : 'form-floating is-invalid'}>
        <input type={type} onInput={valorInput} className={campoInvalido ? 'form-control input-style' : 'form-control input-style is-invalid'} placeholder="" name={name} />
        <label className='text-capitalize'> {label} *</label>
      </div>
      <div className="invalid-feedback">
        {t("input.AlertText")}
      </div>
    </div>
  )
}

export default Input;