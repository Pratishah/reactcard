import React from "react";

import { Card, Button } from "antd";
import "./Cardfunc.css";

const { Meta } = Card;

const Cardfunc: React.FC<any> = (props) => {
  // const elements = props.Items.map((item) => {

  // });

  // return <div className={"flexstyle"}>{elements}</div>;
  return (
    <div key={props.item.id}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img className={"pic"} alt="example" src={props.item.imageLink} />
        }
      >
        <Meta title={props.item.Title} description={props.item.description} />
        <br />
        <hr />
        <Button
          onClick={() => {
            props.bgcolor(props.item.color);
          }}
          style={{
            width: "10rem",
            backgroundColor: props.item.color,
            color: props.item.color === "black" ? "white" : "black",
          }}
        >
          Test
        </Button>
      </Card>
    </div>
  );
};

export default Cardfunc;
