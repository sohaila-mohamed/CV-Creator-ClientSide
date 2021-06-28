import Aboutimg from "../../images/aboutimg.svg";
function About() {
  return (
    <div className="d-flex">
      <h1 className="d-inline-block font-weight-bold">WE CREATE CAREERS</h1>
      <img src={Aboutimg} alt="About" />
    </div>
  );
}
export default About;
