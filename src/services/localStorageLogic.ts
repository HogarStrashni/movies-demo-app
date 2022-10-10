const localStorageLogic = {
  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },

  get(key: string) {
    const val = window.localStorage.getItem(key);
    if (val) {
      return JSON.parse(val);
    } else {
      return null;
    }
  },
};

export default localStorageLogic;
