export default function Layout({children, team, analytics}:
    { children: React.ReactNode,
        team: React.ReactNode,
        analytics: React.ReactNode }) {
    return (<div>
        {children}
        {team}
        {analytics}
    </div>)
}