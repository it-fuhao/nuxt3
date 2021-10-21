import { defineStore } from 'pinia';

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