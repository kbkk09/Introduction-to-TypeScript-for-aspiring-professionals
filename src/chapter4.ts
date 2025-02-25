export const getFizzBuzz =(i: number)=> {
    if(i % 3 === 0 && i % 5 === 0){
        return "FizzBuzz";
    }else if (i % 3 === 0){
        return "Fizz";
    }else if (i % 5 === 0){
        return "Buzz"
    }else {
        return i;
    }
}

const sequence = (start:number, end:number) => {
    const sequenceNumber : number[] = []
    for (let i = start; i <= end; i++){
        sequenceNumber.push(i)
    } return sequenceNumber
}


for (const i of sequence(1, 100)){
    const message = getFizzBuzz(i);
    console.log(message)
}