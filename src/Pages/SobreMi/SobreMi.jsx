import React, { useState } from "react";
import campoDeGirasoles from '../../images/girasoles.jpg';
import pintandoBouquet from '../../images/pintando bouquet de flores acuarela_mod.jpg'
import { useTranslation } from "react-i18next";

const SobreMi = () => {
    const [t] = useTranslation("global")
    const [showHide, setShowHide] = useState('');

    const onResize = () => {
        if (window.innerWidth < 768) {
            setShowHide(true)
        } else {
            setShowHide(false)
        }
    }
    window.addEventListener('resize', onResize)

    return (
        <div>
            <h1 className={
                !showHide
                    ? "d-flex m-auto col-md-11 col-lg-10 col-xl-8 col-xxl-7 fs-3 mt-5 mb-3 ps-2 arvo"
                    : "visually-hidden"}>
                {t("sobreMi.titulo")}
            </h1>
            <div className="d-flex flex-column flex-lg-row-reverse justify-content-start mb-lg-5 overflow-hidden">
                <div className="col-lg-7 col-xxl-6 ">
                    <img src={campoDeGirasoles} alt="campo de girasoles" className="w-100 girasoles-img" />

                </div>
                <div className="d-flex justify-content-center align-items-center mb-5 mb-lg-0 col-lg-5 col-xl-4 col-xxl-2 ">
                    <div className="col-11 col-md-10 col-lg-11 p-3 text-box">
                        <h1 className={showHide
                            ? "fs-3 mb-3 arvo"
                            : 'visually-hidden'
                        }>
                            {t("sobreMi.titulo")}
                        </h1>
                        <h6 className="fw-bold mb-2 mt-2 arvo" >
                            {t("sobreMi.h61")}
                        </h6>
                        <p className="lh-md">
                            {t("sobreMi.p1")}
                        </p>
                        <h6 className="fw-bold mb-2 arvo">
                            {t("sobreMi.h62")}
                        </h6>
                        <p className="mb-2 lh-md">
                            {t("sobreMi.p2")}
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-start pb-lg-5 overflow-hidden">
                <div className="col-lg-6 col-xxl-7">
                    <img src={pintandoBouquet} alt="campo de girasoles" className="w-100 img-fluid bouquet-img" />
                </div>
                <div className="d-flex justify-content-center align-items-center col-lg-6 col-xl-6 col-xxl-5 ">
                    <div className="col-11 col-md-10 col-lg-11 p-3 text-box-left ">
                        <h6 className="fw-bold mb-3 arvo" >
                            {t("sobreMi.h63")}
                        </h6>
                        <p className="lh-md">
                            {t("sobreMi.p3")}
                        </p>
                        <h6 className="fw-bold arvo">
                            {t("sobreMi.h64")}
                        </h6>
                        <p className="mb-0 lh-md">
                            {t("sobreMi.p4")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SobreMi;
