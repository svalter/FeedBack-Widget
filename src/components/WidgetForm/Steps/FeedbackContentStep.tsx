import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
}

export function FeedbackContentStep({ feedbackType }: FeedbackContentStepProps) {

    const feedbackTypeInfo = feedbackTypes[feedbackType]

    return (
        <>
            <header className="text-xs leading-6">
                <span> {feedbackTypeInfo.title}</span>
                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full"></div>
        </>
    )
}