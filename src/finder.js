import porcelainCommands from './library/porcelain.js';
import {ancillary, repository, others} from './library/lower-level.js';



const finder = (gitCommand) =>{
    let finalArray = []

    function searcher(stringToBeSearched){
        let continuous = false;
        let returnArray = []
        let stop = stringToBeSearched.lastIndexOf(gitCommand);
        let searchString = stringToBeSearched;
        let runningTotal = 0;
        let carefulEscape = 0
        
        

        while(continuous == false || carefulEscape == 5){
            let starter = searchString.indexOf(gitCommand);
            let secondarySlice = searchString.slice(starter+4);
            let end = secondarySlice.indexOf('git-');
            
        
            if(end == -1){
                end = searchString.length -4-starter
            }
            
            //backwards logic if the git info is inside another command
            if(end == gitCommand.length){
                let oddPoint = searchString.slice(0,starter+end-gitCommand.length)
                starter = oddPoint.lastIndexOf("git-")
                console.log("hellos " ,oddPoint.lastIndexOf("git-"))
                returnArray.push(searchString.slice(starter,starter+end+4))
            }else{
                returnArray.push(searchString.slice(starter,starter+end+4))
                searchString = searchString.slice(end+starter+4);
                runningTotal += starter+end;
            }
            
            carefulEscape +=1;

            if(stop <= runningTotal) continuous = true;
        }
        finalArray.push(returnArray.join(' '))
    }
    searcher(porcelainCommands);
    searcher(ancillary);
    searcher(repository);
    searcher(others);
    return finalArray.join(' ')
}

// console.log(finder('git-reset'));

export default finder