import { MouseEvent } from "react";
import { UserModel } from "../utility/interface/user";
import PhotoSticker from "./PhotoSticker";

interface UserDataItemProps {
  user: UserModel;
  clickFun: Function;
}
export default function UserDataItem(props: UserDataItemProps) {

  const { user } = props;

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const { clickFun } = props;
    e.stopPropagation();
    clickFun();
  }

  return (
    <div aria-label="用戶選單-選擇" className="flex items-center justify-start bg-white py-2 cursor-pointer duration-300 hover:bg-slate-100" onClick={handleClick}>
      <PhotoSticker url={user.photoUrl}></PhotoSticker>
      <span className="ml-2">{user.name}</span>
    </div>
  )
}