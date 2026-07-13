import { useEffect, useMemo, useState } from 'react'

type CountdownProps = {
  targetDate: string
}

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const getTimeLeft = (targetDate: string): TimeLeft => {
  const difference = new Date(targetDate).getTime() - new Date().getTime()

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(targetDate))

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [targetDate])

  const items = useMemo(
    () => [
      {
        label: 'Dias',
        value: timeLeft.days,
      },
      {
        label: 'Horas',
        value: timeLeft.hours,
      },
      {
        label: 'Minutos',
        value: timeLeft.minutes,
      },
      {
        label: 'Segundos',
        value: timeLeft.seconds,
      },
    ],
    [timeLeft],
  )

  return (
    <div
      className="grid grid-cols-4 gap-2 sm:gap-4"
      aria-label="Contador regressivo para a formatura"
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-[#E5E7EB] bg-white px-2 py-3 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:rounded-[20px] sm:px-5 sm:py-4"
        >
          <strong className="block font-mono text-xl font-semibold text-[#222222] sm:text-3xl">
            {String(item.value).padStart(2, '0')}
          </strong>

          <span className="mt-1 block text-[11px] font-medium text-[#6B7280] sm:text-sm">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}