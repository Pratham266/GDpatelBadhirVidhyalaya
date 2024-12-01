import React, { useEffect } from "react";
import Header from "../components/Header";
import GallaryPhotos from "./GallaryPhotos";

const images = [
  {
    id: 1,
    title: "Award1",
    url: "./assets/img/School Achivements/Best teacher award/Award -1.jpg",
  },
  {
    id: 2,
    title: "Award2",
    url: "./assets/img/School Achivements/Best teacher award/Award -2.jpg",
  },
  {
    id: 3,
    title: "Award3",
    url: "./assets/img/School Achivements/Best teacher award/Award -3.jpg",
  },
  {
    id: 8,
    title: "Award8",
    url: "./assets/img/School Achivements/Marathon.jpg",
  },
  {
    id: 9,
    title: "Award9",
    url: "./assets/img/School Achivements/School Achivement -1.jpg",
  },
  {
    id: 10,
    title: "Award10",
    url: "./assets/img/School Achivements/School Achivement.jpg",
  },
  {
    id: 4,
    title: "Award4",
    url: "./assets/img/School Achivements/Best teacher award/Award -4.jpg",
  },
  {
    id: 5,
    title: "Award5",
    url: "./assets/img/School Achivements/Best teacher award/award.jpg",
  },
  {
    id: 6,
    title: "Award6",
    url: "./assets/img/School Achivements/Khelmahakumbh running winners.jpg",
  },
  {
    id: 7,
    title: "Award7",
    url: "./assets/img/School Achivements/Khelmahakumbh volleyball winners.jpg",
  },
];

const educationalFeatures = {
  id: "School Achievement",
  title: "School Achievement",
  tagline:
    "Showcasing the remarkable accomplishments and milestones achieved by our students, teachers, and school community with pride and dedication.",
  list: [
    {
      id: 1,
      description:
        "Jaya Pawar, a student from the school, was given a cash prize and a certificate by the Hon'ble Chief Minister for securing the highest marks in the disabled category in the H.S.C public examination of the Gujarat Examination Department.",
    },
    {
      id: 2,
      description:
        "The school bagged 2nd position in short play acting in the Cultural Program organized by 'Anamprem'.",
    },
    {
      id: 3,
      description:
        "Puwar Mayur of the school was given an award and a certificate by the Hon'ble Chief Minister for his best performance in Gujarat 'Sahitya Kala'.",
    },
    {
      id: 4,
      description:
        "The National Anthem was presented in Sign Language by 50 students of the school during the opening ceremony of the 'Global Switch Expo', where Hon'ble former Chief Minister Shri Vijaybhai Rupani and former Energy Minister of India Shri Piyush Goyal felicitated the school children.",
    },
    {
      id: 5,
      description:
        "The school cricket team won the Khel Mahakumbha Cricket Tournament organized by the 'All Gujarat Sports Council of the Deaf' in 2008.",
    },
    {
      id: 6,
      description:
        "Two students from the school bagged the first position at the state-level chess game of Khel Mahakumbh.",
    },
    {
      id: 7,
      description:
        "The school's volleyball team won the championship for three consecutive years in the state-level Khel Mahakumbha's 'Volleyball' competition, with three players selected for the National Deaf Volleyball Team and two for the International Deaf Volleyball Team, representing India.",
    },
    {
      id: 8,
      description:
        "At the state level, students from the school secured the first and second positions in sports like shot put, cricket, and running in the Khel Mahakumbh.",
    },
    {
      id: 9,
      description:
        "The school imparted skill enhancement training to students who completed class 12 and provided job opportunities to more than 150 children.",
    },
    {
      id: 10,
      description:
        "The school facilitated the relationships of about 30 deaf couples through alumni and student marriage efforts.",
    },
    {
      id: 11,
      description:
        "Students won gold, silver, and bronze medals in athletics at the district-level Khel Mahakumbh (2022) and were selected for the state-level Khel Mahakumbh deaf athletic competition.",
    },
    {
      id: 12,
      description:
        "The school participated in the longest canvas painting organized at Vadodara for the Guinness Book of Records and received a certificate.",
    },
  ],
};

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
      <Header
        smalTitlte1={"School Achievement"}
        pera={"Celebrating Milestones of Excellence"}
      />
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-auto">
              <h3 className="mt-5 mt-lg-0">{educationalFeatures?.title}</h3>
              <p className="pe-5">{educationalFeatures?.tagline}</p>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
              {educationalFeatures &&
                educationalFeatures.list &&
                educationalFeatures?.list.map((item) => (
                  <div className="p-3 info-horizontal" key={item?.id}>
                    <div
                      className="icon icon-shape  bg-gradient-primary shadow-primary text-center"
                      style={{ height: "20px", width: "20px" }}
                    >
                      <i className="fas fa-ship opacity-10"></i>
                    </div>
                    <div className="description ps-3">
                      <p className="mb-0">{item?.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
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
