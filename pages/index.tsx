import { FlexColumn } from 'components';
export default function IndexPage() {
  return (
    <FlexColumn
      fullHeight
      fullWidth
      align={'middle'}
      justify={'center'}>
      <div>
        <img
          alt={'monopoly'}
          src={'/images/places/logo.png'}
          width={400}
        />
      </div>
    </FlexColumn>
  );
}
