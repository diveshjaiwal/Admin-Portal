import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
  {
    title: 'Dahboard',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',  
  },
  {
    title: 'Campaign',
    path: '/home/campaign',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    path1 : '/home/campaign/insert',

    
  },
  {
    title: 'Company',
    path: '/home/company',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text', 
    path1 : '/home/company/insert',
  },
  {
    title: 'Deal Terms',
    path: '/home/deal_term',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
    path1 : '/home/deal_term/insert', 
    
  },
  {
    title: 'Deal Type',
    path: '/home/deal_type',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text', 
    path1 : '/home/deal_type/insert',

      },
  {
    title: 'Documents',
    path: '/home/documents',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text', 
    path1 : '/home/documents/insert',
    
  },
  {
    title: 'FAQs',
    path: '/home/faqs',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text', 
    path1 : '/home/faqs/insert',
    
  },
  {
    title: 'Highlights',
    path: '/home/highlights',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text', 
    path1 : '/home/highlights/insert',
    
  },
  {
    title: 'Investor KYC',
    path: '/home/investor_kyc',
    icon: <AiIcons.AiFillMoneyCollect/>,
    cName: 'nav-text', 
    path1 : '/home/investor_kyc/insert',
    
  },
  {
    title: 'Investor Consents',
    path: '/home/investor_consents',
    icon: <FcIcons.FcMoneyTransfer />,
    cName: 'nav-text', 
    path1 : '/home/investor_consents/insert',
    
  },
  {
    title: 'Users',
    path: '/home/user',
    icon: <FiIcons.FiUsers />,
    cName: 'nav-text', 
    path1 : '/home/user/insert',
    
  },
  {
    title: 'People',
    path: '/home/people',
    icon: <BsIcons.BsPeopleFill />,
    cName: 'nav-text', 
    path1 : '/home/people/insert',
    
  },
  {
    title: 'Press',
    path: '/home/press',
    icon: <FaIcons.FaWpressr />,
    cName: 'nav-text',
    path1 : '/home/press/insert', 
    
  },
  {
    title: 'Rewards',
    path: '/home/rewards',
    icon: <GiIcons.GiWantedReward/>,
    cName: 'nav-text', 
    path1 : '/home/rewards/insert',
    
  },
  {
    title: 'Payments',
    path: '/home/payments',
    icon: <AiIcons.AiFillMoneyCollect/>,
    cName: 'nav-text', 
    path1 : '/home/payments/insert',
    
  }
];