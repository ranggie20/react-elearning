import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginName = () => {
  return (
    <>
      <div className="slider-area ">
        <div className="single-slider slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2>Login</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SectionLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		console.log(email, password);
		e.preventDefault();
	};

  return (
    <>
      <section className="login_part section_padding ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="login_part_text text-center">
                <div className="login_part_text_iner">
                  <h2>Apakah anda sudah mendaftar?</h2>
                  <p>
                    Daftar sekarang dan nikmati akses penuh ke semua fitur dan
                    dan layanan kursus yang akan meningkatkan keterampilan Anda!
                  </p>
                  <Link to="/registrasi" >
										<button className="btn_3">
                    	Daftar sekarang
										</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="login_part_form">
                <div className="login_part_form_iner">
                  <h3>
                    Selamat Datang ! <br />
										Silahkan Login
                  </h3>
                  <form
                    className="row contact_form"
                    action="#"
                    method="post"
                    noValidate="novalidate"
										onSubmit={handleLogin}
                  >
                    <div className="col-md-12 form-group p_star">
											<label htmlFor="name" className="form-label"> Username </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Username"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
											<label htmlFor="password" className="form-label"> Password </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <div className="text-center">
                        <button type="submit" className="btn_3">
                          Login
                        </button>
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
  );
};

const LoginPage = () => {
  return (
    <>
      <LoginName />
      <SectionLogin />
    </>
  );
};

export default LoginPage;
