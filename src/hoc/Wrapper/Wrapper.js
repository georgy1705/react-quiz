import React from "react";
import { useParams } from "react-router-dom";

const ElementWrapper = props => {
  // Component - ключ объекта, содержит нужный компонент
  const { Component, ...other } = props;
  
  const params = useParams();

  // инжектим параметры в пропсы как match объект
  return <Component {...{ ...other, match: { params } }} />;
};

export default ElementWrapper;