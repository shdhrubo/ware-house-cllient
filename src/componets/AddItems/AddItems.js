import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "./AddItems.css";
const AddItems = () => {
  const handleAddItems = (event) => {
    event.preventDefault();
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
    };

    // send data to the server
    fetch("http://localhost:5000/inventories", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addInventories),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        toast("Inventory added successfully!!!");
        event.target.reset();
      });
  };
  return (
    <div>
      <h2 className="common-color">Add new inventory items</h2>
      <form className="add-form" onSubmit={handleAddItems}>
        <input name="name" type="text" placeholder="Name" />

        <textarea name="description" type="text" placeholder="Description" />

        <input name="supplier" type="text" placeholder="Supplier Name" />
        <input name="img" type="text" placeholder="Image URL" />

        <input name="price" type="text" placeholder="Price" />

        <input name="quantity" type="number" placeholder="Quantity" />

        <input type="submit" value="Add Item" className="btn" />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddItems;
