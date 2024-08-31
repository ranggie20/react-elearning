import React from "react";

const AdminTransaksi=({user, date, total, statuss}) => {
    return (
        <div className="px-4 py-2">
            <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-primary"> {user} </span>
                <span className="text-primary"> {date} </span>
                <span className="text-primary"> {total} </span>
                <span className="text-accent"> {statuss} </span>
            </div>
        </div>    
    );
};

export default AdminTransaksi