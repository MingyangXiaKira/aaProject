import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const LoginCard = () => {
  let formSchema = z.object({
    username: z.string(),
    password: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex justify-center	items-center h-4/5">
      <Card className=" border-none shadow-none	 p-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex flex-col items-center pb-40"
          >
            <div className="formWrapper h-2/3 flex flex-col items-center ">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>username</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>password</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="buttonWrapper flex justify-between h-1/3 flex items-center w-48">
              <Button type="submit">Login</Button>
              <Button type="submit">Register</Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default LoginCard;
