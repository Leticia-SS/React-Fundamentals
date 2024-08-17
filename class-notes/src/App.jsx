import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Classes from './Classes/Aula1.jsx'
import Card from './Classes/Card.jsx'
import Button from './Classes/Button.jsx'
import Student from './Classes/PropsParent.jsx' //Parent sending props to Child

function App() {
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
      <Footer/>
    </>
  );
}

export default App
