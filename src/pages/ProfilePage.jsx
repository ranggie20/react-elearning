import React, { useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle'
import axios from '../api/axios';
import Swal2 from "sweetalert2";

const SectionProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [foto, setFoto] = useState('')
    
    const [newfoto, setNewFoto] = useState('')
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData()
        
        formData.append("nama", name)
        formData.append("email", email)

        if (foto) {
            formData.append("photo", newfoto)
        }

        try {
            await axios.post("/user/profile", formData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })

            Swal2.fire({
                icon: "success",
                title: "Update profil berhasil",
                customClass: {
                  confirmButton: "btn btn-success",
                  cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
            })
        } catch (e) {
            console.error(e)
        }
    };

    const handlePhotoChange = (event) => {
        const selectedPhoto = event.target.files[0];
        setNewFoto(selectedPhoto);
    };

    const fetchUserInfo = async () => {
        try {
            const response = await axios.get("/user/user-info")

            setName(response.data.data.nama)
            setEmail(response.data.data.email)
            setFoto(response.data.data.photo)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchUserInfo()
    }, [])

    return(
        <>
            <div className="container">
                <div className="max-w-md mx-auto p-4 bg-card rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-foreground mb-4">
                    Add Information About Yourself
                    </h2>
                    <div className="flex items-center mb-4">
                        { foto ? (
                            <img
                                aria-hidden="true"
                                alt="Profile Picture"
                                src={`${import.meta.env.VITE_API_URL}/${foto}`}
                                className="border border-border mr-4"
                                style={{ borderRadius: 999, maxWidth: "100px", maxHeight: "100px" }}
                            />
                        ) : "" }
                        <label className="text-muted-foreground">Profile</label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-muted-foreground" htmlFor="first-name">
                            Name
                        </label>
                        <input 
                        type="text" 
                        id="first-name" 
                        className="form-control" 
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-muted-foreground" htmlFor="last-name">
                            Last Name
                        </label>
                        <input 
                        type="text" 
                        id="last-name" 
                        className="form-control" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <div className="block text-muted-foreground mb-2">Photo</div>
                        <label className="block text-muted-foreground" htmlFor="photo">
                                <input type="file" onChange={handlePhotoChange} accept='image/png,image/jpeg' />  
                        </label>                         
                    </div>
                    <button
                        className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg p-2"
                        onClick={handleSubmit}
                        >
                        Submit
                    </button>
                </div>               
            </div>
        </>
    )
}


const ProfilePage=() => {
    return(
        <>
            <PageTitle title={'Profil'}/>
            <SectionProfile/>
        </>
    )
}

export default ProfilePage