import {createLocalVue, shallowMount, mount} from '@vue/test-utils';
import BoardTitle from "@/components/menus/BoardTitle.vue";
// eslint-disable-next-line no-unused-vars
import Vuex, { Store } from 'vuex'
import Vuetify from 'vuetify';

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

describe('BoardTitle', () => {
  let actions: { updateBoardName: jest.Mock};
  let store: Store<any>;

  beforeEach(() => {
    actions = {
      updateBoardName: jest.fn()
    }
    store = new Vuex.Store({
      actions,
      state: {
        currentBoard: {
          name: 'Awesome name',
          key: '#123456789',
          content: [],
          id: '1234'
        }
      }
    })
  })

  it('should match snapshot', () => {
    const wrapper = shallowMount(BoardTitle, { 
      store,
      localVue,
    });

    expect(wrapper.html()).toMatchSnapshot();
  })

  it('shows current board title', async () => {
    const wrapper = mount(BoardTitle, { 
      store, 
      localVue,
    });

    const input = <HTMLInputElement>wrapper.find('.v-text-field__slot > input').element;

    expect(input.value).toBe(store.state.currentBoard.name);
  })

  // // Events get not correctly triggered on input
  // it('persists new board title after edit', () => {
  //   const wrapper = mount(BoardTitle, { 
  //     store, 
  //     localVue,
  //   });

  //   const input = wrapper.find('.v-text-field__slot > input');
  //   const inputElement =  <HTMLInputElement>input.element;
  //   inputElement.value = 'New board name';

  //   input.trigger('input')
  //   input.trigger('blur')

  //   expect(actions.updateBoardName).toHaveBeenCalledTimes(1)
  // })

})
