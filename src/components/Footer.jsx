import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useGlobalState } from "../context/globalcontex";
import { PhotoProvider, PhotoView } from "react-photo-view";

const activities = [
  {
    id: 1,
    title: "Skill Development and Job Placement",
    path: "/Skill Development and Job Placement",
    tagline: "Empowering Futures",
  },
  {
    id: 2,
    title: "Teacher Training",
    path: "/Teacher Training",
    tagline: "Building Excellence in Education",
  },
  {
    id: 3,
    title: "Science Fair and Projects",
    path: "/Science Fair and Projects",
    tagline: "Innovate and Inspire",
  },
  {
    id: 4,
    title: "School Election",
    path: "/School Election",
    tagline: "Leadership in Action",
  },
  {
    id: 5,
    title: "Cultural Programme",
    path: "/Cultural Programme",
    tagline: "Unity in Diversity",
  },
  {
    id: 6,
    title: "Prize Distribution",
    path: "/Prize Distribution",
    tagline: "Celebrating Achievements",
  },
  {
    id: 7,
    title: "Parents Meeting",
    path: "Parents Meeting",
    tagline: "Strengthening Bonds",
  },
  {
    id: 8,
    title: "Matrimonial activities",
    path: "/Matrimonial activities",
    tagline: "Connecting Lives",
  },
  {
    id: 9,
    title: "CSR Activities",
    path: "/CSR Activities",
    tagline: "Empowering Communities",
  },
  {
    id: 10,
    title: "Annual Activities",
    path: "/Annual Activities",
    tagline: "Celebrating Year-Round Excellence",
  },
];

// const latters = [
//   {
//     id: 1,
//     path: "./assets/letters/Kbv The Littele Hands News Letter-1.pdf",
//     title: "News Letter 1",
//   },
//   {
//     id: 2,
//     path: "./assets/letters/Kbv The Littele Hands News Letter-2.pdf",
//     title: "News Letter 2",
//   },
//   {
//     id: 3,
//     path: "./assets/letters/Kbv The Littele Hands News Letter-3.pdf",
//     title: "News Letter 3",
//   },
//   {
//     id: 4,
//     path: "./assets/letters/Kbv The Littele Hands News Letter-4.pdf",
//     title: "News Letter 4",
//   },
//   {
//     id: 5,
//     path: "./assets/letters/Kbv The Littele Hands News Letter-5.pdf",
//     title: "News Letter 5",
//   },
//   {
//     id: 6,
//     path: "./assets/letters/KBV  News Letter - 6.pdf",
//     title: "News Letter 6",
//   },
// ];

const Footer = () => {
  const { setSelectedId } = useGlobalState();
  const openEmail = () => {
    const email = "kbvsite@gmail.com";
    const body = "Hello, KBV";

    // Construct the mailto URL
    const mailtoURL = `mailto:${email}?&body=${encodeURIComponent(body)}`;

    // Open the email client
    window.location.href = mailtoURL;
  };

  return (
    <footer className="footer pt-5 mt-5">
      <div className="container">
        <div className=" row">
          <div className="col-md-3 mb-4 ms-auto">
            <div>
              <a href="javascript:;">
                <PhotoProvider>
                  <PhotoView src={"../assets/img/Trust_logo.jpg"}>
                    <img
                      src="./assets/img/Trust_logo.jpg"
                      className="mb-1"
                      alt="main_logo"
                      style={{ height: "100px", width: "100px" }}
                    />
                  </PhotoView>
                </PhotoProvider>
              </a>
              <h6
                className="font-weight-bolder mb-4"
                style={{ marginLeft: "-38px" }}
              >
                G.D Patel Badhir Vidhyalay
              </h6>
            </div>
            {/* remove margin when more scoailmedi account */}
            <div style={{ marginLeft: "13px" }}>
              <ul className="d-flex flex-row ms-n3 nav">
                {/* <li className="nav-item">
                  <a
                    className="nav-link pe-1"
                    href="https://www.facebook.com/profile.php?id=61565905650204"
                    target="_blank"
                  >
                    <FaFacebook
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </a>
                </li> */}
                <li className="nav-item">
                  <a
                    className="nav-link pe-1"
                    href="javascript:;"
                    onClick={openEmail}
                  >
                    <MdEmail
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link pe-1"
                    href="https://www.youtube.com/@shrigirdharbhaidpatelbadhi9692"
                    target="_blank"
                  >
                    <FaYoutube
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-6 mb-4">
            <div>
              <h6 className="text-sm">Pages</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/about"}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/gallery"}>
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/intrect-club"}>
                    Interact Club
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/infrastructure"}>
                    Infrastructure
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/news-corner"}>
                    News Corner
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-6 mb-4">
            <div>
              <h6 className="text-sm">Activites</h6>
              <ul className="flex-column ms-n3 nav">
                {activities.slice(0, 8).map((item) => (
                  <li className="nav-item" key={item.id}>
                    <Link
                      className="nav-link"
                      to={`/activite`}
                      onClick={() => setSelectedId(item.id)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-6 mb-4">
            <div>
              <h6 className="text-sm">Activites</h6>
              <ul className="flex-column ms-n3 nav">
                {activities.slice(8).map((item) => (
                  <li className="nav-item" key={item.id}>
                    <Link
                      className="nav-link"
                      to={`/activite`}
                      onClick={() => setSelectedId(item.id)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-6 mb-4 me-auto">
            <div>
              <h6 className="text-sm">Reach Us</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <Link className="nav-link" to={"/contact"}>
                    Contact Us
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to={"/volunteers"}>
                    Volunteers
                  </Link>
                </li> */}
              </ul>
            </div>
            {/* <div>
              <h6 className="text-sm">News Letters</h6>
              <ul className="flex-column ms-n3 nav">
                {latters.map((item) => (
                  <li className="nav-item" key={item.id}>
                    <a className="nav-link" href={item.path} target="_blank">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
          <div className="col-12">
            <div className="text-center">
              <p className="text-dark">
                Shree Girdharbhai D Patel Badhir Madhyamik Vidhyalaya
              </p>
              <p className="text-dark">
                Shree Haribhai R Desai Badhir Ucchattar Madhyamik Vidhyalaya
              </p>
              <p className="text-dark">
                {" "}
                Near Bhagini Samaj, Water Tank Road, Karelibaug, Vadodara 390018
              </p>
              <p className="text-dark">Mobile No.: +91 8160135526</p>
              <p className="text-dark">
                School Registration No. SSC : 22650340, HSC : 22150156
              </p>

              <p className="text-dark my-4 text-sm font-weight-normal">
                All rights reserved. Copyright ©{" "}
                <script>document.write(new Date().getFullYear())</script> Rao
                Tech
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
