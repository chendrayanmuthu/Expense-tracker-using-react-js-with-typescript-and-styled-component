import React, { ChangeEvent, useEffect, useState } from "react";
import { styled } from "styled-components";
import { Button, Form, InputGroup ,Table} from "react-bootstrap";

const Card = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;
const Input = styled.div`
  width: 40%;
  height: 50%;
  box-shadow: 5px 5px 1px 1px darkgray;
  margin-left: 30%;
  background-color: lightgray;
  border-color: darkgreen;
  position: relative;
`;
const Total = styled.div`
  position: absolute;
  background-color: lightgray;
  width: 50%;
  height: 30%;
  border-style: outset;
  box-shadow: 5px 5px 1px 1px darkgray;
`;
const Exe = styled.div`
  position: absolute;
  background-color: lightgray;
  width: 50%;
  height: 30%;
  margin-left: 50%;
  border-style: outset;
  box-shadow: 5px 5px 1px 1px darkgray;
`;
const List = styled.div`
  position: absolute;
  background-color: lightgray;
  width: 100%;
  margin-top: 11%;
  height: 100%;
  border-style: outset;
  box-shadow: 5px 5px 1px 1px darkgray;
`;
const Rin = styled.ul`
  display: flex;
  list-style: none;
  /* li {
    padding-left: 10%;
  } */
  /* for selective li    */
  li:nth-child(2){
    padding-left: 15%;
}
li:nth-child(3){
    padding-left: 15%;
}
li:nth-child(4){
    padding-left: 15%;
}
`;
const Din=styled.ul`
display: flex;
  list-style: none;
  /* li {
    padding-left: 10%;
  } */
  /* for selective li    */
  li:nth-child(1){
    padding-left: 2%;
}
  li:nth-child(2){
    padding-left: 19%;
}
li:nth-child(3){
    padding-left: 18%;
}
li:nth-child(4){
    padding-left: 15%;
}
  
`
export interface FileProps {
  amount: number;
  disk: string;
  type: any;
}

export const Front: React.FC = (FileProps) => {
  const [amount, setAmount] = useState<any>(0);
  const [disk, setDisk] = useState("");
  const [type, setType] = useState("");
  const [total, setTotal] = useState<FileProps[]>([]);
 
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const newTask = { amount: amount, disk: disk, type: type };
    setTotal([...total, newTask]);
  };

  const iNCOM = total?.filter((d)=>d?.type==1)?.reduce(
    (sum, cur) => Number(sum) + Number(cur?.amount),
    0
  ); 
  const erx = total?.filter((d)=>d?.type==2)?.reduce(
    (sum, cur) => Number(sum) + Number(cur?.amount),
    0
  ); 

  console.log(iNCOM,'iNCOM')
  console.log(erx,'erx')

  return (
    <Card>
      <div>
        <h1>Expense tracker</h1>
        <Input>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Enter amout</InputGroup.Text>
              <Form.Control
                type="number"
                id="amount"
                value={amount}
                onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                  setAmount(event.target.value);
                }}
              />
            </InputGroup>
            <Form.Select
              aria-label="Default select example"
              id="type"
              value={type}
              onChange={(event: ChangeEvent<HTMLSelectElement>): void => {
                setType(event.target.value);
              }}
            >
              <option className="mb-3">Please select type</option>
              <option value="1">Income</option>
              <option value="2">Expence</option>
            </Form.Select>
            <br></br>

            <InputGroup className="mb-3">
              <InputGroup.Text>Description</InputGroup.Text>
              <Form.Control
                type="text"
                id="disk"
                value={disk}
                onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                  setDisk(event.target.value);
                }}
              />
            </InputGroup>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          
          <Total>
            <h6>Total Balance Amount</h6>
            <p>
            <h6>
            {iNCOM-erx} 
              </h6>
            </p>

          </Total>
          <Exe>
            <h6>Total Expense Amount</h6>
            <p>
            
              <h6>
            {erx} 
              </h6>
            </p>
          </Exe>
          <List>
           <h5>List of Tracker</h5> 
            <Rin>
  <li>Amount</li>
  <li>Description</li>
  <li>Type</li>
  {/* <li>Action</li> */}
  
 </Rin>
            {total.map((task: FileProps, key: number) => {
              return (

                
                <Din key={key}>
                  <li>
                    <h6>{task.amount}</h6>
                  </li>
                  <li>
                    <h6>{task.disk}</h6>
                  </li>
                  <li>
                    <h6>
                      {task.type === "1" ? <h6>Income</h6> : <h6>Expense</h6>}
                    </h6>
                  </li>
                </Din>
              );
            })}
          </List>
        </Input>
      </div>
      
    </Card>
  );
};
