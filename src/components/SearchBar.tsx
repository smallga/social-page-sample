import { useEffect, useState } from "react"
import { useDebounce } from "../hook/useDebouce"

interface SerachBarProps {
}
export default function SerachBar(props: SerachBarProps) {

  const [serachText, SetSearchText] = useState('')
	const searchQuery = useDebounce(serachText, 1000)

	useEffect(() => {
		console.log(`searchQuery: ${searchQuery}`);
	},[searchQuery])

  return (
    <div className="rounded-md bg-slate-100 w-1/2 max-w-md p-2 h-10">
        <input type="text" className="w-full h-6 m-auto bg-transparent border-none" onChange={e => SetSearchText(e.target.value)}/>
    </div>
  )
}