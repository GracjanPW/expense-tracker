'use client';
import { signIn } from 'next-auth/react';

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => signIn('github')}>Login with github</button>
    </div>
  );
}
