import React from 'react';
import { CTFragment } from 'layout';
import { connectWithRedux } from '../../../controllers';
import ChapterInfo from './ChapterInfo';
import SubChapterItem from './SubChapterItem';
import './index.scss';

function ChapterEditor({ chapters, currChIndex }) {
  const currChapter = chapters[currChIndex] || {};
  const { subChapters = [] } = currChapter;

  return (
    <CTFragment className="ct-epb ech ch-con" shadowed>
      <ChapterInfo chapter={currChapter} />

      <CTFragment dFlexCol role="list">
        {subChapters.map((subChapter, subChapterIndex) => (
          <SubChapterItem
            key={`ee-ech-${subChapter.id}`}
            subChapter={subChapter}
            subChapterIndex={subChapterIndex}
          />
        ))}
      </CTFragment>
    </CTFragment>
  );
}

export default connectWithRedux(
  ChapterEditor, 
  ['currChIndex', 'chapters']
);