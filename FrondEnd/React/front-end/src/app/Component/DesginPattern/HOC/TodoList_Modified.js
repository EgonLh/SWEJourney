"use client"
export default function TodoList_Modified({data}) {
    return <div>
        {
            data.map(item => <div key={item.id}>
                Title : {item.title}
            </div>)
        }
    </div>
}

