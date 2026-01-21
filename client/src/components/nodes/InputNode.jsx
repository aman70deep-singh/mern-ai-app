import { Handle, Position } from "reactflow";

const InputNode = ({ data }) => {
    const { value, onChange, onGenerate, onSave, loading, canSave, model, onModelChange } = data;

    return (
        <div
            style={{
                width: "95vw",
                height: "20vh",
                margin: "0 auto",
                background: "#111",
                border: "2px solid #000",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                padding: "0 24px",
                boxSizing: "border-box",
                gap: 16,
            }}
        >
            <textarea
                value={value}
                disabled={loading}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Ask anything..."
                style={{
                    flex: 1,
                    height: 70,
                    borderRadius: 10,
                    border: "1px solid #000",
                    padding: 10,
                    fontSize: 14,
                    resize: "none",
                }}
            />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                }}
            >
                <button
                    onClick={() => onGenerate(value)}
                    disabled={loading || !value.trim()}
                    style={{
                        height: 30,
                        width: 95,
                        borderRadius: 5,
                        border: "1px solid #fff",
                        background: "#fff",
                        color: "#000",
                        cursor: "pointer",
                        fontWeight: 400,
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
                    }}
                >
                    {loading ? "Generating..." : "Generate"}
                </button>

                <button
                    onClick={onSave}
                    disabled={!canSave || loading}
                    style={{
                        height: 30,
                        width: 95,
                        borderRadius: 5,
                        border: "1px solid #fff",
                        background: canSave ? "#fff" : "#999",
                        color: "#000",
                        cursor: canSave ? "pointer" : "not-allowed",
                        fontWeight: 400,
                        opacity: canSave ? 1 : 0.6,
                         display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
                    }}
                >
                    Save
                </button>

                <select
                    value={model}
                    onChange={(e) => onModelChange(e.target.value)}
                    disabled={loading}
                    style={{
                        width: 120,
                        padding: 5,
                        borderRadius: 5,
                    }}
                >
                    <option value="mistralai/devstral-2512:free">
                        Mistral 7B (Free)
                    </option>
                    <option value="google/gemini-2.0-flash-lite-001">
                        Gemini Flash Lite (Free)
                    </option>
                    <option value="tngtech/deepseek-r1t-chimera:free">
                        Deepseek R1T Chimera (Free)
                    </option>
                    <option value="openai/gpt-oss-20b:free">
                        GPT OSS 20B (Free)
                    </option>
                </select>
            </div>


            <Handle
                type="source"
                position={Position.Bottom}
                style={{ visibility: "hidden" }}
            />
        </div>
    );
};

export default InputNode;
