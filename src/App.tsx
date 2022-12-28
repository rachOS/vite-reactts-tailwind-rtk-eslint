import React, {useState} from "react";
import Counter from "./features/counter/Counter";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {replace} from "./features/counter/stackSlice";
import {selectCount} from "./features/counter/counterSlice";

function App(): JSX.Element {
    const {stackSlice} = useAppSelector(s => s)
    const count = useAppSelector(selectCount);
    const [stack, setStack] = useState(0);

    const dispatch = useAppDispatch()
    React.useEffect(() => {
        dispatch(replace({id: stack , qty : count}))
    }, [count, dispatch, stack])
    return (
        <div className="App">
            <Counter/>
            <div>{stackSlice.map((stack: any): any => <div key={stack.id} className="bg-gray-200 text-gray-600 px-8 py-2 text-3xl rounded-md shadow-inner"
                                                                              onClick={() => setStack(stack.id)}><button>replace stack {stack.id}</button> {stack.qty}</div>)}</div>
        </div>
    );
}

export default App;
