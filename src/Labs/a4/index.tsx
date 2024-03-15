import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import CounterRedux from "./ReduxExamples/CounterRedux";
import TodoList from "./ReduxExamples/todos/TodoList";
import AddRedux from "./ReduxExamples/AddRedux";
import HelloRedux from "./ReduxExamples/HelloRedux";
function Assignment4() {
    function sayHello() {
        alert("Hello");
    }

    return (
        <div>
            <h2>Assignment 4</h2>
            <TodoList />
            <AddRedux />
            <HelloRedux />
            <CounterRedux />
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello}/>
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
        </div>
    );
}

export default Assignment4;