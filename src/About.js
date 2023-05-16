import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "AceIt Ecommerce",
  };

  return (
    <>
      {/* {myName} */}
      {/* <HeroSection myData={data} /> */}
    </>
  );
};

export default About;