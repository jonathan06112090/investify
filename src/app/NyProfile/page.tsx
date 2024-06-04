'use client';
import { useUser } from '@auth0/nextjs-auth0/client';



export default function MyProfile() {
  

    const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>; {/*loading animations in react/next.js */}
    if (error) return <div>{error.message}</div>
  return (
    <>
       <div>
        <br></br>
        <h1 className="text-center text-4xl">Hello {user ? (
              
               <div>{user.name}</div>
                
            ) : (
                <div></div>
            )}</h1>

        <br></br>
        <p className="text-center ">Here you can view and edit information about your profile.</p>
        </div>
    </>
  )
}
