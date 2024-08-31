import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const SectionProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [language, setLanguage] = useState('');
    const [foto,setFoto] = useState('')
    
    const [newfoto,setNewFoto] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted:', { firstName, lastName, language, newfoto });
      };

      const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setNewFoto(selectedPhoto);
  };

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
                                src={foto}
                                className="border border-border mr-4"
                                style={{ borderRadius: 999 }}
                            />
                            <label className="text-muted-foreground">Profile</label>
                        </div>
                        <div className="mb-4">
                            <label className="block text-muted-foreground" htmlFor="first-name">
                                First Name
                            </label>
                            <input 
                            type="text" 
                            id="first-name" 
                            className="form-control" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className="mb-4">
                        <label className="block text-muted-foreground" htmlFor="last-name">
                            Last Name
                        </label>
                        <input 
                        type="text" 
                        id="last-name" 
                        className="form-control" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-muted-foreground" htmlFor="language">
                            Language
                        </label>
                        <input 
                        type="text" 
                        id="language" 
                        className="form-control" 
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}/>
                    </div>
                    <div className="mb-4">
                        <div className="block text-muted-foreground mb-2">Photo</div>
                            <label className="block text-muted-foreground" htmlFor="photo">
                                 <input type="file" onChange={handlePhotoChange} />  
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