import { DetailsSection } from "../styled/components";

import Header from "../sections/Header";
import About from "../single/About";
export default function Body() {
  return (
    <DetailsSection>
      <Header></Header>
      <About></About>
    </DetailsSection>
  );
}
