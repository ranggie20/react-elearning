import React from 'react'

const MyProfile=() => {
    return (
        <>
            <div class="slider-area ">
                <div class="single-slider slider-height2 d-flex align-items-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="hero-cap text-center">
                                    <h2>My Profile</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const IsiProfile=() => {
    return(
        <>
            <div className="container">
                <div className="max-w-md mx-auto p-4 bg-card rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-foreground mb-4">
                    Add Information About Yourself
                    </h2>
                    <div className="flex items-center mb-4">
                    <img
                        aria-hidden="true"
                        alt="Profile Picture"
                        src="https://placehold.co/100x100"
                        className="border border-border mr-4"
                        style={{ borderRadius: 999 }}
                    />
                    <label className="text-muted-foreground">Profile</label>
                    </div>
                    <div className="mb-4">
                    <label className="block text-muted-foreground" htmlFor="first-name">
                        First Name
                    </label>
                    <input type="text" id="first-name" className="form-control" />
                    </div>
                    <div className="mb-4">
                    <label className="block text-muted-foreground" htmlFor="last-name">
                        Last Name
                    </label>
                    <input type="text" id="last-name" className="form-control" />
                    </div>
                    <div className="mb-4">
                    <label className="block text-muted-foreground" htmlFor="language">
                        Language
                    </label>
                    <input type="text" id="language" className="form-control" />
                    </div>
                    <div className="mb-4">
                    <label className="block text-muted-foreground" htmlFor="photo">
                        Photo
                    </label>
                    <div className="border border-border rounded-lg p-2 mb-2">
                        <span className="text-muted-foreground">Image Preview</span>
                    </div>
                    <input type="file" />
                    <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg p-2">
                        Add/Change Image
                    </button>
                    </div>
                </div>
            </div>
        </>
    )
}

const ProfilePage=() => {
    return(
        <>
            <MyProfile/>
            <IsiProfile/>
        </>
    )
}

export default ProfilePage