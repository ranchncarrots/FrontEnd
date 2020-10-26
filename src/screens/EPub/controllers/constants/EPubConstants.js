/**
 * The contants used for generating ePub files
 */
export default class EPubConstants {
  // errors
  static EPubDataNotRequestedError = 'epub-not-requested';
  static EPubDataRequestedError = 'epub-requested';
  
  // view options
  static EpbReadOnly = 'v-read-only';
  static EpbEditStructure = 'v-structure';
  static EpbEditChapter = 'v-edit';
  static EpbDefaultView = EPubConstants.EpbEditStructure;

  // saving status
  static EpbUnsaved = 0;
  static EpbSaving = 1;
  static EpbSaved = 2;

  static EPubSteps = [
    EPubConstants.EPubStepSplitChapters,
    EPubConstants.EPubStepEditChapters,
    EPubConstants.EPubStepDownload
  ];
  
  // nav
  static EPubNavShowing = 'show';
  static EPubNavHiding = 'hide';
  static EPubNavClosed = null;
}