import home from "assets/images/icons/home.svg";
import wallet from "assets/images/icons/wallet.svg";
import radar from "assets/images/icons/radar.svg";
import users from "assets/images/icons/users.svg";
import document from "assets/images/icons/document.svg";
import transaction from "assets/images/icons/transaction.svg";
import swap from "assets/images/icons/bitcoin-convert.svg";
import security from "assets/images/icons/security.svg";
import support from "assets/images/icons/support.svg";

export const menuList = [
  {
    icon: home,
    name: "Dashboard",
    path: "/",
    id: "dashboard",
  },
  {
    icon: wallet,
    name: "Wallets",
    path: "/wallets",
    id: "",
  },
  {
    icon: radar,
    name: "Gas Station",
    path: "/gas-station",
    id: "",
  },
  {
    icon: users,
    name: "Referrals",
    path: "/referrals",
    id: "",
  },
  {
    icon: document,
    name: "Invoices",
    path: "/invoices",
    id: "",
    sub: [
      {
        name: "Withdraw",
        path: "/invoices/withdraw",
      },
      {
        name: "Deposit",
        path: "/invoices/deposit",
      },
    ],
  },
  {
    icon: transaction,
    name: "Transactions",
    path: "/transaction",
    id: "",
  },
  {
    icon: swap,
    name: "Swap",
    path: "/swap",
    id: "",
  },
  {
    icon: security,
    name: "Security",
    path: "/security",
    id: "",
  },
  {
    icon: support,
    name: "Support",
    path: "/support",
    id: "",
  },
];
