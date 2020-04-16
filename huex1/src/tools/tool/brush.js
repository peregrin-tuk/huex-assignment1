import paper from 'paper';
import store from '../../store';
import { createLayer } from '../shared';
import history from '../history';
import { DrawAction } from "../action";

let local = {
    path: null
}

const toolProperties = store.state.toolProperties.brush

function onMouseDown() {
    let layer = createLayer();
    local.path = new paper.Path();
    let rgb = hexToRgba(toolProperties.color || '#000000ff');
  console.log(rgb.a/255)
    local.path.fillColor = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a / 255})`;
    console.log(local.path.fillColor)
    layer.addChild(local.path);
    //console.log(layer)
}

function onMouseDrag(event) {
    if (!local.path) return;
    var step = event.delta;
    step.x *= toolProperties.size / 10;
    step.y *= toolProperties.size / 10;
    step.angle += 90;

    var top = event.middlePoint.add(step);
    var bottom = event.middlePoint.subtract(step);
    // local.path.selected = true;
    local.path.add(top);
    local.path.insert(0, bottom);
}


function onMouseUp() {
    local.path.simplify(1);
    const action = new DrawAction({
        layer: local.path.layer.name,
        tool: store.getters.tool,
        points: local.path.segments.map(seg => {
            return {
                x: seg._point._x,
                y: seg._point._y
            }
        })
    });
    history.add(action);
    local.path.selected = false;
    local.path = null;
}

export const tool = new paper.Tool();
tool.minDistance = 7;
tool.maxDistance = 7;
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;

function hexToRgba(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      a: parseInt(result[4], 16)
    } : null;
}
