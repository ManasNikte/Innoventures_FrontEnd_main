import Video from '../components/video.mp4'
function Header() {
  return (
    <header>
      <video src={Video} loop autoPlay muted></video>
      <h1>InnoVentures</h1>
      <p>SECURING TOMORROW. TODAY: SAFER SOLUTIONS FOR SMATER CITIES</p>
      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
