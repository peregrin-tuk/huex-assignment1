import paper from 'paper';
import store from '../../store';
import {createLayer, handleState, hexToRgba} from '../shared';

interface iRectangle {
  path: paper.Shape.Rectangle | null,
  center: paper.Point | null,
  layer: paper.Layer | null
}

let local: iRectangle = {
  path: null,
  center: null,
  layer: null
};

const toolProperties = store.state.toolProperties.square

function onMouseDown(event: paper.ToolEvent) {
  local.layer = createLayer();
  local.center = event.point;
}

function onMouseDrag(event: paper.ToolEvent) {
  if(!local.center) return

  if (local.path) {
    local.path.remove();
  }
  local.path = new paper.Shape.Rectangle(local.center, event.point);
  const rgba = hexToRgba(toolProperties.color);
  local.path.strokeColor = `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a / 255})` as unknown as paper.Color;
  local.path.strokeWidth = toolProperties.size;
}

function onMouseUp() {
  if(!local.layer || !local.path) return
  local.layer.addChild(local.path);

  handleState(local.path.layer.exportJSON())
  local.path = null;
}

export const tool = new paper.Tool();
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;