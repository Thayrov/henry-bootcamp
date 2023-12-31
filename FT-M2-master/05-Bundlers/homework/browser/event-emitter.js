class EventEmitter {
  constructor() {
    this.subscribers = {};
  }
  on(eventName, eventListener) {
    if (!this.subscribers[eventName]) {
      this.subscribers[eventName] = [];
    }
    this.subscribers[eventName].push(eventListener);
  }
  emit(eventName) {
    if (!this.subscribers[eventName]) return;
    let remainingArgs = [].slice.call(arguments, 1);
    this.subscribers[eventName].forEach(listener => listener.apply(null, remainingArgs));
  }
}

export default EventEmitter;
