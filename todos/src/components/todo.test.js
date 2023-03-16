import React from 'react'
import Todo from './Todo'
import {configure, shallow, mount } from "enzyme"

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("<Todo /> component unit test", () => {
    const mockFn = jest.fn();
    const props = {
        onClick: mockFn,
        completed: false,
        text: "buy milk"
    }

    let component ;
    beforeEach(() => {
        component = shallow(<Todo {...props} />)
      });

    //TEST HTML/ component renders properly
    it("should render 1 <Todo /> component", () => {
        expect(component).toHaveLength(1)
        expect(component.find("li")).toHaveLength(1)
    })
    //TEST PROP Value
    it("should render props correctly", () => {
        // const component = shallow(<Todo {...props} />)
        console.log(component.props())
        expect(component.props().children).toEqual("buy milk")
    })
    it("should set props correctly", () => {
        component.setProps({text:"hello"});
        expect(component.props().children).toEqual("hello")
    })

    //TEST onCLICK 
    it("should call onClick handler when Todo component is clicked", () => {
        component.simulate("click")
        expect(mockFn).toHaveBeenCalledTimes(1);
    })
});
describe("<Todo /> Styling behaviour", () => {
    const mockFn = jest.fn();
    it("should not have linethrough style when Todo is incomplete", () => {
        const component = shallow(<Todo onClick={mockFn} completed={false} text="Go Shopping" />)
        expect(component.props().style).toEqual({ textDecoration: 'none' })
    })
    it("should have linethrough style when Todo is complete", () => {
        const component = shallow(<Todo onClick={mockFn} completed={true} text="Go Shopping" />)
        expect(component.props().style).toEqual({ textDecoration: 'line-through' })
    })    
})