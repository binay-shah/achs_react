try{
    console.log(a,b)
    throw new ReferenceError('Define variable a, b');
}
catch(err){
    console.log('error occured')
    console.log(err)
}

console.log('This line is  executed')