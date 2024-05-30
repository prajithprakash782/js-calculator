let exp=""
let prevnum=0
let opr=""
let flag=0
document.querySelectorAll("button").forEach(button=>{
    button.addEventListener("click",()=>{
        val=button.getAttribute("value")
        if(val==="C"){
            exp=""
            document.getElementById("input").innerHTML = "0";
        }
        // else if(val=="."){
        //     exp+="."
        //     document.getElementById("input").innerHTML= exp;
        // }
        else if(val==="+"){
            prevnum = exp
            opr="+";
            
            document.getElementById("input").innerHTML = "";
            exp=""

            
        }
        else if(val==="-"){
            prevnum = exp
            opr="-";
            
            document.getElementById("input").innerHTML = "";
            exp=""

        }
        else if(val==="*"){
            prevnum = exp
            opr="*";
            
            document.getElementById("input").innerHTML = "";
            exp=""

        }
        else if(val==="/"){
            prevnum = exp
            opr="/";
            
            document.getElementById("input").innerHTML = "";
            exp=""

        }
        else if(val==="="){
            if(opr==="+"){
                exp=Number(prevnum) + Number(exp)
               
            }
            else if(opr==="-"){
                exp=Number(prevnum) - Number(exp)
                
            }
            else if(opr==="*"){
                exp=Number(prevnum) * Number(exp)
                
            }
            else if(opr==="/"){
                exp=Number(prevnum) / Number(exp)
                
            }
            document.getElementById("input").innerHTML = exp;
            flag=1
           

            
        }
    
        else{
            if(flag === 1) {
                exp = '';
                flag = 0;
            }
            
            exp+=val
            
            // if(val=="=" && opr=="+"){
            //     exp=Number(num) + Number(exp)
            // }
            
            document.getElementById("input").innerHTML = exp;


           
        }
        
    })
})


