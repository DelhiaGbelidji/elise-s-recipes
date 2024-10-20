import { Avatar, Dropdown } from "flowbite-react";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HiViewGrid } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Type_user } from "../../api/auth/types";

type Type_Props_UserDropDown = {
  user: Type_user;
};
export const UserDropDown = ({ user }: Type_Props_UserDropDown) => {
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={<Avatar alt="user" img={user.profilePicture} rounded />}
    >
      <Dropdown.Header>
        <span className="block text-sm">@{user.username}</span>
        <span className="block text-sm font-medium truncate">{user.email}</span>
      </Dropdown.Header>
      <Link to={"/dashboard"}>
        <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
      </Link>
      <Link to={"/dashboard?tab=profile"}>
        <Dropdown.Item icon={FaUser}>Profile</Dropdown.Item>
      </Link>
      <Dropdown.Divider />
      <Dropdown.Item icon={FiLogOut}>Logout</Dropdown.Item>
    </Dropdown>
  );
};
