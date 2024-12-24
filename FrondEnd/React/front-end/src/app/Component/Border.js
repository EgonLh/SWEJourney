import('./border.css')
export default function Border(props)
{
    return (<div className={"border"}>
        {props.children}
    </div>)
}