import {createLocalVue, shallowMount, mount} from '@vue/test-utils';
import NewDialog from "@/components/dialogs/NewDialog.vue";
// eslint-disable-next-line no-unused-vars
import Vuex, { Store } from 'vuex'
import Vuetify from 'vuetify';

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

describe('Toolbutton', () => {
  let actions: { addNewBoard: jest.Mock};
  let store: Store<any>;

  beforeEach(() => {
    actions = {
      addNewBoard: jest.fn()
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
    const wrapper = shallowMount(NewDialog, { 
      store,
      localVue,
    });

    expect(wrapper.html()).toMatchSnapshot();
  })

  it('should render a title', () => {
    const wrapper = mount(NewDialog, { 
      store, 
      localVue,
    });

    const el = wrapper.find('.v-card__title');
    expect(el.text()).toBe('Create new board');
  })

  it('should render a card text', () => {
    const wrapper = mount(NewDialog, { 
      store, 
      localVue,
    });

    const el = wrapper.find('.v-card__text');
    expect(el.text()).toBe('Create a new board? You can reopen this board by clicking on the Open button on the left side, or by saving and opening the URL at the top of your address bar.');
  })

  it('should render a red cancel button and a green new button', () => {
    const wrapper = mount(NewDialog, { 
      store, 
      localVue,
    });

    const buttons = wrapper.findAll('.v-card__actions > .v-btn');
    expect(buttons.at(0).classes()).toContain('v-btn--text');
    expect(buttons.at(0).classes()).toContain('accent--text');
    expect(buttons.at(1).classes()).toContain('primary');
  })
})
