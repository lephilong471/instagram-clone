import Search from '@/public/images/iconMenu/Search.svg';
import Home from '@/public/images/iconMenu/Home.svg';
import Discovery from '@/public/images/iconMenu/Discovery.svg';
import Message from '@/public/images/iconMenu/Message.svg';
import Reels from '@/public/images/iconMenu/Reels.svg';
import Notification from '@/public/images/iconMenu/Notification.svg';
import Create from '@/public/images/iconMenu/Create.svg';
import Thread from '@/public/images/iconMenu/Threads.svg';
import More from '@/public/images/iconMenu/More.svg';

import SearchActive from '@/public/images/iconMenu/active/Search.svg';
import HomeActive from '@/public/images/iconMenu/active/Home.svg';
import DiscoveryActive from '@/public/images/iconMenu/active/Discovery.svg';
import MessageActive from '@/public/images/iconMenu/active/Message.svg';
import ReelsActive from '@/public/images/iconMenu/active/Reels.svg';
import NotificationActive from '@/public/images/iconMenu/active/Notification.svg';

// import Person from '@/public/images/Avatar.jpg';

import { Trans } from 'react-i18next';
import { PATH } from '../router/routerConfig';
import { COLORS_MENU_POST_ACTION } from '../style';

export const indexMenu = [
  {
    title: <Trans i18nKey="homePage" />,
    icon: Home,
    path: PATH.HOME,
    active: HomeActive,
    bottomNav: true
  },
  {
    title: <Trans i18nKey="search" />,
    icon: Search,
    path: '',
    active: SearchActive,
    isPopup: 'search'
  },
  {
    title: <Trans i18nKey="discovery" />,
    icon: Discovery,
    path: PATH.DISCOVERY,
    active: DiscoveryActive,
    bottomNav: true
  },
  {
    title: <Trans i18nKey="reels" />,
    icon: Reels,
    path: PATH.REELS,
    active: ReelsActive,
    bottomNav: true
  },
  {
    title: <Trans i18nKey="message" />,
    icon: Message,
    path: PATH.MESSAGE,
    active: MessageActive,
    bottomNav: true
  },
  {
    title: <Trans i18nKey="notification" />,
    icon: Notification,
    path: '',
    active: NotificationActive,
    isPopup: 'notification',
  },
  {
    title: <Trans i18nKey="create" />,
    icon: Create,
    path: '',
    isPopup: 'create',
    bottomNav: true
  },
  {
    title: <Trans i18nKey="personalPage" />,
    img: true,
    path: PATH.PROFILE,
    bottomNav: true
  }
];

export const footerMenu = [
  // {
  //   title: <Trans i18nKey="thread" />,
  //   icon: Thread,
  //   path: ''
  // },
  {
    title: <Trans i18nKey="seeMore" />,
    icon: More,
    path: '',
    isPopup: 'more',
  }
];

export const MenuActionPost = [
  {
    title: <Trans i18nKey="report" />,
    handle: 'report',
    colors: COLORS_MENU_POST_ACTION
  },
  {
    title: <Trans i18nKey="unfollow" />,
    handle: 'unfollow',
    colors: COLORS_MENU_POST_ACTION
  },
  {
    title: <Trans i18nKey="addFavorites" />,
    handle: 'addFavorites',
    colors: ''
  },
  {
    title: <Trans i18nKey="goToArticle" />,
    handle: 'goToArticle',
    colors: ''
  },
  {
    title: <Trans i18nKey="shareTo" />,
    handle: 'shareTo',
    colors: ''
  },
  {
    title: <Trans i18nKey="copyLink" />,
    handle: 'copyLink',
    colors: ''
  },
  {
    title: <Trans i18nKey="dip" />,
    handle: 'dip',
    colors: ''
  },
  {
    title: <Trans i18nKey="aboutThisAccount" />,
    handle: 'aboutThisAccount',
    colors: ''
  },
  {
    title: <Trans i18nKey="cancel" />,
    handle: 'cancel',
    colors: ''
  }
];
