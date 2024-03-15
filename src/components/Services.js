//Services.js
import Card from "./Card";
import Card1 from "../img/card1.png";
import Card2 from "../img/card2.png";
import Card3 from "../img/card3.png";
import Card4 from "../img/card1.png"
function Services() {
  return (
    <div className="container services">
      <h2 className="main-title text-center">SERVICES</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card
                title="Helmet & Number Plate Detection"
                img={Card1}
                text="Detect Riders Without Helmet with OpenCV and YOLO"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Deepfake Detection"
                img={Card2}
                text="Using DL Model to Detect Deep Fake Images"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Traffic Control"
                img={Card3}
                text="Using ML to Detect Overspeeding of Drivers"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Waste Management"
                img={Card4}
                text="Detecting Threat Using OpenCV and Deep learning model for Social Safety"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
