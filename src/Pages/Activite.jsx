import React, { useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useGlobalState } from "../context/globalcontex";

const activities = [
  {
    id: 1,
    title: "Skill Development and Job Placement",
    description:
      "Skill Development and Job Placemen empowers individuals through hands-on training and industry-relevant certifications. It bridges the gap between education and employment, ensuring career-ready professionals.",
    photos: [
      "../assets/img/Skill Development/1.jpg",
      "../assets/img/Skill Development/2.jpg",
      "../assets/img/Skill Development/3.jpg",
      "../assets/img/Skill Development/4.jpg",
      "../assets/img/Skill Development/5.jpg",
      "../assets/img/Skill Development/6.jpg",
      "../assets/img/Skill Development/7.jpg",
      "../assets/img/Skill Development/8.jpg",
      "../assets/img/Skill Development/9.jpg",
      "../assets/img/Skill Development/10.jpg",
    ],
  },
  {
    id: 2,
    title: "Teacher Training",
    description:
      "Teacher Training empowers educators with modern teaching techniques and strategies. It focuses on enhancing classroom engagement, communication, and subject delivery. The program ensures teachers are well-equipped to foster a productive learning environment.",
    photos: [
      "../assets/img/Teacher_Training/Teacher training.jpg",
      "../assets/img/Teacher_Training/Teacher training - 1.jpg",
    ],
  },
  {
    id: 3,
    title: "Science Fair and Projects",
    description:
      "When I hear I know, when I see I remember, when I do I understand.The science activity program encourages students to engage in a variety of science fair projects. These projects allow students to explore scientific concepts through hands-on experiments, fostering creativity, critical thinking, and problem-solving skills. From physics experiments to chemistry demonstrations and biology models, students are given the opportunity to present their work at science fairs, where innovation and discovery are celebrated. This approach helps students build a deeper understanding of the scientific process and develop a passion for science.",
    photos: [
      "../assets/img/science/Science Projects.jpg",
      "../assets/img/science/Science fair.jpg",
      "../assets/img/science/Science fair-1.jpg",
      "../assets/img/science/Science fair -2.jpg",
      "../assets/img/science/Science fair -3.jpg",
    ],
  },
  {
    id: 4,
    title: "School Election",
    description:
      "School Election is a platform for students to participate in a democratic process within their institution. It allows them to nominate, campaign, and vote for student representatives. This initiative helps in developing leadership qualities, teamwork, and a sense of accountability. It also fosters an understanding of civic duties and the importance of voting in a democratic setup. Through active participation, students learn the value of decision-making and fair practices in governance.",
    photos: [
      "../assets/img/election/Election -1.jpg",
      "../assets/img/election/Election -2.jpg",
      "../assets/img/election/Election -4.jpg",
      "../assets/img/election/Election -5.jpg",
    ],
  },
  {
    id: 5,
    title: "Cultural Programme",
    description:
      "Cultural Programme is a vibrant event that showcases the diverse talents of students through music, dance, drama, and other artistic expressions. It serves as a platform for students to explore their creative abilities and gain confidence in performing before an audience. The programme promotes cultural exchange and unity, bringing together different traditions and backgrounds. It also helps in fostering teamwork, discipline, and respect for the arts. Ultimately, the cultural programme enhances the overall educational experience by encouraging students to appreciate and celebrate creativity.",
    photos: [
      "../assets/img/cultural/Annual day.jpg",
      "../assets/img/cultural/Annual day -1.jpg",
      "../assets/img/cultural/Diwali Celebration -1.jpg",
      "../assets/img/cultural/Diwali Celebration -2.jpg",
      "../assets/img/cultural/Diwali Celebration.jpg",
      "../assets/img/cultural/Ganesh Chaturthi.jpg",
      "../assets/img/cultural/guru purnima -1.jpg",
      "../assets/img/cultural/guru purnima -2.jpg",
      "../assets/img/cultural/guru purnima.jpg",
      "../assets/img/cultural/janmashthmi.jpg",
      "../assets/img/cultural/Navratri -1.jpg",
      "../assets/img/cultural/Navratri -2.jpg",
      "../assets/img/cultural/Navrtri.jpg",
      "../assets/img/cultural/Rangmanch -1.jpg",
      "../assets/img/cultural/Rangmanch -2.jpg",
      "../assets/img/cultural/Rangmanch -3.jpg",
      "../assets/img/cultural/Rangmanch.jpg",
      "../assets/img/cultural/Rangoli -1.jpg",
      "../assets/img/cultural/Rangoli-2.jpg",
      "../assets/img/cultural/Rangoli.jpg",
    ],
  },
  {
    id: 6,
    title: "Prize Distribution",
    description:
      "Prize Distribution is an event to recognize and reward students for their achievements in academics, sports, and extracurricular activities. It motivates students to excel and promotes healthy competition. The ceremony celebrates the hard work and dedication of the winners, inspiring others to strive for success.",
    photos: [
      "../assets/img/prize/Prize Distribution.jpg",
      "../assets/img/prize/Prize Distribution -1.jpg",
      "../assets/img/prize/Prize Distribution -2.jpg",
    ],
  },
  {
    id: 7,
    title: "Parents Meeting",
    description:
      "Parents' Meeting is an opportunity for teachers and parents to discuss a student's progress, behavior, and development. It strengthens the partnership between home and school, ensuring the student's overall well-being and academic success. The meeting fosters open communication, helping to address any concerns and set goals for the student's future growth.",
    photos: [
      "../assets/img/parents/1.jpg",
      "../assets/img/parents/2.jpg",
      "../assets/img/parents/3.jpg",
    ],
  },
  {
    id: 8,
    title: "Matrimonial activities",
    description:
      "Matrimonial activities involve organizing events and services to help individuals find life partners. These can include matchmaking, matrimonial fairs, and personalized counseling to assist in the search for compatible matches. The activities aim to create a platform for families to connect, share values, and find suitable partners for marriage.",
    photos: ["../assets/img//mat/1.jpg"],
  },
  {
    id: 9,
    title: "CSR Activities",
    description:
      "Corporate Social Responsibility (CSR) activities refer to initiatives taken by businesses to contribute positively to society and the environment. These activities can include community development, environmental sustainability, educational support, healthcare initiatives, and promoting social equity. CSR activities aim to improve the well-being of society while ensuring that companies operate ethically and responsibly.",
    photos: ["../assets/img/CSR/CSR.jpg"],
  },
  {
    id: 10,
    title: "Annual Activities",
    description:
      "Annual activities refer to events or programs that take place once a year, typically organized by schools, organizations, or communities to celebrate milestones, achievements, or to promote engagement. These activities can include annual festivals, award ceremonies, conferences, cultural programs, charity drives, and sports events. Annual activities help strengthen community bonds, encourage participation, and reflect on past achievements while setting goals for the future.",
    photos: [
      "../assets/img/act/air force visit -1.jpg",
      "../assets/img/act/air force visit.jpg",
      "../assets/img/act/Art & craft.jpg",
      "../assets/img/act/Art.jpg",
      "../assets/img/act/Bank visit -1.jpg",
      "../assets/img/act/Bank visit -2.jpg",
      "../assets/img/act/Bank visit -2.jpg",
      "../assets/img/act/Bank visit.jpg",
      "../assets/img/act/buissness statrup.jpg",
      "../assets/img/act/Dance therapy -1.jpg",
      "../assets/img/act/Dance therapy -2.jpg",
      "../assets/img/act/Dance therapy.jpg",
      "../assets/img/act/Indipendence day -1.jpg",
      "../assets/img/act/Indipendence day.jpg",
      "../assets/img/act/Medical chekup -1.jpg",
      "../assets/img/act/Medical chekup -2.jpg",
      "../assets/img/act/Medical chekup.jpg",
      "../assets/img/act/mehndi -1.jpg",
      "../assets/img/act/mehndi -2.jpg",
      "../assets/img/act/mehndi.jpg",
      "../assets/img/act/Museum visit -1.jpg",
      "../assets/img/act/Museum visit -2.jpg",
      "../assets/img/act/Museum visit.jpg",
      "../assets/img/act/REMIDIAL CLAAS-1.jpg",
      "../assets/img/act/REMIDIAL CLASS-4.jpg",
      "../assets/img/act/republic day -1.jpg",
      "../assets/img/act/republic day.jpg",
      "../assets/img/act/Sports day -1.jpg",
      "../assets/img/act/Sports day -2.jpg",
      "../assets/img/act/Sports day.jpg",
      "../assets/img/act/Sports day-4.jpg",
      "../assets/img/act/Swachhta Abhiyan -1.jpg",
      "../assets/img/act/Swachhta Abhiyan -2.jpg",
      "../assets/img/act/Swachhta Abhiyan.jpg",
      "../assets/img/act/Teachers day -1.jpg",
      "../assets/img/act/Teachers day -2.jpg",
      "../assets/img/act/Teachers day.jpg",
      "../assets/img/act/Textbook distribution -1.jpg",
      "../assets/img/act/Textbook distribution.jpg",
      "../assets/img/act/Tree plantation -1.jpg",
      "../assets/img/act/Tree plantation -2.jpg",
      "../assets/img/act/Tree plantation -3.jpg",
      "../assets/img/act/Tree plantation.jpg",
      "../assets/img/act/yog divas -1.jpg",
      "../assets/img/act/yog divas -2.jpg",
      "../assets/img/act/yog divas.jpg",
    ],
  },
];

const Activite = () => {
  const { selectedId } = useGlobalState();

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

  const current =
    activities.find((item) => item.id === selectedId) || activities[0];
  if (!current) {
    return <p>Loading..</p>;
  }

  return (
    <>
      <header>
        <div
          className="page-header min-height-400"
          style={{
            backgroundImage: `url('../assets/img/school/home/mook_dhwani_trust_-_building_photo (1).jpg')`,
          }}
          loading="lazy"
        >
          <span className="mask bg-gradient-dark opacity-8"></span>
        </div>
      </header>
      {/* section */}
      <div className="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
        {/* <!-- START Testimonials w/ user image & text & info --> */}
        <section className="py-sm-7 py-5 position-relative">
          <div className="container">
            <div className="row">
              <div className="col-12 mx-auto">
                <div className="mt-n8 mt-md-n9 text-center">
                  <PhotoProvider>
                    <PhotoView src={"../assets/img/Trust_logo.jpg"}>
                      <img
                        className="avatar avatar-xxl shadow-xl position-relative z-index-2"
                        src="../assets/img/Trust_logo.jpg"
                        alt="bruce"
                        loading="lazy"
                        style={{ cursor: "pointer" }}
                      />
                    </PhotoView>
                  </PhotoProvider>
                </div>
                <div className="row py-5">
                  <div className="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h3 className="mb-0">{current?.title}</h3>
                    </div>

                    <p className="text-lg mb-0">
                      {current?.description}
                      <br />
                      {/* <a
                        href="javascript:;"
                        className="text-info icon-move-right"
                      >
                        More about me
                        <i className="fas fa-arrow-right text-sm ms-1"></i>
                      </a> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-3">
          <div className="container">
            {/* <div className="row">
              <div className="col-lg-6">
                <h3 className="mb-5">Check my latest blogposts</h3>
              </div>
            </div> */}
            <div className="row">
              {current &&
                current?.photos &&
                current?.photos.map((item) => (
                  <div className="col-lg-3 col-sm-6 mt-4" key={item}>
                    <div className="card card-plain">
                      <div className="card-header p-0 position-relative">
                        <a className="d-block blur-shadow-image">
                          <PhotoProvider>
                            <PhotoView src={item}>
                              <img
                                src={item}
                                alt={item}
                                className="img-fluid shadow border-radius-lg"
                                loading="lazy"
                                style={{ cursor: "pointer" }}
                              />
                            </PhotoView>
                          </PhotoProvider>
                        </a>
                      </div>
                      {/* <div className="card-body px-0">
                      <h5>
                        <a
                          href="javascript:;"
                          className="text-dark font-weight-bold"
                        >
                          MateLabs machine learning
                        </a>
                      </h5>
                      <p>
                        If you’ve ever wanted to train a machine learning model
                        and integrate it with IFTTT, you now can with ...
                      </p>
                      <a
                        href="javascript:;"
                        className="text-info text-sm icon-move-right"
                      >
                        Read More
                        <i className="fas fa-arrow-right text-xs ms-1"></i>
                      </a>
                    </div> */}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        {/* <!-- END Blogs w/ 4 cards w/ image & text & link --> */}
      </div>
    </>
  );
};

export default Activite;
