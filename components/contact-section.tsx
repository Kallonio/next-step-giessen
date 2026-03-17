"use client";

import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone } from "lucide-react";

import { contactDetails, siteContent } from "@/lib/data";
import { contactSchema, seminarOptions, type ContactFormValues } from "@/lib/validation";

type SubmissionState =
  | { kind: "idle" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

export function ContactSection() {
  const content = siteContent.contact;
  const [submissionState, setSubmissionState] = useState<SubmissionState>({ kind: "idle" });
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      interest: "Allgemeine Anfrage",
      privacy: false,
      company: "",
      subject: "",
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const interesse = params.get("interesse");

    if (interesse && seminarOptions.includes(interesse as (typeof seminarOptions)[number])) {
      setValue("interest", interesse as (typeof seminarOptions)[number]);
      setValue("subject", `Interesse an ${interesse}`);
    }
  }, [setValue]);

  const submitForm = async (values: ContactFormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Der Versand ist fehlgeschlagen.");
      }

      setSubmissionState({
        kind: "success",
        message:
          payload.message ??
          "Vielen Dank. Die Anfrage wurde erfolgreich versendet und wird zeitnah beantwortet.",
      });
      reset({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        interest: "Allgemeine Anfrage",
        message: "",
        privacy: false,
        company: "",
      });
    } catch (error) {
      setSubmissionState({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Der Versand konnte aktuell nicht abgeschlossen werden.",
      });
    }
  };

  const onSubmit = handleSubmit((values) => {
    const normalizedSubject =
      values.subject.trim() ||
      (values.interest !== "Allgemeine Anfrage"
        ? `Interesse an ${values.interest}`
        : "Allgemeine Anfrage über die Website");

    setSubmissionState({ kind: "idle" });
    startTransition(() => {
      void submitForm({
        ...values,
        subject: normalizedSubject,
      });
    });
  });

  return (
    <section id="kontakt" className="py-20 sm:py-24">
      <div className="container-shell">
        <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="glass-panel p-8 sm:p-10">
            <span className="section-eyebrow">{content.eyebrow}</span>
            <h2 className="mt-5 section-title">{content.title}</h2>
            {content.copy ? <p className="mt-5 section-copy">{content.copy}</p> : null}

            <div className="mt-8 space-y-4">
              <a
                href={`tel:${contactDetails.phone.replaceAll(" ", "")}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <div className="rounded-2xl bg-brand-50 p-3 text-brand-700">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Telefon</p>
                  <p className="font-semibold text-ink">{contactDetails.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${contactDetails.email}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <div className="rounded-2xl bg-brand-50 p-3 text-brand-700">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">E-Mail</p>
                  <p className="font-semibold text-ink">{contactDetails.email}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="glass-panel p-8 sm:p-10">
            <form className="grid gap-5" onSubmit={onSubmit} noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label="Vorname und Nachname"
                  error={errors.fullName?.message}
                  input={
                    <input
                      {...register("fullName")}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-500"
                      placeholder="Max Mustermann"
                    />
                  }
                />
                <Field
                  label="E-Mail-Adresse"
                  error={errors.email?.message}
                  input={
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-500"
                      placeholder="max@beispiel.de"
                    />
                  }
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label="Telefonnummer"
                  error={errors.phone?.message}
                  input={
                    <input
                      {...register("phone")}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-500"
                      placeholder="01512 3456789"
                    />
                  }
                />
                <Field
                  label="Ich interessiere mich besonders für"
                  error={errors.interest?.message}
                  input={
                    <select
                      {...register("interest")}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-500"
                    >
                      {seminarOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  }
                />
              </div>

              <input {...register("subject")} type="hidden" />

              <Field
                label="Fragen / Anliegen"
                error={errors.message?.message}
                input={
                  <textarea
                    {...register("message")}
                    rows={7}
                    className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm text-ink outline-none transition focus:border-brand-500"
                    placeholder="Fragen an mich"
                  />
                }
              />

              <input
                {...register("company")}
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                <input
                  {...register("privacy")}
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                />
                <span className="text-sm leading-6 text-slate-600">
                  Ich stimme zu, dass meine Angaben zur Bearbeitung der Anfrage verarbeitet und per
                  E-Mail an Karl-Philip Dübel übermittelt werden.
                </span>
              </label>
              {errors.privacy?.message ? (
                <p className="text-sm text-rose-600">{errors.privacy.message}</p>
              ) : null}

              {submissionState.kind !== "idle" ? (
                <div
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    submissionState.kind === "success"
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-rose-50 text-rose-700"
                  }`}
                >
                  {submissionState.message}
                </div>
              ) : null}

              <button type="submit" className="primary-button w-full sm:w-auto" disabled={isPending}>
                {isPending ? content.submitPending : content.submitCta}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  error?: string;
  input: React.ReactNode;
};

function Field({ label, error, input }: FieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      {input}
      {error ? <span className="text-sm text-rose-600">{error}</span> : null}
    </label>
  );
}
