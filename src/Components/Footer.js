// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">       
      <i className="fa-solid fa-copyright"></i>
      {year}   
    </div>
  );
};

export default Footer;
