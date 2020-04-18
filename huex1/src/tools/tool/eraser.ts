import paper from 'paper';
import store from '../../store';
import {createLayer, handleState} from '../shared';

interface iEraser {
  path: paper.Path | null,
  group: paper.Group | null
}

let local: iEraser = {
  path: null,
  group: null
}

const toolProperties = store.state.toolProperties.eraser

function onMouseDown(event: paper.ToolEvent) {
  let layer = createLayer();

  local.path = new paper.Path();
  local.path.strokeColor = '#ffffff' as unknown as paper.Color;
  local.path.strokeWidth = toolProperties.size;

  local.path.add(event.point);

  local.group = new paper.Group({
    children: [local.path],
    layer: layer
  });
  local.group.addChild(new paper.Shape.Ellipse({
    layer: layer,
    center: event.point,
    fillColor: local.path.strokeColor,
    radius: local.path.strokeWidth / 2
  }));
  layer.addChild(local.group);
}

function onMouseDrag(event: paper.ToolEvent) {
  if (!local.path) return;
  local.path.add(event.point);
}

function onMouseUp(event: paper.ToolEvent) {
  if(!local.path) return

  local.path.add(event.point);
  local.path.simplify();

  handleState(local.path.layer.exportJSON())
  local.path = null;
  local.group = null;
}


export const tool = new paper.Tool();
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;