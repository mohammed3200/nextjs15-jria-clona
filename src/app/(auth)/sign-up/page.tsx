"use client";

import { SignUpCard } from '@/features/auth'
import React from 'react'

type SignUpPageProps = {
    onSignUp: (email: string, password: string) => void
}

const SignUpPage = ({}: SignUpPageProps) => {
  return (
    <SignUpCard />

  )
}

export default SignUpPage