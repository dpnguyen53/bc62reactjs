import Header from "./header";
import Nav from "./nav";
import Content from "./content";
import Footer from "./footer";

function Baitap2() {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Nav />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Baitap2;
