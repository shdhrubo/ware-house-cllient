import React from "react";
import { Link } from "react-router-dom";
import useInventories from "../../hooks/useInventories";
import Inventory from "../Inventory/Inventory";
import Loading from "../Loading/Loading";
import "./Inventories.css";
const Inventories = () => {
  const [inventories, , loading] = useInventories();
  const slicedInventories = inventories.slice(0, 6);

  return (
    <div>
      <h4 className="common-color mb-2 heading">Inventory Items</h4>

      <div
        className="container-fluid pt-5 pb-4"
        style={{ backgroundColor: "#F9FBFA" }}
      >
        <div className="container ">
          <div className=" row g-4 mx-auto ">
            {loading ? (
              <>
                <p>
                  <i
                    className="bx bx-loader bx-spin"
                    style={{ color: "#5d5d5d" }}
                  ></i>{" "}
                  Loading...
                </p>
              </>
            ) : (
              slicedInventories.map((inventory) => (
                <Inventory
                  key={inventory._id}
                  inventory={inventory}
                ></Inventory>
              ))
            )}
          </div>
          <Link to="/manageinventories">
            <button className="btn mt-3  rounded-pill">
              Manage Inventories
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inventories;
