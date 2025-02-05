import React, { useEffect } from "react";
import Header from "../components/about/Header";
import "./About.scss";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const values = {
  id: "value",
  title: "Our values",
  tagline:
    " Empowering Every Student to Achieve Their Dreams. Ensuring Quality Education and Communication Options for All.",
  list: [
    { id: 1, description: "Our students are individuals" },
    {
      id: 2,
      description: "Our students have the potential to realize their dreams",
    },
    {
      id: 3,
      description:
        "Our students with a hearing loss should have a variety of communication options",
    },
    { id: 4, description: "Our staff members are dedicated" },
    { id: 5, description: "An informed parent is a child’s best educator" },
    {
      id: 6,
      description:
        "Our students with a hearing loss have the ability to become literate and educated and contribute to the community",
    },
    {
      id: 7,
      description:
        "Our students with a hearing loss deserve to receive a quality education equivalent to their hearing peers",
    },
  ],
};
const educationalFeatures = {
  id: "feature",
  title: "Educational features",
  tagline:
    "Comprehensive Support for Holistic Learning. Empowering Students with Specialized Educational Features.",
  list: [
    { id: 1, description: "Speech and speech reading training" },
    {
      id: 2,
      description:
        "Free audiograms and hearing aids, and hearing aids accessories",
    },
    { id: 3, description: "Auditory training" },
    { id: 4, description: "Communication mode – Total Communication" },
    { id: 5, description: "Development of language & communication skills" },
    {
      id: 6,
      description:
        "Organize sign language workshops for parents and other people",
    },
    {
      id: 7,
      description: "Individual counseling of parents and deaf students",
    },
    {
      id: 8,
      description:
        "Working with BTE (hearing aid), speech trainer, smart class, computer lab, audio-video devices",
    },
    { id: 9, description: "Holistic education and holistic evolution" },
    {
      id: 10,
      description: "Free school uniform, school shoes-socks, students' diary",
    },
  ],
};

const About = () => {
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
        title={"Empowering Voices, Enriching Lives"}
        subTitle={`"Where Every Sound Matters and Every Silence Speaks Volumes"`}
      />
      <div className="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="info">
                      <i
                        className="material-icons text-3xl text-gradient text-info mb-3"
                        style={{
                          backgroundImage:
                            "linear-gradient(195deg, #D81B60, #D81B60)",
                        }}
                      >
                        public
                      </i>
                      <h5>Vision</h5>
                      <p>
                        It is to develop the curiosity of learning in the child,
                        explore their interests, encourage them to become
                        independent with rich family spirit through skill
                        training with the cooperation of parents-teachers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mt-4">
                  <div className="col-md-12">
                    <div className="info">
                      <i
                        className="material-icons text-3xl text-gradient text-info mb-3"
                        style={{
                          backgroundImage:
                            "linear-gradient(195deg, #D81B60, #D81B60)",
                        }}
                      >
                        payments
                      </i>
                      <h5>Mission</h5>
                      <p>
                        To educate every student/child to the highest levels of
                        academic achievement, to recognize the physical, mental,
                        intellectual, academic potential in them, to prepare
                        them to be moral, sincere, creative and compassionate
                        (citizen) human beings. Our mission is to work together
                        to provide children (students) with a safe environment,
                        inclusive-all-round education and skills acquisition in
                        a family-friendly environment for successful
                        re-establishment in the society.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ms-auto mt-lg-0 mt-4">
                <div className="card">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <PhotoProvider>
                        <PhotoView
                          src={`./assets/img/School Achivements/Best teacher award/Award -2.jpg`}
                        >
                          <img
                            src={`./assets/img/School Achivements/Best teacher award/Award -2.jpg`}
                            alt="img-colored-shadow"
                            className="img-fluid border-radius-lg"
                          />
                        </PhotoView>
                      </PhotoProvider>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="row text-center my-sm-5 mt-5">
                <div className="col-lg-6 mx-auto">
                  <h2 className="">About Us</h2>
                  <h6 className="text-secondary font-weight-normal">
                    A child, who has not known the sound of “ Mother” and her
                    love, a child who has not listened the sweet stories of
                    grandmother , who has not listened the melodies voice of
                    birds. Who has not heard the singing bell of prayer, song of
                    streams , echo of valleys and music of words. These hearing
                    impaired students required love and affection, protective
                    environment and care. They do not want pity but need support
                    and help.
                  </h6>
                  <h6 className="text-secondary font-weight-normal mt-4">
                    To justify this slok and Nobel aim of
                    <b> The MOOK DHWANI TRUST , VADODARA</b> has established the
                    <b>SMT. KAMLABEN BADHIR VIDHYALAYA</b> IN 1974. In 1991{" "}
                    <b>Smt. Shardaben H. Desai Badhir Hostel</b> built to
                    provide free accommodation with all required facilities.
                    Recently, there are 121 hearing impaired students in the
                    school. Out of this 50 hearing impaired boys and girls
                    receive free staying and food services. In the school,
                    hearing impaired students are provided primary education and
                    vocational training. For the overall development of hearing
                    impaired students in our institution, along with education,
                    small cottage industries training like tailoring, Candle
                    making, and handicraft items training are provided in our
                    institution. Over and above, for the cultural and physical
                    development of children, at District and At State level,
                    different competitions are organized. Because of same,
                    institutional hearing impaired students have achieved
                    District level, State level and National level awards &
                    medals.
                  </h6>
                  <p className="lead mt-2">
                    मूकं करोति वाचालं पंगुं लंघयते गिरिं।
                    <br />
                    यत्कृपा तमहं वन्दे परमानंद माधवम्।।
                  </p>
                  <h6 className="text-secondary font-weight-normal">
                    Government of Gujarat generously donated for school building
                    2125 Sq.mt. and for hostel building 1254 Sq.mt. land .The
                    school and hostel building has been constructed in the same
                    land. Our school and hostel has been given permanent
                    recognition by Social Defense Department, gandhinagar ,
                    government of Gujarat. Therefore{" "}
                    <b>
                      100% Grant for wage payment and 90% grant for contingency
                      expenses are given by the Social Defiance Department of
                      Gujarat state.
                    </b>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-5 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto">
                <h4>We believe that</h4>
                <p className="mb-4">
                  Education is a responsibility shared by the students, family,
                  school and community.
                </p>
                <p className="mb-4">
                  {" "}
                  The development of the whole person socially, physically,
                  culturally and emotionally is imperative to lifelong success.{" "}
                </p>
                <p className="mb-4">
                  Creating an environment the empowers academic achievement,
                  enables communication and enriches social engagement.{" "}
                </p>
                <p className="mb-4">
                  {" "}
                  Using both proven and innovative programming along with
                  current technologies and nurturing students in mind, body and
                  spiritedness culminating in self awareness, cultural identity
                  and pride.{" "}
                </p>
                <p className="mb-4">
                  {" "}
                  A barrier free communication environment, which values both
                  ISL (Indian Sign Language) , English , Hindi and Gujarati
                  Languages on an equal basis, promotes a higher level of
                  academic achievement.{" "}
                </p>
                <p className="mb-4">
                  The educational and social experience provide for students at
                  KBV will assure more independent, productive and contributing
                  citizens.{" "}
                </p>{" "}
                <p className="mb-4">
                  The continued evaluation of our educational programs and
                  students is necessary in order to design and implement
                  positive educational approaches to increase student’s
                  achievement.{" "}
                </p>
              </div>

              <div className="col-md-5 ms-auto">
                <div className="position-relative">
                  <PhotoProvider>
                    <PhotoView
                      src={`./assets/img/School Achivements/School Achivement -1.jpg`}
                    >
                      <img
                        className="max-width-50 w-100 position-relative z-index-2"
                        src={`./assets/img/School Achivements/School Achivement -1.jpg`}
                        alt="image-dhabakara-2"
                      />
                    </PhotoView>
                  </PhotoProvider>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 my-auto">
                <h3 className="mt-5 mt-lg-0">{values?.title}</h3>
                <p className="pe-5">{values?.tagline}</p>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
                {values &&
                  values.list &&
                  values?.list.map((item) => (
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

        {/* <section className="my-5 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 my-auto">
                <h3 className="mt-5 mt-lg-0">Educational features</h3>
                <p className="pe-5">
                  Comprehensive Support for Holistic Learning. Empowering
                  Students with Specialized Educational Features.
                </p>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
                {educationalFeatures.map((feature) => (
                  <div className="p-3 info-horizontal" key={feature.id}>
                    <div className="icon icon-shape  bg-gradient-primary shadow-primary text-center">
                      <i className="fas fa-ship opacity-10"></i>
                    </div>
                    <div className="description ps-3">
                      <p className="mb-0">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="my-5 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto">
                <h4>Stay Updated</h4>
                <p className="mb-4">
                  Subscribe to our newsletter to receive the latest news and
                  updates from our school.
                </p>
                <div className="row">
                  <div className="col-8">
                    <div className="input-group input-group-outline">
                      <label className="form-label">Email Here...</label>
                      <input type="text" className="form-control mb-sm-0" />
                    </div>
                  </div>
                  <div className="col-4 ps-0">
                    <button
                      type="button"
                      className="btn bg-gradient-info mb-0 h-100 position-relative z-index-2"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-5 ms-auto">
                <div className="position-relative">
                  <img
                    className="max-width-50 w-100 position-relative z-index-2"
                    src="./assets/img/school/gallery/40.jpg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default About;
