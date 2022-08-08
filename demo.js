function getSum(arr){
    if(arr instanceof Array){
        let sum=0;
        for(let i=0; i<arr.length; i++){
            sum+=arr[i];
        }
        return sum;
    }
    throw new Error("Error");
}

async function check(){
    try{
        let wait = await getSum([1,2,4,5,6]);
        console.log(wait);
    }catch(error){
        console.log(error.message)
    }
}
check();