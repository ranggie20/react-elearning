import React from 'react'

const Regis=() => {
    return(
        <>
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2>Registration</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const IsiRegistrasi=() => {
    return(
        <>
            <section className="login_part section_padding ">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="login_part_text text-center">
                        <div className="login_part_text_iner">
                            <h2>Create your account here</h2>
                            <p>
                            Daftar sekarang dan nikmati akses penuh ke semua fitur dan dan
                            layanan kursus yang akan meningkatkan keterampilan Anda!
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="login_part_form">
                        <div className="login_part_form_iner">
                            <h3>
                            Welcome ! <br />
                            Please Sign up now
                            </h3>
                            <form
                            className="row contact_form"
                            action="#"
                            method="post"
                            noValidate="novalidate"
                            >
                            <div className="col-md-12 form-group p_star">
                                <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                defaultValue=""
                                placeholder="Username"
                                />
                            </div>
                            <div className="col-md-12 form-group p_star">
                                <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                defaultValue=""
                                placeholder="Email"
                                />
                            </div>
                            <div className="col-md-12 form-group p_star">
                                <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                defaultValue=""
                                placeholder="Password"
                                />
                            </div>
                            <div className="col-md-12 form-group p_star">
                                <select className="form-control" id="role" name="role">
                                <option value="" disabled="" selected="">
                                    Select Role
                                </option>
                                <option value="admin">Teacher</option>
                                <option value="user">Student</option>
                                </select>
                            </div>
                            <div className="col-md-12 form-group">
                                <div className="text-center">
                                <a href="/login" className="btn_3">
                                    Sign Up
                                </a>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const RegistrationPage=() => {
    return(
        <>
            <Regis/>
            <IsiRegistrasi/>
        </>
    )
}

export default RegistrationPage
