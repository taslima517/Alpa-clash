function play(){
    //console.log('play game')
               //home screen section

//     const homeSection = document.getElementById('home_screen') 
//     homeSection.classList.add('hidden')

        //   or from utility.js

        addElementById('home_screen')
        addElementById('final_score')


              // playground section

//      const playgroundSection = document.getElementById('play_ground')  
//      playgroundSection.classList.remove('hidden')    

           //or

           removeElementById('play_ground')
           setTextElementValueById('current_life',5)
           setTextElementValueById('Current_Score',0)
           




     

              //crate alphabets string


     const alphabetsString = 'abcdefghijklmnopqrstuvwxyz'
     const alphabets = alphabetsString.split('');
     console.log(alphabets)

             //get a random number 


    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber)
    console.log(index);
    
    const randomIndex = alphabets[index];
    console.log(randomIndex)

            //random any alphabate with number


    const currrenAlphabets  = document.getElementById('current_alphabets')
    const currrenAlphabetsIndex = currrenAlphabets.innerText=(randomIndex)


    //set randomly generated alphabets to the screen


    const addBackgroundColor = document.getElementById(randomIndex)
    addBackgroundColor.classList.add('bg-orange-400')

}

// function handleKeyboardButtonPress(){
//         console.log('button Press')

// }
//  document.addEventListener('keyup',handleKeyboardButtonPress)

function handleKeyboardButtonPress(event){
        const playerPressed = event.key
        console.log('player Pressed',playerPressed)


        const currrenAlphabetsElement = document.getElementById('current_alphabets')

         const current_alphabet =currrenAlphabetsElement.innerText
         const expectedAlphabet = current_alphabet.toLowerCase();
        console.log(playerPressed,expectedAlphabet);

        if(playerPressed===expectedAlphabet){
                console.log('You are Win the Game')


        

                 //update score:
          //1:Get the current score

        // const currentScoreElement =document.getElementById('Current_Score')
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log('My game score',typeof(currentScore));

        const currentLife = getTextElementValueById('Current_Score')
        const updateLife = currentLife +1;
        setTextElementValueById('Current_Score',updateLife)



        //   //2:increase the score by 1

        // const updateScore = currentScore + 1;
        
        //   //3: show the update score

        //   currentScoreElement.innerText=updateScore;


        //   const finalScore = document.getElementById('final_result')
        //          finalScore.innerText= updateScore;
                





        

                //crate alphabets string


     const alphabetsString = 'abcdefghijklmnopqrstuvwxyz'
     const alphabets = alphabetsString.split('');
     console.log(alphabets)

             //get a random number 


    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber)
    console.log(index);
    
    const randomIndex = alphabets[index];
    console.log(randomIndex)

            //random any alphabate with number


    const currrenAlphabets  = document.getElementById('current_alphabets')
    const currrenAlphabetsIndex = currrenAlphabets.innerText=(randomIndex)


    //console.log(currrenAlphabetsIndex)


    const addBackgroundColor = document.getElementById(randomIndex);
    addBackgroundColor.classList.add('bg-orange-400');
r

               //remove background color

    const removeBackgroundColor = document.getElementById(expectedAlphabet)
    removeBackgroundColor.classList.remove('bg-orange-400')

    


        }
        else{
                console.log('You are Disqualified')

        //         //step:1 get the current life

        //  const currentLifeElement = document.getElementById('current_life')

        //  const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log('My game Life',typeof(currentLfe));

        //  console.log(current_life);


                    //or from utility.js


        const currentLife = document.getElementById('current_life')
        const updateLife = currentLife - 1;
        setTextElementValueById('current_life',updateLife)


        //         //step:2  reduce the life counter

        // const updateLife =currentLife -1;

        //        //display the update life

        // currentLifeElement.innerText=updateLife;

        if(updateLife===0){
                console.log('Game Over')
                // const playgroundSection = document.getElementById('play_ground')  
                //  playgroundSection.classList.add('hidden')    
                  
                //or add functionn from utility.js
         
                addElementById('play_ground')


                //  const finalSection= document.getElementById('final_score')
                //  finalSection.classList.remove('hidden')

                 //or remove function from utility.js

                 removeElementById('final_score')



                 const lastScore = getTextElementValueById('Current_Score');
               console.log('last score',lastScore)
               setTextElementById('final_result',lastScore)

              const removeBackgroundColor = document.getElementById(expectedAlphabet)
              removeBackgroundColor.classList.remove('bg-orange-400')
          

                 

     
        }

        }

}
document.addEventListener('keyup',handleKeyboardButtonPress)


        