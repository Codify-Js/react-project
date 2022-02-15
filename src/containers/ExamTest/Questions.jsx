import React from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Input } from "antd";

export default function Questions({value, onChange}) {
  const { TextArea } = Input;

  return (
    <TextArea 
      showCount
      maxLength={100}
      rows={4} 
      value={value}
      onChange={onChange}
    />
  );
}
