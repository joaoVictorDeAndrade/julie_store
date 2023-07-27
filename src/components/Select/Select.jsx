import { SelectWrapper, Select } from './Select.styles'
import { Label } from '../Input/Input.styles'

export default function SelectComponent({ options, value, onChange, label }) {
    return (
        <SelectWrapper>
            <Label htmlFor={label}>{label}</Label>
            <Select value={value} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Select>
        </SelectWrapper>
    )
}