import { nowDateDiffSec } from "../utility/common/dateCalculate";
import { NotifyModel } from "../utility/interface/notify-model"
import PhotoSticker from "./PhotoSticker";

interface NotifyContentProps {
  notify: NotifyModel;
}
export default function NotifyContent(props: NotifyContentProps) {

  const { notify } = props;

  const showDate = () => {
    const { time } = notify;
    let diffDec = nowDateDiffSec(new Date(time));
    let dateStr = '剛剛';
    let dateDesStr = [
        {
          name: '天',
          secValue: 24 * 60 * 60
        },
        {
          name: '小時',
          secValue: 60 * 60
        },
        {
          name: '分',
          secValue: 60
        }
    ]

    for(let i = 0; i < dateDesStr.length; i++) {
      if(diffDec >= dateDesStr[i].secValue) {
        let diffUnit = Math.floor(diffDec / dateDesStr[i].secValue);
        dateStr = `${diffUnit}${dateDesStr[i].name}前`;
        break;
      }
    }

    return dateStr;
  }
  

  return (
    <div className="flex w-full border-b border-slate-100 cursor-pointer hover:bg-slate-50 py-1">
      <PhotoSticker url={notify.notifyUser.photoUrl}></PhotoSticker>
      <div className="ml-2 flex-1 text-left">
        <div className="text-slate-500 font-bold">
          {notify.notifyUser.name}
        </div>
        <div className="text-slate-400">
          {notify.message}
        </div>
      </div>
      <div className="w-12 flex items-end text-slate-300 text-xs">
          {showDate()}
      </div>
    </div>
  )
}