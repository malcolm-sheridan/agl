import { shallowMount } from '@vue/test-utils'
import Person from '@/components/Person.vue'

describe('Person Component', () => {
  it('renders a vue instance successfully', () => {
    expect(shallowMount(Person).isVueInstance()).toBe(true)
  })
})

describe('Person Component', () => {
  it('does not have the css pink for a male', () => {

    let wrapper = shallowMount(Person, {
      propsData: {
        gender: 'Male'
      }
    })    
    
    expect(wrapper.contains(".pink")).toBe(false)    
  })
})

describe('Person Component', () => {
  it('does have the css blue for a male', () => {

    let wrapper = shallowMount(Person, {
      propsData: {
        gender: 'Male'
      }
    })    
    
    expect(wrapper.contains(".blue")).toBe(true)    
  })
})

describe('Person Component', () => {
  it('does have the css pink for a female', () => {

    let wrapper = shallowMount(Person, {
      propsData: {
        gender: 'Female'
      }
    })    
    
    expect(wrapper.contains(".pink")).toBe(true)    
  })
})

describe('Person Component', () => {
  it('does not have the css blue for a female', () => {

    let wrapper = shallowMount(Person, {
      propsData: {
        gender: 'Female'
      }
    })    
    
    expect(wrapper.contains(".blue")).toBe(false)    
  })
})

describe('Person Component', () => {
  it('does display one pet for a female', () => {

    let wrapper = shallowMount(Person, {
      propsData: {
        gender: 'Male',
        people: [
        {
          gender: 'Male',
          pets: [
            {
              name: 'Test',
              type: 'Cat'
            },
            {
              name: 'Test',
              type: 'Cat'
            }           
          ]
        }
        ]
      }
    })    
    //expect(wrapper.contains(".blue")).toBe(false) 
    expect(wrapper.findAll(Person).length).toBe(2)
    //expect(wrapper.findAll(".b-avatar-custom").length).toBe(2)
  })
})
