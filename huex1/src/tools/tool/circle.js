import paper from 'paper';
import store from '../../store';
import {createLayer} from '../shared';
import history from '../history';
import {DrawAction} from "../action";

let local = {
  path: null,
  center: null
};

const toolProperties = store.state.toolProperties.circle

function onMouseDown(event) {

  let layer = createLayer();
  const rgba = hexToRgba(toolProperties.color);

  local.path = new paper.Shape.Circle({
    center: event.point,
    strokeColor: `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a / 255})`,
    strokeWidth: toolProperties.size
  });
  layer.addChild(local.path);
  local.center = event.point;
}

function onMouseDrag(event) {
  if (!local.path) return;
  local.path.radius = Math.sqrt((event.point.x - local.center.x) * (event.point.x - local.center.x) + (event.point.y - local.center.y) * (event.point.y - local.center.y));
}


function onMouseUp() {
  const action = new DrawAction({
    layer: local.path.layer.name,
    tool: store.getters.activeTool,
    center: local.center,
    radius: local.path.radius
  });

  const json = local.path.layer.exportJSON()
  store.dispatch('addElementToCurrentBoardContent', json)

  local.path = null;
  history.add(action);
}

export const tool = new paper.Tool();
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
