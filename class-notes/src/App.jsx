import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Classes from './Classes/Aula1.jsx'
import Card from './Classes/Card.jsx'
import Button from './Classes/Button.jsx'
import Student from './Classes/PropsParent.jsx' //Parent sending props to Child
import UserGreeting from './Classes/UserGreeting.jsx'
import List from './Classes/List.jsx'
import PropList from './Classes/PropsList.jsx'

function App() {

  const fruits = [
    {id: 1, name: 'apple', calories: 95}, 
    {id: 2, name: 'strawberry', calories: 68}, 
    {id: 3, name: 'banana', calories: 35}, 
    {id: 4, name: 'melon', calories: 105}, 
    {id: 5, name: 'grapes', calories: 30}
  ]

  const vegetables = [
    {id: 6, name: 'potatoes', calories: 31}, 
    {id: 7, name: 'celery', calories: 78}, 
    {id: 8, name: 'carrots', calories: 55}, 
    {id: 9, name: 'lettuce', calories: 65}, 
    {id: 10, name: 'brocoli', calories: 60}
  ]

  const meats = []


  return(
    <>
      <Header/>
      <Classes/>
      <Card/>
      <Card/>
      <Button/>
      <div className="student-container">
      <Student name="Lara" age={5} isStudent={true}/>
      <Student name="Maggie" age={1} isStudent={true}/>
      <Student name="Ragnar" age={6} isStudent={false}/>
      <Student name="Luna" age={1} isStudent={false}/>
      <Student name="Hércules" age={9} isStudent={true}/>
      <Student/>
      </div>
      <UserGreeting isLoggedIn={true} username="Lara"/>
      <UserGreeting isLoggedIn={false} username="Alaska"/>
      <List/>
      {/* The expression && replaces the ? to only render if its true */}
      {fruits.length > 0 ?  <PropList items={fruits} category="Fruits"/> : null}
      {vegetables.length > 0 &&  <PropList items={vegetables} category="Vegetables"/>}
      {meats.length > 0 && <PropList items={meats} category="Meats"/>}
      
      <Footer/>
    </>
  );
}

export default App
