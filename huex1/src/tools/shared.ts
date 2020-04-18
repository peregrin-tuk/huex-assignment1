// @ts-ignore
import uuid4 from 'uuid4';
import paper from 'paper';
import store from "@/store";

export const createLayer = (id?: any) => {
    if (!id) id = uuid4();
    let layer = new paper.Layer({
        name: id
    });
    paper.project.addLayer(layer);
    return layer;
}

export const hexToRgba = (hex: string) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: parseInt(result[4], 16)
  } : {r: 0, g: 0, b: 0, a: 0};
}

export const handleState = (json: string) => {
  store.dispatch('addElementToCurrentBoardContent', json)
  store.commit('setCurrentBoardContributor', true)
}