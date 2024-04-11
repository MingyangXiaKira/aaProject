import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
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
let formSchema = z.object({
  fullname: z.string().min(2).max(100),
  email: z.string().email(),
  satMath: z.string(),
  satReadingWriting: z.string(),
  ielts: z.string(),
});
formSchema = formSchema.extend({
  ielts: z.string(),
});
interface FormComponentProps {
  nonEnglish?: boolean;
}
const FormComponent: React.FC<FormComponentProps> = ({ nonEnglish }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      fullname: "",
      email: "",
      satMath: "",
      satReadingWriting: "",
      ielts: "",
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fullname</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="satMath"
          render={({ field }) => (
            <FormItem>
              <FormLabel>satMath</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="satReadingWriting"
          render={({ field }) => (
            <FormItem>
              <FormLabel>satReadingWriting</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {nonEnglish && (
          <FormField
            control={form.control}
            name="ielts"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ielts</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default FormComponent;
