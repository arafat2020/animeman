'use client'
import React, { useRef } from 'react'
import { Menu, Search } from "lucide-react";
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { useProgress } from '@/providers/LoderProgressProvider';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from './ui/menubar';

function Nav() {
    const router = useRouter()
    const ref = useRef<HTMLInputElement>(null)
    const { startPorgress, loading } = useProgress()
    function goToSearch() {
        if (ref?.current?.value) {
            startPorgress()
            router.push(`/search?q=${ref.current.value}`)
        }
    }
    function gotToPopular() {
        startPorgress()
        router.push('/popular')
    }
    function gotToMovie() {
        startPorgress()
        router.push('/movie')
    }

    return (
        <div className='w-screen sm:container flex pt-2 items-center'>
            <div className='flex items-center space-x-1'>
                <Link href='/home'>
                    <img src="./logo2.png" className='w-[60px] h-[60px]' />
                </Link>
                <h1 className='hidden sm:inline text-2xl text-blue-600 font-extrabold font-sans'>ANIMEMAN</h1>
            </div>
            <div className='flex p-1 sm:p-2 flex-1 mx-4 border-[2px] border-zinc-500 rounded-lg h-[40px] items-center'>
                <input disabled={loading} ref={ref} className='outline-none w-full bg-transparent' placeholder='Search Anime' />
                <button onClick={() => goToSearch()}>
                    <Search />
                </button>
            </div>
            <div className='sm:flex font-bold hidden'>
                <Button onClick={() => gotToPopular()} disabled={loading} variant="custom1">Populer</Button>
                <Button disabled={loading} variant="custom1">Genres</Button>
                <Button  onClick={() => gotToMovie()} disabled={loading} variant="custom1">Movies</Button>
                <Button disabled={loading} variant="custom1">Top Airing</Button>
            </div>
            <div className='hidden sm:inline'>
                <UserButton
                    appearance={{
                        elements: {
                            avatarBox: {
                                width: '40px',
                                height: "40px"
                            }
                        }
                    }}
                    afterSignOutUrl='/'
                />
            </div>
            <div className='sm:hidden pr-1'>
                <Menubar className='bg-transparent border-none '>
                    <MenubarMenu >
                        <MenubarTrigger className='bg-transparent p-0'>
                            <Menu className='text-blue-600' />
                        </MenubarTrigger>
                        <MenubarContent className='bg-blue-600 text-zinc-100 font-sans font-semibold mr-1 mt-1 text-center'>
                            <MenubarItem>
                                <UserButton appearance={{
                                    elements: {
                                        avatarBox: {
                                            width: '30px',
                                            height: "30px"
                                        }
                                    }
                                }}
                                    afterSignOutUrl='/' />
                            </MenubarItem>
                            <MenubarItem onClick={() => gotToPopular()}>
                                Populer
                            </MenubarItem>
                            <MenubarItem>
                                Genres
                            </MenubarItem>
                            <MenubarItem onClick={()=>gotToMovie()}>
                                Movies
                            </MenubarItem>
                            <MenubarItem>
                                Top Airin
                            </MenubarItem>

                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </div>
    )
}

export default Nav