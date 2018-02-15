import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import Button from '../../src/components/Button';

describe('----Button----', () => {

    test('should render a .button', () => {
        const component = renderer.create(
            <Button />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should render a .button with a label', () => {
        const component = renderer.create(
            <Button label='MyButton' />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should render a disabled .button', () => {
        const component = renderer.create(
            <Button enabled={false} />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should render a hidden .button', () => {
        const component = renderer.create(
            <Button visible={false} />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should have default props', () => {
        const wrapper = mount(<Button/>);
        expect(wrapper.props()).toEqual(expect.objectContaining({
            enabled: true,
            visible: true,
            label: '',
            icon: ''
        }));
    });

    test('should not call callback if disabled', () => {
        const onClick = jest.fn();
        const wrapper = mount(<Button onClick={onClick} />);
        wrapper.find('button').simulate('click');
        expect(onClick).toHaveBeenCalled();

        wrapper.setProps({ enabled: false });
        wrapper.find('button').simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

});
