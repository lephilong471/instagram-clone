import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { MUICard } from '@/components/MUIComponents';
import Search from '@/components/Home/Search';
import Notification from '@/components/Home/Notification';
import More from '@/components/Home/More';

interface ContentProps {
  children?: ReactNode;
}
const Content: FC<ContentProps> = ({ children }) => {
  return (
    <>
      <MUICard sx={{ border: 'none', boxShadow: 'none', width: '100%' }}>
        {children}
      </MUICard>
      <Search />
      <Notification />
      <More/>
    </>
  );
};
Content.propTypes = {
  children: PropTypes.node
};

export default Content;
