
import useCommon from './modules/useCommon'; // 公共缓存

const storeLocalKey = "nuxt3-demo";

const Store = {
  useCommon
}

const initStoreStorage = () => {
  const local = localStorage.getItem(storeLocalKey) ?? "{}";
  const l = JSON.parse(local);
  for (let key in Store) {
    const storeInstance = Store[key]();
    if (l[key]) {
      storeInstance.$patch({...l[key]});
    }
    storeInstance.$subscribe((_, state) => {
      l[key] = state;
      localStorage.setItem(storeLocalKey, JSON.stringify(l));
    });
  }
}

process.client && initStoreStorage();


export default Store;