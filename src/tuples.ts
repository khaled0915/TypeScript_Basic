// tuples 


let person :[string , number , boolean ] = [ 'mario' , 30 , true ]



let hsla : [number , string , string ,number]

hsla = [200 , '100%' , '50%' , 1 ]


let xy : [ number , number]

xy=[23.4,55.6]


function useCoords() : [ number , number ] {

    const lat = 100

    const long = 50 ;

    return[lat,long]
}

const [lat , long] = useCoords()