import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyItem from "../MyItem/MyItem";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  console.log(myItems);
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
    <div>
      <h2 className="common-color">My Items {myItems.length}</h2>
      {myItems.map((myItem) => (
        <h6>
          {myItem.name}{" "}
          <button
            onClick={() => deleteHandle(myItem._id)}
            className="btn btn-danger"
          >
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
        </h6>
      ))}
    </div>
  );
};

export default MyItems;
