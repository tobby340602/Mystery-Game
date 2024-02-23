import img from '../Assets/landing.jpg'

function Landing() {
  
  return (
    <div style={{
        width:'100%',
        height:'100%',
        backgroundImage:`url(${img})`,
        backgroundSize: 'cover ',
        backgroundPosition: 'center'
    }}>
    </div>
  );
}

export default Landing;
