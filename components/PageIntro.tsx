interface PageIntroProps {
  eyebrow: string
  title: string
  description?: string
}

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="page-intro">
      <p className="page-intro__eyebrow">{eyebrow}</p>
      <h1 className="page-intro__title">{title}</h1>
      <div className="page-intro__accent" aria-hidden />
      {description ? <p className="page-intro__description">{description}</p> : null}
    </div>
  )
}
