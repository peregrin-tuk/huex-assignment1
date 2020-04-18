import {createLocalVue, shallowMount} from '@vue/test-utils';
import Canvas from "@/components/Canvas.vue";
import Vuex from 'vuex'
import store from "@/store";

const localVue = createLocalVue()

localVue.use(Vuex)

describe('HelloWorld.vue', () => {

  it('renders props.msg when passed', () => {
    const msg = /canvas/
    const wrapper = shallowMount(Canvas, {store})
    expect(wrapper.text()).toMatch(msg)
  })
})
