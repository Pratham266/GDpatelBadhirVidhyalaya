import React from "react";
import "./css/homecard.scss";
import { useNavigate } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const wellwishers = [
  {
    id: 1,
    img: "./assets/img/home/WellWishers/1.jpg",
  },
  {
    id: 2,
    img: "./assets/img/home/WellWishers/2.jpg",
  },
  {
    id: 3,
    img: "./assets/img/home/WellWishers/3.jpg",
  },
  {
    id: 4,
    img: "./assets/img/home/WellWishers/4.jpg",
  },
  {
    id: 5,
    img: "./assets/img/home/WellWishers/5.jpg",
  },
  {
    id: 6,
    img: "./assets/img/home/WellWishers/6.jpg",
  },
];

const HomeCards = () => {
  const navigate = useNavigate();

  const goToAboutUs = () => {
    navigate("/about");
  };
  return (
    <div className="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="row text-center my-sm-5 mt-5">
              <div className="col-lg-6 mx-auto">
                <span className="badge bg-primary mb-3">Our Well-Wishers</span>
                <h2 className="">Guiding Us Towards a Brighter Future</h2>
                <p className="lead">
                  Our well-wishers play a pivotal role in our school's journey.
                  Their constant support and positive influence guide us as we
                  work to nurture the potential of every student. With their
                  guidance, we are motivated to continue our efforts to create a
                  thriving learning environment.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Carousel
            responsive={responsive}
            // additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={2500}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            rewind={false}
          >
            {wellwishers.map((itm) => (
              <div className="" key={itm.id}>
                <div
                  className="card card-plain"
                  style={{ marginBottom: "10px" }}
                >
                  <div className=" p-0 position-relative">
                    <a
                      className="d-block blur-shadow-image"
                      style={{
                        marginTop: "8px",
                        backgroundColor: "transparent",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        height: "215px",
                        width: "348px",
                        cursor: "pointer",
                      }}
                    >
                      <PhotoProvider>
                        <PhotoView src={itm.img}>
                          <img
                            src={itm.img}
                            alt={`visitor-img-${itm.id}`}
                            className="img-fluid shadow border-radius-lg"
                            loading="lazy"
                            style={{
                              height: "210px",
                              width: "343px",
                              borderRadius: "10px",
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            }}
                          />
                        </PhotoView>
                      </PhotoProvider>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      {/* Our Vision */}

      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12 my-auto">
              <h3 className="text-gradient text-primary mb-0">Our Vision</h3>
              {/* <h3>We at "KBV"</h3> */}
              <p className="pe-md-5 mb-4">
                It is to develop the curiosity of learning in the child, explore
                their interests, encourage them to become independent with rich
                family spirit through skill training with the cooperation of
                parents-teachers.
              </p>
              <div className="github-buttons">
                <a
                  className="btn bg-gradient-primary mb-5 mb-sm-0"
                  onClick={goToAboutUs}
                >
                  Know More
                </a>
                <div className="github-button">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12 my-auto">
              <a>
                <img
                  className="w-100 border-radius-lg shadow-lg"
                  src="./assets/img/home/Founder of school.jpg"
                  alt="Product Image"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12 my-auto">
              <h3 className="text-gradient text-primary mb-0">Our Mission</h3>
              <h3>Our school provides</h3>
              <p className="pe-md-5 mb-4">
                To educate every student/child to the highest levels of academic
                achievement, to recognize the physical, mental, intellectual,
                academic potential in them, to prepare them to be moral,
                sincere, creative and compassionate (citizen) human beings. Our
                mission is to work together to provide children (students) with
                a safe environment, inclusive-all-round education and skills
                acquisition in a family-friendly environment for successful
                re-establishment in the society.
              </p>
              <div className="github-buttons">
                <a
                  className="btn bg-gradient-primary mb-5 mb-sm-0"
                  onClick={goToAboutUs}
                >
                  Know More
                </a>
                <div className="github-button">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12 my-auto">
              <a>
                <img
                  className="w-100 border-radius-lg shadow-lg"
                  src={"./assets/img/home/1.jpg"}
                  alt="Product Image"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5 py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
              <div className="rotating-card-container">
                <div className="card card-rotate card-background card-background-mask-primary shadow-primary mt-md-0 mt-5">
                  <div
                    className="front front-background"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="card-body py-7 text-center">
                      <i className="material-icons text-white text-4xl my-3">
                        touch_app
                      </i>
                      <h3 className="text-white">
                        What Makes Our Schools the Perfect Choice for Your
                        Child?
                      </h3>
                    </div>
                  </div>
                  <div
                    className="back back-background"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80)`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="card-body pt-7 text-center">
                      <h3 className="text-white">
                        Why Our Schools are the Right Fit for Your Child?
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ms-auto">
              <div className="row justify-content-start">
                <div className="col-md-6">
                  <div className="info">
                    <i className="material-icons text-gradient text-primary text-3xl">
                      school
                    </i>
                    <h5 className="font-weight-bolder mt-3">
                      Well Trained Professionals
                    </h5>
                    <p className="pe-3">
                      Our dedicated team of well-trained professionals ensures a
                      top-tier educational experience for every student.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info">
                    <i className="material-icons text-gradient text-primary text-3xl">
                      foundation
                    </i>
                    <h5 className="font-weight-bolder mt-3">
                      Awesome Infra-Structure
                    </h5>
                    <p className="pe-3">
                      Experience learning in our state-of-the-art infrastructure
                      designed to foster creativity and growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-start mt-5">
                <div className="col-md-6 mt-3">
                  <i className="material-icons text-gradient text-primary text-3xl">
                    public{" "}
                  </i>
                  <h5 className="font-weight-bolder mt-3">
                    International Lesson Patterns
                  </h5>
                  <p className="pe-3">
                    We offer globally recognized lesson patterns that prepare
                    students for success on an international stage.
                  </p>
                </div>
                <div className="col-md-6 mt-3">
                  <i className="material-icons text-gradient text-primary text-3xl">
                    nature
                  </i>
                  <h5 className="font-weight-bolder mt-3">
                    Holistic Development Programs
                  </h5>
                  <p className="pe-3">
                    Our holistic development programs nurture every aspect of a
                    child's growth, from academics to personal well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="row text-center my-sm-5 mt-5">
              <div className="col-lg-6 mx-auto">
                <span className="badge bg-primary mb-3">
                  Achievements & Highlights
                </span>
                <h2 className="">Celebrating Our Milestones</h2>
                <p className="lead">
                  Showcasing the moments of excellence and progress from our
                  school community. These photos represent our students' and
                  staff's dedication and achievements across various domains.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8">
              <div className="row mt-4">
                <div className="col-md-6">
                  <div
                    className="card move-on-hover"
                    style={{
                      height: "200px",
                      width: "100%",
                      overflow: "hidden",
                      border: "2px solid #e91e63",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <PhotoProvider>
                      <PhotoView
                        src={
                          "./assets/img/School Achivements/Best teacher award/Award -1.jpg"
                        }
                      >
                        <img
                          src={
                            "./assets/img/School Achivements/Best teacher award/Award -1.jpg"
                          }
                          alt="aboutus"
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "contain",
                            cursor: "pointer",
                          }}
                          // style={{ height: "300px", width: "416px" }}
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                </div>

                <div className="col-md-6 mt-md-0 mt-5">
                  <div
                    className="card move-on-hover"
                    style={{
                      height: "200px",
                      width: "100%",
                      overflow: "hidden",
                      border: "2px solid #e91e63",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <PhotoProvider>
                      <PhotoView
                        src={
                          "./assets/img/School Achivements/Khelmahakumbh running winners.jpg"
                        }
                      >
                        <img
                          src={
                            "./assets/img/School Achivements/Khelmahakumbh running winners.jpg"
                          }
                          alt="contacus"
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "contain",
                            cursor: "pointer",
                          }}
                          // style={{ height: "300px", width: "416px" }}
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                </div>
                <div className="col-md-6 mt-md-3 mt-6">
                  <div
                    className="card move-on-hover"
                    style={{
                      height: "200px",
                      width: "100%",
                      overflow: "hidden",
                      border: "2px solid #e91e63",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <PhotoProvider>
                      <PhotoView
                        src={
                          "./assets/img/School Achivements/Khelmahakumbh volleyball winners.jpg"
                        }
                      >
                        <img
                          src={
                            "./assets/img/School Achivements/Khelmahakumbh volleyball winners.jpg"
                          }
                          alt="author"
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "contain",
                            cursor: "pointer",
                          }}
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                </div>
                <div className="col-md-6 mt-md-3 mt-6">
                  <div
                    className="card move-on-hover"
                    style={{
                      height: "200px",
                      width: "100%",
                      overflow: "hidden",
                      border: "2px solid #e91e63",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <PhotoProvider>
                      <PhotoView
                        src={"./assets/img/School Achivements/Marathon.jpg"}
                      >
                        <img
                          src={"./assets/img/School Achivements/Marathon.jpg"}
                          alt="signin"
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "contain",
                            cursor: "pointer",
                          }}
                          // style={{ height: "300px", width: "416px" }}
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto mt-md-0 mt-5">
              <div
                className="position-sticky"
                style={{ top: "100px !important" }}
              >
                <h4 className="">Triumphs & Honors</h4>
                <h6 className="text-secondary font-weight-normal">
                  Our school takes pride in a range of accomplishments that
                  highlight our students' and staff's exceptional talents. From
                  achieving top ranks in national and regional academic
                  competitions to winning numerous sports trophies, our
                  achievements reflect dedication and teamwork. We also
                  celebrate vibrant cultural performances and exhibitions
                  throughout the year, alongside impactful community service
                  projects that embody our commitment to making a positive
                  difference.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- -------- START Content Presentation Docs ------- --> */}
      <div className="container mt-sm-5">
        <div
          className="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
          style={{
            backgroundImage: `url('./assets/img/school/home/cul1.jpeg')`,
          }}
          loading="lazy"
        >
          <span className="mask bg-gradient-dark"></span>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ms-lg-5">
                <h1 className="text-white">Hearing Hope</h1>
                <p className="lead text-white opacity-8">
                  Empowering hearing-impaired children through education,
                  vocational training, and comprehensive care
                </p>
                <a
                  href="#"
                  className="text-white icon-move-right"
                  onClick={goToAboutUs}
                >
                  more
                  <i className="fas fa-arrow-right text-sm ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mt-2">
            <div className="info-horizontal bg-gradient-primary border-radius-xl d-block d-md-flex p-4">
              <i className="material-icons text-white text-3xl">favorite</i>

              <div className="ps-0 ps-md-3 mt-3 mt-md-0">
                <h5 className="text-white">Support</h5>
                <p className="text-white">
                  Providing essential love, and care for hearing-impaired
                  students, ensuring their well-being and holistic development.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-2">
            <div className="info-horizontal bg-gradient-primary border-radius-xl d-block d-md-flex p-4">
              <i className="material-icons text-white text-3xl">school</i>
              <div className="ps-0 ps-md-3 mt-3 mt-md-0">
                <h5 className="text-white">Education</h5>
                <p className="text-white">
                  Offering primary education and vocational training in
                  tailoring, candle making, and handicrafts.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-2">
            <div className="info-horizontal bg-gradient-primary border-radius-xl d-block d-md-flex p-4">
              <i className="material-icons text-white text-3xl">star</i>
              <div className="ps-0 ps-md-3 mt-3 mt-md-0">
                <h5 className="text-white">Achievements</h5>
                <p className="text-white">
                  Celebrating district, state, and national awards and
                  recognizing government support and grants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- -------- END Content Presentation Docs ------- --> */}
      <section className="py-sm-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-2">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/s9lGS6Kly-o?si=aDDx9a2rID8_Dp2l"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="col-lg-4 mt-2">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/whTzijBjodA?si=Y5e8TCMA2eI-HYjN"
                  width="560"
                  height="314"
                  style={{ border: "none", overflow: "hidden" }} // Corrected style prop
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  title="Facebook Video"
                />
              </div>
            </div>
            <div className="col-lg-4 mt-2">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/nfMgPL6fgdo?si=NGK2rTTrmVVdWrxN"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-4 mt-2">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/BdW-c6h-qpI?si=UYLbQttgvdpQIJd5"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCards;
