import './about.css';

const aboutItems = [
  {
    className: 'first__abt',
    title: 'A Strong Foundation',
    description: `On the journey to be armed with a degree in Computer Science from Lancaster University Ghana, 
      I've honed my technical skills and cultivated a deep understanding of software engineering principles.`,
    image: '/svg/strongfoundation.svg'
  },
  {
    className: 'second__abt',
    title: 'Versatile Expertise',
    description: `My toolkit includes proficiency in Java, C, html, css
      React, bootstrap and MySQL, vscode, figma, etc.
      Empowering me to tackle diverse challenges head-on.`,
    image: '/svg/versatile.svg'
  },
  {
    className: 'third__abt',
    title: 'Problem-Solving Focus',
    description: `I thrive on transforming complex problems into elegant solutions 
      through logical thinking and meticulous attention to detail.`,
    image: '/svg/problemsolving.svg'
  },
  {
    className: 'fourth__abt',
    title: 'Collaborative Mindset',
    description: `I believe in the power of teamwork and effective communication, 
      working seamlessly with cross-functional teams to achieve shared goals.`,
    image: '/svg/collab.svg'
  }
];

const About = () => {
  return (
    <div id="about__page">
      <div className="about__header">
        <span className="about__label">About Me</span>
        <h2>What I Bring to the Table</h2>
        <p>A blend of technical expertise, creative thinking, and collaborative spirit.</p>
      </div>
      {aboutItems.map((item, index) => (
        <div key={index} className={`${item.className} abt`}>
          <div className="abt__content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <div className="abt__vector">
            <img src={item.image} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
