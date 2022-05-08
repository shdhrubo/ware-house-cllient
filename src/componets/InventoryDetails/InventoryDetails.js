import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useInventoryDetails from "../../hooks/useInventoryDetails";
import "./inventoryDetails.css";
const InventoryDetails = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useInventoryDetails(id);
  const [updateQuantity, setUpdateQuantity] = useState(null);

  //handleUpdateItems button
  const handleUpdateItems = (type, event) => {
    if (inventory.quantity === 0 && !type) {
      return alert("Item already sold out");
    }
    let quantity;
    if (type) {
      quantity = parseInt(updateQuantity) + parseInt(inventory?.quantity);
    } else {
      quantity = parseInt(inventory?.quantity) - 1;
    }
    const updatedQuantity = {
      quantity,
    };
    // send data to the server
    const url = `https://thawing-dawn-14943.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        setInventory({ ...inventory, quantity });
        event && event.target.reset();
      });
  };
  return (
    <div className="inventories-details container border p-3">
      <h4 className="common-color">{inventory.name} </h4>

      <img
        style={{ width: "250px", height: "150px" }}
        src={inventory.img}
        alt=""
      />
      <p>Description: {inventory.description}</p>
      <div className="inventory-details-information">
        <p>ID: {inventory._id}</p>
        <p>Supplier: {inventory.supplier}</p>
        <p>Price: {inventory.price}</p>
        <h6>
          Quantity: {inventory.quantity}{" "}
          {inventory.quantity === 0 ? (
            <span className="text-danger">(Sold)</span>
          ) : (
            ""
          )}
        </h6>
      </div>

      <button
        className="btn rounded-pill mt-3"
        onClick={() => {
          handleUpdateItems(false);
        }}
      >
        Delivered
      </button>

      <div className="add-quantity mt-3">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleUpdateItems(true, event);
          }}
        >
          <input
            type="number"
            name="increaseItems"
            placeholder="Add quantity"
            required
            onChange={(event) => {
              setUpdateQuantity(event.target.value);
            }}
          />
          <br />
          <input
            className="btn mt-2 rounded-pill"
            type="submit"
            value="Store Quantity"
          />
        </form>
        <Link to="/manageinventories">
          <button className="btn mt-3 rounded-pill">Manage Inventories</button>
        </Link>
      </div>
    </div>
  );
};

export default InventoryDetails;
