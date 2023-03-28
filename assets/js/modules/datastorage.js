// store
export default class keepdata {
  static addToLocalStorage(library) {
    const storage = localStorage.setItem('inputVal', JSON.stringify(library));
    return storage;
  }

  static getStorage() {
    const storage = localStorage.getItem('inputVal') == null
      ? [] : JSON.parse(localStorage.getItem('inputVal'));
    return storage;
  }
}