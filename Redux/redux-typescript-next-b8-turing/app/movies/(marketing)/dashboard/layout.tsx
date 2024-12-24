export default function DashboardLayout({children}:{children:React.ReactNode}) {
    return (<section>
            <nav className={"border p-3 rounded shadow-sm text-center font-monospace"}>Hello Nav</nav>
        {children}
    </section>)
}