import Typo, { TagValue } from '../typo/Typo';

interface DateProps {
  tag: TagValue;
  type?: string;
}

const dateOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
} as const;

export default function ReceiptDate({ tag, type }: DateProps) {
  const date = new Date();
  const formatDate = (date: Date) => date.toLocaleString('ru-RU', dateOptions).toString();

  return (
    <Typo tag={tag} type={type} dateTime={formatDate(date)}>
      {formatDate(date)}
    </Typo>
  );
}
