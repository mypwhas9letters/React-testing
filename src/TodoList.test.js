import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './TodoList';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

it('renders "Our Todo List"', () => {
  const wrapper = shallow(<TodoList/>);
  const textHeader = <p>Our Todo List</p>;
  expect(wrapper.contains(textHeader)).toEqual(true);
});
