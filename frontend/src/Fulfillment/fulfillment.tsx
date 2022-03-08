import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function Fulfillment() {
    return (
        <div className="content fulfillment-margined">
            <div className="fulfillment-header">
                <h3>fulfillment</h3>
            </div>
            <div className="fulfillment-list">
                <table className="fulfillmenttable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>USER</th>
                            <th>PAID</th>
                            <th>PAID AT</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.fulfillment.map(fulfillment => (<tr key={fulfillment._id}>
                            <td>{fulfillment._id}</td>
                            <td>{fulfillment.createdAt}</td>
                            <td>{fulfillment.totalPrice}</td>
                            <td>{fulfillment.user.name}</td>
                            <td>{fulfillment.isPaid.toString()}</td>
                            <td>{fulfillment.paidAt}</td>
                            <td>{fulfillment.isShipped.toString()}</td>

                            </tr>))}
                    </tbody>
                </table>
            </div>
        </div>);
};

export default Fulfillment;