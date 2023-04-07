import React, { useState } from "react";
import { AiFillCalendar, AiOutlineClockCircle } from "react-icons/ai";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function ApiRespnse({ open, setOpen, audio }) {

    const valid = JSON.parse(audio.ApiRespnse);
    console.log(response);

    const column = [
        { title: "Insert Value", key: "no_ins" },
        { title: "Delete Value", key: "no_del" },
        { title: "Speech Pace", key: "speech_pace" },
        { title: "Pronunciation", key: "pron_score" },
    ];


    return (

        <div>
            <Modal
                isOpen={open}
                onAfterOpen={() => setOpen(true)}
                onRequestClose={() => setOpen(false)}

            >
                <div
                    onClick={() => setOpen(false)}

                >
                    X
                </div>
                <div>
                    <div>
                        <p>
                            RequestId : {audio._id}
                        </p>

                        <p>
                            <AiFillCalendar className="mr-2" />: {audio._id}
                        </p>

                        <p>
                            <AiOutlineClockCircle className="mr-2" />{" "}
                            {audio.responseTime || 10} Secs
                        </p>

                    </div>
                    <div className>
                        {response.decoded_text}
                    </div>

                    <div className="flex justify-center">
                        <div
                            onClick={() =>
                                window.navigator.clipboard.writeText(response.decoded_text)
                            }
                            className
                        >
                            Copy
                        </div>
                    </div>

                    <div className="justify content: center">
                        {columns.map((column) => (
                            <div className>
                                {column.title}
                            </div>
                        ))}
                        {columns.map((column) => (
                            <div className>
                                {response[column.key]}
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
}


