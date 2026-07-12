import { CheckCircle2 } from 'lucide-react'
import { motion } from 'motion/react'

export function RSVPSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="rounded-[20px] border border-[#E5E7EB] bg-white p-8 text-center shadow-sm sm:p-12"
      role="status"
      aria-live="polite"
    >
      <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-green-50 text-[#22C55E]">
        <CheckCircle2 aria-hidden="true" size={28} />
      </div>

      <p className="mt-6 font-mono text-sm text-[#22C55E]">
        Deployment successful
      </p>

      <h3 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[#222222]">
        Obrigada por confirmar presença!
      </h3>

      <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#6B7280] sm:text-lg">
        Mal posso esperar para comemorar esse momento com vocês.
      </p>
    </motion.div>
  )
}