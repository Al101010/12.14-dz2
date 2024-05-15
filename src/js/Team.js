export default class Team {
    constructor() {
        this.members = [];
    }
  
    *[Symbol.iterator]() {
        for (let item of this.members) {
            yield item;
        }
    }
  
    add(item) {
        if (this.members.includes(item)) {
            throw new Error('такой персонаж уже существует в команде!');
        } else {
            this.members.push(item);
        }
    }
}