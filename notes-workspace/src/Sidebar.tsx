export default function Sidebar() {
    return(
        <aside className = "w-55 h-screen fixed overflow-y-auto bg-[#202020] text-[#bcbab6] p-5 box-border">
            <p className="">General</p>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="pages/search.html">Search</a></li>
                    <li><a href="pages/inbox.html">Inbox</a></li>
                </ul>
                <p>Pages</p>
                <ul>
                    <li><a href="pages/physics.html">Physics</a></li>
                    <li><a href="pages/math.html">Math</a></li>
                    <li><a href="pages/econs.html">Econs</a></li>
                    <li><a href="pages/general_paper.html">General Paper</a></li>
                </ul>
        </aside>
    )
}