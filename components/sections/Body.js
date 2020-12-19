import { DetailsSection } from "../styled/components";

import About from "./About";
import Footer from "./Footer";
import Highlights from "./Highlights";
export default function Body() {
  return (
    <>
      <DetailsSection>
        <About></About>
        <Highlights></Highlights>
        <Footer></Footer>
      </DetailsSection>
    </>
  );
}
