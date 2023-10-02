

import AnimateCanvas from '@/components/AnimateCanvas';
import UserIndicator from '@/components/UserIndicator';
import MainIndex from '@/components/index/MainIndex';
import { initialProfile } from '@/lib/initialProfile';
import { redirect } from 'next/navigation';

const Page = async () => {
 const user = await initialProfile()
 if (!user) {
  return redirect('/sign-in')
 }
 const dev = true
 if (dev) {
   redirect('/home')
 }
  return (
    <div className='w-full h-full bg-black relative'>
      <UserIndicator />
      <AnimateCanvas />
      <MainIndex />
    </div>
  )
}

export default Page