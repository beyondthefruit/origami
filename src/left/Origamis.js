import { useState } from 'react';
import {
  BothContainer,
  ExploreIntro,
  OrigamiList,
  OrigamiListItem,
  OrigamisContainer,
} from './Origamis.style';
import Origami from '../right/Origami';
import { GiPaperCrane } from 'react-icons/gi';

const Origamis = ({ filterImg, paperData, setPaperData, getId }) => {
  const [activeEl, setActiveEl] = useState();
  const [index, setIndex] = useState(0);
  let current = 'current';
  const activeList = (e) => {
    // if (index === e) {
    //   // current = 'current';
    //   console.log('hello');
    // }
    // console.log(e.currentTarget);
    // console.log(e.target);
    // return e.currentTarget.classList('current');
    // e.currentTarget
    // setActiveEl(e.currentTarget);
    // console.log(activeEl);
  };
  const activePaper = (e) => {
    e.currentTarget.classList.add('actived');
    console.log('hi');
  };

  return (
    // <BothContainer>
    <OrigamisContainer>
      <ExploreIntro>Explore my designs</ExploreIntro>
      <OrigamiList>
        {paperData.map((origami) => {
          // console.log(origami);
          const { id, name, icon, photo } = origami;
          return (
            // <OrigamiListItem key={id} onClick={() => getId(origami.id)}>
            //   {icon} {name}
            <OrigamiListItem
              key={id}
              // onClick={() => {
              //   filterImg(photo);

              // }}
              onClick={activePaper}
            >
              {icon} {name}
            </OrigamiListItem>
          );
        })}
      </OrigamiList>
    </OrigamisContainer>
    // </BothContainer>
  );
};

export default Origamis;
