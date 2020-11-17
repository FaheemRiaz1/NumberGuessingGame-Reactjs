import React, { Component } from 'react';
import './App.css';


class App extends React.Component{
  //HERE I AM DECLARING A CONSTRUCTOR 
  constructor(){
        super();
  //HERE I AM DECLARING AN OBJECT WHICH HAS solution and array result
        this.state = {
            solution: "" ,
            ugn: Math.floor(Math.random()*100),
            sgn:"",
            result:"",
            hint:"",
            hint1:"",
            count:1,
            score:0,
            finalresult:"",
            turn:1,
            disabled:""

        }
    }
  

  //HERE I AM ADDING EVENT LISTNER TO ALL BUTTONS
    onClick = button => {
      var z= this.state.ugn
      if(this.state.count===5){
        this.setState({
          hint:"You lost the game",
          result:z,
          
        });
      }

      else if(button === "CE"){
        this.backspace()
      }//NOW IF I CLICK CE BUTTON IT WILL DELETE VERY LAST DIGIT NUMBER   
     
      else if(button === "reset"){
        this.reset()
      }//NOW IF I CLICK C BUTTON IT WILL RESET EVERYTHING
       else if(button === "="){
         this.calculate()
         //TASK#01
         var c=1;
         c=this.state.count+1
        this.setState({
          count:c,
          turn:c,
        })
       
      }//NOW IF I CLICK = BUTTON THE RESULT WILL BE DISPLAYED 
      else if(button === "hint"){
        this.hint1()
      }
    
      else {
        this.setState({
          solution: 
              this.state.solution + button
         })
       }//THIS IS EVENT LISTNER FOR EVERYOTHER BUTTON e.g 1, 2, 3, 4, 5,... etc
    };
    hint1 = () =>{
      var ugn=this.state.ugn;
      var h=ugn;
      var h1=h;
      if(h<100){
          h=h%5;
          h+=2;
          h-=2;
          h+=ugn;

          h1=h;
          h1=ugn-5;
          var z ="Range is "+h1+" and "+h
          this.setState({
            hint1: z,
          });
       
      }
    
    }

   
    //THIS ARROW FUNCTION WILL BE INVOLVE IN CALCULATING CORRECT RESULTS
    calculate = () => {
      console.log(this.state.ugn)
      var sgn=this.state.solution;
      var ugn=this.state.ugn;
      console.log(ugn,sgn)
      var s=this.state.score
      if(ugn==sgn){
        this.setState({
          result: "Correct",
          score:100

        });
      }
      else{
        this.setState({
          result: "Wrong",
          solution:"",
          score:""
         
        })
      }
    };


    buttonClick=(e)=>{
      e.preventDefault();
      this.setState({button:e.target.name, countClick:this.state.countClick+1});
    } 
    
    //THIS WILL SET THE STATE OF THE INPUT TEXT TO EMPTY STRING
    //TASK#03
    reset = () => {
        this.setState({
            solution: "",
            hint:"",
            hint1:"",
            result:"",
            score:"",
            turn:"",



        })
    };
   
    
    

    render() {
        return (

          //THE FOLLOWING CODE INCLUDES ALL HTML CODE THAT IS FRONT END OF CALCULATOR
            
           

            
            <div className="cbody">
                    <p class="solution">{this.state.solution}</p>
                    <p class="solution">{this.state.result}</p>
                    <p class="solution">{this.state.hint}</p>
                    <p class="solution">{this.state.hint1}</p>

                    <div>
                      <div>
                      <p class="ssolution"> Score: {this.state.score}</p>
                  
                      <p class="ssolution">Turn: {this.state.turn}</p>

                      </div>


                    </div>
                   
                    <button class="refresh"name="reset" disabled="this.state.disabled"  onClick={clikcHandel => this.onClick(clikcHandel.target.name)}>Refresh</button>
                   
               
                    <button name="1" onClick={clikcHandel => this.onClick(clikcHandel.target.name)}>1</button>
                    <button name="2" onClick={clikcHandel => this.onClick(clikcHandel.target.name)}>2</button>
                    <button name="3" onClick={clikcHandel => this.onClick(clikcHandel.target.name)}>3</button>
                   
                   

                    <button name="4" onClick={clikcHandel=> this.onClick(clikcHandel.target.name)}>4</button>
                    <button name="5" onClick={clikcHandel => this.onClick(clikcHandel.target.name)}>5</button>
                    <button name="6" onClick={clikcHandel => this.onClick(clikcHandel.target.name)}>6</button>
               
                    <button name="7" onClick={clikcHandel => this.onClick(clikcHandel.target.name)}>7</button>
                    <button name="8" onClick={clikcHandel => this.onClick(clikcHandel.target.name)}>8</button>
                    <button name="9" onClick={clikcHandel => this.onClick(clikcHandel.target.name)}>9</button>
                  
                    <button class="btn2" name="0" onClick={clikcHandel => this.onClick(clikcHandel.target.name)}>0</button>
                    <button class="btn2" name="=" onClick={clikcHandel => this.onClick(clikcHandel.target.name)}>=</button>
                    <button name="hint" onClick={clikcHandel => this.onClick(clikcHandel.target.name)}>hint</button>
                   
               
                </div>
           
        );
    }
    
}

export default App;
