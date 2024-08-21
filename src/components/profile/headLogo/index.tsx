import { MUIButton, MUIBox } from '@/components/MUIComponents';

const HeadLogo = () => {
  return (
    <MUIBox>
      <MUIButton>
        <img
          src="/images/Avatar.jpg"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '50%'
          }}
          alt="avt"
        />
      </MUIButton>
    </MUIBox>
  );
};

export default HeadLogo;
