'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

type Props = {};

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password length must be at least 8 characters.',
  }),
  terms: z.boolean().default(false),
});

type TformSchema = z.infer<typeof formSchema>;

const formFields = [
  {
    name: 'name',
    label: 'Name',
    type: 'input',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'input',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'input',
  },
  {
    name: 'terms',
    label: 'I agree to all Terms & Privacy Policy',
    type: 'checkbox',
  },
];

export default function signupForm({}: Props) {
  const form = useForm<TformSchema>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(formData: z.infer<typeof formSchema>) {
    console.log(formData);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {formFields.map((el, i) => (
            <>
              {el.type === 'input' && (
                <FormField
                  key={i}
                  control={form.control}
                  name={el.name}
                  render={({ field }) => (
                    <FormItem className="mt-4 text-left">
                      <FormLabel>
                        {el.label} <span className="text-rose-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-full border-slate-200 focus-visible:ring-slate-800"
                          placeholder={`Enter your ${el.name}`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-rose-500" />
                    </FormItem>
                  )}
                />
              )}
              {el.type === 'checkbox' && (
                <FormField
                  key={i}
                  control={form.control}
                  name={el.name}
                  render={({ field }) => (
                    <FormItem className="flex items-end mt-4 text-left">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="ml-1 space-y-1 leading-none">
                        <FormLabel>{el.label}</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              )}
            </>
          ))}
          <button
            type="submit"
            className="flex items-center justify-center w-full p-2 mt-6 text-sm font-semibold text-white border rounded-full cursor-pointer border-slate-200 bg-slate-800 hover:bg-slate-900"
          >
            Sign Up
          </button>
        </form>
      </Form>
    </div>
  );
}
