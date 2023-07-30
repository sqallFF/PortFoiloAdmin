import Link from "next/link";
export default function NavBar() {
    return(
        <nav className="flex justify-between items-center bg-slate-700 px-8 py-3">
            <Link className="text-white font-bold" href={'/'}> JamesLewisCyberDev</Link>
            <Link className="bg-white p-2" href={'/addTopic'}>Add Topic</Link>
        </nav>
    )
}