function addTwoNumbers ( a:number , b:number): number {
    return a+b
}


// using arrow 

const subtractTwoNumbers = ( a : number, b:number,)  : number =>{

    return a-b
}

addTwoNumbers(3,3)

subtractTwoNumbers(4,3)



function addAllNumbers( item : number[] ) : void {
    const total = item.reduce(( a,c ) => a+c , 0  )

    console.log(total);
}

addAllNumbers([3,45,56,67,7])