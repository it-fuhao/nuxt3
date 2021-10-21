
import useCommon from './modules/useCommon'; // 公共模块
import useProduct from './modules/useProduct'; // 产品模块

// 存储key
const storeLocalKey = "nuxt3-demo";

// 模块缓存统一包一层，方便持久化存储
const Store = {
  useCommon,
  useProduct
}

// 持久化存储
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