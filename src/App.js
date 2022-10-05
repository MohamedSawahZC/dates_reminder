import {Col, Container, Row } from "react-bootstrap";
import person from "./data";
import DateItem from "./components/DateItem";
import {useState} from 'react';
function App() {
  const [personData,setPersonData]=useState(person);
  

  return (
    <div className="App font color-body">
      <Container className="py-5">
        <Row className="justify-content-center my-2">
          <Col sm="8">لديك {person.length} مواعيد اليوم</Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="8">
            <div className="rectangle p-2 my-2">
             {
              personData.length>0?  personData.map((item)=>{
                return (
                  <DateItem name={item.name} img={item.img} date={item.date} key={item.id} />
                )
              }): <h2 className="noData">لا توجد عناصر</h2>
             }
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center my-2">
          <Col sm="8" className="d-flex justify-content-between">
            <button onClick={()=>{setPersonData([])}} className="btn-style p-2">مسح الكل</button>
            <button onClick={()=>{setPersonData(person)}} className="btn-style p-2">عرض الكل</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
