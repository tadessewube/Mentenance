import { useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import "./problemAddForm.css";

function ProblemAdd(props) {
  var user = JSON.parse(localStorage.getItem("user"));
  var id = user["id"];
  var email = user["email"];
  var fullName = user['fullname']

  var [itemType, setItemType] = useState([])
  var [sysType, setItemSys] = useState([])
  var [isDisable, setIsDisable] = useState('')
  var [workField,setWorkField] = useState('')
  var [sex,setSex] = useState("")
  const directorateWorkflowName = useRef();
  const officeName = useRef();
  const officeNumber = useRef();
  const time = useRef();
  const sysUsername = useRef();
  const isUserDisabled = useRef()
  const reportedProblem = useRef();


  function handleCheckDisable(e){
    if(e.target.checked){
      isDisable = e.target.value
      console.log(isDisable)
    }
  }
  function handleCheckWorkfield(e){
    if(e.target.checked){
      workField = e.target.value
      console.log(workField)
    }
  }
  function handleCheckItem(e){

    if(e.target.checked){
      itemType.push(e.target.value)
    }
    if(!e.target.checked){
      itemType = itemType.filter((item)=> item !== e.target.value)
    }
    console.log(itemType)
  }

  function handleCheckSys(e){

    if(e.target.checked){
      sysType.push(e.target.value)
    }
    if(!e.target.checked){
      sysType = sysType.filter((item)=> item !== e.target.value)
    }
    console.log(sysType)
  }
 
  function handleAddProblem() {
    const enteredWrokField = workField;
    const entereddirectorateWorkflowName =
      directorateWorkflowName.current.value;
    const enteredofficeName = officeName.current.value;
    const enteredofficeNumber = officeNumber.current.value;
    const enteredtime = time.current.value;
    const enteredsysUsername = sysUsername.current.value;
    const enteredsex = sex;
    const enteredisUserDisabled = isUserDisabled.current.value;
    const entereditemType = itemType//.current.value;
    const enteredsysType = sysType
    const enteredreportedProblem = reportedProblem.current.value;

    const problemInfo = {
      workField: enteredWrokField,
      directorateWorkflowName: entereddirectorateWorkflowName,
      officeName: enteredofficeName,
      officeNumber: enteredofficeNumber,
      time: enteredtime,
      sysUsername: enteredsysUsername,
      sex: enteredsex,
      isUserDisabled: enteredisUserDisabled,
      itemType: entereditemType,
      sysType: enteredsysType,
      reportedProblem: enteredreportedProblem,
    };
    console.log(problemInfo)
    props.onAddProblem(problemInfo)
  }

  return (
    <Container className="contMain">
      <Row>
        <Col sm={6} md={9} lg={9}>
          <Form>
            <Row>
              <Row>
                {"?????????:"}
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Check
                      inline
                      label="?????? ???/??????"
                      name="group2"
                      type="radio"
                      value="?????? ???/??????"
                      onClick={handleCheckWorkfield}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Check
                      inline
                      label="????????? ????????? ???/??????"
                      name="group2"
                      type="radio"
                      onClick={handleCheckWorkfield}
                      value="????????? ????????? ???/??????"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Col>
                <FloatingLabel
                  controlId="directorateName"
                  label="??? ?????????????????????/ ??? ?????? ????????? ?????? "
                  className="mb-3"
                >
                  <Form.Control
                    style={{ height: "50px" }}
                    type="text"
                    placeholder=""
                    ref={directorateWorkflowName}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="officeNumber"
                  label="?????? ?????????"
                  className="mb-3"
                >
                  <Form.Control
                    style={{ height: "50px" }}
                    type="number"
                    placeholder=""
                    ref={officeNumber}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="name1"
                  label="??? ??????????????? ??????"
                  className="mb-3"
                >
                  <Form.Control
                    style={{ height: "50px" }}
                    type="email"
                    placeholder=""
                    ref={sysUsername}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="??? ????????? ???/?????? ??????"
                  className="mb-3"
                >
                  <Form.Control
                    style={{ height: "50px" }}
                    type="text"
                    placeholder=""
                    ref={officeName}
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="?????????"
                  className="mb-3"
                >
                  <Form.Control
                    style={{ height: "50px" }}
                    type="date"
                    placeholder=""
                    ref={time}
                  />
                </FloatingLabel>

                <FloatingLabel controlId="floatingSelect" label="??????">
                  <Form.Select onChange={(e)=>setSex(e.target.value)}>
                    <option value="?????????">?????????</option>
                    <option value="??????">??????</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>

            <Row className="ml-3">
              <Row className="mb-3">
                {"??? ???????????????  ????????? ???????????? ??????????"}
                <Col>
                  <Form.Group >
                    <Form.Check onClick={handleCheckDisable}  inline label="??????" value="??????" name="group1" type="radio" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group >
                    <Form.Check
                    ref={isUserDisabled}
                      inline
                      label="???????????????"
                      value="???????????????"
                      name="group1"
                      type="radio"
                      onClick={handleCheckDisable}
                    />
                  </Form.Group>
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>

              <Row className="mb-3">
                {"??? ????????? ????????????"}

                <Col>
                  <Form.Group>
                    <Form.Check value="??????????????????" onClick={handleCheckItem} label="??????????????????" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check value= "???????????????" onClick={handleCheckItem} label="???????????????" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check value="????????????" onClick={handleCheckItem} label="????????????" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check value="?????????" onClick={handleCheckItem} label="?????????" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check value="????????????" onClick={handleCheckItem} label="????????????" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check value={"??????"} onClick={handleCheckItem} label="??????" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                {"??? ???????????? ????????????    "}

                <Col>
                  <Form.Group>
                    <Form.Check value="????????????"  onClick={handleCheckSys}label="????????????" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check value="?????? ??????????????????" onClick={handleCheckSys} label="?????? ??????????????????" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check value="PIS" onClick={handleCheckSys} label="PIS" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check value="??????" onClick={handleCheckSys}  label="??????" />
                  </Form.Group>
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>

              <Form.Group className="mb-3" controlId="probDesc">
                <Row>
                  {"???????????? ??????????????? ????????????"}

                  <Col>
                    <Form.Control
                      placeholder="????????????????????? ????????? ?????????????????? ?????????..."
                      as="textarea"
                      rows={3}
                      ref={reportedProblem}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Row>
            <Button onClick={handleAddProblem} variant="secondary">??????</Button>
          </Form>
        </Col>
        <Col sm={6} md={3} lg={3}>
          <p>{fullName}</p>
          <p>{email}</p>
          <p>company worker</p>
          <p>tech not yet assigned</p>
        </Col>
      </Row>
    </Container>
  );
}

// export default ProblemAdd;
