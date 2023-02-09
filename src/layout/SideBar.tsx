import { NavLink } from "react-router-dom";
import { ReactComponent as Bell}  from '../assets/icon/bell.svg'

interface SideBarProps {
}
export default function SideBar(props: SideBarProps) {

  const IconBtn = (IconProps: any) => {
    return (
      <div className="w-full h-full flex items-center justify-center lg:h-16">
        {IconProps.children}
      </div>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 w-full h-12 flex justify-around lg:pt-2 lg:justify-start lg:flex-col lg:w-36 lg:top-14 lg:h-[calc(100%_-_3.5rem)]">
      <NavLink to={""}>
          <IconBtn>
            <Bell className="w-8 h-8"/>
          </IconBtn>
      </NavLink>
      <NavLink to={""}>
          <IconBtn>
            <Bell className="w-8 h-8"/>
          </IconBtn>
      </NavLink>
      <NavLink to={""}>
          <IconBtn>
            <Bell className="w-8 h-8"/>
          </IconBtn>
      </NavLink>
      <NavLink to={""}>
          <IconBtn>
            <Bell className="w-8 h-8"/>
          </IconBtn>
      </NavLink>
      <NavLink to={""}>
          <IconBtn>
            <Bell className="w-8 h-8"/>
          </IconBtn>
      </NavLink>
    </div>
  )
}