export interface LeerdoelProps {
    leerdoel: string
    bewijs: Bewijs
    reflectie: string
    feedback: Feedback
}

interface Bewijs {
    image: string | null
    gedaan: string
}

interface Feedback {
    image: string | null
    feedback: string | null
}