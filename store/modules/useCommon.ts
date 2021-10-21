import { defineStore } from 'pinia';
// import { KEY_SETTING } from '@/store/key';

interface commonStore {
  count: number;
}
const commonOptions = {
  id: 'common',
  state: (): commonStore => ({
    count: 0,
  }),
  actions: {
    setCount() {
      this.count++;
    },
    async setCountAsync() {
      await new Promise(resolve => {
        setTimeout(() => {
          this.count++;
          resolve(true);
        }, 3000);
      })
    }
  },
}

export default defineStore(commonOptions);