import { useEffect, useState } from 'react'

export type FeedbackStatus = 'correct' | 'incorrect' | null

interface FeedbackBannerProps {
  status: FeedbackStatus
  onDone?: () => void
}

// Mesmos textos do protótipo (index.html, linha ~968)
const FEEDBACK_POSITIVE = 'correto 🔥😎👍'
const FEEDBACK_NEGATIVE = 'tenta de novo 😳'

// Reaproveita #feedback / #result / .correct / .incorrect / .hidden — os mesmos
// ids e classes que o protótipo usava, então o CSS que já existe em
// assets/styles/feedback.css deve estilizar isso sem precisar de nada novo.
// Simplifiquei a animação: em vez da sequência manual de esperar()/margin do
// protótipo, uso fade in/out por CSS + timeout. O efeito visual (banner colorido
// aparecendo e sumindo) é o mesmo; o "balanço" indo e voltando não foi replicado —
// avisa se isso for importante pra você.
export function FeedbackBanner({ status, onDone }: FeedbackBannerProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!status) return

    setVisible(true)
    const timer = setTimeout(() => {
      setVisible(false)
      onDone?.()
    }, 3000)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  if (!status) return null

  return (
    <div id="feedback" className={`flex row go-center ${status} ${visible ? '' : 'hidden'}`}>
      <p id="feedback-result" className={status}>
        {status === 'correct' ? FEEDBACK_POSITIVE : FEEDBACK_NEGATIVE}
      </p>
    </div>
  )
}