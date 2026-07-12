import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2, Users } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

import { supabase } from "../../services/supabase";
import { RSVPSuccess } from "./RSVPSuccess";
import { rsvpSchema, type RSVPFormData } from "./rsvpSchema";

const inputClassName =
  "h-12 w-full rounded-[14px] border border-[#E5E7EB] bg-white px-4 text-base text-[#222222] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#F4B6CF] focus:ring-4 focus:ring-[#FCEEF5]";

function RSVP() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      name: "",
      drinksAlcohol: false,
      companions: [],
      message: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "companions",
  });

  async function handleRSVPSubmit(data: RSVPFormData) {
    setSubmitError(null);

    const companions = data.companions.map((companion) => ({
      name: companion.name,
      drinks_alcohol: companion.drinksAlcohol,
    }));

    const { error } = await supabase.from("guests").insert({
      name: data.name,
      drinks_alcohol: data.drinksAlcohol,
      companions,
      message: data.message || null,
    });

    if (error) {
      console.error("Erro ao confirmar presença:", error);

      setSubmitError(
        "Não foi possível confirmar sua presença. Tente novamente em alguns instantes.",
      );

      return;
    }

    setIsSuccess(true);
  }

  return (
    <section
      id="rsvp"
      className="scroll-mt-20 bg-[#F9FAFB] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <p className="font-mono text-sm text-[#9CA3AF]">joinDeployment()</p>

          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#222222]">
            Confirmar presença
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#6B7280]">
            Preencha seus dados e os de quem vai comemorar esse momento com
            você.
          </p>
        </motion.div>

        {isSuccess ? (
          <div className="mt-12">
            <RSVPSuccess />
          </div>
        ) : (
          <motion.form
            onSubmit={handleSubmit(handleRSVPSubmit)}
            noValidate
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mt-12 rounded-[20px] border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-[#222222]"
              >
                Seu nome
              </label>

              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Digite seu nome completo"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`mt-2 ${inputClassName}`}
                {...register("name")}
              />

              {errors.name && (
                <p id="name-error" className="mt-2 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-[14px] border border-[#E5E7EB] p-4 transition hover:bg-[#FCFCFC]">
              <input
                type="checkbox"
                className="mt-0.5 size-5 shrink-0 accent-[#F4B6CF]"
                {...register("drinksAlcohol")}
              />

              <span className="text-sm leading-6 text-[#6B7280]">
                Pretendo consumir bebida alcoólica na comemoração.
              </span>
            </label>

            <div className="my-8 border-t border-[#E5E7EB]" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Users
                    size={20}
                    className="text-[#F4B6CF]"
                    aria-hidden="true"
                  />

                  <h3 className="text-lg font-semibold text-[#222222]">
                    Acompanhantes
                  </h3>
                </div>

                <p className="mt-1 text-sm text-[#6B7280]">
                  Adicione apenas quem irá com você.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  append({
                    name: "",
                    drinksAlcohol: false,
                  })
                }
                className="inline-flex cursor-pointer items-center justify-center gap-2 self-start rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-semibold text-[#222222] transition duration-200 hover:scale-[1.02] hover:bg-[#FCEEF5]"
              >
                <Plus size={18} aria-hidden="true" />
                Adicionar acompanhante
              </button>
            </div>

            {fields.length > 0 && (
              <div className="mt-6 space-y-4">
                {fields.map((field, index) => {
                  const companionError = errors.companions?.[index]?.name;

                  return (
                    <div
                      key={field.id}
                      className="rounded-[20px] border border-[#E5E7EB] bg-[#FCFCFC] p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <label
                          htmlFor={`companions.${index}.name`}
                          className="text-sm font-semibold text-[#222222]"
                        >
                          Acompanhante {index + 1}
                        </label>

                        <button
                          type="button"
                          onClick={() => remove(index)}
                          aria-label={`Remover acompanhante ${index + 1}`}
                          className="inline-flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-[#6B7280] transition hover:bg-white hover:text-red-600"
                        >
                          <Trash2 size={17} aria-hidden="true" />
                          <span className="hidden sm:inline">Remover</span>
                        </button>
                      </div>

                      <input
                        id={`companions.${index}.name`}
                        type="text"
                        placeholder="Nome do acompanhante"
                        aria-invalid={Boolean(companionError)}
                        aria-describedby={
                          companionError
                            ? `companions-${index}-name-error`
                            : undefined
                        }
                        className={`mt-3 ${inputClassName}`}
                        {...register(`companions.${index}.name`)}
                      />

                      {companionError && (
                        <p
                          id={`companions-${index}-name-error`}
                          className="mt-2 text-sm text-red-600"
                        >
                          {companionError.message}
                        </p>
                      )}

                      <label className="mt-4 flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          className="mt-0.5 size-5 shrink-0 accent-[#F4B6CF]"
                          {...register(`companions.${index}.drinksAlcohol`)}
                        />

                        <span className="text-sm leading-6 text-[#6B7280]">
                          Consumirá bebida alcoólica.
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="mt-8">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-[#222222]"
              >
                Mensagem
                <span className="ml-1 font-normal text-[#9CA3AF]">
                  opcional
                </span>
              </label>

              <textarea
                id="message"
                rows={4}
                placeholder="Deixe uma mensagem para a formanda"
                className="mt-2 w-full resize-y rounded-[14px] border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#222222] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#F4B6CF] focus:ring-4 focus:ring-[#FCEEF5]"
                {...register("message")}
              />
            </div>

            {submitError && (
              <p
                role="alert"
                className="mt-8 rounded-[14px] border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
              >
                {submitError}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#F4B6CF] px-6 py-3.5 text-base font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#EFA5C5] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FCEEF5] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
            >
              {isSubmitting ? "Confirmando..." : "Confirmar presença"}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}

export { RSVP };
