"use client";

import { SignInCard } from '@/features/auth'
import React from 'react'

type SignInPageProps = {
    onSignIn: (email: string, password: string) => void
}

const SignInPage = ({}: SignInPageProps) => {
  return (
    <SignInCard />
  )
}

export default SignInPage