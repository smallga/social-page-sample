import { useEffect, useRef, useState } from "react"
import { useDebounce } from "../hook/useDebouce"

interface SerachBarProps {
  onSearch: Function,
  onBlur?: Function,
  onFocus?: Function,
  showCancle?: boolean,
}
export default function SerachBar(props: SerachBarProps) {

  const { showCancle } = props;

  const [serachText, SetSearchText] = useState('')
  const [isOnfocus, setIsOnfocus] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null);
	const searchQuery = useDebounce(serachText, 200)

	useEffect(() => {
		handleSearch();
	},[searchQuery])

  const handleSearch = () => {
    props.onSearch(searchQuery)
  }

  const handleBlur = () => {
    const { onBlur } = props;
    setIsOnfocus(false);
    if(inputRef && inputRef.current) {
      inputRef.current.value = '';
    }
    if(onBlur) {
      onBlur();
    }
  }

  const handleFocus = () => {
    const { onFocus } = props;
    setIsOnfocus(true);
    if(onFocus) {
      onFocus();
    }
  }

  return (
    <div className="w-full flex items-center">
      <div className="rounded-md bg-slate-100 w-full h-10 p-2">
          <input type="text" placeholder="搜尋朋友" className="w-full h-6 m-auto bg-transparent border-none" 
            ref={inputRef}
            onChange={e => SetSearchText(e.target.value)}
            // onBlur={handleBlur}
            onFocus={handleFocus}
          />
      </div>
      {
        showCancle && isOnfocus && <div onClick={handleBlur} className="w-12 overflow-hidden animate-growUpIn">
          <div className="w-12 text-slate-400">
            取消
          </div>
        </div>
      }
    </div>
  )
}