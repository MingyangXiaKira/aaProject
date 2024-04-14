import React, { useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
import "../i18n.js";
import { useTranslation } from "react-i18next";
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
import { AlertDestructive } from "./Alert";

const LoginCard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
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
  function handleLogin(event) {
    event.preventDefault();
    const values = form.getValues();
    // axios
    //   .post("http://localhost:3000/login", values)
    //   .then((response) => {
    //     console.log("Login successful:", response.data);
    //     navigate("/main");
    //   })
    //   .catch((error) => {
    //     console.error("Login failed:", error.response?.data || "Unknown error");
    //   });
    navigate("/main");
  }
  function handleRegister(event) {
    event.preventDefault();
    const values = form.getValues();
    axios
      .post("http://localhost:3000/register", values)
      .then((response) => {
        console.log("Registration successful:", response.data);
        setAlert(false);
      })
      .catch((error) => {
        console.error("Registration failed:");
        setAlert(true);
      });
  }
  return (
    <div>
      <div className="flex justify-center	items-center h-3/5 ">
        <Card className=" border-none shadow-none bg-transparent	 p-5">
          <Form {...form}>
            <form className="space-y-8 flex flex-col items-center ">
              <div className="formWrapper h-2/4 flex flex-col items-center ">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("login.username")}</FormLabel>
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
                      <FormLabel>{t("login.password")}</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="buttonWrapper flex justify-between h-1/4 flex items-center w-48" >
                <Button type="button" onClick={handleLogin} >
                  {t("login.Login")}

                </Button>
                <Button type="button" onClick={handleRegister}>
                  {t("login.Register")}
                </Button>
              </div>
            </form>
          </Form>
          {alert && <AlertDestructive />}
        </Card>
      </div>
    </div>
  );
};

export default LoginCard;
