import { faDeleteLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const [inventories, setInventories] = useInventories();
  //delete inventory
  const deleteHandle = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = inventories.filter(
            (inventory) => inventory._id !== id
          );
          setInventories(remaining);
        });
    }
  };
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
                <button
                  onClick={() => deleteHandle(inventory._id)}
                  className="btn btn-danger bg-danger ms-3"
                >
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
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
