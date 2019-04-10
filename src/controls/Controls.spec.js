// Test away!
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';
import Dashboard from './Dashboard';


describe('button', () => {
  it.('proveid button to toggle closed', () => {
    const { getByText } = render(<Controls  />);
    getByText(/close gate/i))
    getByText(/lock gate/i))

it('text changes to reflect the state the door will be in if clicked', () => {
  const { getByText } = render(<Controls Closed={true} />);
getByText(/open gate/i)
})

it('the closed toggle button is disabled if the gate is closed', () => {
  const { queryByText } = render(<Controls Closed={true} />);
  expect(queryByText(/closed gate/i).toBeNull)
  
})

it('the locked toggle button is disabled if the gate is open', () => {
  const { queryByText } = render(<Controls />);
  expect(queryByText(/lock gate/i).disabled.toBeTruthy.toBeNull())
  expect(queryByText(/lock gate/i).enabled.toBeFalsy.toBeNull())
  
})
    

      

  })

describe('<Controls>', () => {
  it.('shows the controls and display', () => {
    render(<Controls/>)
    it('gate')
})

describe('Gate', () => {
  it.('defalts to unlocked and open', () => {
    const { getByText } = render(<Controls  />);
    getByText(/close Gate/i))
    

    it.('Can not be open or closed if locked', () => {
      const { getByText, queryByText } = render(<Controls closed={true}  locked={true}  />);
      getByText(/open gate/i).toBeNull()
      expect(queryByText(/close gate/i)).toBeNull()
      
    
})

