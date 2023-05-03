import { setLocalStorageItem } from "@/utils/localStorage";
import Link from "next/link";
import { memo } from "react";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  const handleChangeTheme = () => {
    const hasClassNameDark =
      document.documentElement.classList.value === "dark";
    if (hasClassNameDark) {
      document.documentElement.classList.remove("dark");
      setLocalStorageItem("theme", "light");
      return;
    }
    document.documentElement.classList.add("dark");
    setLocalStorageItem("theme", "dark");
  };

  return (
    <div className="flex h-full box-border justify-between items-center bg-white dark:bg-dark-primary p-4">
      <div className="flex-auto text-dark-primary dark:text-white">
        <Link href="/">MunTestApp</Link>
      </div>
      <div className="flex gap-4">
        <button
          className="flex items-center w-6 h-6 rounded-full hover:bg-gray-700 dark:hover:bg-gray-600"
          onClick={handleChangeTheme}
        >
          <div className="w-8 h-8 flex justify-center items-center">
            <MdDarkMode />
          </div>
        </button>
      </div>
    </div>
  );
};

export default memo(Header);
