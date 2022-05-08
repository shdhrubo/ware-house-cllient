import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const WhyUsDetails = (props) => {
  console.log(props);
  const { service } = props;
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 ">
      <Card>
        <Card.Body>
          <Card.Title className="common-color">{service.name}</Card.Title>
          <Card.Text>{service.description}</Card.Text>
          <Card.Text>
            {" "}
            <Link to="/manageinventories">
              <button className="btn rounded-pill">
                Get Started <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WhyUsDetails;
