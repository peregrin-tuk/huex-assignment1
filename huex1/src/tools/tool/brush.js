import paper from 'paper';
import store from '../../store';
import {createLayer} from '../shared';
import history from '../history';
import {DrawAction} from "../action";

let local = {
  path: null
}

const toolProperties = store.state.toolProperties.brush

function onMouseDown() {
  let layer = createLayer();
  local.path = new paper.Path();
  const rgba = hexToRgba(toolProperties.color || '#000000ff');
  local.path.fillColor = `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a / 255})`;
  layer.addChild(local.path);
}

function onMouseDrag(event) {
  if (!local.path) return;
  const step = event.delta;
  step.x *= toolProperties.size / 10;
  step.y *= toolProperties.size / 10;
  step.angle += 90;

  const top = event.middlePoint.add(step);
  const bottom = event.middlePoint.subtract(step);
  local.path.add(top);
  local.path.insert(0, bottom);
}


function onMouseUp() {
  local.path.simplify(1);
  const action = new DrawAction({
    layer: local.path.layer.name,
    tool: store.getters.activeTool,
    points: local.path.segments.map(seg => {
      return {
        x: seg._point._x,
        y: seg._point._y
      }
    })
  });
  history.add(action);
  local.path.selected = false;

  const json = local.path.layer.exportJSON()
  store.dispatch('addElementToCurrentBoardContent', json)

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
