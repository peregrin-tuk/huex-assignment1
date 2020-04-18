import paper from 'paper';
import store from '../../store';
import {createLayer, hexToRgba, handleState} from '../shared';

interface iBrush {
  path: paper.Path | null
}

let local: iBrush = {
  path: null
}

const toolProperties = store.state.toolProperties.brush

function onMouseDown() {
  let layer = createLayer();
  local.path = new paper.Path();
  const rgba = hexToRgba(toolProperties.color);
  local.path.fillColor = `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a / 255})` as unknown as paper.Color;
  layer.addChild(local.path);
}

function onMouseDrag(event: paper.ToolEvent) {
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
  if (!local.path) return

  local.path.simplify(1);
  local.path.selected = false;

  handleState(local.path.layer.exportJSON())
  local.path = null;
}

export const tool = new paper.Tool();
tool.minDistance = 7;
tool.maxDistance = 7;
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;