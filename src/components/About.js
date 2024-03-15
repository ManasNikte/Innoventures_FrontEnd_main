import img1 from "../img/img1.png"
function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={img1} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
            This is an integrated smart city solution utilizing computer vision and deep learning technologies to enhance road safety, traffic management, and information integrity. The solution detect helmet usage, recognize vehicle license plates, and identify deepfake content. It uphold ethical principles such as privacy protection and fairness to create a safer, more efficient, and trustworthy urban environment.

            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
