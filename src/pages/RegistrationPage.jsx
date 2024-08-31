import React, { useState } from "react";
import { Link } from "react-router-dom";

const PageHeader = () => {
  return (
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
  );
};

const PageContent = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("");

	const handleRegister = (e) => {
		console.log(name, email, password, role);
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
                  <h2>Buat akun baru kamu di sini</h2>
                  <p>
                    Daftar sekarang dan nikmati akses penuh ke semua fitur dan
                    dan layanan kursus yang akan meningkatkan keterampilan Anda!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="login_part_form">
                <div className="login_part_form_iner">
                  <h3>
                    Selamat Datang ! <br />
                    Daftar disini
                  </h3>
                  <form
                    className="row contact_form"
                    action="#"
                    method="post"
                    noValidate="novalidate"
										onSubmit={handleRegister}
                  >
                    <div className="col-md-12 form-group p_star">
											<label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Username"
												onChange={(e) => setName(e.target.value)}
												value={name}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
											<label htmlFor="email" className="form-label">Email</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
												onChange={(e) => setEmail(e.target.value)}
												value={email}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
											<label htmlFor="password" className="form-label">Password</label>
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
												onChange={(e) => setPassword(e.target.value)}
												value={password}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
											<label htmlFor="role" className="form-label">Pilih Role</label>
                      <select 
												id="role" 
												className="form-control" 
												name="role" 
												onChange={(e) => setRole(e.target.value)} 
												value={role}
												>
                        <option disabled value="">
                          Select Role
                        </option>
                        <option value="admin">Teacher</option>
                        <option value="user">Student</option>
                      </select>
                    </div>
                    <div className="col-md-12 form-group">
                      <div className="text-center">
												<button type="submit" className="btn_3" >
                          Sign Up
												</button>
                      </div>
                    </div>
										
										<p>
											Sudah memiliki akun ? 
											<Link to="/login" className="link" style={{marginLeft: '5px'}} >Login sekarang</Link>
										</p>
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

const RegistrationPage = () => {
  return (
    <>
      <PageHeader />
      <PageContent />
    </>
  );
};

export default RegistrationPage;
