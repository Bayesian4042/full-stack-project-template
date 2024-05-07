import { Button } from '@/components/ui/button';
import { Flex, TextField } from '@radix-ui/themes';
import React from 'react'

const Login = () => {
  return (
    <Flex direction="column" gap="3" maxWidth="100%">
      <TextField.Root size={"3"}  placeholder="email" type='email' />
      <TextField.Root size={"3"} placeholder="password" type='text'/>
      <Button > Login </Button>
    </Flex>
  )
};

export default Login;
