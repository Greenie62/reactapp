import React, {useState} from 'react'

const IngredientCard = ({ingredients}) => {
    const [toggle,setToggle] = useState(false)
    return (
        <div onClick={()=>setToggle(!toggle)} style={{opacity: toggle ? 1 : 0}} className='ingredientCard'>
            <h1>INGrEDIENT CARD</h1>
        </div>
    )
}

export default IngredientCard
