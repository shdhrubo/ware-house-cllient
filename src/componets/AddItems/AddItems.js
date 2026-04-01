import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faAlignLeft, faTruck, faImage, faTags, faHashtag, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../LogIn/Auth.css";

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

    fetch("https://warehouse-9jcz.onrender.com/inventories", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addInventories),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Inventory added successfully!");
        event.target.reset();
      });
  };

  return (
    <div className="auth-page">
      <div className="auth-glow"></div>
      <div className="auth-container" style={{ maxWidth: "540px" }}>
        <div className="auth-card glass-card">
          <div className="auth-header text-center">
            <span className="section-badge"><FontAwesomeIcon icon={faPlus} style={{ marginRight: 6 }} /> New Item</span>
            <h2 className="section-title" style={{ fontSize: "1.8rem" }}>Add Inventory</h2>
            <p className="auth-subtitle">Fill in the details for the new product</p>
          </div>

          <form className="auth-form" onSubmit={handleAddItems}>
            <div className="auth-input-group">
              <span className="input-icon"><FontAwesomeIcon icon={faBox} /></span>
              <input name="name" type="text" placeholder="Product Name" required className="auth-input" />
            </div>

            <div className="auth-input-group" style={{ alignItems: "flex-start", paddingTop: "12px" }}>
              <span className="input-icon" style={{ marginTop: "4px" }}><FontAwesomeIcon icon={faAlignLeft} /></span>
              <textarea
                name="description"
                placeholder="Product Description"
                required
                className="auth-input"
                style={{ resize: "none", minHeight: "80px", padding: "0 0 12px 0" }}
              />
            </div>

            <div className="auth-input-group">
              <span className="input-icon"><FontAwesomeIcon icon={faTruck} /></span>
              <input name="supplier" type="text" placeholder="Supplier Name" required className="auth-input" />
            </div>

            <div className="auth-input-group">
              <span className="input-icon"><FontAwesomeIcon icon={faImage} /></span>
              <input name="img" type="text" placeholder="Image URL (http://...)" required className="auth-input" />
            </div>

            <div style={{ display: "flex", gap: "16px" }}>
              <div className="auth-input-group" style={{ flex: 1 }}>
                <span className="input-icon"><FontAwesomeIcon icon={faTags} /></span>
                <input name="price" type="number" step="0.01" placeholder="Price ($)" required className="auth-input" />
              </div>

              <div className="auth-input-group" style={{ flex: 1 }}>
                <span className="input-icon"><FontAwesomeIcon icon={faHashtag} /></span>
                <input name="quantity" type="number" placeholder="Quantity" required className="auth-input" />
              </div>
            </div>

            <div className="auth-actions" style={{ marginTop: "16px" }}>
              <button type="submit" className="btn-primary-custom w-100 justify-content-center">
                Add to Database
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default AddItems;
