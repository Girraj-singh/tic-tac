import React, { useState } from 'react'
import Swal from "sweetalert2";

export const NewTick = () => {
    const [board , setBoard] = useState(Array(9).fill(''))
    const [toggle ,  setToggle] = useState(true)
    const [winner , setWinner] =  useState()





    const handleClick=(index)=>{
        const newBoard = [...board]
        newBoard[index] = toggle?'X':'O';
        setBoard(newBoard)
        setToggle(!toggle)
        handleWinner(newBoard)
    }
    const handlePlayer=()=>{
        if(winner){
            return(
                <span style={{fontSize:20,}}>Winner: <span style={{color:'greenyellow'}}>{winner}</span></span>
            )
        }
        else{
            return(
                <span>Next Player: {toggle?<span >X</span>:'O'}</span>
            )
        }

    }

    const handleButton=(index)=>{
        return(
            <div style={{height:80,width:80,textAlign:'center',fontSize:50,fontWeight:'bolder'}} onClick={()=>{handleClick(index)}} >
                {board[index]}
            </div>
        )
    }

    const handleWinner=(arr)=>{
        console.log('arry data ' , arr)
        const line = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        for(let i=0;i<line.length;i++){

            const [a,b,c] = line[i]
            if(arr[a]  && arr[a] === arr[b] && arr[a] === arr[c]){
                // console.log('you won this game')
                handlePopup(arr[a])
            }
        }
        var count = 0;

        for(let i=0;i<arr.length;i++){
            if(arr[i]=== 'X' || arr[i]=== 'O'){
                count++
            }
            if(count === arr.length){
                handleMachDraw()
            }
        }


    }

    const handlePopup=(event)=>{
        setWinner(event);
        Swal.fire({
            title: `winner is player ${event}`,
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://i.gifer.com/54vL.gif")
              left top
              repeat
            `
          });
          handleClear();
    }

    const handleMachDraw=()=>{
        Swal.fire({
            title: "GAME IS DRAW",
            width: 600,
            padding: "3em",
            color: "#716add",
          });
          handleClear();
    }

    const handleClear=()=>{
        setBoard(Array(9).fill(''))
        setWinner()
        handlePlayer()
    }
  return (
    <div >
        <div style={{fontSize:'18px', fontWeight:'bolder',margin:10}}>{handlePlayer()}</div>
        <div style={{display:'flex'}}>
           <div style={{borderBottom: '5px solid black',borderRight:'5px solid black'}}>{handleButton(0)}</div>
             <div style={{borderBottom: '5px solid black'}}>{handleButton(1)}</div>
            <div style={{borderBottom: '5px solid black',borderLeft:'5px solid black'}}>{handleButton(2)}</div>
        </div>
        <div style={{display:'flex' }}>
        <div style={{borderBottom: '5px solid black',borderRight:'5px solid black'}}>{handleButton(3)}</div>
        <div style={{borderBottom: '5px solid black'}}>{handleButton(4)}</div>
        <div style={{borderBottom: '5px solid black',borderLeft:'5px solid black'}}>{handleButton(5)}</div>
        </div>
        <div style={{display:'flex' }}>
        <div style={{borderRight:'5px solid black'}}>{handleButton(6)}</div>
            <div>{handleButton(7)}</div>
             <div style={{borderLeft:'5px solid black'}}>{handleButton(8)}</div>
        </div>
        <div ><button onClick={handleClear}>Reset</button></div>
    </div>
  )
}
