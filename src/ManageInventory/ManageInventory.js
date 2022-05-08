import { faEdit, faTrash, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Table } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import useInventories from "../hooks/useInventories";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../firebase.init";

import "./ManageInventory.css";
const ManageInventory = () => {
  // const [user] = useAuthState(auth);

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
      const url = `https://thawing-dawn-14943.herokuapp.com/inventory/${id}`;
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
      <span></span>
      <Table striped bordered hover className="container">
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
                  className="btn  rounded-pill"
                >
                  Update <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
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
      <div className="update-btn">
        <Link to="/additems">
          <button className="btn mt-3  rounded-pill">Add Items</button>
        </Link>
      </div>
    </div>
  );
};

export default ManageInventory;
