function AdminProfile()
{

    return  (<div>
        <br/>Is Admin : {true&&"Yes It is Admin"}<br/>
        Admin
    </div>);
}

function UserProfile()
{
    return  (<div>
        User
    </div>);
}
export default function Profile({admin})
{
    //1st way
    // return (<div>
    //     {admin?<AdminProfile/>:<UserProfile/>}
    // </div>)

    //2nd way
    // if(admin)
    // {
    //     return(<div>
    //         <AdminProfile/>
    //     </div>)
    // }else{
    //     return(<div>
    //         <UserProfile/>
    //     </div>)
    // }

    //3rd way
    // let currentProfile;
    // if(admin){
    //     currentProfile = <AdminProfile/>
    // }else{
    //     currentProfile = <UserProfile/>
    // }
    // return (<div>
    //     {currentProfile}
    // </div>)

    //4rd way
    return admin && <AdminProfile/>
}