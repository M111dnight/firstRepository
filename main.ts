 import { seasons } from "./src/scripts/data";
 import { TSeason } from "./src/scripts/types";

 //1 Задание - найти самый прибыльный сезон

 let maxIncome:TSeason | null = null;
 let maxSeasonName:string | null = null 

 let minIncome:TSeason | null = null
 let minSeasonName:string | null = null 

 let maxHired:TSeason | null = null 
 let maxHiredName:string | null = null 

 let maxDismissed:TSeason | null = null 
 let maxDismissedName: string | null = null 

 Object.entries(seasons).forEach(([season,seasonInfo])=>{
    if (!maxIncome || maxIncome.income <= seasonInfo.income){
        maxIncome = seasonInfo
        maxSeasonName = season
    }
    if (!minIncome || minIncome.income >= seasonInfo.income){
        minIncome = seasonInfo
        minSeasonName = season
    }
    if (!maxHired || maxHired.hired <= seasonInfo.hired){
        maxHired = seasonInfo
        maxHiredName = season
    }
    if (!maxDismissed || maxDismissed.dismissed <= seasonInfo.dismissed){
        maxDismissed = seasonInfo
        maxDismissedName = season
    }
})
 
 console.log(maxSeasonName,maxIncome)
 console.log(minIncome,minSeasonName)
console.log (maxHired,maxHiredName)
console.log (maxDismissed,maxDismissedName)
 