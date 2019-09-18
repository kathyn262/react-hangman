import React from "react";
import ReactDOM from 'react-dom';
import { mount } from "enzyme";
import Hangman from "./Hangman";
// import { exportAllDeclaration } from "@babel/types";
// import toJson from "enzyme-to-json";

it("renders without crashing", function () {
  const div = document.createElement("div");
  ReactDOM.render(<Hangman />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("it renders img1 after first incorrect guess", function () {
  let wrapper = mount(<Hangman />);
  wrapper
    .find("button[value='c']")
    .simulate("click", { target: { value: "c" } });
  
  let image = wrapper.find('img');
  let html = image.html();
  expect(html).toContain("1");
});

it("it increments number of wrong guesses after first incorrect guess", function () {
  let wrapper = mount(<Hangman />);
  wrapper
    .find("button[value='c']")
    .simulate("click", { target: { value: "c" } });
  
  let counter = wrapper.find('p.wrong-guesses');
  let html = counter.html();
  expect(html).toContain("1");
});

it("it ends the game after 6 guesses", function () {
  let wrapper = mount(<Hangman />);
  wrapper.setState({ nWrong: 7 });
  
  let image = wrapper.find('img');
  let html = image.html();
  expect(html).toContain("6");
});

