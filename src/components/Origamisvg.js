import { FlyingOrigami } from './FlyingOrigami.style';

const OrigamiSvg = ({ origamiColor, origamiStrokeColor, origamiFly }) => {
  // console.log('this is origami fly' + origamiFly);
  // console.log('this is origami color' + origamiColor);
  return (
    <FlyingOrigami>
      <svg
        id='bird'
        viewBox='0 0 450 350'
        xmlns='http://www.w3.org/2000/svg'
        fill={origamiColor}
        stroke={origamiStrokeColor}
        begin='animation.click'
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        <g id='head'>
          <path d='M288 8L327 33.5L295.767 39.068L288 8Z' strokeWidth='1.5534'>
            <animate
              attributeName='d'
              attributeType='XML'
              repeatCount={origamiFly}
              begin='animation.click'
              dur='2s'
              values='M288 8L327 33.5L295.767 39.068L288 8Z; M282.262 31.233L314 50L290.029 62.301L282.262 31.233Z;  M288 8L327 33.5L295.767 39.068L288 8Z;'
            />
          </path>
        </g>
        <g
          id='wingback'
          // fill={birdColor}
          // stroke='#808080'
          strokeWidth='0.776699'
        >
          <path d='M251.942 38.8334L138.445 86.6951L160.172 202.752M138.445 86.6951L119.567 1.15841ZM138.445 86.6951L213.244 54.7075L119.567 1.15841L2.5 6L152.293 165.077M119.567 1.15841L213.244 54.7075Z'>
            <animate
              attributeName='d'
              attributeType='XML'
              begin='animation.click'
              repeatCount={origamiFly}
              dur='2s'
              values='M251.942 38.8334L138.445 86.6951L160.172 202.752M138.445 86.6951L119.567 1.15841ZM138.445 86.6951L213.244 54.7075L119.567 1.15841L2.5 6L152.293 165.077M119.567 1.15841L213.244 54.7075Z; M299.137 88.3927L314.541 210.54L203.219 249.887M314.541 210.54L398.021 184.017ZM314.541 210.54L304.773 129.817L398.021 184.017L452.445 287.701L239.77 237.829M398.021 184.017L304.773 129.817Z; M251.942 38.8334L138.445 86.6951L160.172 202.752M138.445 86.6951L119.567 1.15841ZM138.445 86.6951L213.244 54.7075L119.567 1.15841L2.5 6L152.293 165.077M119.567 1.15841L213.244 54.7075Z;'
            />
          </path>
        </g>
        <g
          id='body'
          // fill={birdColor}
          //  stroke='#808080'
          strokeWidth='1.5534'
        >
          <path d='M287.379 7.767L225.243 38.835L108.738 233.01L209.709 225.243L302.913 62.1359L287.379 7.767Z'>
            <animate
              attributeName='d'
              attributeType='XML'
              begin='animation.click'
              repeatCount={origamiFly}
              dur='2s'
              values='M287.379 7.767L225.243 38.835L108.738 233.01L209.709 225.243L302.913 62.1359L287.379 7.767Z; M281.641 31L219.505 62.068L103 256.243L203.971 248.476L297.175 85.3689L281.641 31Z; M287.379 7.767L225.243 38.835L108.738 233.01L209.709 225.243L302.913 62.1359L287.379 7.767Z;'
            />
          </path>
        </g>
        <g
          id='wing'
          // fill={birdColor}
          // stroke='#808080'
        >
          <path
            d='M302.913 62.1359L189 109L209.709 225.243M189 109L170.874 23.301ZM189 109L264.078 77.6699L170.874 23.301L23.301 77.6699L202.16 187.5M170.874 23.301L264.078 77.6699Z'
            strokeWidth='1.5534'
          >
            <animate
              attributeName='d'
              attributeType='XML'
              repeatCount={origamiFly}
              begin='animation.click'
              dur='2s'
              values='M302.913 62.1359L189 109L209.709 225.243M189 109L170.874 23.301ZM189 109L264.078 77.6699L170.874 23.301L23.301 77.6699L202.16 187.5M170.874 23.301L264.078 77.6699Z; M298.341 84.7226L314.849 206.555L203.935 247.019M314.849 206.555L398.051 179.19ZM314.849 206.555L304.352 126.035L398.051 179.19L424.924 333.84L240.36 234.593M398.051 179.19L304.352 126.035Z; M302.913 62.1359L189 109L209.709 225.243M189 109L170.874 23.301ZM189 109L264.078 77.6699L170.874 23.301L23.301 77.6699L202.16 187.5M170.874 23.301L264.078 77.6699Z;'
            />
          </path>
        </g>
      </svg>
    </FlyingOrigami>
  );
};

export default OrigamiSvg;
