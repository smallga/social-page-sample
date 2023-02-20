import { useEffect, useState } from "react"
import { useDebounce } from "../hook/useDebouce"

interface SerachBarProps {
  onSearch: Function,
  onBlur?: Function,
  onFocus?: Function,
}
export default function SerachBar(props: SerachBarProps) {

  const [serachText, SetSearchText] = useState('')
	const searchQuery = useDebounce(serachText, 200)

	useEffect(() => {
		handleSearch();
	},[searchQuery])

  const handleSearch = () => {
    props.onSearch(searchQuery)
  }

  const handleBlur = () => {
    const { onBlur } = props;
    if(onBlur) {
      onBlur();
    }
  }

  const handleFocus = () => {
    const { onFocus } = props;
    if(onFocus) {
      onFocus();
    }
  }

  return (
    <div className="rounded-md bg-slate-100 w-1/2 max-w-md p-2 h-10">
        <input type="text" placeholder="搜尋朋友" className="w-full h-6 m-auto bg-transparent border-none" 
          onChange={e => SetSearchText(e.target.value)}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
    </div>
  )
}