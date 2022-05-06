import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const navigate = useNavigate();
  const navigateToInventoryDetaills = (id) => {
    navigate(`/inventory/${id}`);
  };
  useEffect(() => {
    const email = user.email;
    fetch(`http://localhost:5000/inventories?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, []);
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
          const remaining = myItems.filter((inventory) => inventory._id !== id);
          setMyItems(remaining);
        });
    }
  };
  return (
    <div style={{ marginBottom: "520px" }}>
      <h2 className="common-color">My Items : {myItems.length}</h2>
      {myItems.map((myItem) => (
        <div className="border w-50 mx-auto m-2 pb-2">
          Inventory Name : {myItem.name} <br /> Quantity : {myItem.quantity}{" "}
          {myItem.quantity === 0 && <span className="text-danger">(Sold)</span>}
          <br />
          <div className="update-btn">
            <button
              onClick={() => navigateToInventoryDetaills(myItem._id)}
              className="btn  rounded-pill"
            >
              Update <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>{" "}
            </button>
            <button
              onClick={() => deleteHandle(myItem._id)}
              className="btn btn-danger bg-danger ms-2"
            >
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyItems;
