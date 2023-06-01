function addTwoNums(a, b){

    try{
        if(typeof(a) != 'number')
            throw new ReferenceError('The first argumnet is not a number')
        else if(typeof(b) != 'number')
            throw new ReferenceError('The second argumnet is not a number')
        else
            console.log(a+b)
    }catch(err){
        console.log(err);
    }
    
}
addTwoNums(5, 5) 