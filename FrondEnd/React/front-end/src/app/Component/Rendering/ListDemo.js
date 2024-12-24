"use client"
export default function ListDemo()
{
    // let todo = [
    //     'one',
    //     'two',
    //     'three'
    // ]

    //for properway
    let todo = [
        {
            id:1,
            title:"one"
        },
        {
            id:2,
            title: "two",
        },
        {
            id:3,
            title: "two",
        }
    ]
    //change for 3 in one time
    // let item = todo.map((item,index)=><li key={index}>{item}</li>);
    let item  = todo.map(item =><li key={item.id}>{item.title}</li>)
    console.log(item)
    return (<div>
        <ol>
        ITem
        {
        //    one jsx per time
        // todo.map(item =><li>{item}</li>)
         item

        }

        </ol>
    </div>)
}