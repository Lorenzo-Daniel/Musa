import React, { useState, useRef, useEffect } from "react";
import Input from "../FormComponent/Input";
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'
import FormButton from "../FormComponent/FormButton";
import { useSwalContext } from '../../context/swalCotext'
import broken_pot from '../../images/diseño/broken pot.svg'



function NewsletterForm() {
    const { popUpForm } = useSwalContext()
    const [t] = useTranslation("global");
    const form = useRef();
    const [name, setName] = useState();
    const [invalidName, setInvalidName] = useState(true);
    const [email, setEmail] = useState();
    const [invalidEmail, setInvalidEmail] = useState(true);
    const [changeBtnValue, setChangeBtnValue] = useState(true)

    const getNombre = (e) => {
        setName(e.target.value);
    }
    const getEmail = (e) => {
        setEmail(e.target.value);
    }

    useEffect(() => {
        if (name !== undefined && name.length === 0) {
            setInvalidName(false)
        } else { setInvalidName(true) }
        if (email !== undefined && email.length === 0) {
            setInvalidEmail(false)
        } else { setInvalidEmail(true) }
    }, [name, email]);

    const validarCampos = (e) => {
        e.preventDefault();
        if (!name) {
            setInvalidName(false);
        } else if (!email) {
            setInvalidEmail(false);
        }
        else {
            setChangeBtnValue(false)
            emailjs.sendForm('form_newsletter', 'template_e72zduq', form.current, '4arb9l-QtOeeHFACD')
                .then(() => {
                    setChangeBtnValue(true)
                    setName(!name);
                    setEmail(!email);
                    popUpForm(t("popUpText.newsOk"),t("popUpText.button"))
                    form.current.reset();
                }, () => {
                    setChangeBtnValue(true)
                    setName(!name);
                    setEmail(!email);
                    popUpForm(t("popUpText.error"),t("popUpText.button"),broken_pot)
                    form.current.reset();
                });
        }
    }

    return (
        <form ref={form} onSubmit={validarCampos} className="d-flex flex-column flex-md-row justify-content-between gap-4 ">
            <div className="col-md-4">
                <Input campoInvalido={invalidName} valorInput={getNombre} name={'nombre'} type={'text'} label={t("input.LabelNombre")} />
            </div>
            <div className="col-md-4">
                <Input campoInvalido={invalidEmail} valorInput={getEmail} name={'email'} type={'email'} label={t("input.LabelEmail")} />
            </div>
            <div className="col-md-3">
                <FormButton changeBtnValue={changeBtnValue} initialValue = {t("newsletterBtnValue.static")} sendingValue ={t("newsletterBtnValue.send")} />
            </div>
        </form>
    )
}

export default NewsletterForm;