import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CTFragment } from 'layout';
import { connectWithRedux, plControl } from '../../controllers';

import BreadCrumb from './BreadCrumb';
import PlaylistName from './PlaylistName';
import Actions from './Actions';
import './index.scss';

function PlaylistInfoWithRedux({
  offering,
  playlist
}) {
  const history = useHistory();

  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(playlist.name);

  const handleEdit = () => setEditing(true);

  const onInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleCancelRename = () => setEditing(false);

  const handleRename = () => {
    if (!inputValue) return;
    plControl.renamePlaylist(playlist, inputValue);
    handleCancelRename();
  };

  const handleDelete = () => {
    plControl.confirmDeletePlaylist(playlist.id, history);
  };

  const sourseURL = plControl.getPlaylistSourceURL(playlist);
  const plNameprops = {
    editing,
    sourseURL,
    inputValue,
    onInputChange,
    handleRename,
    ...playlist,
  };

  const actionProps = {
    editing,
    handleEdit,
    handleRename,
    handleCancelRename,
    handleDelete
  };

  return (
    <CTFragment padding={[30, 30, 10, 30]} id="ipl-pl-info">
      <BreadCrumb offering={offering} playlist={playlist} />

      <PlaylistName {...plNameprops} />

      <Actions {...actionProps} />
    </CTFragment>
  );
}

export const PlaylistInfo = connectWithRedux(
  PlaylistInfoWithRedux,
  ['playlist', 'offering']
);



