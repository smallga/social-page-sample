import { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NotifyContent from "../components/Notify";
import PostModal from "../components/PostModal";
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

  const showNotifys = useMemo(() => notifys.length > 0 && notifys.map((notify, index) => {
    return (
      <NotifyContent key={index} notify={notify} />
    )
  }), [notifys])

  return (
    <div className="w-full overflow-y-auto px-2">
      <div className="max-w-xl mx-auto">
        {showNotifys}
      </div>

      <Routes>
        <Route path='/p/:id' element={<PostModal />} />
      </Routes>
    </div>
  )
}