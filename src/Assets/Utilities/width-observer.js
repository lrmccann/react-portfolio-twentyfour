import emitter from './event-bus';

const watchScreenSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    emitter.emit('screen-width-data', {'height': height, 'width': width})
  }
  export default watchScreenSize;