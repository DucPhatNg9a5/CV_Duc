import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Intro(props) {
  return (
    <div>
      <div className="relative bg-blue-100 overflow-hidden flex justify-center">
        {/* Video Background */}
        <video
          className="absolute w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/cloud_video.mp4" type="video/mp4" />
        </video>

        {/* Sun Image */}
        <Image
          className="absolute w-24 right-1/4 top-1/2 z-10"
          src={"/sun.png"}
          alt="sun-img"
          width={96}
          height={96}
        />

        <div className="flex flex-col items-center z-10">
          {/* Name Image */}
          <Image
            className="w-72 pt-32"
            src={"/name.png"}
            alt="name-img"
            width={288}
            height={256}
          />

          {/* Mountain Image */}
          <Image
            className="pt-32 w-150"
            src={"/mountain.png"}
            alt="mountain-img"
            width={512}
            height={381}
          />
        </div>
      </div>

      <div className="py-24 pb-12 bg-white">
        <div id="profile">
          <img
            className="w-60 mb-12 mx-auto"
            src={"/portrait.png"}
            alt="portrait-img"
          />
          <h2 className="w-1/2 text-blue-500 text-3xl mx-auto text-center">
            Hello.
          </h2>
          <br />
          <p className="w-1/3 mx-auto text-black text-center">
            I am a self-taught full-stack web developer in Calgary. I love
            programming and working with technology{" "}
            <span role="img" aria-label="emoji">
              💻
            </span>
            .
          </p>
        </div>
        <hr className="border-t-8 border-dotted border-gray-300 w-20 mx-auto my-20" />
        <div className="text-black" id="skills">
          <h2 className="text-3xl text-center text-blue-500">My skills</h2>
          <div className="w-1/2 mx-auto text-left leading-relaxed py-10">
            <img
              className="w-40 float-left mr-7 mb-7"
              src={"/computer.png"}
              alt="computer-img"
            />
            <h3 className="text-2xl text-green-600">Programming</h3>
            <p>
              Javascript is my every-day programming language which I am
              continuously honing and loving. I teach myself MERN stack
              (MongoDB, Express, React, Node.js) to build stylist, interactive,
              and scalable websites. My past projects had me dabble in areas
              like image processing, database management, and Python scripting.
            </p>
          </div>
          <div className="w-1/2 mx-auto text-left leading-relaxed py-10">
            <img
              className="w-40 float-right ml-7 mb-7"
              src={"/server.png"}
              alt="server-img"
            />
            <h3 className="text-2xl text-green-600">Troubleshooting</h3>
            <p>
              Not only coding, I am also capable of administrating and
              troubleshooting servers and network devices. With a strong
              foundation of knowledge in virtualization, cloud and security
              technology, I am certified in Cisco routing and switching.
            </p>
          </div>
        </div>
        <hr className="border-t-8 border-dotted border-gray-300 w-20 mx-auto my-24" />
        <div className="text-black text-center" id="contact-me">
          <h3 className="text-2xl text-blue-500">
            I’m currently looking for a job oppotunity.
          </h3>
          <div className="m-7">
            <h2 className="text-3xl text-blue-400">Get In Touch</h2>
            <p>
              Email: nguyenducphat9a5@gmail.com <br />
              Text message: +1 (825) 365-9357
            </p>
          </div>
          <Link
            className="inline-block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href="mailto:nguyenducphat9a5@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} /> CONTACT ME
          </Link>
        </div>
      </div>
    </div>
  );
}
