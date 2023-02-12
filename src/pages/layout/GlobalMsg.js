import React from "react";
import Container from "react-bootstrap/Container";

const GlobalMsg = () => {
  return (
    <div className="bg-dark text-white">
      <Container className="d-flex justify-content-between p-1 ">
        <div>
          <i class="fa-solid fa-phone-volume"></i> Call 1300 myshop
        </div>
        <div>
          <a href="#!">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#!">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default GlobalMsg;
