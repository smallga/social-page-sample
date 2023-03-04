import { NavLink } from "react-router-dom";
import { ReactComponent as Home } from '../assets/icon/home.svg'
import { ReactComponent as Grid } from '../assets/icon/grid.svg'
import { ReactComponent as NewPost } from '../assets/icon/circle-add.svg'
import { ReactComponent as Bell } from '../assets/icon/bell.svg'
import { ReactComponent as Camera } from '../assets/icon/camera.svg'
import PhotoSticker from "../components/PhotoSticker";

interface SideBarProps {
  handleClickAdd?: Function,
}
export default function SideBar(props: SideBarProps) {

  const IconBtn = (IconProps: any) => {
    return (
      <div className="w-full h-full flex items-center justify-center lg:h-16" {...IconProps}>
        {IconProps.children}
      </div>
    )
  }

  const clickAdd = () => {
    const { handleClickAdd } = props;
    if (handleClickAdd) {
      handleClickAdd();
    }
  }

  return (
    <div className="fixed  bg-white z-40 bottom-0 left-0 w-full h-12 flex justify-around lg:pt-2 lg:justify-start lg:flex-col lg:w-24 lg:top-0 lg:h-full lg:border-r-2 ">
      <NavLink className="hidden lg:block" to={""}>
        <IconBtn>
          <Camera className="w-8 h-8" />
        </IconBtn>
      </NavLink>
      <NavLink to={""}>
        <IconBtn>
          <Home className="w-8 h-8 home" />
        </IconBtn>
      </NavLink>
      <NavLink to={"/grid"}>
        <IconBtn>
          <Grid className="w-8 h-8 grid" />
        </IconBtn>
      </NavLink>
      <a className="z-[150] cursor-pointer">
        <IconBtn onClick={clickAdd}>
          <NewPost className="w-8 h-8" />
        </IconBtn>
      </a>
      <NavLink to={"/notify"}>
        <IconBtn>
          <Bell className="w-8 h-8 bell" />
        </IconBtn>
      </NavLink>
      <NavLink to={"/user"}>
        <IconBtn>
          <PhotoSticker url="./images/mike.png" />
        </IconBtn>
      </NavLink>
    </div>
  )
}