
export {RenderJobs};

class RenderJobs{
    static renderJobs(data){
     
   
        const parentElement = document.querySelector('.jobList');
        parentElement.innerHTML = '';
      
        data.forEach(job => {
          const jobElement = document.createElement('div');
        jobElement.classList.add('job');
        jobElement.id = job.id;
       
      
  jobElement.innerHTML = `<div class ='mainInfo'><div><p> ${job.company}</p><div class='chips'><p class ='featured'> </p> <p class='new'> </p></div></div><img src='${job.logo}'>  </div> 
  <div class='moreInfo'><h1> ${job.position}</h1><div class='flex'> <p> ${job.postedAt}</p><p>${job.contract} </p><p>${job.location} </p></div> </div>`;
  parentElement.append(jobElement);
  if(job.new === true){
   const element = jobElement.querySelector('.new');
   element.textContent = 'New';
   element.classList.add('activeNew');
  } 
   if (job.featured === true){
    const element = jobElement.querySelector('.featured');
    element.textContent = 'Featured'; 
    element.classList.add('activeFeatured');
  } else{
    jobElement.querySelector('.new').remove();
    jobElement.querySelector('.featured').remove();
  }
        });
  
  
    }
  
  }