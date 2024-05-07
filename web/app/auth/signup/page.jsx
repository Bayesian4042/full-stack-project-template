"use client";

import React from 'react'
import { Flex } from '@radix-ui/themes';
import Link from 'next/link';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { useFormState } from 'react-dom';
import createUser from './create-user';


const SignUp = () => {
  const [state, formAction] = useFormState(createUser, {error: ""});

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Flex direction="column" gap="6" maxWidth="100%">
        <Input name="email" placeholder="email" type='email' />
        <Input name="password" placeholder="password" type='password'/>
        <Button type="submit"> Sign Up </Button>
        <Link className='text-zinc-500' href="/auth/login"> login here </Link>
      </Flex>
    </form>
    
  )
}

export default SignUp;
