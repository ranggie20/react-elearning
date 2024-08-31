import React from "react";
import AdminTransaksi from "../components/AdminTransaksi";

const ListTransaksi = () => {
    const transaksiItem = [
        {
            user: "Nadiva",
            date: "30-08-2024",
            total: "$ 8",
            statuss: "active"
        },
    ];

    return(
        <div className="container p-4">
            <h1 className="text-xl font-weight-bold">Transaction List</h1>
            <div className="card bg-light rounded-lg shadow overflow-hidden">
                <div className="d-flex align-items-center justify-content-between px-4 py-2 bg-primary text-light">
                    <span className="font-weight-bold">User</span>
                    <span className="font-weight-bold">Date</span>
                    <span className="font-weight-bold">Amount</span>
                    <span className="font-weight-bold">Status</span>
                </div>
                    {transaksiItem.map((item, index) => (
                        <AdminTransaksi
                            key={index}
                            user={item.user}
                            date={item.date}
                            total={item.total}
                            statuss={item.statuss}
                        />
                    ))}
            </div>
        </div>            
    )
}

export default ListTransaksi