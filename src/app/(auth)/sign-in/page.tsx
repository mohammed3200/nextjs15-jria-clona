import React from 'react'
import { redirect } from 'next/navigation';

import { SignInCard } from '@/features/auth'
import { getCurrent } from '@/features/auth/queries';


const SignInPage = async () => {
  const user = await getCurrent();

  if (user) redirect('/');

  return (
    <SignInCard />
  )
}

export default SignInPage