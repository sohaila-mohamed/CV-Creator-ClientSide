import Aboutimg from "../../images/aboutimg.svg";
import "./About.css";
import telescope from "../../images/telescope.svg";
import barchart from "../../images/bar-chart.svg";
import clipboard from "../../images/clipboard.svg";
import Feedback from "../../images/Feedback.PNG";
import Feedback2 from "../../images/Feedback2.jpg";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
function About() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between mt-5">
          {/* <div className="align-self-center w-auto"> */}
          <h1
            className="font-weight-bold align-self-center"
            style={{ width: "2ch", fontSize: "5ch" }}
          >
            WE CREATE CAREERS
            <span
              className="d-block font-weight-light"
              style={{ width: "20ch", fontSize: "0.8ch" }}
            >
              Welcome To our website
            </span>
          </h1>
          {/* </div> */}
          <img src={Aboutimg} alt="About" />
        </div>
      </div>
      <div className="back-color h-auto text-white d-flex justify-content-around flex-wrap font-weight-bold">
        <div className="p-4 text-center">
          <p>27508</p>
          <p>Satisfaied Clients</p>
        </div>
        <div className="p-4 text-center">
          <p>1000,000,000</p>
          <p>Users</p>
        </div>
        <div className="p-4 text-center">
          <p>2000</p>
          <p>Custom Tempelates</p>
        </div>
        <div className="p-4 text-center">
          <p>3</p>
          <p>Main Plans</p>
        </div>
        <div className="p-4 text-center">
          <p>8</p>
          <p>Year Of Experiance</p>
        </div>
      </div>
      <div className="container d-flex flex-wrap mt-5 pt-5 justify-content-between mb-5">
        <div className="align-self-center text-center font-weight-bold text-size-custom">
          <p>
            <span style={{ color: "#6b82b7" }}>Our</span> Values
          </p>
          <p>&amp;</p>
          <p>
            <span style={{ color: "#6b82b7" }}>Our</span> Vission
          </p>
        </div>
        <div className="w-50 align-self-center">
          <p>
            <img alt="icon" src={telescope} className="img-size d-block" />
            We ask recruiters what makes for a successful resume. Then we take
            these insights and build them into our resume templates. Thus, when
            you use our online resume builder, you know you are giving
            recruiters exactly what they want.
          </p>
          <p>
            <img alt="icon" src={barchart} className="img-size d-block" />
            Built for impact we identify and nurture a truly diverse team of
            designers, developers and marketers
          </p>
          <p>
            <img alt="icon" src={clipboard} className="img-size d-block" />
            After a rigorous development and testing process, the outcome was an
            online resume builder that combines functionality and aesthetics to
            maximize users' chances of being invited for job interviews.
          </p>
        </div>
      </div>
      <div className="container d-flex mb-5">
        <img src={Feedback2} alt="Feedback" className="img-fluid w-50 pr-5" />
        <div className="align-self-center text-center flex-grow-1">
          <h1>
            WE WANT YOUR{" "}
            <span style={{ color: "#6b82b7", display: "block" }}>FEEDBACK</span>
          </h1>
        </div>
      </div>
      <div className="back-color h-auto text-white d-flex justify-content-around flex-wrap ">
        <p className="p-4 fa-2x font-weight-bold align-items-center">Idea</p>
        <p className="p-4 w-50">
          By combining their respective backgrounds in technology, marketing,
          and design, the three came up with the idea of an intuitive, web-based
          tool that would make it as simple as possible to produce an
          eye-catching resume.
        </p>
      </div>
      <div className="container text-center mt-5">
        <h3 className="font-weight-bold">Meet our team</h3>
        {/* <div className="d-flex justify-content-between row-cols-3"> */}
        <CardGroup className="d-flex justify-content-between row-cols-3">
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        {/* </div> */}
      </div>
    </>
  );
}
export default About;
