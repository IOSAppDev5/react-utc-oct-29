import React from 'react';
import Counter from './Counter';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

//describe -> Test Suite
        // it -> Test
        // beforeEach, afterEach 
        // beforeAll, afterAll

describe("Counter Compoponent", () => {

    it("should be created", () => {
        var x = 10;
        expect(x).toBe(10);

        const wrapper = shallow(<Counter />);
        expect(wrapper.instance()).toBeTruthy();
    })

    it("should have state.count as 0", () => {
       

        const wrapper = shallow(<Counter />);
        expect(wrapper.state().count).toBe(0);
    })
    it("should increment state by 1", () => {
       

        const wrapper = shallow(<Counter />);
        wrapper.instance().inc()
        expect(wrapper.state().count).toBe(1);
    })

})        

