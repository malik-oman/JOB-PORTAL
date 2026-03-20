import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { useParams } from 'react-router-dom';

const JobDetails = () => {

  const {jobsData} = useContext(AppContext);
  const {id} = useParams();
  const job = jobsData.find((job) => job._id === parseInt(id));

  return (
    <div className='py-20'>
       <h1 className='text-2xl md:text-5xl text-gray-800 font-semibold'>
        Job Details
        </h1> 
        <div className='w-full flex flex-col md:flex-row items-center justify-center mt-10 gap-10'>
          {/* LEFT SECTION-============== */}
          <div className='flex flex-col'>
            <div className='flex items-center gap-5'>
              <img src={job.image} alt="" className='w-[86px] h-[86px]' />
              <div>
                <h2 className='text-lg md:text-2xl font-semibold'>{job.title}</h2>
                <p className='bg-green-200/40 p-1 rounded ml-2'>{job.company} <span>{job.type}</span></p>
              </div>
            </div>
          </div>
          {/* RIGHT SECTION================== */}
          <div></div>
        </div>
    </div>
  )
}

export default JobDetails