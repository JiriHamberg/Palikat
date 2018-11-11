import React from 'react'
import { shallow } from 'enzyme'
import Example from './Example'

// https://airbnb.io/enzyme/docs/api/shallow.html

describe('Example', () => {
    let component
    let props

    beforeEach(() => {
        props = {
            color: '#000000',
            text: 'testing'
        }
        component = shallow(<Example { ...props } />)
    })

    it('should render text', () => {
        expect(component.find('Text').text()).toEqual(props.text)
    })
})
