import {RenderJobs} from './UI.js'

export class Filters {
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