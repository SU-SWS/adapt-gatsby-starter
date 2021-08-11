import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from './Button';

describe('Button', () => {
  it('should render a Button', () => {
    const click = jest.fn();
    const component = renderer.create(
      <Button onClick={click}>Click Me</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
