import { tool as brush } from './brush';
import { tool as eraser } from './eraser';
import { tool as square } from './rectangle';
import { tool as triangle } from './triangle';
import { tool as circle } from './circle';

const toolList: { [key: string]: any } = {
  brush,
  eraser,
  square,
  circle,
  triangle,
}

export default toolList