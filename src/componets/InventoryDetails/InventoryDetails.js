import { useState } from "react";
import { useParams } from "react-router-dom";
import useInventoryDetails from "../../hooks/useInventoryDetails";
import "./inventoryDetails.css";
const InventoryDetails = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useInventoryDetails(id);
  const [increase, setIncrease] = useState(false);
  //handleUpdateItems button 
  const handleUpdateItems = (event) => {
    let quantity;
    if (inventory.quantity >= 0) {
      if (increase) {
        quantity =
          parseInt(event.target.increaseItems.value) +
          parseInt(inventory.quantity);
        event.target.reset();
      } else {
        quantity = parseInt(inventory.quantity) - 1;
        if (quantity === -1) {
          quantity = 0;
          alert("Item already sold out");
        }
      }
      const updatedQuantity = {
        quantity,
      };
      // send data to the server
      const url = `http://localhost:5000/inventory/${id}`;
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
        });
    } else {
      alert("Item already sold out");
    }
  };
  return (
    <div className="inventory-details container border p-3">
      <h4 className="common-color">{inventory.name} </h4>

      <img
        style={{ width: "250px", height: "150px" }}
        src={inventory.img}
        alt=""
      />
      <p>{inventory.description}</p>
      <div className="inventory-details-information">
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
        className="btn rounded-pill"
        onClick={() => {
          handleUpdateItems();
          setIncrease(false);
        }}
      >
        Delivered
      </button>

      <div className="add-quantity mt-3">
        <form onSubmit={handleUpdateItems}>
          <input
            type="number"
            name="increaseItems"
            placeholder="Add quantity"
            required
          />
          <br />
          <input
            className="btn mt-2 rounded-pill"
            type="submit"
            value="Store Quantity"
            onClick={() => setIncrease(true)}
          />
        </form>
      </div>
    </div>
  );
};

export default InventoryDetails;
