// import styles from "./page.module.css";
import React from 'react';
import {SecondLevel} from "./Component/FirstLevel";
// States
import TabDemo from "./Component/Tab/TabDemo";
import TodoVersion_2 from "./Component/TodoVersion2/TodoVersion_2";
import RenderingDemo from "./Component/Rendering/RenderingDemo";
import Fancy from "./Component/Rendering/Fancy";
import DifferentRoot from "./Component/Rendering/DifferentRoot";
import DifferentProperty from "./Component/Rendering/DifferentProperty";
import ChildWithKey from "./Component/Rendering/ChildWithKey";
import CounterWithReducer from "./Component/reducer/CounterWithReducer";
import TodoWithReducer from "./Component/reducer/TodoWithReducer";
import Section from "./Component/Context/Section";
import ContextDemo from "./Component/Context/ContextDemo";
import TodoCount from "./Component/reducer/TodoCount";
import ReducerWithContext from "./Component/reducer/ReducerWithContext";
import TodoWithReducer_Context from "./Component/reducer/TodoWithReducer_Context";
import RefDemo from "./Component/REf/RefDemo";
import FocusInputDemo from "./Component/REf/FocusInputDemo";
import OtherDOM from "./Component/REf/OtherDOM";
import DatePicker from "./Component/REf/DatePicker";
import EffectDemo from "./Component/Effect/EffectDemo";
import DataFetchDemo from "./Component/Effect/DataFetchDemo";
import ReturnEffect from "./Component/Effect/ReturnEffect";
import CustomHook from "./Component/Hook/CustomHook";
import Profile from "./Component/Hook/Profile";
import CustomReducerWithContext from "./Component/Hook/CustomeReducerWithContext";
import Basic from "./Component/form/BasicForm";
import {ValidationSchemaExample} from "./Component/form/ValidationSchemeExample";
import NotBasic from "./Component/formik_new/BasicForm";
import {ValidationWithYup} from "./Component/formik_new/Validation_With_Yup";
import CustomFormikDemo from "./Component/formik_new/CustomFormikDemo";
import PortalDemo from "./Component/Portal/PortalDemo";
import IdDemo from "./Component/IdDemo/IdDemo";
import CallBackProb from "./Component/CallBackProblem/CallBackProb";
import MemoDemo from "./Component/Hooks/MemoDemo";
import UseLayoutEffectDemo from "./Component/Hooks/UseLayoutEffectDemo";
import DeferredValueDemo from "./Component/Hooks/DeferredValueDemo";
import ImperativeHandleDemo from "./Component/Hooks/ImperativeHandleDemo";
import UserList from "./Component/DesginPattern/HOC/UserList";
import TodoList from "./Component/DesginPattern/HOC/TodoList";
import HOC_demo from "./Component/DesginPattern/HOC/HOC_demo";
import UserList_Modified from "./Component/DesginPattern/HOC/UserList_Modified";
import UserListWithFetchHook from "./Component/DesginPattern/HOOK/UserListWithFetchHook";
import FormWithUserInput from "./Component/DesginPattern/HOOK/FormWithUserInput";
import DisplayMousePosition from "./Component/DesginPattern/RenderPropPattern/DisplayMousePosition";
import RenderPropDemo from "./Component/DesginPattern/RenderPropPattern/RenderPropDemo";

export default function Home() {
    console.log("Create Element :", React.createElement);

    //making pure component
    let date = new Date();

    let headers = ['Tab1', 'Tab2', 'Tab3'];
    return (
        <main>
            {/*  <div>*/}
            {/*   <div>*/}
            {/*       React Start...*/}
            {/*       <HelloWorld/>*/}
            {/*       {"Helloworld".toLocaleUpperCase()}*/}
            {/*       /!*<hr>*!/*/}
            {/*       <hr/>*/}
            {/*       <HelloWorld/>*/}
            {/*       <Another/>*/}
            {/*       <hr/>*/}
            {/*       <JsxDemo/>*/}

            {/*   /!*    HEllo*!/*/}
            {/*   <hr/>*/}
            {/*  <Border>*/}
            {/*      <h1>For Properties</h1>*/}
            {/*      <Geeting name={"Aung Net"} person={{age:"20",addr:"Pyay"}} />*/}
            {/*      <Geeting person={{age : "30",addr:"Yangon"}} />*/}
            {/*  </Border>*/}

            {/*       <hr/>*/}

            {/*   /!*    Passing to Child*!/*/}
            {/*   <h3>*/}
            {/*       <FirstLevel person = {{name:"Egon",age:20,address:"Pyay"}} another={"This is another properties"} >*/}
            {/*           /!*Import as the child*!/*/}
            {/*           <h1>Child One</h1>*/}
            {/*           <h2>Child Two</h2>*/}
            {/*           <h3>Child Three</h3>*/}
            {/*       </FirstLevel>*/}
            {/*   </h3>*/}
            {/*    <hr/>*/}

            {/*    <Border>*/}
            {/*        <FirstLevel>*/}
            {/*            <code>With Borders</code>*/}
            {/*            <h3>Child 1</h3>*/}
            {/*            <h3>Child 0</h3>*/}
            {/*        </FirstLevel>*/}
            {/*    </Border>*/}

            {/*    <JSX_as_props tag = {<HelloWorld/>}></JSX_as_props>*/}

            {/*    <hr/>*/}
            {/*    <h1>Profile</h1>*/}
            {/*       <Profile admin={0}></Profile>*/}
            {/*    <h2>Number Problem</h2>*/}
            {/*    <NumberProblem/>*/}


            {/*    <h1>List Rendering</h1>*/}
            {/*       <ListDemo/>*/}

            {/*    <h1>Table </h1>*/}
            {/*    <TableDemo/>*/}

            {/*   /!* Pure Func*!/*/}
            {/*   <CurrentDate date={date}/>*/}

            {/*   /!*Event Handler*!/*/}
            {/*   <EventDemo/>*/}
            {/*   </div>*/}
            {/*  </div>*/}
            {/*<hr/>*/}
            {/*/!*    States*!/*/}
            {/*<div>*/}
            {/*    <h3><code>States</code></h3>*/}
            {/*    /!*<Counter/>*!/*/}
            {/*    /!*<Counter/>*!/*/}
            {/*    <h2>List Rendering Parents and Child </h2>*/}
            {/*        /!*<Parent/>*!/*/}

            {/*    <h1>Timer</h1>*/}
            {/*    <center>*/}
            {/*        /!*<Timer/>*!/*/}
            {/*    </center>*/}


            {/*    <Shapshot/>*/}

            {/*    <EqualityDemo/>*/}
            {/*    <EqualityDemoImmer/>*/}

            {/*    <h3>Array State</h3>*/}
            {/*    <ArrayListDemo/>*/}

            {/*    <h4>Managing State</h4>*/}
            {/*    <Border>*/}
            {/*        <FormDemo/>*/}
            {/*    </Border>*/}
            {/*</div>*/}

            {/*Tab Demo*/}

            {/*---------- Phase 3 ----------*/}
            {/*<TabDemo headers={headers}>*/}
            {/*    <div>Page 1</div>*/}
            {/*    <div>Page 2</div>*/}
            {/*    <div>Page 3</div>*/}
            {/*</TabDemo>*/}


            {/*<div><code><h1>Todo Version _ 2</h1></code></div>*/}

            {/*<TodoVersion_2/>*/}

            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<div>Render Tree</div>*/}
            {/*<RenderingDemo/>*/}


            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<Fancy/>*/}

            {/*<br/>*/}
            {/*<h1>Different Root</h1>*/}
            {/*<DifferentRoot/>*/}
            {/*<h1>Different Property</h1>*/}
            {/*<DifferentProperty/>*/}

            {/*<h1>Child With Key : Keys</h1>*/}
            {/*<ChildWithKey/>*/}

            {/*<h1>Reducer</h1>*/}
            {/*<CounterWithReducer/>*/}



            {/*<TodoWithReducer/>*/}
            {/*<br/><br/><br/>*/}
            {/*<div>Context Demo</div>*/}

            {/*<ContextDemo/>*/}

            {/*<hr/>*/}
            {/*<h3>To do Reducer With Context</h3>*/}
            {/*<ReducerWithContext/>*/}
            {/*<hr/>*/}
            {/*<div>Ref</div>*/}
            {/*<br/><br/>*/}
            {/*<RefDemo/>*/}


            {/*<br/>*/}
            {/*<FocusInputDemo/>*/}

            {/*<br/>*/}
            {/*<OtherDOM/>*/}

            {/*<h1>Date Picker :<code>Wrapper Approach</code></h1>*/}
            {/*    /!*<DatePicker/>*!/*/}

            {/*    <br/><br/>*/}
            {/* <h2>Effect</h2>*/}
            {/*/!*<EffectDemo/>*!/*/}

            {/*<h3>Effect Data Fetching</h3>*/}
            {/*<DataFetchDemo/>*/}

            {/*<h3>Return Effect</h3>*/}
            {/*<DifferentRoot/>*/}




            {/*<h1>Profile</h1>*/}
            {/*    <Profile/>*/}
            {/*<h4>todos</h4>*/}
            {/*<CustomHook/>*/}


            {/*<h3>CustomeReducer With Hood</h3>*/}
            {/*<CustomReducerWithContext/>*/}

            {/*<h1>Formik Old</h1>*/}
            {/*    <Basic/>*/}

            {/* <h3><code>Validation Schema</code></h3>*/}
            {/*<ValidationSchemaExample/>*/}
            {/*<hr/>*/}
            {/*<h1>New Formik</h1>*/}
            {/*<NotBasic/>*/}

            {/*<h1>With Yup Validation + Formik</h1>*/}
            {/*<ValidationWithYup/>*/}


            {/*---------- Phase 4 ----------*/}

            {/*<h4><u>Custom Formik Creation - Day 54</u></h4>*/}
            {/*    <CustomFormikDemo/>*/}

            {/* <h4>Portal</h4>*/}
            {/* <PortalDemo/>*/}

            {/* <h4>UseID</h4>*/}
            {/*<IdDemo/>*/}

            {/*<h4>UseCallBack</h4>*/}
            {/*<CallBackProb/>*/}

            {/*<h4>Custume Hook</h4>*/}
            {/*<CustomHook/>*/}

            {/*<h4>Use Memo</h4>*/}
            {/*<MemoDemo/>*/}

            {/*<h4>Use Layout Effect Demo</h4>*/}
            {/*<UseLayoutEffectDemo/>*/}
            {/*<h4>Use Deferred Value Demo</h4>*/}
            {/*<DeferredValueDemo/>*/}

            {/*<h4>Imperative Handle Demo</h4>*/}
            {/*<ImperativeHandleDemo/>*/}

        {/*    Steps in Thinking of react*/}
        {/*    <TodoWithReducer/>*/}

        {/*HOC Design Patterns*/}
        <h1>Design Patterns</h1>
        {/*<UserList/>*/}
        {/*<TodoList/>*/}

        {/*HOC-Modified*/}
        {/*<HOC_demo/>*/}

        {/*Hook*/}
        {/*<UserListWithFetchHook/>*/}
        {/*<FormWithUserInput/>*/}

        {/*RenderProp Pattern*/}
        {/*<DisplayMousePosition/>*/}

        {/*<RenderPropDemo/>*/}
        </main>
    );
}
