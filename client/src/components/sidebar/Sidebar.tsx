import { Sidebar as FBSidebar } from "flowbite-react";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

type Type_Props_Sidebar = {
  tab: string;
};
export const Sidebar = ({ tab }: Type_Props_Sidebar) => {
  return (
    <FBSidebar className="w-full md:w-56">
      <FBSidebar.Items>
        <FBSidebar.ItemGroup>
          <Link to={"/dashboard?tab=profile"}>
            <FBSidebar.Item
              active={tab === "profile"}
              icon={FaUser}
              label="User"
              labelColor="dark"
            >
              Profile
            </FBSidebar.Item>
          </Link>
          <FBSidebar.Item icon={FiLogOut}>Sign out</FBSidebar.Item>
        </FBSidebar.ItemGroup>
      </FBSidebar.Items>
    </FBSidebar>
  );
};
