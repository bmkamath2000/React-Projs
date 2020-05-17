import college from './college.png';
import './App.css';
import React, { useState } from 'react'
import {
  TextBox,
  Checkbox,
  DateTime,
  Telephone,
  DropDown,
  Option,
  OptionGroup,
  Form,
} from 'react-form-elements'

function App() {
  const [values, setValues] = useState({})
  
  let isCESIAN = prompt("Are you the cecian?","yes","no");
  if(isCESIAN==="yes");
  //alert( "Question Are you a CECian? you answered:"+isCESIAN+" Please take time out to participate in this survey" );
  else return(<h1>There is nothing in here for you</h1>);
  let mess1 = 'You are about to enter your details ', COLLEGE = `CITY`, mess2;
  let now = new Date();
  alert( `Hello, ${mess1} at ${now}!` ); 
  if(now.getHours()>=6&&now.getHours()<=12)
  mess2='Morning';
  else if(now.getHours()>12&&now.getHours()<=17)
  mess2='Afternoon';
  else if(now.getHours()>17&&now.getHours()<20)
  mess2='Evening';
  else mess2='Night';
  
  alert(`Since you are the student of ${COLLEGE}! Good ${mess2} to You`); 
  return (
    <div className="App">
      <header className="header">      
      <img src={college}  className="App-college" alt="college" />
    <h1><font color = "green">city engineering college</font></h1>
     <h6><font color = "maroon">Kanakapura Road, Doddakallasandra, Bikasipura, Bengaluru, Karnataka 560062 </font></h6>
     </header>
     <div className="partition-div">
     <div className="sidebar-container">
      <div data-testid="ref-out" className="sidebar">
        <h3>Your Response(is Precious to us):</h3>
        <ul>
          <li>student name: {values.myNAME}</li>
          <li>STUDENT USN: {values.myUSN}</li>
          <li>Checkbox: {values.myCheckBox}</li>
         < li>contacts: {values.myTelephone}</li>
          <li>Date OF Birth: {values.myDate}</li>
          
          <li>DateMonth: {values.myMonth}</li>
          
          <li>DateTimeLocal: {values.myDateTimeLocal}</li>
          <li>semister: {values.mysem}</li>
          <li>Online classes are Efficent: {values.myOC}</li>
          <li>DEPARTMENT: {values.myBranch}</li>
        </ul>
      </div>
    </div>
     <div className="body1">
          <h5>Hi There, please attempt the survey</h5>
      <Form
        name="testForm"
        onSubmit={data => {
          // data[form element name]
          setValues(data)
          // do something with values
        }}
      >
      
        <TextBox label="student name" name="myNAME" />
        <TextBox label="USN" name="myUSN" />
        <Checkbox
          label="My Checkbox"
          initialValue="The True"
          checked={false}
          name="myCheckBox"
        />
        
        <DateTime label="date of birth" name="myDate" />
       
        <Telephone label="phone" name="myTelephone" />
        <h6>month in which exams are conducted </h6>
        <DateTime label=" Month" type="month" name="myMonth" />
      
        <DateTime
          label="DateTime"
          type="datetime-local"
          name="myDateTimeLocal"
        />
       <DropDown
          label="DEPARTMENT"
          initialValue="2"
          data-testid="dd1"
          name="myBranch"
        >
          <OptionGroup label="Department">
            <h6>branch you belong to in CEC</h6>
            <Option initialValue="CS">COMPUTER SCIENCE</Option>
            <Option initialValue="EC">ELECTONICS</Option>
            <Option initialValue="ME">MECHANICAL</Option>
            <Option initialValue="CV">CIVIL</Option>
            <Option initialValue="CS" label="COMPUTER SCIENCE" />
          </OptionGroup>
         </DropDown>
        
        <DropDown
          label="current semister"
          initialValue="2"
          data-testid="dd1"
          name="mysem"
        >
          <OptionGroup label="First year">
            <Option initialValue="1">First</Option>
            <Option initialValue="2">Second</Option>
            <Option initialValue="3" label="second" />
          </OptionGroup>
          <OptionGroup label="Second year">
            <Option initialValue="3">Third</Option>
            <Option initialValue="4">fourth</Option>
            <Option initialValue="3" label="Third" />
          </OptionGroup>
          <OptionGroup label="Third year">
            <Option initialValue="5">fifth</Option>
            <Option initialValue="6">sixth</Option>
            <Option initialValue="5" label="fifth" />
          </OptionGroup>
          <OptionGroup label="year year">
            <Option initialValue="7">seveenth</Option>
            <Option initialValue="8">eight</Option>
            <Option initialValue="7" label="seveenth" />
          </OptionGroup>
        </DropDown>
        <h6>do you understand online clases city enginering</h6>
        <DropDown
          label="ONLINE CLASES ARE EFFICENT"
          initialValue="2"
          data-testid="dd1"
          name="myOC"
        >
          <OptionGroup label="yes/ no">
            <Option initialValue="NO">N0</Option>
            <Option initialValue="YES">YES</Option>
            <Option initialValue="NO" label="NO" />
          </OptionGroup>
          </DropDown>
      <button onClick={e => {}}><font color="green">Save</font></button>
      </Form>
      </div>
      
    </div>
    <div className="footer">
      <h1>© Void Technologies</h1>
      </div>
   </div>
  );
}

export default App;
