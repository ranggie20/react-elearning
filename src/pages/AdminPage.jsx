import React from 'react'

const SectionAdmin = () => {
    return(
        <>
             <div className="container">
                <h1>Tambah Kursus Baru</h1>
                <form>
                    <div className="form-group">
                    <label htmlFor="course-name">Nama Kursus</label>
                    <input
                        type="text"
                        id="course-name"
                        name="course-name"
                        placeholder="Masukkan nama kursus"
                        required=""
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="course-description">Deskripsi</label>
                    <textarea
                        id="course-description"
                        name="course-description"
                        placeholder="Masukkan deskripsi kursus"
                        required=""
                        defaultValue={""}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="course-category">Kategori</label>
                    <select id="course-category" name="course-category" required="">
                        <option value="" disabled="" selected="">
                        Pilih kategori
                        </option>
                        <option value="Desain Grafis">Desain Grafis</option>
                        <option value="Pemrograman">Pemrograman</option>
                        <option value="Pemasaran">Pemasaran</option>
                        {/* Tambahkan kategori lain sesuai kebutuhan */}
                    </select>
                    </div>
                    <div className="form-group">
                    <label htmlFor="course-video">Course Vidio</label>
                    <input
                        type="file"
                        id="course-video"
                        name="course-video"
                        accept="video/*"
                        required=""
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="course-price">Harga (Rp)</label>
                    <input
                        type="number"
                        id="course-price"
                        name="course-price"
                        placeholder="Masukkan harga kursus"
                        required=""
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="course-thumbnail">Thumbnail</label>
                    <input
                        type="file"
                        id="course-thumbnail"
                        name="course-thumbnail"
                        accept="image/*"
                        required=""
                    />
                    </div>
                    <div className="button-group">
                    <button type="submit">Simpan Perubahan</button>
                    <button type="button" className="delete" onclick="confirmDelete()">
                        Hapus Perubahan
                    </button>
                    <a href="teacher.html">Kembali ke Dashboard Teacher</a>
                    </div>
                </form>
             </div>

        </>
    )
    }
const AdminPage=()=>{
    return(
        <>
        <SectionAdmin/>
        </>
    )
}

export default AdminPage