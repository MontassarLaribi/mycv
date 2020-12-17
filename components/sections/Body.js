import { DetailsSection } from "../styled/components";

import About from "./About";
import Highlights from "./Highlights";
export default function Body() {
  return (
    <DetailsSection>
      <About></About>
      <Highlights></Highlights>
    </DetailsSection>
  );
}
