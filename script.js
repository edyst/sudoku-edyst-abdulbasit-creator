function myfunction(position,blockcheck){
    for(let i=1;i<=81;i++)
    {
        document.getElementById(`${i}`).classList.remove("animate")
    }
      var count=0;
      var X;
      var Y;
      for(let i=0;i<9;i++)
      {
          for(let j=0;j<9;j++)
          {
              count++;
              if(count==position)
              {
                X=i;
                Y=j;
                break;
              }
          }
      }
   var a=X;
   var b=Y;
   //for row//
   for(var j=0;j<=8;j++)
    {
        const cellid1=a*9+j+1;
        document.querySelector(`#cell-${cellid1} input`).classList.add("animate");
    }
    //for column//
    for(var i=0;i<=8;i++)
    {  
        const cellid1=i*9+b+1;
        document.querySelector(`#cell-${cellid1} input`).classList.add("animate");
    }
    var x=document.getElementsByClassName(blockcheck)
    for(var k=0;k<x.length;k++)
    {
        x[k].classList.add("animate");
    }
}

    function getLocalItems() {
var a = (localStorage.getItem("value"));
var b = localStorage.getItem("id");

console.log("page_reloaded")
if (a) {
  var Lval = JSON.parse(localStorage.getItem("value"))

  var Lid=JSON.parse(localStorage.getItem("id"));

 for(var i=0;i<Lval.length;i++)
  {
    document.getElementById(Lid[i]).value=Lval[i];
  }

  }
  else
  {
    var Lval=[];
    var Lid=[];
  }

  }

getLocalItems();
function newGame()
{
    localStorage.clear();
    location.reload();
}
    function easysudoku()
    {
      // localStorage.clear();
      // location.reload();
    var change=document.getElementById("btn_easy");
    document.getElementById("btn_Hard").removeAttribute("style");
    document.getElementById("btn_Medium").removeAttribute("style");
    change.setAttribute("style", "background-color: #BBDEFB");
    const board = [
        [0, 0, 0, 2, 6, 0, 7, 0, 1],
        [6, 8, 0, 0, 7, 0, 0, 9, 0],
        [1, 9, 0, 0, 0, 4, 5, 0, 0],
        [8, 2, 0, 1, 0, 0, 0, 4, 0],
        [0, 0, 4, 6, 0, 2, 9, 0, 0],
        [0, 5, 0, 0, 0, 3, 0, 2, 8],
        [0, 0, 9, 3, 0, 0, 0, 7, 4],
        [0, 4, 0, 0, 5, 0, 0, 3, 6],
        [7, 0, 3, 0, 1, 8, 0, 0, 0],
    ]
      for(i=0;i<9;i++)
      {
          for(j=0;j<9;j++)
          {
              const cellid=i*9+j+1
              if(board[i][j]===0)
              {
                  document.querySelector(`#cell-${cellid} input`).value=""
                  document.querySelector(`#cell-${cellid} input`).classList.remove("prefilled");
                  document.querySelector(`#cell-${cellid} input`).readOnly=false;
              }
              else{
                document.querySelector(`#cell-${cellid} input`).value=board[i][j]
                document.querySelector(`#cell-${cellid} input`).classList.add("prefilled");
                document.querySelector(`#cell-${cellid} input`).readOnly=true;
              }
          }
      }

    }

    function hardsudoku()
    {
      localStorage.clear();
      //location.reload();
    var change=document.getElementById("btn_Hard");
    change.setAttribute("style", "background-color: #BBDEFB;"); 
    document.getElementById("btn_easy").removeAttribute("style");
    document.getElementById("btn_Medium").removeAttribute("style");
    const board = [
        [0, 0, 0, 2, 6, 0, 7, 0, 1],
        [6, 8, 0, 0, 7, 0, 0, 9, 0],
        [1, 9, 0, 0, 0, 4, 5, 0, 0],
        [8, 2, 0, 1, 0, 0, 0, 4, 0],
        [0, 0, 4, 6, 0, 2, 9, 0, 0],
        [0, 5, 0, 0, 0, 3, 0, 2, 8],
        [0, 0, 9, 3, 0, 0, 0, 7, 4],
        [0, 4, 0, 0, 5, 0, 0, 3, 6],
        [7, 0, 3, 0, 1, 8, 0, 0, 0],
    ]
      for(i=0;i<9;i++)
      {
          for(j=0;j<9;j++)
          {
              const cellid=i*9+j+1
              if(board[i][j]===0)
              {
                  document.querySelector(`#cell-${cellid} input`).value=""
                  document.querySelector(`#cell-${cellid} input`).readOnly=false;
              }
              else{
                document.querySelector(`#cell-${cellid} input`).value=board[i][j]
                document.querySelector(`#cell-${cellid} input`).readOnly=true;
              }
          }
      }
    }

    function mediumsudoku()
    {
      localStorage.clear();
      // location.reload();
       document.getElementById("btn_Hard").removeAttribute("style");
    document.getElementById("btn_easy").removeAttribute("style");
       var change=document.getElementById("btn_Medium");
    change.setAttribute("style", "background-color: #BBDEFB");       
    const board = [
        [0, 0, 0, 2, 6, 0, 7, 0, 1],
        [6, 8, 0, 0, 7, 0, 0, 9, 0],
        [1, 9, 0, 0, 0, 4, 5, 0, 0],
        [8, 2, 0, 1, 0, 0, 0, 4, 0],
        [0, 0, 4, 6, 0, 2, 9, 0, 0],
        [0, 5, 0, 0, 0, 3, 0, 2, 8],
        [0, 0, 9, 3, 0, 0, 0, 7, 4],
        [0, 4, 0, 0, 5, 0, 0, 3, 6],
        [7, 0, 3, 0, 1, 8, 0, 0, 0],
    ]
      for(i=0;i<9;i++)
      {
          for(j=0;j<9;j++)
          {
              const cellid=i*9+j+1
              if(board[i][j]===0)
              {
                  document.querySelector(`#cell-${cellid} input`).value=""
                  document.querySelector(`#cell-${cellid} input`).readOnly=false;
              }
              else{
                document.querySelector(`#cell-${cellid} input`).value=board[i][j]
                document.querySelector(`#cell-${cellid} input`).readOnly=true;
              }
          }
      }
    }

       function blocks(blocknumber){
        var one=[];
        var x=document.getElementsByClassName(blocknumber);
        for(var k=0;k<x.length;k++)
        {
            one.push(x[k].value);
        }
      var flag1=0;
      var flag2=0;
      for(let i=0;i<one.length;i++)
      {  
        for(let j=i+1;j<one.length;j++)
        {
               if(one[i]===one[j]&&one[i]!="")
               {   
                     //var a=
                     //var b=
                     //document.getElementById(`${a}`).classList.add("errorblock")  
                     //document.getElementById(`${b}`).classList.add("errorblock")  
                     flag1=1;
               }
               if(one[i]=="")
               {
                   flag2=1;
               }
        }
        if(flag1==1||flag2==1)
      {
          return false;
      }
    }
        


       }

     function row(rownumber){
       const two=[];
      const start=(rownumber-1)*9+1;
      const end=rownumber*9;
      for(let i=start;i<=end;i++)
      {
                     document.getElementById(i).classList.remove("errorrow")  
       }
      for(let i=start;i<=end;i++)
      {
             two.push(document.getElementById(i).value);
      }
      var flag1=0;
      var flag2=0;
      for(let i=0;i<two.length;i++)
      {  
        for(let j=i+1;j<two.length;j++)
        {
               if(two[i]===two[j]&&two[i]!="")
               {   
                     let a=start+i;
                     let b=start+j;
                     document.getElementById(`${a}`).classList.add("errorrow")  
                     document.getElementById(`${b}`).classList.add("errorrow")  
                     flag1=1;
               }
               if(two[i]=="")
               {
                   flag2=1;
               }
        }
      }
      if(flag1==1||flag2==1)
      {
          return false;
      }
     }
     function column(columnnumber){
            const three=[];
            const start=columnnumber;
            for(let i=start;i<=72+start;i+=9)
                    {
                     document.getElementById(i).classList.remove("errorcolumn")  
                    }    
            for(let i=start;i<=72+start;i+=9)
                    {
              three.push(document.getElementById(i).value);
                    }
      var flag1=0;
      var flag2=0;
    for(let i=0;i<three.length;i++)
      {
       for(let j=i+1;j<three.length;j++)
        {
               if(three[i]===three[j]&&three[i]!="")
               {   
                     let a=start+(9*i);
                     let b=start+(9*j);
                     document.getElementById(`${a}`).classList.add("errorcolumn")  
                     document.getElementById(`${b}`).classList.add("errorcolumn") 
                     flag1=1;
               }
               if(three[i]=="")
               {
                   flag2=1;
               }
        }
      }
      if(flag1==1||flag2==1)
      {
          return false;
      }
     }

     function validaterows(){
         var a=[];
        for(let i=1;i<=9;i++)
        {
               a[i]=row(i);
        }
        for(var i=1;i<a.length;i++)
        {
            if(a[i]==false)
            {
                return false; 
                break;
            }
        }
     }     
     function validatecolumns(){
         var a=[]
         for(let i=1;i<=9;i++)
         {
                a[i]=column(i);
         }
         for(var i=1;i<a.length;i++)
        {
            if(a[i]==false)
            {
                return false; 
                break;
            }
        }
     }
     function validateblocks(){
        var a=[]
            for(let i=0;i<=9;i++)
            {
                a[i]=blocks(i);
            }
            for(var i=1;i<a.length;i++)
        {
            if(a[i]==false)
            {
                return false; 
                break;
            }
        }
     }

     function ValidationCheck(){
            var check1=validaterows()
            var check2=validatecolumns()
            var check3=validateblocks()
            if(check1!=false&&check2!=false&&check3!=false)
            {
              var winning=document.createElement("h1");
              winning.innerText="YOU WON!!!";
              winning.setAttribute("style","color:red");
                 var win=document.getElementById("game");
                 win.appendChild(winning);
            }
     }
     easysudoku();
     document.getElementById('Validate').addEventListener('click',ValidationCheck)
     document.getElementById('btn_easy').addEventListener('click',easysudoku)
     document.getElementById('btn_Medium').addEventListener('click',mediumsudoku)
     document.getElementById('btn_Hard').addEventListener('click',hardsudoku);
    

    function myLocal(id) 
    {
        if(localStorage.getItem("value"))
        {
             Lval = JSON.parse(localStorage.getItem("value"))
 Lid=JSON.parse(localStorage.getItem("id"));
      Lval.push(document.getElementById(id).value);
      Lid.push(id);
    
      localStorage.setItem("value", JSON.stringify(Lval))
      localStorage.setItem("id", JSON.stringify(Lid))
        }
        else{
            Lval=[];
            Lid=[];
            Lval.push(document.getElementById(id).value);
      Lid.push(id);
    
      localStorage.setItem("value", JSON.stringify(Lval))
      localStorage.setItem("id", JSON.stringify(Lid))
        }
    }