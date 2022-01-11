import Vue, { VueConstructor } from 'vue';
import { createLocalVue } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import cloneDeep from 'lodash/cloneDeep';
import { state, mutations, actions, PageState, defaultState } from '../page';

const PAGE_SET_TEST_VALUE = {
  title: 'Test Title',
  opaqueAppBar: false,
  navDrawer: false,
  isScrolled: false,
  backdrop: {
    blurhash: 'L7F$k?_*41GX^]KhTnJ8G?OXvz#;',
    opacity: 1
  }
};

const BACKDROP_TEST_MUTATION = {
  newBlurhash: 'L7F$k?_*41GX^]KhTnJ8G?OXvz#;',
  newOpacity: 1
};

let localVue: VueConstructor<Vue>;
let store: Store<PageState>;

beforeEach(() => {
  localVue = createLocalVue();
  localVue.use(Vuex);

  store = new Vuex.Store(cloneDeep({ state, mutations, actions }));
});

describe('vuex: page', () => {
  it('sets the title when "SET_PAGE_TITLE" is committed', () => {
    store.replaceState({ ...defaultState() });

    store.commit('SET_PAGE_TITLE', { title: PAGE_SET_TEST_VALUE.title });

    expect(store.state.title).toBe(PAGE_SET_TEST_VALUE.title);
  });

  it('sets the app bar opacity when "SET_APPBAR_OPACITY" is committed', () => {
    store.replaceState({ ...defaultState() });

    store.commit('SET_APPBAR_OPACITY', {
      opaqueAppBar: PAGE_SET_TEST_VALUE.opaqueAppBar
    });

    expect(store.state.opaqueAppBar).toBe(PAGE_SET_TEST_VALUE.opaqueAppBar);
  });

  it('sets the navigation drawer visibility when "SET_NAVDRAWER_VISIBILITY" is committed', () => {
    store.replaceState({ ...defaultState() });

    store.commit('SET_NAVDRAWER_VISIBILITY', {
      showNavDrawer: PAGE_SET_TEST_VALUE.navDrawer
    });

    expect(store.state.navDrawer).toBe(PAGE_SET_TEST_VALUE.navDrawer);
  });

  it('resets the state when "CLEAR_PAGE" is committed', () => {
    store.replaceState({ ...PAGE_SET_TEST_VALUE });

    store.commit('CLEAR_PAGE');

    expect(store.state).toMatchObject(defaultState());
  });

  it('sets the title when setPageTitle is dispatched', () => {
    // TODO: This should only test if the proper mutation is committed
    store.replaceState({ ...defaultState() });

    store.dispatch('setPageTitle', { title: PAGE_SET_TEST_VALUE.title });

    expect(store.state.title).toBe(PAGE_SET_TEST_VALUE.title);
  });

  it('sets the app bar opacity when setAppBarOpacity is dispatched', () => {
    // TODO: This should only test if the proper mutation is committed
    store.replaceState({ ...defaultState() });

    store.dispatch('setAppBarOpacity', {
      opaqueAppBar: PAGE_SET_TEST_VALUE.opaqueAppBar
    });

    expect(store.state.opaqueAppBar).toBe(PAGE_SET_TEST_VALUE.opaqueAppBar);
  });

  it('sets the navigation drawer visibility when showNavDrawer is dispatched', () => {
    // TODO: This should only test if the proper mutation is committed
    store.replaceState({ ...defaultState() });

    store.dispatch('showNavDrawer', {
      showNavDrawer: PAGE_SET_TEST_VALUE.navDrawer
    });

    expect(store.state.navDrawer).toBe(PAGE_SET_TEST_VALUE.navDrawer);
  });

  it('resets the state when clearPage is dispatched', () => {
    // TODO: This should only test if the proper mutation is committed
    store.replaceState({ ...PAGE_SET_TEST_VALUE });

    store.dispatch('clearPage');

    expect(store.state).toMatchObject(defaultState());
  });

  it('sets the hash when "SET_BACKDROP" is committed', () => {
    store.replaceState({ ...defaultState() });

    store.commit('SET_BACKDROP', BACKDROP_TEST_MUTATION);

    expect(store.state.backdrop.blurhash).toBe(
      PAGE_SET_TEST_VALUE.backdrop.blurhash
    );
  });

  it('sets the opacity when "SET_BACKDROP_OPACITY" is committed', () => {
    store.replaceState({ ...defaultState() });

    store.commit('SET_BACKDROP_OPACITY', BACKDROP_TEST_MUTATION);

    expect(store.state.backdrop.opacity).toBe(1);
  });

  it('resets backdrop opacity when resetBackdropOpacity is dispatched', () => {
    store.replaceState({ ...PAGE_SET_TEST_VALUE });

    store.dispatch('resetBackdropOpacity');

    expect(store.state.backdrop.opacity).toStrictEqual(
      defaultState().backdrop.opacity
    );
  });

  it('clears all the backdrop data when "RESET_BACKDROP" is committed', () => {
    store.replaceState({ ...PAGE_SET_TEST_VALUE });

    store.commit('RESET_BACKDROP');

    expect(store.state.backdrop).toStrictEqual(defaultState().backdrop);
  });

  // Default case
  it('sets the hash when setBackdrop is dispatched', () => {
    // TODO: This should only test if the proper mutation is committed
    store.replaceState({ ...defaultState() });

    store.dispatch('setBackdrop', {
      hash: BACKDROP_TEST_MUTATION.newBlurhash
    });

    expect(store.state.backdrop.blurhash).toBe(
      BACKDROP_TEST_MUTATION.newBlurhash
    );
  });
  // CASE B

  it('sets the opacity when setBackdropOpacity is dispatched', () => {
    // TODO: This should only test if the proper mutation is committed
    store.replaceState({ ...defaultState() });

    store.dispatch('setBackdropOpacity', {
      newOpacity: BACKDROP_TEST_MUTATION.newOpacity
    });

    expect(store.state.backdrop.opacity).toBe(
      BACKDROP_TEST_MUTATION.newOpacity
    );
  });
});
