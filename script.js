const btn1 = document.getElementById('d1');
const btn2 = document.getElementById('d2');
const btn3 = document.getElementById('d3');

const sec = document.getElementById('sec');


btn1.addEventListener('click', e =>{
e.preventDefault();
const my_div = document.createElement('div');
my_div.className = "w-img"
sec.appendChild(my_div)
const url =`https://dog.ceo/api/breed/germanshepherd/images`

fetch(url , {
    method: 'GET',
    credentials: 'same-origin',
    })
    
    .then(res => res.json())
    //  console.log(res)
    
    .then(res=> { 
    
        console.log(res)

        
        for(var i =0; i<4 ; i++){
       const my_dog = document.createElement('img');
        my_dog.src = res.message[i];
        my_dog.className = "style";
        my_div.appendChild(my_dog);}

        setTimeout(function(){ 
            my_div.remove();
            // div.removeChild(div.childNodes[0]); 
            // div.removeChild(div.childNodes[1]); 
            // div.removeChild(div.childNodes[2]); 
            // div.removeChild(div.childNodes[3]);
            
    
    
        }, 3000 )
    
    })
    
})


/*------------------------------------------*/
btn2.addEventListener('click', e =>{
    e.preventDefault();
    const my_div = document.createElement('div');
    my_div.className = "w-img"
    sec.appendChild(my_div)
    const url =`https://dog.ceo/api/breed/husky/images`
    
    fetch(url , {
        method: 'GET',
        credentials: 'same-origin',
        })
        
        .then(res => res.json())
        //  console.log(res)
        
        .then(res=> { 
    
            console.log(res)
    
            
            for(var i =0; i<4 ; i++){
           const my_dog = document.createElement('img');
            my_dog.src = res.message[i];
            my_dog.className = "style";
            my_div.appendChild(my_dog);}
    
            setTimeout(function(){ 
                my_div.remove();
                // div.removeChild(div.childNodes[0]); 
                // div.removeChild(div.childNodes[1]); 
                // div.removeChild(div.childNodes[2]); 
                // div.removeChild(div.childNodes[3]);
                
        
        
            }, 3000 )
        
        })
        
    })

    /*------------------------------------------*/
btn3.addEventListener('click', e =>{
    e.preventDefault();
    const my_div = document.createElement('div');
    my_div.className = "w-img"
    sec.appendChild(my_div)
    const url =`https://dog.ceo/api/breed/hound/images`
    
    fetch(url , {
        method: 'GET',
        credentials: 'same-origin',
        })
        
        .then(res => res.json())
        //  console.log(res)
        
        .then(res=> { 
    
            console.log(res)
    
            
            for(var i =0; i<4 ; i++){
           const my_dog = document.createElement('img');
            my_dog.src = res.message[i];
            my_dog.className = "style";
            my_div.appendChild(my_dog);}
    
            setTimeout(function(){ 
                my_div.remove();
                // div.removeChild(div.childNodes[0]); 
                // div.removeChild(div.childNodes[1]); 
                // div.removeChild(div.childNodes[2]); 
                // div.removeChild(div.childNodes[3]);
                
        
        
            }, 3000 )
        
        })
    })

/*----------------------------------------------------*/
// try
// function my_func (url){
//     e.preventDefault();
//     const my_div = document.createElement('div');
//     my_div.className = "w-img"
//     sec.appendChild(my_div)    
//     fetch(url , {
//         method: 'GET',
//         credentials: 'same-origin',
//         })
        
//         .then(res => res.json())
//         //  console.log(res)
        
//         .then(res=> { 
    
//             console.log(res)
    
            
//             for(var i =0; i<4 ; i++){
//            const my_dog = document.createElement('img');
//             my_dog.src = res.message[i];
//             my_dog.className = "style";
//             my_div.appendChild(my_dog);}
    
//             setTimeout(function(){ 
//                 my_div.remove();
//                 // div.removeChild(div.childNodes[0]); 
//                 // div.removeChild(div.childNodes[1]); 
//                 // div.removeChild(div.childNodes[2]); 
//                 // div.removeChild(div.childNodes[3]);
                
        
        
//             }, 3000 )
        
//         })
// }
// // const url =`https://dog.ceo/api/breed/${breed}/images`

// btn2.addEventListener('click', e =>{
//     my_func('https://dog.ceo/api/breed/husky/images');
        
//     })