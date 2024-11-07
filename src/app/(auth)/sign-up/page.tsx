import React from 'react'
import { redirect } from 'next/navigation';

import { SignUpCard } from '@/features/auth'
import { getCurrent } from '@/features/auth/queries';


const SignUpPage = async () => {
  const user = await getCurrent();

  if (user) redirect('/');
  return (
    <SignUpCard />

  )
}

export default SignUpPage