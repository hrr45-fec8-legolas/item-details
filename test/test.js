import React from 'react';
import ReactDOM from "react-dom";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../client/App';

configure({ adapter: new Adapter() });

describe('Components', () => {
  it('should render App component', () => {
    shallow(<App />);
  });

});
