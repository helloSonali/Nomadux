import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
     
    ]
  },
  {
    title: 'About',
     path:'',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Our Mission',
        path: '/about/ourmission',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Our Product',
        path:'/about/ourproducts',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        cName: 'sub-nav',
        subNav: [ {
          title: 'wholesale',
          path: '/about/ourproducts/wholesalingcaller',
          icon: <IoIcons.IoIosPaper />,
          cName: 'sub-nav'
        },
        {
          title: 'Global Search And Selection',
          path: '/about/ourproducts/globalsearchandselection',
          icon: <IoIcons.IoIosPaper />,
          cName: 'sub-nav'
        },
        {
          title: 'Outsourcing',
          path: '/about/ourproducts/outsourcing',
          icon: <IoIcons.IoIosPaper />,
          cName: 'sub-nav'
        },
        {
          title: 'Outbound Cold Calling',
          path: '/about/ourproducts/OutboundColdCalling',
          icon: <IoIcons.IoIosPaper />,
          cName: 'sub-nav'
        },
        {
          title: 'Virtual Administrative Assistants',
          path: '/about/ourproducts/virtualadministrativeassistants',
          icon: <IoIcons.IoIosPaper />,
          cName: 'sub-nav'
        },
        {
          title: 'Acquisition And ContractManagement',
          path: '/about/ourproducts/acquisitionandcontractmanagement',
          icon: <IoIcons.IoIosPaper />,
          cName: 'sub-nav'
        },]
       
      },
      {
        title: 'Nomadux & CO-Founder',
        path: '/about/nomaduxcofounder',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    
    ]
  },
  {
    title: 'Partners',
    path: '',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: 'sub-nav',
    subNav: [ {
      title: 'Property Broker',
      path: '/partners/broker',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    },]
  },
  {
    title: 'Resources',
    path: '',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Refer A Friend',
        path: '/resources/refer-a-friend',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Job Board',
        path: '/resources/job-board',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Agent Login',
        path: '/resources/agent-login',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <FaIcons.FaEnvelopeOpenText />,

    

   
  },
  {
    title: 'Make A Payment',
    path: '/makeapayment',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
