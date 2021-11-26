

import debugFlagsJson from '../../debugFlags.json';


export default class debugFlags {
    constructor(){
    }

    public static lookUpDebugFlagValue(individualFlag: any){
        for (const x in debugFlagsJson.flags){
            if(debugFlagsJson.flags[x] == individualFlag){
                return debugFlagsJson.flags[x].info.value;
            }

        }
        return false; 
    }
    public static flag(individualFlag: any, message: any): void{
        if(this.lookUpDebugFlagValue(individualFlag)){
            console.log(message);
        }
    }


}