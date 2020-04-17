import paper from 'paper';
import store from '../../store';
import { createLayer } from '../shared';
import history from '../history';
import { DrawAction } from "../action";

let local = {
    path: null,
    group: null
}

const toolProperties = store.state.toolProperties.eraser

function onMouseDown(event) {
    let layer = createLayer();

    local.path = new paper.Path();
    local.path.strokeColor = '#ffffff';
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

function onMouseDrag(event) {
    if (!local.path) return;
    local.path.add(event.point);
}

function onMouseUp(event) {
    local.path.add(event.point);
    local.path.simplify();
    const action = new DrawAction({
        layer: local.path.layer.name,
        tool: {
            color: local.path.strokeColor,
            size: local.path.strokeWidth
        },
        points: local.path.segments.map(seg => {
            return {
                x: seg._point._x,
                y: seg._point._y
            }
        })
    });

  const json = local.path.layer.exportJSON()
  store.dispatch('addElementToCurrentBoardContent', json)

    local.path = null;
    local.group = null;
    history.add(action);
}


export const tool = new paper.Tool();
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;