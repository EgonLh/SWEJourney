"use client"
export default function UserList_Modified({data}) {
    return <div>
        {
            data.map(item => <div key={item.id}>
                User : {item.name}
            </div>)
        }
    </div>
}