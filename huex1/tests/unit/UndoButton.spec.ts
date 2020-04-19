import {createLocalVue, shallowMount, mount} from '@vue/test-utils';
import UndoButton from "@/components/buttons/UndoButton.vue";
// eslint-disable-next-line no-unused-vars
import Vuex, { Store } from 'vuex'
import Vuetify from 'vuetify';

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

describe('BoardTitle', () => {
  let actions: { undoHistory: jest.Mock};
  let store: Store<any>;

  beforeEach(() => {
    actions = {
      undoHistory: jest.fn()
    }
    store = new Vuex.Store({
      actions,
      state: {
        currentBoard: {
          name: 'Awesome name',
          key: '#123456789',
          content: [
            { name: 'first shape' },
            { name: 'second shape' }
          ],
          id: '1234'
        }
      }
    })
  })

  it('should match snapshot', () => {
    const wrapper = shallowMount(UndoButton, { 
      store,
      localVue,
    });

    expect(wrapper.html()).toMatchSnapshot();
  })

  it('should remove latest element from current board content when clicked', () => {
    const wrapper = mount(UndoButton, { 
      store, 
      localVue,
    });

    const button = wrapper.find('.v-btn.undo-button');

    button.trigger('click');

    expect(actions.undoHistory).toHaveBeenCalledTimes(1);
  })
})
