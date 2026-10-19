import { useState, type ReactNode } from "react"

export interface TheorySlide {
    content: ReactNode
}

export interface TheorySection {
    id: string
    label: string
    slides: TheorySlide[]
}

interface TheorySlidesProps {
    sections: TheorySection[]
}

export function TheorySlides({ sections }: TheorySlidesProps) {
    const [sectionIndex, setSectionIndex] = useState(0)
    const [slideIndex, setSlideIndex] = useState(0)

    const currentSection = sections[sectionIndex]
    const currentSlide = currentSection.slides[slideIndex]

    const isFirst = sectionIndex === 0 && slideIndex === 0
    const isLast = sectionIndex === sections.length - 1 && slideIndex === currentSection.slides.length - 1

    function goToSection(index: number) {
        setSectionIndex(index)
        setSlideIndex(0)
    }

    function goNext() {
        if (slideIndex < currentSection.slides.length - 1) {
            setSlideIndex(slideIndex + 1)
        } else if (sectionIndex < sections.length - 1) {
            setSectionIndex(sectionIndex + 1)
            setSlideIndex(0)
        }
    }

    function goPrev() {
        if (slideIndex > 0) {
            setSlideIndex(slideIndex - 1)
        } else if (sectionIndex > 0) {
            const prevSection = sections[sectionIndex - 1]
            setSectionIndex(sectionIndex - 1)
            setSlideIndex(prevSection.slides.length - 1)
        }
    }

    return (
        <div className="theory-slides flex column">
            <nav className="theory-topic-nav flex row wrap gap-xsm">
                {sections.map((section, index) => (
                    <button key={section.id} type="button" className={"theory-topic-btn" + (index === sectionIndex ? " theory-topic-btn-active" : "")} onClick={() => goToSection(index)}>
                        {section.label}
                    </button>
                ))}
            </nav>

            <div className="theory-slide-viewport">
                <div className="theory-slide-content">{currentSlide.content}</div>
            </div>

            <div className="theory-slide-controls flex row go-between">
                <button type="button" className="theory-slide-arrow" onClick={goPrev} disabled={isFirst}>
                    ← Voltar
                </button>

                {currentSection.slides.length > 1 && (
                    <span className="theory-slide-counter">
                        {currentSection.label} — {slideIndex + 1}/{currentSection.slides.length}
                    </span>
                )}

                <button type="button" className="theory-slide-arrow" onClick={goNext} disabled={isLast}>
                    Avançar →
                </button>
            </div>
        </div>
    )
}