import { useEffect, useState } from "react";
import NotifyContent from "../components/Notify";
import { getNotify } from "../server/post";
import { NotifyModel } from "../utility/interface/notify-model";

interface NotifyPageProps {
}
export default function NotifyPage(props: NotifyPageProps) {
  const [notifys, setNotifys] = useState<NotifyModel[]>([]);

  useEffect(() => {
    getNotify().then((res) => {
      setNotifys([...notifys, ...res.data.data]);
    })
  }, [])

  return (
    <div className="h-full w-full overflow-y-auto">
      {
        notifys.length > 0 && notifys.map((notify, index) => {
          return (
            <NotifyContent key={index} notify={notify} />
          )
        })
      }
    </div>
  )
}