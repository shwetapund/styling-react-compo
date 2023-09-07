import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
//props
/*
function Card(props)
{
  const {name, bestfriend} = props;
  return(
    <>
    <h1>
      hello i am {name}🤗.
      <hr/>
      Mein hu ek udta robo {name}🥰.
      <hr/>
      My Best Friend is {bestfriend}😊.
    </h1>
    </>
  )
}
root.render(
 <>
 <Card name="doremon" bestfriend="Nobita"/>
</>
);
*/

//inline css -if we use inline css then wo use line par add karna hota hein .


function School(props)
{
  const {name, age} = props;
  return (
    <>
     <div>
      <h1 style={{textAlign: 'center'}}>My Self</h1>
      <hr/>
      <h3>My name is {name}.</h3>
      <h3>I am from {age}.</h3>
      </div>
    </>
  )

}

root.render(
  <>
  <School name="shweta" age="21"/>
  </>
)

//document level - if we use document css tab hum




