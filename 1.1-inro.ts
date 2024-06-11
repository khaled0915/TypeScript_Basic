// Benefits if Ts 

// -------------------------


// 1 -- Better error feedback 

function reverse( str : string) {
    return str.split('').reverse().join('');
}


const result = reverse('hello') 
//const result2 = reverse(true) // it will give error



// 2--- better autocompletion &  code hints

const reversed = reverse('net ninja')

// reversed.search 

// reversed.foreach  ---- it will give error 





// 3 --- custom types 


interface MenuItem {
    title : string ,

    cost : number 
}

function printMenuItem ( item : MenuItem) {
    console.log(item.title, ':' , item.cost);
}


// error example --1 

//printMenuItem() // it will give error as it has no arg


// error example -- 02 

//printMenuItem( {title : 'veggie' , cost: '15'})


// error exp --- 03 

// printMenuItem( { name : 'veggie' , cost:3 })



// correct  example -- 

printMenuItem({ title : 'cheese pizza' , cost : 10 })



//  4 --  self documenting  -- easy to navigate code at any time

//printMenuItem()