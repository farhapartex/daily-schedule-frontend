export interface CheckBoxProps{
    id: string,
    label: string,
    name: string,
    value: boolean,
    handleChange: Function
}

export interface DatePickerProp{
    label: string,
    id: string,
    minDate: Date
}

export interface SelectFieldProp{
    label: string,
    id: string,
    optionList: Array<string>
}

export interface TextGroupProp{
    label: string,
    id: string,
    type: string,
    value: string,
    handleChange: Function,
    placeholder: string
}