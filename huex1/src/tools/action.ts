import paper from 'paper';
// @ts-ignore
import { createLayer } from './shared';

interface constructorArgs {
  layer: number
}

export class DrawAction {
  _args: constructorArgs
  _removed: any
  constructor(args: constructorArgs) {
        this._args = args;
    }
    exec() {
    console.log('executing draw action')
        if (!paper.project.layers[this._args.layer]) {
            createLayer(this._args.layer);
        }
        if (this._removed) {
            return paper.project.layers[this._args.layer].addChildren(this._removed)
        }
    }
    unexec() {
        this._removed = paper.project.layers[this._args.layer].removeChildren();
    }
}