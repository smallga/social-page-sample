import SerachBar from "../components/SearchBar";

interface HeaderProps {
}
export default function SerachBarSerachBarSerachBar(props: HeaderProps) {
  return (
    <div className="fixed bg-white w-full z-40 p-0 left-0 top-0 h-14 m-auto justify-center items-center border-b-2 border-slate-300 hidden lg:flex" >
        <SerachBar></SerachBar>
        
    </div>
  )
}