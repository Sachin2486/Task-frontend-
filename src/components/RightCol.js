import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import ApiResponse from "./ApiModal.js";
import store from "../utils/store";
import { LoadData } from "../content/LoadData.js";
export default function RightCol({ GiveBYId }) {
    console.log(GiveById);
    const [fileData, setFileData] = useState({});
    const [open, setOpen] = useState(false);
    const [selectedAudio, setSelectedAudio] = useState([]);
    const { loading, setLoading } = useLoading();
    const columns = [
        { title: "AudioID", key: "audio_id" },
        { title: "StoryID", key: "reference_text_id" },
        { title: "Status", key: "status" },
        { title: "Time", key: "time" },
        { title: "Call Id", key: "_id" },
        { title: "Response Time", key: "responseTime" },
        { title: "Response", key: "apiResponse" },
    ];
    useEffect(() => {
        setLoading(true);
        const userId = localStorage.getItem("userId");
        if (fileId) {
            axios
                .get(
                    `${store.pass}${store.routes.getFileById}/${userId}/${fileId}`
                )
                .then((res) => {
                    console.log(res.data);
                    setFileData(res.data?.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        setLoading(false);
    }, [fileId]);

    return (
        <div className>
            <div className>
                <p className>
                    {fileData._id}
                </p>
                <p className>
                    <AiOutlineClockCircle className="mr-2" />{" "}
                    {fileData.responseTime || 10} Secs
                </p>
                <p className>
                    Count : {fileData.count || 10}{" "}
                </p>
                <p className>
                    Pending : {fileData.count - (fileData.failed + fileData.success - 1)}{" "}
                </p>
                <p className>
                    Success : {fileData.success - 1}
                </p>
                <p className>
                    Failed : {fileData.failed}
                </p>
            </div>
            <div >
                {columns.map((column) => (
                    <div>
                        {column.title}
                    </div>
                ))}
            </div>
            <div className="h-[50vh] overflow-auto">
                <div className={`grid grid-cols-7 gap-2 [&>div]:overflow-auto`}>
                    {fileData?.audios &&
                        fileData?.audios.map((audio) => (
                            <>
                                <div className="flex justify-center mt-2 border items-center text-xs h-16">
                                    {audio.audio_id}
                                </div>
                                <div className="flex justify-center text-center mt-2 border items-center text-xs h-16 py-1 ">
                                    {audio.reference_text_id}
                                </div>
                                <div className="flex justify-center text-center mt-2 border items-center text-xs h-16 py-1 ">
                                    {audio.status}
                                </div>
                                <div className="flex justify-center text-center mt-2 border items-center text-xs h-16 py-1">
                                    {audio.time.split("").splice(0, 10).join("")}
                                    <br />
                                    {audio.time.split("").splice(11, 5).join("")}
                                </div>
                                <div className="flex justify-center text-center mt-2 border items-center text-xs h-16 py-1">
                                    {audio._id}
                                </div>
                                <div className="flex justify-center text-center mt-2 border items-center text-xs h-16 py-1">
                                    {audio.responseTime} secs
                                </div>
                                <div
                                    onClick={() => {
                                        if (audio.responseTime) {
                                            setOpen(true);
                                            setSelectedAudio(audio);
                                        }
                                    }}
                                    className="flex cursor-pointer justify-center underline text-center mt-2 border items-center text-xs h-16 py-1"
                                >
                                    {audio.responseTime && "View"}
                                </div>
                            </>
                        ))}
                    {open && (
                        <ApiResponse open={open} setOpen={setOpen} audio={selectedAudio} />
                    )}
                </div>
            </div>
        </div>
    );
}


