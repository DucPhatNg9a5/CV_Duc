import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Background(props) {
  return (
    <>
      <Navbar />
      <div className="p-10 flex justify-center bg-white text-black">
        <div className="px-20">
          <h2 className="text-2xl font-bold text-blue-500">Education</h2>
          <div>
            <h4>
              Southern Alberta Institute of Technology
              <img className="SAIT" src={"/logo200px.png"} alt="SAIT-img" />
            </h4>
            <p>
              <strong>Degrees: </strong>
            </p>
            <ul>
              <li>Diploma in Software Development</li>
              <li>
                Bachelor of Applied Technology Geographic Information Systems
              </li>
              <li>Diploma in Information Technology</li>
            </ul>
          </div>
        </div>
        <div className="px-20">
          <h2 className="text-2xl font-bold text-blue-500">Certification</h2>
          <div>
            <div>
              <p>
                <strong>
                  <Link
                    className="CCNA-link"
                    href="https://www.youracclaim.com/badges/cf0606a8-24fb-4a35-886b-bcbe7737c438/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CCNA Routing and Switching
                  </Link>
                </strong>
              </p>
              <img
                className="CCNA"
                src={"/cisco_ccna_R_26S.png"}
                alt="CCNA-img"
              />
              <p>
                <strong>Issued: </strong> Sep 2018 - Sep 2021
              </p>
              <p>
                <strong>Credential: </strong>ID 433665709919GTCL
              </p>
            </div>
            <div>
              <h5 className="py-4">
                <strong className="text-info">Udemy Certifications</strong>
              </h5>
              <p>
                <strong>Course: </strong>Modern JavaScript (from Novice to
                Ninja)
              </p>
              <img
                className="w-96"
                src={"/UC-7615eef0-3e9c-49eb-8d56-1a2ba45998e1.jpg"}
                alt="udemy-img"
              />
              <p>
                <strong>Course: </strong>MERN Stack Front To Back: Full Stack
                React, Redux & Node.js
              </p>
              <img
                className="w-96"
                src={"/UC-b461af42-3812-4852-9903-039f95367afd.jpg"}
                alt="udemy-img"
              />
              <p>
                <strong>Course: </strong>The Complete 2020 Web Development
                Bootcamp
              </p>
              <img
                className="w-96"
                src={"/UC-d9279b63-2b8c-4746-8ee4-85ad568a9e6b.jpg"}
                alt="udemy-img"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
