import React from "react";
import "./App.css"

const Table = ({ data }) => {



    return (
        <table>
            <thead style={{ background: 'green' }}>
                <tr >
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => {
                   return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                        </tr>
                })}
            </tbody>
        </table>

    )

}
export default Table;