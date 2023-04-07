import React, { useState, useEffect, useId } from "react";
import DatePicker from "react-date-picker";
import SearchBar from "../SearchBar";
import axios from "axios";
import "./date.css";
import loading from "./LoadBuf";
import RightCol from "../web pages/RightCol";
import { useLoad } from "../content/LoadData";
import React, { useState, useRef } from 'react';


function RecordingApp() {
    const [recording, setRecording] = useState(false);
    const [audioURL, setAudioURL] = useState('');
    const mediaRecorderRef = useRef(null);
    const audioRef = useRef(null);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.addEventListener('dataavailable', handleDataAvailable);
        mediaRecorder.start();

        setRecording(true);
    };

    const stopRecording = () => {
        mediaRecorderRef.current.stop();
        setRecording(false);
    };

    const handleDataAvailable = (event) => {
        const blob = new Blob([event.data], { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);
        setAudioURL(url);
    };

    return (
        <div>
            <h1>Recording App</h1>
            <button onClick={startRecording} disabled={recording}>
                {recording ? 'Recording...' : 'Start Recording'}
            </button>
            <button onClick={stopRecording} disabled={!recording}>
                Stop Recording
            </button>
            {audioURL && (
                <div>
                    <audio ref={audioRef} src={audioURL} controls />
                </div>
            )}
        </div>
    );
}

export default RecordingApp;

