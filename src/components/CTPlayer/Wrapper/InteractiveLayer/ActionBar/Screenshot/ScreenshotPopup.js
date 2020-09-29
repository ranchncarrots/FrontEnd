import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Button } from 'pico-ui';

function ScreenshotPopup(props) {
  const {
    open,
    imgBlob,
    onClose,
    downloadScreenshot,
    copyScreenshotLink
  } = props;

  const [copyStatus, setCopyStatus] = useState(0);
  const copying = copyStatus === 1;
  const copied = copyStatus > 1;

  const handleCopy = async () => {
    setCopyStatus(1);
    const successed = await copyScreenshotLink();
    setCopyStatus(successed ? 2 : 0);
    if (successed) {
      setTimeout(onClose, 2000);
    }
  };

  useEffect(() => {
    setCopyStatus(0);
  }, [open]);

  return open ? (
    <ClickAwayListener
      onClickAway={onClose}
    >
      <div className="ctp share-popup screenshot">
        <h5>Captured Image</h5>
        <div className="ctp share-image">
          <img src={imgBlob.url} alt="Captured screenshot" />
        </div>
        <div className="ctp ct-d-r-end pb-2 pt-2">
          <Button
            compact
            round
            icon={copied ? 'check' : null}
            color="white"
            onClick={handleCopy}
            loading={copying}
          >
            {copied ? 'COPIED' : 'COPY LINK'}
          </Button>
          <Button
            compact
            round
            // icon="get_app"
            color="black"
            onClick={downloadScreenshot}
            classNames="ml-2"
          >
            DOWNLOAD
          </Button>
          <Button
            compact
            round
            color="black"
            onClick={onClose}
            classNames="ml-2"
          >
            CANCEL
          </Button>
        </div>
      </div>
    </ClickAwayListener>
  ) : null;
}

ScreenshotPopup.propTypes = {
  open: PropTypes.bool,
  shareLink: PropTypes.string,
  onClose: PropTypes.func,
};

export default ScreenshotPopup;

