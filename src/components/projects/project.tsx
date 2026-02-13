import { useState, useRef } from 'react';
import './projects.css';

interface Project {
  id: string;
  title: string;
  desc: string;
  url: string;
  tags: string[];
  image?: string;
}

const projectsData: Project[] = [
  {
    id: 'club-online',
    title: 'Club Online',
    desc: 'A club management system to help manage member details and attendance. Built with modern web technologies to streamline organizational workflows.',
    url: 'https://christianclubonline.netlify.app/',
    tags: ['React', 'Firebase', 'CSS']
  },
  {
    id: 'fastconnect',
    title: 'Fastconnect',
    desc: 'An intranet media platform for organizations to manage internal affairs. Features real-time communication and document sharing capabilities.',
    url: 'https://fastconnect-897e0.firebaseapp.com/',
    tags: ['React', 'Express', 'Node.js']
  },
  {
    id: 'scholarscribe',
    title: 'ScholarScribe',
    desc: 'Educational web application for Lancaster University Ghana Creative Society. Facilitates learning resources management and student collaboration.',
    url: 'https://master--schorlarscribe.netlify.app/',
    tags: ['React', 'Redux', 'API']
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const minSwipeDistance = 50;

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isSwipeLeft = distance > minSwipeDistance;
    const isSwipeRight = distance < -minSwipeDistance;

    if (isSwipeLeft) {
      nextProject();
    } else if (isSwipeRight) {
      prevProject();
    }
  };

  const currentProject = projectsData[currentIndex];

  return (
    <section id="projects__page">
      <div className="projects__header">
        <span className="projects__label">Portfolio</span>
        <h2>Featured Projects</h2>
        <p>
          A showcase of my recent work, demonstrating my skills in building 
          modern web applications with clean code and thoughtful design.
        </p>
      </div>

      <div 
        className="carousel"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <button 
          className="carousel__btn carousel__btn--prev" 
          onClick={prevProject}
          aria-label="Previous project"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div className="carousel__container">
          <div className="carousel__track">
            <article className="project-slide">
              <div className="project-slide__content">
                <div className="project-slide__number">
                  {String(currentIndex + 1).padStart(2, '0')}
                </div>
                <h3 className="project-slide__title">{currentProject.title}</h3>
                <p className="project-slide__desc">{currentProject.desc}</p>
                <div className="project-slide__tags">
                  {currentProject.tags.map((tag) => (
                    <span key={tag} className="project-slide__tag">{tag}</span>
                  ))}
                </div>
                <div className="project-slide__actions">
                  <a 
                    href={currentProject.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-slide__link project-slide__link--primary"
                  >
                    View Live
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="project-slide__visual">
                <div className="project-slide__mockup">
                  <div className="mockup__browser">
                    <div className="mockup__dots">
                      <span></span><span></span><span></span>
                    </div>
                    <div className="mockup__url">{currentProject.url.replace('https://', '')}</div>
                  </div>
                  <div className="mockup__screen">
                    <div className="mockup__placeholder">
                      <span className="mockup__icon">{currentProject.title.charAt(0)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <button 
          className="carousel__btn carousel__btn--next" 
          onClick={nextProject}
          aria-label="Next project"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div className="carousel__counter">
        <span className="carousel__current">{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className="carousel__separator">/</span>
        <span className="carousel__total">{String(projectsData.length).padStart(2, '0')}</span>
      </div>

      <div className="carousel__indicators">
        {projectsData.map((_, index) => (
          <button
            key={index}
            className={`carousel__dot ${index === currentIndex ? 'carousel__dot--active' : ''}`}
            onClick={() => goToProject(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      <div className="carousel__swipe-hint">
        <i className="fa-solid fa-hand-pointer"></i>
        <span>Swipe to browse</span>
      </div>
    </section>
  );
};

export default Projects;

