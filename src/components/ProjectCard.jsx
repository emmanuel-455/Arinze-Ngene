import React from 'react';

function ProjectCard({image, site, source }) {
  return (
    <div className='p-5'>
      <img className='w-[450px] h-[160px]' src={image} alt="" />
      <div className=' w-[300px]'>
        <div className='flex mt-3 justify-between'>
          <button className='border border-arinze-blue rounded-lg px-2 py-1'><a href={site}>View site</a></button>
          <button className='border border-arinze-blue rounded-lg px-2 py-1'><a href={source}>View source code</a></button>
        </div>
     </div>
    </div>
  );
}

export default ProjectCard;

