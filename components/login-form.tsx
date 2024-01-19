'use client';
import React from 'react';
import { Input } from '@/components/ui/input';

export default function loginForm() {
  return (
    <form>
      <div className="mt-4 text-left">
        <Input
          className="rounded-full border-slate-200 focus-visible:ring-slate-800"
          placeholder={`Enter your email`}
        />
      </div>
      <div className="mt-4 text-left">
        <Input
          className="rounded-full border-slate-200 focus-visible:ring-slate-800"
          placeholder={`Enter your Password`}
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center w-full p-2 mt-6 text-sm font-semibold text-white border rounded-full cursor-pointer border-slate-200 bg-slate-800 hover:bg-slate-900"
      >
        Login
      </button>
    </form>
  );
}
