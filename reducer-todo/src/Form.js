import React, {useState, useReducer} from 'react';
import {reducer, jayneArray} from './reducers/reducer';

const initialState = jayneArray;

const ON_SUBMIT = 'ON_SUBMIT';
const ON_CLICK = 'ON_CLICK';

function Form() {

  const [formValues, dispatch] = useReducer(reducer, initialState);


  return (
    <div>
      <h2>ADD SOME TASKS!!</h2>
      <form 
        // onSubmit={onFormSubmit}
      >
        <input 
          value={formValues.item} 
          name='item'
          placeholder="Add Task"
          // onChange={onValueChange}
        />
      </form>

      {
        initialState.map((info) => (
          <div key={info.id}>
            <h4>{info.item}</h4>
          </div>
        ))
      }
    </div>
  )


}

export default Form;