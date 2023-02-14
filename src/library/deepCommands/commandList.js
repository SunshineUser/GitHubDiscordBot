import {addOptions, addDescription} from './snapshot/git-add.js'
import {commitOptions,  commitDescription} from './snapshot/git-commit.js'
import {gitDescription, gitOptionsList, gitOptions} from './setup/git';

// this is a master switch for all git options information output for gitdive

export const gitOutput =(gitInput, infoType) =>{
    if(infoType.toLowerCase() == 'options'){
        switch (gitInput){
            case 'git': gitOptions()

        }
    }else if( infoType.toLowerCase() == 'description'){
        return gitDescription;
    }else if(infoType.toLowerCase() == 'gitoptionslist'){
        return gitOptionsList;
    }
}