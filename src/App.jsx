import './App.css'
import 'animate.css';

const yearsOfExp = (startDate) => {
  const today = new Date();
  const calculateExp = today.getFullYear() - startDate.getFullYear();

  return calculateExp +  "+" + " " + (calculateExp === 1 ? "year" : "years" );
};

const startDate = new Date("2022-03-01");
const myExp = yearsOfExp(startDate);


function App() {
  
  return (
    <div className="App">
      <div className="header">
        <h1 className="animate__animated animate__bounceInDown">Hello</h1>
        <p className="animate__animated animate__bounceInDown animate__delay-1s	">
          .
        </p>

        <div className="coffee_container animate__animated animate__bounceInRight animate__delay-2s">
          <div className="coffee_cup"></div>
          <div className="coffee_handle"></div>
        </div>
      </div>

      <h2 className="animate__animated animate__fadeInLeft animate__delay-2s">
        My name is Vasil Karatashev
      </h2>

      <div className="about_container">
        <p className="about_text animate__animated animate__fadeInLeftBig animate__delay-3s">
          I am Frontend Developer who is giving strong importance to details and
          aesthetics while creating better UI/UX for the projects I am working
          with. I currently work at <span className="rething"><a target="_blank" href="https://www.linkedin.com/company/rethingse/mycompany/">ReThing</a></span> as
          a Frontend Developer. My experience in the industry is{" "}
          <span className="exp">{myExp}</span> mainly working with frontend
          technologies. You can read more about my experience and my tech stack
          by checking my <span className="resume"><a target="_blank" href="https://drive.google.com/file/d/1xUAF4gL_RQPk4HX_g20cBd9D6VhvDKen/view?usp=sharing">resume</a></span>. <br /> <br /> Almost everyday, 
          :) I am writing code, making latte art and supporting Liverpool with
          the same passion as learning about new technologies, best practices
          and frontend trends for web development. 
          <br /> <br />
          I am huge coffee lover so you can check my latte arts on my <span className='instagram'><a target="_blank" href="https://www.instagram.com/vasekara/">Instagram</a></span> page.
          <br /><br />
          Maybe you will want to read some of my articles on my tech blog on <span className='hashnode'><a target="_blank" href="https://karatashev.hashnode.dev/">Hashnode</a></span>.
          <br /><br />
          You can reach out via <span className='email'><a href="mailto:karatashev@gmail.com">email</a></span> or follow me on social media.
          <br /><br />
           #learningNeverStops
           
        </p>
      </div>

      <div className="btn_container">
        <button className="btn">CONTACT ME</button>
      </div>
    </div>
  );
}

export default App


