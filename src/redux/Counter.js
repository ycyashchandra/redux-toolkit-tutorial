import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByFive, decrementByFive } from './counterSlice'

function Counter() {
    const count = useSelector((state) => state.count.counter);
    const dispatch = useDispatch();
  return (
    <>
    <div>Counter App</div>
    <p>{count}</p>
    <button onClick={() => dispatch(increment())}>+1</button>
    <button onClick={() => dispatch(decrement())}>-1</button>
    <button onClick={() => dispatch(incrementByFive())}>+5</button>
    <button onClick={() => dispatch(decrementByFive())}>-5</button>

    </>
  )
}

export default Counter