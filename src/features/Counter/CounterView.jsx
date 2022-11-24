import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementBy, reset } from './counterSlice';

const CounterView = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => (state.counter.count))

    return (
        <div style={{ textAlign: "center" }}>
            <h1>This is Counter app</h1>
            <h4>Value: {count}</h4>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementBy(5))}>Multiply 5</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default CounterView;