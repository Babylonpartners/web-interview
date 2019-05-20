import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'core-js/modules/es.array.flat-map'
import timeFormat from './helpers/time-formatter'
import { removeDuplicates, filterByType } from './helpers/appointment-filters'
import mockAppointment from './mock-data'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

test('formats date to hours and minutes/HH:mm', () => {
  expect(timeFormat('2019-08-30T19:21:30.000Z')).toEqual('20:21')
})

describe('Remove duplicates', () => {
  test('remove duplicate numbers', () => {
    expect(removeDuplicates([1, 2, 3, 4, 4, 1])).toEqual([1, 2, 3, 4])
  })

  test('remove duplicate strings', () => {
    expect(
      removeDuplicates(['one', 'one', 'three', 'four', 'four', 'five'])
    ).toEqual(['one', 'three', 'four', 'five'])
  })
})

describe('Filter by type', () => {
  test('filter by time', () => {
    expect(filterByType(mockAppointment, 'time')).toEqual(['10:11', '16:18'])
  })
  test('filter by appointmentType', () => {
    expect(filterByType(mockAppointment, 'appointmentType')).toEqual([
      'audio',
      'video',
    ])
  })
})
