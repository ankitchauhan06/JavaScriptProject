{/* <div id="joke" class="joke">Awesome Joke is loading... </div>
<button id="jokeBtn" class="btn">Next JOKE</button> */}
//GET https://icanhazdadjoke.com/

// const jokes = document.querySelector('#joke');
// const jokeBtn = document.querySelector('#jokeBtn')


// const getJokes = () => {
//     const setHeader = {
//         headers: {
//             Accept : "application/json" 
//         }
//     }
    

//     fetch('https://icanhazdadjoke.com', setHeader)
//     .then((res)=> {
//         res.json()
//     .then( (data) => {
//         jokes.innerHTML = data.joke
//         })
//   })
//     .catch((error)=>{
//         console.log(error);

//     })
// }

// jokeBtn.addEventListener('click', getJokes)
// getJokes();

// async await with error handling method

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn')


const getJokes = async () => {

     try{
        const setHeader = {
            headers: {
                Accept : "application/json" 
            }
        }
        
    
        const res = await fetch('https://icanhazdadjoke.com', setHeader)
        const data = await res.json();
        jokes.innerHTML = data.joke;
     }catch(error){
        console.log(error);
     }


    }

jokeBtn.addEventListener('click', getJokes)
getJokes();













    






