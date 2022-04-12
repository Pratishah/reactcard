import React from "react";
import { Card } from "antd";
import ItemType from "../Models/ItemType";
import "./Cardfunc.css";
const { Meta } = Card;

const Cardfunc: React.FC<{ Items: ItemType[] }> = (props) => {
  const elements = props.Items.map((item) => {
    return (
      <div key={item.id}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img className={"pic"} alt="example" src={item.imageLink} />}
        >
          <Meta title={item.Title} description={item.description} />
        </Card>
      </div>
    );
  });

  return <div className={"flexstyle"}>{elements}</div>;
};

export default Cardfunc;
