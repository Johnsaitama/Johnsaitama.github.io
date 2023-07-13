import React from 'react';
import Image from './Image';

const Home = () => {
  return (
    <div>
      <Image />
      <section>
       
        <div>
          <h2>About Me</h2>
          <p>
            I am a passionate Front-End React Developer with expertise in building modern and user-friendly web applications. I have a strong foundation in HTML, CSS, and JavaScript, and I am particularly skilled in utilizing the React library to create dynamic and interactive user interfaces.
          </p>
          <p>
            I have experience working with various front-end frameworks and libraries, and I am well-versed in implementing responsive designs and ensuring cross-browser compatibility. I enjoy collaborating with designers and backend developers to bring their visions to life and deliver seamless user experiences.
          </p>
        </div>
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          <li></li>
          <li>React</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Responsive Web Design</li>
          <li>Github</li>
          <li>Webpack</li>
          <li>RESTful APIs</li>
        </ul>
      </section>
      
    </div>
  );
};

export default Home;