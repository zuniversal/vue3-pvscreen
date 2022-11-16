
export const SELECT_TXT = '请选择';
export const INPUT_TXT = '请输入';
export const WORD = '关键字';
export const REQUIRE = '字段必填！';

export const getLabel = (label, key) => {
  const labelMap = {
    rowText: '',
    Input: INPUT_TXT + label,
    InputNumber: INPUT_TXT + label,
    TextArea: INPUT_TXT + label,
    Select: SELECT_TXT + label,
    Search: SELECT_TXT + label,
    Password: INPUT_TXT + label,
    Cascader: SELECT_TXT + label,
    AutoComplete: INPUT_TXT + label,
    Checkbox: SELECT_TXT + label,
    CheckboxItem: SELECT_TXT + label,
    Radio: SELECT_TXT + label,
    DatePicker: SELECT_TXT + label,
    MonthPicker: SELECT_TXT + label,
    // RangePicker: SELECT_TXT + label,
  };

  return labelMap[key];
};

export const rules = (params, extra) => {
  const { items, label, formType, ruleExtra } = params;
  const message = getLabel(label, formType);
  // console.log(' rules   params, extra,  ,   ： ', params, extra, message, label, formType,  );

  return [
    {
      required: true,
      message: label + REQUIRE,
    },
    ...(ruleExtra ? ruleExtra : []),
  ];
};

export const defProps = {
  name: {
    type: String,
    default: 'smartForm',
  },
  className: {
    type: String,
    default: '',
  },
  config: {
    type: Array,
    default: [],
  },
  flexRow: {
    type: Number,
    default: 0,
  },
  isRowBtn: {
    type: Boolean,
    default: false,
  },
  init: {
    type: Object,
    default: {},
  },
  formProps: {
    type: Object,
    default: {},
  },
  isMockData: {
    type: Boolean,
    default: false,
  },
  noBtnBlock: {
    type: Boolean,
    default: false,
  },
  searchRight: {
    type: Boolean,
    default: false,
  },
  noPh: {
    type: Boolean,
    default: false,
  },
  action: {
    type: String,
    default: '',
  },
  formLayouts: {
    type: Object,
    default: {},
  },
  isSearchForm: {
    type: Boolean,
    default: false,
  },
  isFormat: {
    type: Boolean,
    default: false,
  },
  isDisabledAll: {
    type: Boolean,
    default: false,
  },
  noRuleAll: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: '',
  },
};