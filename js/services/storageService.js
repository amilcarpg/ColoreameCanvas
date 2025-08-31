const storage = typeof localStorage !== 'undefined'
  ? localStorage
  : (() => {
      const data = {};
      return {
        setItem: (k, v) => (data[k] = v),
        getItem: (k) => data[k] || null,
      };
    })();

export function save(key, value) {
  storage.setItem(key, JSON.stringify(value));
}

export function load(key, defaultValue) {
  const raw = storage.getItem(key);
  return raw ? JSON.parse(raw) : defaultValue;
}
