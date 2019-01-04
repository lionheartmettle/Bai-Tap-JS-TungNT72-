const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};
var rs;
  
function withBoxUnlocked(body) {
  let z = box.locked;
  box.unlock();
  try {
    body();
  }
  finally {
    rs = box.content;
    box.lock();
  }
  
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}

console.log(box.locked);
console.log(rs);
// → true
