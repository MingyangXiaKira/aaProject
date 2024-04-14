import React from "react";
import "../i18n.js";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
    age: z.string(),
    residence: z.string(),
    native_language: z.string(),
    gre_verbal: z.string(),
    gre_quant: z.string(),
    gre_analytical: z.string(),
    cgpa: z.string(),
    ielts: z.string(),
});
formSchema = formSchema.extend({
    ielts: z.string(),
});
interface FormComponentProps {
    nonEnglish?: boolean;
}
const FormComponent: React.FC<FormComponentProps> = ({ nonEnglish }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            fullname: "",
            age: "",
            residence: "",
            native_language: "",
            gre_verbal: "",
            gre_quant: "",
            gre_analytical: "",
            cgpa: "",
            ielts: "",
        },
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const modifiedValues = {
            ...values,
            age: parseInt(values.age, 10),
            gre_verbal: parseInt(values.gre_verbal, 10),
            gre_quant: parseInt(values.gre_quant, 10),
            gre_analytical: parseInt(values.gre_analytical, 10),
            cgpa: parseFloat(values.cgpa),
        };
        console.log(modifiedValues);
        try {
            const response = await axios.post("http://127.0.0.1:5000/submit", values);
            console.log("Submission successful:", response.data);
            navigate("/schools", { state: { data: response.data } });
        } catch (error) {
            console.error("Submission failed:", error);
        }
    }
    return (
        <Form {...form}>
            <div className="px-10">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-1">
                    <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel> {t("main.Fullname")}</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("main.age")}</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="residence"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("main.residence")}</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="native_language"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("main.native_language")}</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gre_verbal"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("main.gre_verbal")}</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gre_quant"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("main.gre_quant")}</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gre_analytical"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("main.gre_analytical")}</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="cgpa"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("main.cgpa")}</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">{t("main.Submit")}</Button>
                </form>
            </div>
        </Form>
    );
};

export default FormComponent;