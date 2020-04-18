import paper from 'paper';
import store from '../../store';
import {createLayer, handleState, hexToRgba} from '../shared';

interface iCircle {
  path: paper.Shape.Circle | null,
  center: paper.Point | null
}

let local: iCircle = {
  path: null,
  center: null
};

const toolProperties = store.state.toolProperties.circle

function onMouseDown(event: paper.ToolEvent) {

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

function onMouseDrag(event: paper.ToolEvent) {
  if (!local.path || !local.center) return

  local.path.radius = Math.sqrt((event.point.x - local.center.x) * (event.point.x - local.center.x) + (event.point.y - local.center.y) * (event.point.y - local.center.y));
}


function onMouseUp() {
  if(!local.path) return

  handleState(local.path.layer.exportJSON())
  local.path = null;
}

export const tool = new paper.Tool();
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;