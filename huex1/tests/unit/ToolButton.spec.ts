import {createLocalVue, shallowMount, mount} from '@vue/test-utils';
import ToolButton from "@/components/buttons/ToolButton.vue";
import Vuex from 'vuex'
import Vuetify from 'vuetify';
import store from "@/store.ts";

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

describe('Toolbutton', () => {

  it('should match snapshot', () => {
    const wrapper = shallowMount(ToolButton, { 
      store,
      localVue,
      propsData: {
        tool: 'brush',
        icon: 'mdi-brush',
        selected: false
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  })

  it('contains a v-icon component', () => {
    const wrapper = mount(ToolButton, { 
      store, 
      localVue,
      propsData: {
        icon: 'mdi-icon'
      }
    });

    expect(wrapper.contains('.v-icon')).toBe(true);
  })

  it('renders an mdi icon based on the icon property', () => {
    const iconString = 'mdi-brush'
    const wrapper = mount(ToolButton, { 
      store,
      localVue,
      propsData: { icon: iconString }
    });

    const iconClasses = wrapper.find('.v-icon').classes();
    expect(iconClasses).toContain(iconString);
  })

  it('applies correct style classes when tool is selected', () => {
    const wrapper = mount(ToolButton, { 
      store,
      localVue,
      propsData: { 
        tool: 'brush',
        icon: 'mdi-icon'
      }
    });

    store.state.activeTool = 'brush'

    const buttonClasses = wrapper.find('.v-btn').classes();
    const iconClasses = wrapper.find('.v-icon').classes();

    expect(buttonClasses).toContain('v-btn--fab');
    expect(buttonClasses).toContain('v-size--small');
    expect(buttonClasses).not.toContain('v-btn--icon');

    expect(iconClasses).toContain('primary--text');
  })

  it('applies correct style classes when tool is not selected', () => {
    const wrapper = mount(ToolButton, { 
      store,
      localVue,
      propsData: {
        tool: 'eraser',
        icon: 'mdi-icon'
      }
    });

    store.state.activeTool = 'brush'

    let buttonClasses = wrapper.find('.v-btn').classes();
    let iconClasses = wrapper.find('.v-icon').classes();

    expect(buttonClasses).not.toContain('v-btn--fab');
    expect(buttonClasses).not.toContain('v-size--small');
    expect(buttonClasses).toContain('v-btn--icon');

    expect(iconClasses).toContain('white--text');
  })

})
