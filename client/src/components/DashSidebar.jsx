import { Sidebar } from 'flowbite-react'
import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { HiAnnotation, HiArrowSmRight, HiChartPie, HiDocumentText, HiOutlineUserGroup, HiUser } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { signoutSuccess } from '../../redux/user/userSlice'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { current } from '@reduxjs/toolkit'

export default function DashSidebar() {
    const currentUser = useSelector(state => state.user.currentUser);
    const location = useLocation();
    const [tab, setTab] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
      if(tabFromUrl){
        setTab(tabFromUrl)
      }
    }, [location.search]);

  const handleSignout = async () =>{
    try{
        const res = await fetch('/api/user/signout', {
            method: 'POST',
        });
        const data = await res.json
        if(!res.ok){
            console.log(data.message);
        }
        else{
            dispatch(signoutSuccess());
        }
    }catch(error){
        console.log(error);
    }
}

  return (
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup className='flex flex-col gap-1'>
              {
                currentUser && currentUser.isAdmin && (
                  <Link to='/dashboard?tab=dash'>
                    <Sidebar.Item as='div' icon={HiChartPie} active={tab === 'dash' || !tab}>
                      Dashboard
                    </Sidebar.Item>
                  </Link>
                )
              }
                <Link to='/dashboard?tab=profile'>
                <Sidebar.Item as='div' active={tab === 'profile'} icon={HiUser} label={currentUser.isAdmin? 'Admin': 'User'} labelColor='dark'>Profile</Sidebar.Item>
                </Link>
                {currentUser.isAdmin && (
                <Link to='/dashboard?tab=posts'>
                  <Sidebar.Item active={tab==='posts'} icon={HiDocumentText} as='div'>
                    Posts
                  </Sidebar.Item>
                </Link>
                
                )}
                {currentUser.isAdmin && (
                <>
                  <Link to='/dashboard?tab=users'>
                    <Sidebar.Item active={tab==='users'} icon={HiOutlineUserGroup} as='div'>
                      Users
                    </Sidebar.Item>
                  </Link>
                  <Link to='/dashboard?tab=comments'>
                    <Sidebar.Item active={tab==='comments'} icon={HiAnnotation} as='div'>
                      Comments
                    </Sidebar.Item>
                  </Link>
                </>
                
                )}
                <Sidebar.Item onClick={handleSignout} icon={HiArrowSmRight} className='cursor-pointer'>Sign Out</Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
