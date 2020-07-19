import _ from 'lodash';
import React from 'react';
import { Button } from 'pico-ui';
import { SwipeableDrawer } from '@material-ui/core';
import { CTFragment, CTHeading, CTText } from 'layout';
import { uurl, elem } from 'utils';
import { epub } from '../../controllers';
import { connectWithRedux } from '../../redux';
import CarouselButton from './CarouselButton';
import './index.scss';

const getEPubItem = (rawEPubData, ePubItemId) => {
  if (ePubItemId) {
    let itemIdx = _.findIndex(rawEPubData, { id: ePubItemId });
    if (itemIdx >= 0) {
      return [rawEPubData[itemIdx], itemIdx];
    }
  }

  return [{}, 0];
};

function EPubItemCarousel({
  ePubItemId,
  rawEPubData
}) {
  const [item, itemIdx] = getEPubItem(rawEPubData, ePubItemId);
  const onClose = epub.ctrl.closeEPubItemCarousel;
  const open = Boolean(item.id);

  const toPrev = () => {
    if (itemIdx > 0) {
      epub.ctrl.openEPubItemCarousel(rawEPubData[itemIdx-1].id);
    }
  };

  const toNext = () => {
    if (itemIdx < rawEPubData.length - 1) {
      epub.ctrl.openEPubItemCarousel(rawEPubData[itemIdx+1].id);
    }
  };

  const navigate = () => {
    onClose();
    setTimeout(() => {
      elem.scrollIntoCenter(item.id, { focus: true, smooth: true });
    }, 300);
  };

  return (
    <SwipeableDrawer
      id={epub.const.SplitChapterItemCarouselID}
      anchor="bottom"
      open={open}
      onClose={onClose}
      classes={{paperAnchorBottom: 'epb-ch-item-carousel'}}
    >
      <CTFragment sticky vCenter hBetween padding="20">
        <CTHeading as="h3" margin="0">ePub Screenshots</CTHeading>
        <CarouselButton
          outlined
          disabled={itemIdx <= 0}
          startIcon={<span className="material-icons">chevron_left</span>}
          onClick={toPrev}
        >
          Previous screenshot
        </CarouselButton>

        <CarouselButton
          disabled={itemIdx >= rawEPubData.length - 1}
          startIcon={<span className="material-icons">near_me</span>}
          onClick={navigate}
        >
          Navigate to this item
        </CarouselButton>
        
        <CarouselButton
          outlined
          disabled={itemIdx >= rawEPubData.length - 1}
          endIcon={<span className="material-icons">chevron_right</span>}
          onClick={toNext}
        >
          Next screenshot
        </CarouselButton>
        <Button round icon="close" aria-label="close" onClick={onClose} />
      </CTFragment>
      <CTFragment list padding={[0, 20, 20, 20]}>
        <CTFragment id="epb-carousel-con" padding={[0, 20]}>
          <CTFragment className="epb-carl-img">
            <img src={uurl.getMediaUrl(item.image)} />
          </CTFragment>

          <CTFragment vCenter className="epb-carl-txt-con" padding={[0, 20]} data-scroll>
            <CTText size="medium">
              {item.text}
            </CTText>
          </CTFragment>
        </CTFragment>
      </CTFragment>
    </SwipeableDrawer>
  );
}

export default connectWithRedux(
  EPubItemCarousel,
  ['ePubItemId', 'rawEPubData']
);
