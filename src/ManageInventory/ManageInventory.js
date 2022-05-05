import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useInventories from "../hooks/useInventories";
import "./ManageInventory.css";
const ManageInventory = () => {
  const id = useParams();
  const navigate = useNavigate();
  const navigateToInventoryDetaills = (id) => {
    navigate(`/inventory/${id}`);
  };
  const [inventories] = useInventories();
  return (
    <div>
      <h3 className="common-color">Inventories</h3>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventories.map((inventory) => (
            <tr>
              <td>{inventory.name}</td>
              <td>{inventory.quantity}</td>
              <td className="update-btn">
                {" "}
                <button
                  onClick={() => navigateToInventoryDetaills(inventory._id)}
                  className="btn mb-2  rounded-pill"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageInventory;
