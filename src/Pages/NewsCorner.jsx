import React, { useEffect } from "react";
import Header from "../components/Header";
import GallaryPhotos from "./GallaryPhotos";

const images = [
  {
    id: 1,
    title: "Boys' Hostel",
    url: "./assets/img/Hostel/boys hostel.jpg",
  },
  {
    id: 2,
    title: "Girls' Hostel",
    url: "./assets/img/Hostel/girls hostel.jpg",
  },
  {
    id: 3,
    title: "Dining Room",
    url: "./assets/img/Hostel/dining room.jpg",
  },
];

const HostelFacilities = () => {
  useEffect(() => {
    try {
      const toggleDivMain = document.querySelector(".toggle-class");
      const toggleDivActivite = document.querySelector(".activity-toggle");
      const toggleDivAbout = document.querySelector(".about-toggle");
      toggleDivMain.classList.remove("show");
      toggleDivAbout.classList.remove("show");
      toggleDivActivite.classList.remove("show");
      window.scrollTo(0, 0);
      if (window.innerWidth >= 1024) {
        return; // If it's a laptop screen, do nothing and return
      }
      toggleDivAbout.style.height = "";
    } catch (err) {
      // nothing
    }
  }, []);

  return (
    <>
      <Header title={"Hostel Facilities"} />
      <div className="card shadow-xl mx-3 mx-md-4 mt-n6">
        <section className="card-body-gallery pb-5 position-relative bg-gradient-dark mx-n3">
          <div className="container">
            <GallaryPhotos images={images} />
          </div>
        </section>
      </div>
    </>
  );
};

export default HostelFacilities;
