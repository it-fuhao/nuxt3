import { defineStore } from 'pinia';
// import { KEY_SETTING } from '@/store/key';

export interface commonStore {
  count: number;
}
const useCommonStore = defineStore({
  id: 'common',
  state: (): commonStore => ({
    count: 0,
  }),
  actions: {
    setCount() {
      this.count++;
    }
  },
});



//instance
// export const initSettingStore = () => {
//   const instance = useCommonStore();

//   const l = local.getValue<Partial<SettingStore>>(KEY_SETTING, { dark: false });
//   instance.$patch({ ...l });

//   instance.$subscribe((_, state) => {
//     local.setValue(KEY_SETTING, { ...state });
//   });
// };

export default useCommonStore;