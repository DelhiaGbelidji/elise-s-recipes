import { ReactNode } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../utils/store";

type Type_Props_ThemeProvider = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Type_Props_ThemeProvider) => {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <div className={theme}>
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen">
        {children}
      </div>
    </div>
  );
};
