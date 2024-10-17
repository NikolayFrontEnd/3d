import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { pow, incrementByAmount } from './powSlice';

export function Pow(){

const c = useSelector(state => state.pow.v) 
const dispatch = useDispatch()

return (
    <div>
        <button onClick={() => dispatch(pow())}>
        НАЖМИ!!!
        </button>
        <span>{c}</span>
    </div>
)


}