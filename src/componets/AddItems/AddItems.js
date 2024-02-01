import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import "./AddItems.css";
const AddItems = () => {
  const [user] = useAuthState(auth);

  const handleAddItems = (event) => {
    event.preventDefault();
    const email = user.email;
    const name = event.target.name.value;
    const description = event.target.description.value;
    const supplier = event.target.supplier.value;
    const img = event.target.img.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const addInventories = {
      name,
      description,
      supplier,
      img,
      price,
      quantity,
      email,
    };

    // send data to the server
    fetch("https://thawing-dawn-14943.herokuapp.com/inventories", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addInventories),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Inventory added successfully!!!");
        event.target.reset();
      });
  };
  return (
    <div>
      <h2 className="common-color">Add new inventory items</h2>
      <form className="add-form" onSubmit={handleAddItems}>
        {/* <input type="email" readOnly value={user.email} /> */}
        <input name="name" type="text" placeholder="Name" required />

        <textarea
          name="description"
          type="text"
          placeholder="Description"
          required
        />

        <input
          name="supplier"
          type="text"
          placeholder="Supplier Name"
          required
        />
        <input name="img" type="text" placeholder="Image URL" required />

        <input name="price" type="text" placeholder="Price" required />

        <input name="quantity" type="number" placeholder="Quantity" required />

        <input type="submit" value="Add Item" className="btn" required />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddItems;
