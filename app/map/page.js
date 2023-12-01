import Navbar from "../components/navbar";
import Footer from "../components/footer";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/map"), { ssr: false });

export default function Background(props) {
  return (
    <>
      <Navbar />
      <Map />
      <Footer />
    </>
  );
}
