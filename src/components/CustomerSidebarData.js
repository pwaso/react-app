import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2Icon from '@mui/icons-material/Person2';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaidIcon from '@mui/icons-material/Paid';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LogoutIcon from '@mui/icons-material/Logout';

export const CustomerSidebarData =[
{
    title: "Dashboard",
    icon:<DashboardIcon />,
},
{
    title: "Profile",
    icon:<Person2Icon />,
    link: "/profile"
},
{
    title: "Transaction",
    icon:<PaidIcon />,
    link: "/transaction"
},
{
    title: "Transaction Details",
    icon:<ReceiptIcon />,
    link: "/transactiondetails"
},
{
    title: "Account",
    icon:<AccountBalanceIcon />,
    link: "/account"
},
{
    title: "Log Out",
    icon:<LogoutIcon />,
    link: "/logout"
}

]