import { useState, useEffect, forwardRef, useImperativeHandle, Ref } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import styles from "./SpeechToText.module.css";

interface Props {
    className?: string;
    updateParent: (transcript: string) => void;
    disabled?: boolean;
    ref: any;
}

export interface MyComponentRef {
    StopAndReset: () => void;
    resetIt: () => void;
}
export const SpeechToText = forwardRef<MyComponentRef, Props>((props, ref) => {
    const { className, updateParent } = props;
    const [started, setStarted] = useState<boolean>(false);
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    useImperativeHandle(ref, () => ({
        StopAndReset() {
            if (listening) SpeechRecognition.stopListening();
            resetTranscript();
        },
        resetIt() {
            if (started) resetTranscript();
        }
    }));

    function recordIt() {
        setStarted(true);
        SpeechRecognition.startListening({ continuous: true });
    }

    useEffect(() => {
        console.log({ transcript });
        if (transcript) {
            updateParent(transcript);
        }
        //        if (listening) updateParent(transcript + "...");
    }, [transcript]);
    return (
        <>
            {listening ? (
                <>
                    <ReactTooltip anchorId="stopButton" place="top" content="Stop Listening" />
                    <div className={styles.sttButton} id="stopButton" onClick={() => SpeechRecognition.stopListening()}>
                        <img src="./stop-button.png" alt="" title="" height={"40px"} width={"40px"} />
                    </div>
                </>
            ) : (
                <>
                    <ReactTooltip anchorId="startButton" place="top" content="Start Listening" />
                    <div className={styles.sttButton} id="startButton" onClick={() => recordIt()}>
                        <img src="./speaking.png" alt="" title="" height={"40px"} width={"40px"} />
                    </div>
                </>
            )}
        </>
    );
});
