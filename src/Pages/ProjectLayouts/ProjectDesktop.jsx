import { useEffect, useState, useRef } from "react";
import { projectArr } from "../../Assets/utilities";

const ProjectDesktop = ({ activeTab }) => {
  const [rowAnimations, setRowAnimations] = useState({});
  const projectRowsRef = useRef([]);


  const splitArrayIntoThree = (array) => {
    const length = array.length;
    const third = Math.ceil(length / 3);

    const firstPart = array.slice(0, third);
    const secondPart = array.slice(third, 2 * third);
    const thirdPart = array.slice(2 * third);

    return [firstPart, secondPart, thirdPart];
  };

  const [first, second, third] = splitArrayIntoThree(projectArr);

  const projectData = [
    { id: 0, projectDataArr: first },
    { id: 1, projectDataArr: second },
    { id: 2, projectDataArr: third },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (projectRowsRef.current.every(row => row)) {
        const updatedAnimations = {};

        projectRowsRef.current.forEach((row) => {
          const rect = row.getBoundingClientRect();
          const isInViewport = (
            rect.top <= window.innerHeight && // Check if top is visible
            rect.bottom >= 0 &&              // Check if bottom is visible
            rect.left <= window.innerWidth &&   // Check if left is visible
            rect.right >= 0                 // Check if right is visible
          );

          updatedAnimations[row.dataset.rowindex] = isInViewport ? 'slide-right' : '';
        });

        setRowAnimations(updatedAnimations);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Check on resize too!
    
    // Initial check (after render)
    const timeoutId = setTimeout(handleScroll, 0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timeoutId)
    };
  }, [activeTab]);


  return (
    <div id="project-desktop">
      {projectData.map((project) => (
        <div
        key={project.id}
        className={`project-desktop-row ${rowAnimations[project.id] || ''}`}
        data-rowindex={project.id}
        ref={(el) => (projectRowsRef.current[project.id] = el)}
        >
          {project.projectDataArr.map((item, index) => (
            <div key={index} className="project-desktop-card">
              <h3>{item.siteName}</h3>
              <p>{item.description}</p>
              {item.image && <img src={item.image} alt={item.siteName} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectDesktop;