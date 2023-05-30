import React, { ReactNode } from "react"

type SectionProps = {
    title?: string
    children: ReactNode
}

export const Section = ({
    title = "My Subheading",
    children,
}: SectionProps) => {
    return (
        <section>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    )
}
