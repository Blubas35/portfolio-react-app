import React from "react";

const Footer = () => {

  return (
    <footer className="h-[150px] bg-black">
      <div className="container max-w-[1000px] mx-auto px-8 flex flex-col justify-end items-center h-full text-light-gray pb-10">
        <div className="row">
          <div className="col-md-12">
            <p>&copy; 2023 Domantas Portfolio. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
