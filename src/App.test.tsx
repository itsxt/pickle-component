import React from 'react';
import { render } from '@testing-library/react';
import Button from './components/Button/button';

test('app react test', ()=> {
  const wrapper = render( <Button>nice</Button> )
  const element = wrapper.queryByText('nice')
  expect(element).toBeTruthy();
})
