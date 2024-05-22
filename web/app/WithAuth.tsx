import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const WithAuth = (WrappedComponent: any) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/auth/login');
    }
  }, []);

  return (props: any) => {
    return <WrappedComponent {...props} />;
  };
};

WithAuth.displayName = 'WithAuth';
export default WithAuth;
