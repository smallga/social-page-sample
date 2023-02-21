import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SerachBar from "../components/SearchBar";
import UserDataItem from "../components/UserDataItem";
import { searchUser } from "../server/user";
import { UserModel } from "../utility/interface/user";

interface HeaderProps {
}
export default function SerachBarSerachBarSerachBar(props: HeaderProps) {

  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  const [searchedUsers, setSearchedUsers] = useState<UserModel[]>([]);
  const [showSerachUserData, setShowSerachUserData] = useState(false);

  const searchUserFromApi = useCallback((searchQuery: string) => {
    searchUser(searchQuery).then(res => {
      if (res.data.data.length > 0) {
        setSearchedUsers(res.data.data);
      }
      else {
        setSearchedUsers([]);
      }
    })
  }, [])

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        closeSearchUser();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef])

  const gotoUserPage = useCallback((user: UserModel) => {
    console.log('click');
    navigate('/user/' + user.name);
    closeSearchUser();
  }, [])

  const closeSearchUser = useCallback(() => {
    setShowSerachUserData(false);
  }, [])

  const openSerachUser = useCallback(() => {
    setShowSerachUserData(true);
  }, [])

  return (
    <div className="fixed left-0 top-0 h-14 bg-white w-full z-30 hidden overflow-visible lg:block lg:left-24 lg:w-[calc(100%_-_6rem)]" >
      <div className="relative h-full w-full m-auto bg-white overflow-visible justify-center items-center border-b-2 border-slate-300 flex z-40" ref={searchRef}>
        <SerachBar onSearch={searchUserFromApi} onFocus={openSerachUser} ></SerachBar>

        {
          showSerachUserData &&
          <div className="absolute top-full left-1/2 mt-[2px] py-2 px-4 w-full max-w-[700px] max-h-[500px] bg-white translate-x-[-50%] shadow-md rounded-md overflow-y-auto z-40">
            {
              searchedUsers.length > 0 ?
              searchedUsers.map((user, index) => (
                <UserDataItem key={index} user={user} clickFun={() => (gotoUserPage(user))}></UserDataItem>
              ))
              :
              <p className="text-left text-slate-300">沒有符合結果</p>
            }
          </div>
        }
      </div>
    </div>
  )
}