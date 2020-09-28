import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { links, uurl } from 'utils';
import { logoOutlineSvg } from 'assets/images';
import { CTPopoverLabel } from 'layout';
import Share from './Share';
import Screenshot from './Screenshot';
// import ShortcutButton from './ShortcutButton';
import './index.scss';

function ActionBar(props) {
  let {
    error,
    media,
    userReady,
    player,
    time
  } = props;

  const { mediaName } = media || {};
  const { id } = useParams();

  const watchOnClassTranscribe = (e) => {
    e.preventDefault();
    let url = window.location.origin + links.watch(id, { begin: time });
    uurl.openNewTab(url);
  };

  const handleCaptureScreenshot = (onScreenshotCaptured) => {
    // capture image of the primary video
    player.captureImage(!player.isSwappedScreen, onScreenshotCaptured);
  };

  return (
    <div className="ctp action-bar">
      <div className="left">
        <div className="media-name">
          <img
            alt="ClassTranscribe Logo"
            src={logoOutlineSvg}
            className="ctp ct-logo"
          />

          <CTPopoverLabel label="Watch this video on ClassTranscribe" placement="bottom-start">
            <a href={links.watch(id)} onClick={watchOnClassTranscribe}>
              {mediaName || 'Go to watch page for more details'}
            </a>
          </CTPopoverLabel>
        </div>
      </div>
      
      {
        userReady
        &&
        <div className="right">
          {
            player.isScreenshotAllowed 
            && 
            <Screenshot
              mediaName={mediaName} 
              captureScreenshot={handleCaptureScreenshot} 
            />
          }

          {!error && <Share media={media} time={time} />}
          {/* <ShortcutButton /> */}
        </div>
      }
    </div>
  );
}

ActionBar.propTypes = {
  media: PropTypes.object,
  time: PropTypes.number
};

export default ActionBar;

