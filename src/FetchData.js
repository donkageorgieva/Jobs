
import {Filters} from './Filters.js';
import {RenderJobs} from './UI.js';

class GetJobs{

    async jobs(){
 
      try{
        let result = await fetch('src/data.json');
        let data = await result.json();
        RenderJobs.renderJobs(data);
        const filterFunctions = new Filters();
        filterFunctions.activateFilter(data);
       
      } catch(error){
     console.log(error);

      }
    
     
    }
   
}
const jobs = new GetJobs;
jobs.jobs();