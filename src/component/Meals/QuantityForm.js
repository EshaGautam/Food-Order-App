import React from 'react'
import './QuantityForm.css'
import Button from '../Button/Button'

function QuantityForm() {
  return (
   <div>
   <form className='form-style' >
    <label htmlFor='qty'>
        Quantity:<input type="number" id="qty"></input>
    </label>
    <Button type='button' className="form_btn">+Add</Button>
   </form>
    </div>
  )
}

export default QuantityForm