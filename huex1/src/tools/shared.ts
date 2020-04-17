// @ts-ignore
import uuid4 from 'uuid4';
import paper from 'paper';

export const createLayer = (id: any) => {
    if (!id) id = uuid4();
    let layer = new paper.Layer({
        name: id
    });
    paper.project.addLayer(layer);
    return layer;
}