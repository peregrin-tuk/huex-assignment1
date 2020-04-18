import paper from 'paper';
import store from '../../store';
import {createLayer, handleState, hexToRgba} from '../shared';

interface iTriangle {
  path: paper.Path | null,
  center: paper.Point | null,
  layer: paper.Layer | null
}

let local: iTriangle = {
  path: null,
  center: null,
  layer: null
};

const toolProperties = store.state.toolProperties.triangle

function onMouseDown(event: paper.ToolEvent) {
  local.layer = createLayer();
  local.center = event.point;
}

function onMouseDrag(event: paper.ToolEvent) {
  if(!local.center) return
  if (local.path) {
    local.path.remove();
  }

  local.path = new paper.Path.RegularPolygon(local.center, 3, Math.sqrt((event.point.x - local.center.x) * (event.point.x - local.center.x) + (event.point.y - local.center.y) * (event.point.y - local.center.y)));
  const rgba = hexToRgba(toolProperties.color);
  local.path.strokeColor = `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a / 255})` as unknown as paper.Color;
  local.path.strokeWidth = toolProperties.size;
}

function onMouseUp() {
  if (!local.layer || !local.path) return
  local.layer.addChild(local.path);

  handleState(local.path.layer.exportJSON())
  local.path = null;
}

export const tool = new paper.Tool();
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;