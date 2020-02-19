import React, { useState } from 'react';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const StateContext = React.createContext();


export const state ={
    

    tabIndex:0

};


function ContextProvider(props){
    
    const [auth,setAuth] = useState(props.auth);
    const [tabIndex,setTabIndex]=useState(0);
    console.log(`tabs`);
    console.log(tabIndex);
    return(

        <StateContext.Provider value={{
            authState:[auth,setAuth],
            tabIndex:[tabIndex,setTabIndex]
        }} >

            {props.children}

        </StateContext.Provider>
    )
}

export { ContextProvider, StateContext};
/*
<MyContext.Provider
  value={{ value: [value, setValue], value2: [value2, setValue2] }}
>
  {props.children}
</MyContext.Provider>;

const App = () => {
  return (
    <div>
      <MyProvider>
        <ComponentA />
      </MyProvider>
    </div>
  );
};

const MyContext = React.createContext();

const MyProvider = props => {
  const [value, setValue] = React.useState("foo");
  const [value2, setValue2] = React.useState("goo");

  return (
    <MyContext.Provider
      value={{ value: [value, setValue], value2: [value2, setValue2] }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

const ComponentA = () => {
  const { value, value2 } = React.useContext(MyContext);
  const [stateValue, setStateValue] = value;
  const [stateValue2, setStateValue2] = value2;

  return (
    <div>
      <h1>The value is: {stateValue}</h1>
      <h1>The value2 is: {stateValue2}</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));*/