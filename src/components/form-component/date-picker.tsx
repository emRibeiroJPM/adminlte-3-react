import { DatePicker, Space } from 'antd';
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';

const { RangePicker } = DatePicker;

interface datePickerProps {
  funcaoParaOK : (value: DatePickerProps['value'] | RangePickerProps['value'])=> void
  
  funcaoParaOnChange : (
    value: DatePickerProps['value'] | RangePickerProps['value'],
    dateString: [string, string] | string,
  )=>void

}

function EscolherData({funcaoParaOK,funcaoParaOnChange} : datePickerProps) {
  return (<><Space direction="vertical" size={12}>
  <RangePicker
    showTime={{ format: 'HH:mm' }}
    format="YYYY-MM-DD HH:mm"
    onChange={funcaoParaOnChange}
    onOk={funcaoParaOK}
  />
</Space>
  </>)
}

export default EscolherData