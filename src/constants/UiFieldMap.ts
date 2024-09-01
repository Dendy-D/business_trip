import UiTextField from '../ui-kit/UiField';
// import UiSelectField from '../ui-kit/ui-select-field/UiSelectField';
// import UiAutocompleteField from '../ui-kit/ui-autocomplete-field/UiAutocompleteField';
// import UiDateField from '../ui-kit/ui-date-field/UiDateField';
// import UiYearField from '../ui-kit/ui-date-field/UiYearField';
// import UiNumberField from '../ui-kit/ui-number-field/UiNumberField';
// import UiSimpleCodeValueField from '../ui-kit/ui-select-field/UiSimpleCodeValueField';
// import UiAutocompleteCodeValueField from '../ui-kit/ui-autocomplete-field/UiAutocompleteCodeValueField';

export const FIELD_TYPE = {
  TEXTFIELD: 'textfield',
  AUTOCOMPLETE: 'autocomplete',
  AUTOCOMPLETE_CODE_VALUE: 'autocompleteCodeValue',
  FILE: 'file',
  TEXTAREA: 'textarea',
  NUMBER: 'number',
  SELECT: 'select',
  SIMPLE_CODE_VALUE: 'simpleCodeValue',
  CHECKBOX: 'checkbox',
  DATETIME: 'datetime',
  DATE: 'date',
  YEAR: 'year',
  CHECKLIST: 'checklist',
};

export const UI_FIELD_MAP = {
  [FIELD_TYPE.TEXTFIELD]: UiTextField,
//   [FIELD_TYPE.NUMBER]: UiNumberField,
//   [FIELD_TYPE.SELECT]: UiSelectField,
//   [FIELD_TYPE.SIMPLE_CODE_VALUE]: UiSimpleCodeValueField,
//   [FIELD_TYPE.AUTOCOMPLETE]: UiAutocompleteField,
//   [FIELD_TYPE.AUTOCOMPLETE_CODE_VALUE]: UiAutocompleteCodeValueField,
  // [FIELD_TYPE.FILE]: UiFormInputFile,
  // [FIELD_TYPE.CHECKBOX]: ,
  // [FIELD_TYPE.CHECKLIST]: ,
  // [FIELD_TYPE.TEXTAREA]: ,
//   [FIELD_TYPE.DATE]: UiDateField,
//   [FIELD_TYPE.YEAR]: UiYearField,
};
