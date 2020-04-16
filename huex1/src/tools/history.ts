// TODO Find out why eslint is complaining about an import that is used for class definitions
// TODO incorporate history into vuex state?
// eslint-disable-next-line no-unused-vars
import {DrawAction} from "@/tools/action";
// import store from "@/store";

class History {
  history: DrawAction[] = [];
  limit: number;
  current = 0;

    constructor(limit: number) {
        this.limit = limit;
        this.clear();
    }
    add(action: DrawAction) {
        if (this.history.length >= this.limit || this.current == this.history.length - 1) {
            this.history.shift();
        }
        this.history.push(action);
        this.current = this.history.length;
        console.log('added step to history')
    }
    undo() {
        if (this.current > 0) {
            this.history[--this.current].unexec();
        }
    }
    redo() {
        if (this.history.length > this.current) {
            this.history[this.current++].exec();
        }
    }
    clear() {
        this.history = [];
        this.current = 0;
    }
}

// Default size 20
export default new History(20);
