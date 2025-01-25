import Downloadresume from "./Downloadresume";
const Header = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h1>hunain.</h1>
   
      </div>
      <div className='bottom'>
      <h2><a href="#home">Home</a></h2>
      <h2><a href="#aboutus">About Us</a></h2>
      <h2><a href="#stack">Stack</a></h2>
      <h2><a href="#services">Services</a></h2>
      <h2><a href="#project">Project</a></h2>
      <h2><a href="#contact">Contact</a></h2>
      </div>
      <div className="right">
        <Downloadresume/>
      </div>
      
    </div>
  );
};

export default Header;
