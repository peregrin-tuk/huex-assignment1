import paper from 'paper';
import store from '../../store';
import history from '../history';
import {createLayer} from '../shared';
import {DrawAction} from '../action';

let local = {
  path: null,
  center: null,
  layer: null
};

const toolProperties = store.state.toolProperties.triangle

function onMouseDown(event) {
  local.layer = createLayer();
  local.center = event.point;
}

function onMouseDrag(event) {
  if (local.path) {
    local.path.remove();
  }
  local.path = new paper.Path.RegularPolygon(local.center, 3, Math.sqrt((event.point.x - local.center.x) * (event.point.x - local.center.x) + (event.point.y - local.center.y) * (event.point.y - local.center.y)));
  const rgba = hexToRgba(toolProperties.color);
  local.path.strokeColor = `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a / 255})`;
  local.path.strokeWidth = toolProperties.size;
}

function onMouseUp() {
  local.layer.addChild(local.path);
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

  const json = local.path.layer.exportJSON()
  store.dispatch('addElementToCurrentBoardContent', json)

  history.add(action);
  local.path = null;
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
