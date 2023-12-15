import { DatePicker, Space } from 'antd';
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import { useState } from 'react';

interface EscolherDataProps {
  Data : string[]
}


const { RangePicker } = DatePicker;

const onChange = (
  value: DatePickerProps['value'] | RangePickerProps['value'],
  dateString: [string, string] | string,
) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
  /////ATUALIZARR AQUI A DATA
};

const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
  console.log('onOk: ', value);
};

function EscolherData() {
  return (<><Space direction="vertical" size={12}>
  <RangePicker
    showTime={{ format: 'HH:mm' }}
    format="YYYY-MM-DD HH:mm"
    onChange={onChange}
    onOk={onOk}
  />
</Space>
  </>)
}

export default EscolherData





