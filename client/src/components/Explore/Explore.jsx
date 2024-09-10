import React from 'react';

const Explore = () => {
  // Example list of jobs
  const jobs = [
    { id: 1, title: 'Web Developer', company: 'ABC Corp', location: 'Remote', salary: '₹40,000 For Project' },
    { id: 2, title: 'Graphic Designer', company: 'Design Studio', location: 'Remote', salary: '₹30,000/month' },
    { id: 3, title: 'Content Writer', company: 'WriteItUp', location: 'Remote', salary: '₹25,000/month' },
    { id: 4, title: 'Data Analyst', company: 'DataMax', location: 'Remote', salary: '₹50,000/month' },
    { id: 5, title: 'SEO Specialist', company: 'Digital Agency', location: 'Remote', salary: '₹35,000/month' },
    { id: 6, title: 'UX/UI Designer', company: 'Creative Minds', location: 'Remote', salary: '₹45,000/month' },
    { id: 7, title: 'Backend Developer', company: 'Tech Innovations', location: 'Remote', salary: '₹60,000/month' },
    { id: 8, title: 'Frontend Developer', company: 'Web Solutions', location: 'Remote', salary: '₹50,000/month' },
    { id: 9, title: 'Mobile App Developer', company: 'AppTech', location: 'Remote', salary: '₹55,000/month' },
    { id: 10, title: 'Project Manager', company: 'BuildRight', location: 'Remote', salary: '₹70,000/month' },
    { id: 11, title: 'Video Editor', company: 'NetCom', location: 'Remote', salary: '₹45,000/month' },
    { id: 12, title: 'Sales Person', company: 'RetailPro', location: 'Remote', salary: '₹60,000/month' },
    { id: 13, title: 'Marketing Agent', company: 'MarketX', location: 'Remote', salary: '₹40,000/month' },
    { id: 14, title: 'Analyst', company: 'HelpDesk', location: 'Remote', salary: '₹30,000/month' },
    { id: 15, title: 'Gardner', company: 'Innovate Co.', location: 'Patna', salary: '₹25,000/month' },
    { id: 16, title: 'HR Manager', company: 'HR Solutions', location: 'Nagpur', salary: '₹55,000/month' },
    { id: 17, title: 'Business Analyst', company: 'BizConsult', location: 'Coimbatore', salary: '₹50,000/month' },
    { id: 18, title: 'DevOps Engineer', company: 'CloudOps', location: 'Thane', salary: '₹70,000/month' },
    { id: 19, title: 'System Administrator', company: 'IT Secure', location: 'Vadodara', salary: '₹45,000/month' },
    { id: 20, title: 'Accountant', company: 'FinancePro', location: 'Bhopal', salary: '₹35,000/month' },
  ];

  return (
    <div className="container mx-auto p-4 mt-40"> 
      <h1 className="text-6xl font-extrabold mb-11 text-center text-gray-800">Job Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {jobs.map((job) => (
          <div 
            key={job.id} 
            className="bg-white shadow-lg rounded-xl p-8 transform transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{job.title}</h2>
            <p className="text-gray-600 mb-2"><strong>Company:</strong> {job.company}</p>
            <p className="text-gray-500 mb-2"><strong>Location:</strong> {job.location}</p>
            <p className="text-green-700 font-semibold mb-4"><strong>Salary:</strong> {job.salary}</p>
            <button className="w-full bg-[#1dbf73] text-white py-3 rounded-md font-semibold hover:bg-[#17a964] transition-colors duration-300">
  Apply Now
</button>

          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Explore;
