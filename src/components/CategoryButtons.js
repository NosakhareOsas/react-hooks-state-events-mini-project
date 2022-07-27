import React, {useState} from "react";

function CategoryButton ({category}){
  const [select, setSelect] = useState("m");
  const [buttonClass, setButtonClass] = useState("n")
  
  console.log(select, "out")
  console.log(buttonClass, "out")
  
  
  

  function handleSelect(event){
    
    setSelect((varw) => varw = "selected")
    setButtonClass((varx) => varx = event.target.name) 

    

    console.log(select, "in")
    console.log(buttonClass, "in")
    
  }

  return(
    <>
      <button key={category} className={select} onClick={handleSelect} name={category} id="button" >{category}</button>
    </>
  )
}

export default CategoryButton