import { useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import api from "../api/axios.js"
import InputNode from "./nodes/InputNode";
import ResultNode from "./nodes/ResultNode";
import toast from "react-hot-toast";

const nodeTypes = {
    inputNode: InputNode,
    resultNode: ResultNode,
};

const FlowCanvas = () => {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [model, setModel] = useState("mistralai/devstral-2512:free")

    const handleGenerate = async (promptText) => {
        setLoading(true);
        setResult("");

        try {
            const res = await api.post("/ask-ai", {
                prompt: promptText,
                model
            });
            setResult(res.data.data.answer);
        } catch (error) {
            console.error(error);
            setResult(
                error.response?.data?.message ||
                "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };
    const handleSave = async () => {
        if (!prompt || !result) return;

        try {
            await api.post("/save-conversation", {
                prompt,
                answer: result,
            });

            toast.success("Conversation saved  ");
        } catch (error) {
            console.error(error);
            toast.error("Failed to save conversation ");
        }
    };



    const nodes = [
        {
            id: "1",
            type: "inputNode",
            position: { x: 40, y: 20 },
            draggable: false,
            data: {
                value: prompt,
                onChange: setPrompt,
                onModelChange: setModel,
                onGenerate: handleGenerate,
                onSave: handleSave,
                loading,
                canSave: !!result,
            },
        },
        {
            id: "2",
            type: "resultNode",
            position: { x: 40, y: 150 },
            draggable: false,
            data: {
                text: result,
                loading,
            },
        },
    ];



    return (
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
            <ReactFlow
                nodes={nodes}
                edges={[]}
                nodeTypes={nodeTypes}
                nodesDraggable={false}
                nodesConnectable={false}
                zoomOnScroll={false}
                zoomOnDoubleClick={false}
                panOnDrag={false}
                zoomOnPinch={false}
                fitView={false}
                preventScrolling={false}
            />
        </div>

    );
};

export default FlowCanvas;
