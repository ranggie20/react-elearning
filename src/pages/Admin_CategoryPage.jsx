import React from 'react'

const SectionAdminCategory=()=>{
   return(
          <div className="container">
            <h2 className="text-center"> Manage Course Categories</h2>
            <div id="categoryList">
                <div className="category-item">
                <h5>Category 1</h5>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Category Name"
                    id="categoryName1"
                    fdprocessedid="f5ux6a"
                    style={{ marginBottom: 10 }}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Icon Path"
                    id="iconPath1"
                />
                </div>
            </div>
            <div className="button-group">
                <button type="submit">Simpan Perubahan</button>
                <button type="button" className="delete" onclick="confirmDelete()">
                Hapus Perubahan
                </button>
                <a href="admin_dashboard.html">Kembali ke Dashboard Admin</a>
            </div>
         </div>
   ) 
}

const Admin_Categorypage=()=>{
    return(
        <>
        <SectionAdminCategory/>
        </>
    )
}

export default Admin_Categorypage