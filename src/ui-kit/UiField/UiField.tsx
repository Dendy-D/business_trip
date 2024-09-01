import { FIELD_TYPE, UI_FIELD_MAP } from '../../constants/UiFieldMap';
import { Rule } from 'rc-field-form/lib/interface';
import { RulesEnum } from '../../constants/RulesConstants';

export interface UiFieldProps {
  type: FIELD_TYPE;
  field: IUiField;
}

interface OptionsProps {
  label?: string;
  value: string;
}

export interface IUiField {
  name: string[];
  form?: any;
  rules?: Rule[];
  label?: string;
  searchCode?: string;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: any;
  datePickerType?: string[];
  options?: OptionsProps[];
  onSearch?: (value: string) => void;
  onChange?: any;
  filterOption?: any;
  formatter?: (
    value: string | number | undefined,
    info?: { userTyping: boolean; input: string }
  ) => string;
  parser?: (value: string | undefined) => number;
  style?: any;
  className?: string;
}

const UiField = ({ type, disabled, field }: UiFieldProps) => {
  const RequiredField = UI_FIELD_MAP[type];
  const requiredRules: Rule[] = [...RulesEnum.REQUIRED];

  return (
    <RequiredField
      name={field?.name}
      rules={field?.rules || requiredRules}
      label={field?.placeholder}
      placeholder={field?.placeholder}
      defaultValue={field?.defaultValue}
      options={field?.options}
      disabled={field?.disabled}
      formatter={field?.formatter}
      parser={field?.parser}
      searchCode={field?.searchCode}
    />
  );
};

export default UiField;
