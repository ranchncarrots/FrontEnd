export const DEFAULT_IS_EDITING_EPUB = true;

// ID prefix
export const CHAPTER_ID_PREFIX = 'epub-ch';
export const SUB_CHAPTER_ID_PREFIX = 'epub-sub-ch';
export const NAV_CH_ID_PREFIX = 'ee-cn-ch';
export const NAV_SUB_CH_ID_PREFIX = 'ee-cn-sub-ch';

// epub chapters
export const NEW_CHAPTER = { id: 'msp-new-chapter' };

// Errors
export const NO_EPUB = 'no-epub';

// Editor Type
export const EDITOR_NONE = 'none';
export const EDITOR_DISPLAY = 'display';
export const EDITOR_RICHTEXT = 'richtext';
export const EDITOR_HTML = 'html';
export const EDITOR_MARKDOWN = 'markdown';

export const textEditorMap = {
  [EDITOR_RICHTEXT]: 'Rich Text Editor',
  [EDITOR_HTML]: 'HTML Editor',
  [EDITOR_MARKDOWN]: 'Markdown Editor'
};

export const EDITOR_TYPE_SPLITTER = '<!-- EDITOR_TYPE_SPLITTER -->';