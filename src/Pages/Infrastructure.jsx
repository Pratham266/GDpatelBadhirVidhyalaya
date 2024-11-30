import React, { useEffect } from "react";
import Header from "../components/about/Header";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const specialtiesData = [
  {
    id: 1,
    title: "Contemporary School Building",
    description:
      "Air-lighted classrooms with seating arrangements and modern-day blackboards.",
  },
  {
    id: 2,
    title: "Sports Equipment & Modern Facilities",
    description:
      "Includes modern drinking water systems and sanitation facilities.",
  },
  {
    id: 3,
    title: "Annual Planner",
    description:
      "An annual planner for studies, activities, and exams is provided from the beginning of the year.",
  },
  {
    id: 4,
    title: "Organized Teaching",
    description:
      "Teaching work is organized systematically as per the timetable by experts and qualified teachers.",
  },
  {
    id: 5,
    title: "Balanced Co-curricular Activities",
    description:
      "Co-curricular activities build values and personality alongside systematic quality teaching.",
  },
  {
    id: 6,
    title: "Cultural & Sports Events",
    description:
      "Celebration of festivals, cultural events, and various competitions for city and district-level preparation.",
  },
  {
    id: 7,
    title: "Educational Visits & Exhibitions",
    description:
      "Intelligence tests, math-science exhibitions, and visits to banks, post offices, and other schools.",
  },
  {
    id: 8,
    title: "Smart Classrooms & Labs",
    description:
      "Use of audio/video equipment in education along with smart classrooms and required laboratories.",
  },
  {
    id: 9,
    title: "Exam Guidance",
    description:
      "Result-oriented guidance is provided to students and parents of classes 10 and 12.",
  },
  {
    id: 10,
    title: "Medical Camps",
    description: "Medical camps are organized every year.",
  },
  {
    id: 11,
    title: "Separate Hostel Facilities",
    description: "Separate hostel facilities are available for boys and girls.",
  },
  {
    id: 12,
    title: "Business Fairs",
    description: "Organization of business fairs for practical exposure.",
  },
  {
    id: 13,
    title: "Life Partner Selection Assistance",
    description:
      "Cooperation and mediation services for life partner selection are provided.",
  },
];

const images = [
  "./assets/img/specialties/classroom.jpg",
  "./assets/img/specialties/computer lab.jpg",
  "./assets/img/specialties/library.jpg",
  "./assets/img/specialties/play ground.jpg",
  "./assets/img/specialties/science lab.jpeg",
  "./assets/img/specialties/stage.jpg",
  "./assets/img/specialties/water facelities.jpg",
];

const Infrastructure = () => {
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
        title={"Specialties and Facilities"}
        subTitle={`"Empowering Learning through Advanced Facilities"`}
      />
      <section className="my-5">
        <div className="container">
          <div className="row">
            {/* Left: Content */}
            <div className="col-md-6">
              {specialtiesData.map((item) => (
                <div className="mb-4" key={item.id}>
                  <h5 style={{ fontWeight: "600" }}>{item.title}</h5>
                  <p className="mb-0">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Right: Images */}
            <div className="col-md-6">
              <PhotoProvider>
                <div className="row">
                  {images.map((image, index) => (
                    <div className="col-lg-6 col-md-12 mb-4" key={index}>
                      <PhotoView src={image}>
                        <img
                          className="w-100"
                          src={image}
                          alt={`Specialty-${index + 1}`}
                          style={{
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            cursor: "pointer",
                          }}
                        />
                      </PhotoView>
                    </div>
                  ))}
                </div>
              </PhotoProvider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Infrastructure;
