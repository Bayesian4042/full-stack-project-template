import { Box } from '@radix-ui/themes'
import React from 'react'

export default function AuthLayout({
    children,
}) {
    return (
        <Box className="h-screen flex items-center justify-center">
            {children}
        </Box>
    )
}
