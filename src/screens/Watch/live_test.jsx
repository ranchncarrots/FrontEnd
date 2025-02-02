import React, { useEffect } from 'react';
import CTPlayer from 'components/CTPlayer';
import { uurl } from 'utils/use-url';

function LiveTest(props) {
    // const {}
    const { videosrc, iframesrc = null } = uurl.useSearch();
    if (!videosrc) {
        return <>Need videosrc, iframesrc params</>
    }
    const media = {
        isLive: true, // if this source is live
        videos: [{
            useHls: true,
            srcPath1: videosrc
            // srcPath1: 'https://klive.kaltura.com/s/dc-1/live/hls/p/1359391/e/1_23mx1syi/sd/6000/t/5cWuUSMATwMSDUQSIdCbnw/index-s32.m3u8?__hdnea__=st=1618984738~exp=1619071138~acl=/s/dc-1/live/hls/p/1359391/e/1_23mx1syi/sd/6000/t/5cWuUSMATwMSDUQSIdCbnw/index-s32.m3u8*~hmac=f2462a504f3b020d2be1862aaab876b93a77b1f8f682a757215e6a93cea8b898'
        }]
    };
    // https://hls-js.netlify.app/demo/
    return <>
        <div style={{width: '100%', height: iframesrc ? '75%' : '100%'}}>
            <CTPlayer
                fill
                defaultOpenCC
                hideWrapperOnMouseLeave
                allowTwoScreen
                allowScreenshot
                // onScreenshotCaptured={alert}
                media={media}
            />
        </div>
        {iframesrc && <iframe src={iframesrc} style={{ border: 0, width: '100%', height: '25%' }}></iframe>}
    </>
}

export default LiveTest;