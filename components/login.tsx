'use client';
import React from 'react';
import { noto_serif } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import SocialButton from '@/components/ui/social-button';
import SignUpForm from '@/components/signup-form';
import LoginFrom from '@/components/login-form';
import { signIn, getProviders } from 'next-auth/react';

export default async function Login() {
  const providers = await getProviders();
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <div className="w-1/2">
        <div
          className={cn(
            noto_serif.className,
            'text-slate-800 font-semibold text-2xl'
          )}
        >
          Create your account
        </div>
        <div className="mt-1 text-base text-slate-500">
          Let's get started with your 30 days free trial
        </div>
        <SocialButton
          styles="mt-4"
          onClick={() => signIn(providers?.google.id)}
        >
          <GitHubLogoIcon className="mr-2 mt-[1px]" />
          Login with Github
        </SocialButton>
        <div className="h-[1px] bg-slate-200 w-full my-8 relative login-divider"></div>
        {/* <SignUpForm /> */}
        <LoginFrom />
      </div>
    </div>
  );
}
