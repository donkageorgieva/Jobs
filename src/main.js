class Filters {
 filterElements = document.querySelectorAll('.filterCard');
 showAll = document.querySelector('.showAll');
 resetActive(){
  this.filterElements.forEach(el => {
    el.classList.remove('active');
    this.showAll.classList.remove('activeShowAll');
  })
 }
  activateFilter(jobList){



  this.filterElements.forEach(filter => {
    filter.addEventListener('click', (e)=> {
    this.resetActive();
  e.target.closest('div').classList.add('active');

   
      let h2Element = filter.querySelector('h2');
      let role = h2Element.textContent;

 
      this.filterJobs(jobList,role);


    
    })
  })
  this.showAll.addEventListener('click', ()=> {
    this.resetActive();
    this.showAll.classList.add('activeShowAll');
    this.showAllJobs(jobList);
  })
  }
filterJobs(list, element){
  let filteredJobs =[];
  list.forEach(job => {
   
   if (element.toLowerCase() === job.role.toLowerCase()){
     filteredJobs.push(job);
   }
  })
  RenderJobs.renderJobs(filteredJobs);
}
showAllJobs(list){
  RenderJobs.renderJobs(list);
}
}




class GetJobs extends Filters{

    async jobs(){
 
      try{
        let result = await fetch('src/data.json');
        let data = await result.json();
        RenderJobs.renderJobs(data);
        this.activateFilter(data);
       
      } catch(error){
     throw Error;

      }
    
     
    }
   
}
class RenderJobs{
  static renderJobs(data){
   
 
      const parentElement = document.querySelector('.jobList');
      parentElement.innerHTML = '';
    
      data.forEach(job => {
        const jobElement = document.createElement('div');
      jobElement.classList.add('job');
      jobElement.id = job.id;
    
jobElement.innerHTML = `<div class ='mainInfo'><p> ${job.company}</p><p class ='featured'> </p> <p class='new'> </p><img src='${job.logo}'>  </div> 
<div class='moreInfo'><h1> ${job.position}</h1><div class='flex'> <p> ${job.postedAt}</p><p>${job.contract} </p><p>${job.location} </p></div> </div>`;
parentElement.append(jobElement);
        
      });


  }

}
const jobs = new GetJobs;
jobs.jobs();