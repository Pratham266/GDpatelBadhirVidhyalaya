import React from "react";

const Header = ({ smalTitlte2, smalTitlte1, pera }) => {
  return (
    <header className="header-2">
      <div
        className="page-header min-vh-75 relative"
        style={{
          backgroundImage: `url('./assets/img/school.jpg')`,
          backgroundPosition: "center",
        }}
      >
        <span className="mask bg-gradient-primary opacity-4"></span>
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="row">
            <div className="col-lg-7 text-center mx-auto">
              <h1 className="text-white pt-3 mt-n5">
                {smalTitlte1}
                <br />
                {smalTitlte2}
              </h1>
              {pera && <p className="lead text-white mt-3">{pera}</p>}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
