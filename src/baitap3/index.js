import Header from "./header";
import Carousel from "./carousel";
import Wwd from "./wwd";
import Contact from "./contact";
import ListItem from "./list-item";
import Footer from "./footer";

export default function Baitap3() {
  return (
    <>
      <Header />
      <Carousel />
      <div className="container">
        <div className="row">
          <Wwd />
          <Contact />
        </div>
        <ListItem />
      </div>

      <Footer />
    </>
  );
}
