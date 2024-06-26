import React from 'react';
import ProjectCard from '../components/ProjectCard';


function Project(props) {
  return (
    <div className='pb-[100px] pt-16' id='Project'>
      <h1 className="text-center mb-[60px] text-A-writeup font-semibold text-[30px]">Project</h1>
      <div className='flex overflow-x-auto '>
        {props.ProjectContent.map((card) => (
          <ProjectCard
            key={card.id} // Remember to add a unique key prop
            image={card.image}
            heading={card.heading}
            context={card.context}
            site={card.site}
            source={card.source}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
